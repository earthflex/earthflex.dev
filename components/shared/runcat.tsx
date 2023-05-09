import * as Menubar from '@radix-ui/react-menubar';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React from "react";

interface RadioCatItem {
    id: string;
    name: string;
    img: string;
}

const RADIO_CAT: RadioCatItem[] = [
    {
        id: 'cat',
        name: 'Cat',
        img: '/runcat/cat.png',
    },
    {
        id: 'cat_tail',
        name: 'Cat Tail',
        img: '/runcat/cat_tail.png',
    },
    {
        id: 'puppy',
        name: 'Puppy',
        img: '/runcat/puppy.png',
    },
    {
        id: 'rabbit',
        name: 'Rabbit',
        img: '/runcat/rabbit.png',
    },
    {
        id: 'frog',
        name: 'Frog',
        img: '/runcat/frog.png',
    },
    {
        id: 'rubber_duck',
        name: 'Rubber Duck',
        img: '/runcat/rubber_duck.png',
    },
    {
        id: 'slime',
        name: 'Slime',
        img: '/runcat/slime.png',
    },
    {
        id: 'dinosaur',
        name: 'Dinosaur',
        img: '/runcat/dinosaur.png',
    },
    {
        id: 'ghost',
        name: 'Ghost',
        img: '/runcat/ghost.png',
    },
    {
        id: 'coffee',
        name: 'Coffee',
        img: '/runcat/coffee.png',
    },
    {
        id: 'rocket',
        name: 'Rocket',
        img: '/runcat/rocket.png',
    },
    {
        id: 'sine_curve',
        name: 'Sine curve',
        img: '/runcat/sine_curve.png',
    },
    {
        id: 'pulse',
        name: 'Pulse',
        img: '/runcat/pulse.png',
    },
];

const RunCat: React.FC = () => {
    const [runCatSelection, setrunCatSelection] = React.useState<string | null>(null);
    const selectedItem = RADIO_CAT.find((item) => item.id === runCatSelection);
    const loadingImage = '/runcat/dots.png';

    React.useEffect(() => {
        const storedRunCatSelection = localStorage.getItem('runCatSelection');
        if (storedRunCatSelection) {
            setrunCatSelection(storedRunCatSelection);
        } else {
            setrunCatSelection('cat');
        }
    }, []);

    React.useEffect(() => {
        if (runCatSelection !== null) {
            localStorage.setItem('runCatSelection', runCatSelection);
        }
    }, [runCatSelection]);

    return (
        <>
            <Menubar.Menu>
                <Menubar.Trigger className="MenubarTrigger btn-topbar btn-runcat">
                    <img src={selectedItem ? selectedItem.img : loadingImage} className="runcat" width={32} height={32} alt="runcat" />
                </Menubar.Trigger>
                <Menubar.Portal>
                    <Menubar.Content
                        className="MenubarContent"
                        align="start"
                        sideOffset={5}
                        alignOffset={-14}
                    >
                        <Menubar.RadioGroup value={runCatSelection ?? undefined} onValueChange={setrunCatSelection}>
                            {RADIO_CAT.map((item) => (
                                <Menubar.RadioItem className="MenubarRadioItem inset" key={item.id} value={item.id}>
                                    <Menubar.ItemIndicator className="MenubarItemIndicator">
                                        <DotFilledIcon />
                                    </Menubar.ItemIndicator>
                                    <img src= {item.img}className="runcat" width={22} height={22} alt={item.name} />&nbsp;{item.name}
                                </Menubar.RadioItem>
                            ))}
                        </Menubar.RadioGroup>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </>
    );
};

export default RunCat;