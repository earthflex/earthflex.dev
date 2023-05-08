import Link from "next/link";
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import React from "react";
import Image from "next/image";
import { SpotifyEmbed } from "./spotify-embed";

export default function Topbar() {

    // const handleCmdOrCtrlT = React.useCallback((event: KeyboardEvent) => {
    //     const isCmdOrCtrl = event.metaKey || event.ctrlKey;
    //     const isTKey = event.code === 'KeyT';

    //     if (isCmdOrCtrl && isTKey) {
    //         event.preventDefault();
    //         console.log('Command + T or Ctrl + T pressed');
    //     }
    // }, []);

    // React.useEffect(() => {
    //     document.addEventListener('keydown', handleCmdOrCtrlT);

    //     return () => {
    //         document.removeEventListener('keydown', handleCmdOrCtrlT);
    //     };
    // }, [handleCmdOrCtrlT]);

    // const handleButtonClick = () => {
    //     const fakeEvent = new KeyboardEvent('keydown', {
    //         code: 'KeyT',
    //         ctrlKey: true,
    //     });

    //     handleCmdOrCtrlT(fakeEvent);
    // };

    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <React.Fragment>
            <div className="ef-topbar">
                <div>
                    <Menubar.Root className="MenubarRoot">
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Image src="/banana.png" width={20} height={20} alt="banana" />
                            </Menubar.Trigger>
                            <Menubar.Portal>
                                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                                    <Menubar.Item className="MenubarItem">
                                        About This Banana Mac
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem" disabled>
                                        System Settings...
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem" disabled>
                                        Banana Store
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Sub>
                                        <Menubar.SubTrigger className="MenubarSubTrigger">
                                            Recent Items
                                            <div className="RightSlot">
                                                <ChevronRightIcon />
                                            </div>
                                        </Menubar.SubTrigger>
                                        <Menubar.Portal>
                                            <Menubar.SubContent className="MenubarSubContent" alignOffset={-5}>
                                                <Menubar.Item className="MenubarItem">Figma</Menubar.Item>
                                                <Menubar.Item className="MenubarItem">Notion</Menubar.Item>
                                                <Menubar.Item className="MenubarItem">Visual Studio Code</Menubar.Item>
                                                <Menubar.Item className="MenubarItem">ChatGPT</Menubar.Item>
                                            </Menubar.SubContent>
                                        </Menubar.Portal>
                                    </Menubar.Sub>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem">
                                        Sleep <div className="RightSlot">⌘ S</div>
                                    </Menubar.Item>
                                </Menubar.Content>
                            </Menubar.Portal>
                        </Menubar.Menu>
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger"><strong>Earthflex</strong></Menubar.Trigger>
                            <Menubar.Portal>
                                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                                    <Menubar.Item className="MenubarItem" >
                                        New Tab <div className="RightSlot">⌘ T</div>
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem">
                                        New Window <div className="RightSlot">⌘ N</div>
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem" disabled>
                                        New Incognito Window
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem">
                                        Resume
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem">
                                        Project
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem">
                                        Github
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem">
                                        Linkedin
                                    </Menubar.Item>
                                </Menubar.Content>
                            </Menubar.Portal>
                        </Menubar.Menu>
                    </Menubar.Root>
                </div>
                <div>
                    <Menubar.Root className="MenubarRoot" >
                        <Menubar.Menu>
                            <button className="MenubarTrigger btn-topbar" >
                                <img src="/cat.png" className="runcat" width={32} height={32} alt="runcat" />
                            </button >
                        </Menubar.Menu>
                        <Menubar.Menu>
                            <button className="MenubarTrigger btn-topbar" onClick={() => setIsVisible(!isVisible)}>
                                <Image src="/play-circle.png" width={22} height={22} alt="spotify" />
                            </button>
                            <div className={`MenubarContent spotify-menu ${isVisible ? 'MenubarContent--visible' : ''}`}>
                                <SpotifyEmbed type="playlist" id="11ajFqcCuzOZyAvw6B1K0W" />
                            </div>
                            <div className={`overlay-spotify  ${isVisible ? 'show' : ''}`} onClick={() => setIsVisible(!isVisible)}></div>
                        </Menubar.Menu>
                        <Menubar.Menu>
                            <button className="MenubarTrigger btn-topbar mobile-location">
                                <Image src="/navigation.png" width={14} height={14} alt="location" />
                                &nbsp;&nbsp;Ladprao, BKK
                            </button>
                        </Menubar.Menu>
                    </Menubar.Root>
                </div>
            </div >
        </React.Fragment >
    );
}
