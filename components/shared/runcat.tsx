import * as Menubar from '@radix-ui/react-menubar';
import { DotFilledIcon } from '@radix-ui/react-icons';
import React from "react";

interface RadioCatItem {
    id: string;
    name: string;
    img: string;
    color: string;
}

const RADIO_CAT: RadioCatItem[] = [
    {
        id: 'gaming_cat',
        name: 'Gaming Cat',
        img: '/runcat/gaming_cat.png',
        color: 'invert-0',
    },
    {
        id: 'party_parrot',
        name: 'Party Parrot',
        img: '/runcat/party_parrot.png',
        color: 'invert-0',
    },
    {
        id: 'cat',
        name: 'Cat',
        img: '/runcat/cat.png',
        color: 'invert',
    },
    {
        id: 'cat_tail',
        name: 'Cat Tail',
        img: '/runcat/cat_tail.png',
        color: 'invert',
    },
    {
        id: 'puppy',
        name: 'Puppy',
        img: '/runcat/puppy.png',
        color: 'invert',
    },
    {
        id: 'rabbit',
        name: 'Rabbit',
        img: '/runcat/rabbit.png',
        color: 'invert',
    },
    {
        id: 'frog',
        name: 'Frog',
        img: '/runcat/frog.png',
        color: 'invert',
    },
    {
        id: 'rubber_duck',
        name: 'Rubber Duck',
        img: '/runcat/rubber_duck.png',
        color: 'invert',
    },
    {
        id: 'slime',
        name: 'Slime',
        img: '/runcat/slime.png',
        color: 'invert',
    },
    {
        id: 'dinosaur',
        name: 'Dinosaur',
        img: '/runcat/dinosaur.png',
        color: 'invert',
    },
    {
        id: 'ghost',
        name: 'Ghost',
        img: '/runcat/ghost.png',
        color: 'invert',
    },
    {
        id: 'coffee',
        name: 'Coffee',
        img: '/runcat/coffee.png',
        color: 'invert',
    },
    {
        id: 'vespa',
        name: 'Vespa',
        img: '/runcat/vespa.png',
        color: 'invert',
    },
    {
        id: 'rocket',
        name: 'Rocket',
        img: '/runcat/rocket.png',
        color: 'invert',
    },
    {
        id: 'sine_curve',
        name: 'Sine curve',
        img: '/runcat/sine_curve.png',
        color: 'invert',
    },
    {
        id: 'pulse',
        name: 'Pulse',
        img: '/runcat/pulse.png',
        color: 'invert',
    },
];

export default function RunCat() {

    const [runCatSelection, setrunCatSelection] = React.useState<string | null>(null);
    const selectedItem = RADIO_CAT.find((item) => item.id === runCatSelection);
    const loadingImage = '/runcat/dots.png';

    React.useEffect(() => {
        const storedRunCatSelection = localStorage.getItem('runCatSelection');
        if (storedRunCatSelection) {
            setrunCatSelection(storedRunCatSelection);
        } else {
            setrunCatSelection('gaming_cat');
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
                    <img src={selectedItem ? selectedItem.img : loadingImage} className={selectedItem ? selectedItem.color : ''} width={32} height={32} alt="runcat" />
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
                                    <img src={item.img} className={`mx-1 ${item.color}`} width={22} height={22} alt={item.name} />&nbsp;{item.name}
                                </Menubar.RadioItem>
                            ))}
                        </Menubar.RadioGroup>
                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </>
    );
};
