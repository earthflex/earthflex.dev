import Link from "next/link";
import * as Menubar from '@radix-ui/react-menubar';
import * as Dialog from '@radix-ui/react-dialog';
import React from "react";
import Image from "next/image";
import SpotifyEmbed from "./spotify-embed";
import ResumeDialog from "../resume";
import RunCat from "./runcat";
import RecentItems from "./recent-items";


export default function Topbar({
    onClick,
}: {
    onClick: () => void;
}) {

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
                                    <Dialog.Root>
                                        <Dialog.Trigger>
                                            <Menubar.Item className="MenubarItem">
                                                About This Banana Mac
                                            </Menubar.Item>
                                        </Dialog.Trigger>
                                        <Dialog.Portal>
                                            <Dialog.Overlay className="dialog-overlay" />
                                            <Dialog.Content className="dialog-content">
                                                11111
                                            </Dialog.Content>
                                        </Dialog.Portal>
                                    </Dialog.Root>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem" disabled>
                                        System Settings...
                                    </Menubar.Item>
                                    <Menubar.Item className="MenubarItem" disabled>
                                        Banana Store
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <RecentItems />
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Menubar.Item className="MenubarItem" disabled>
                                        Sleep <div className="RightSlot">⌘ S</div>
                                    </Menubar.Item>
                                </Menubar.Content>
                            </Menubar.Portal>
                        </Menubar.Menu>
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger"><strong>Earthflex</strong></Menubar.Trigger>
                            <Menubar.Portal>
                                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                                    <Link href="/">
                                        <Menubar.Item className="MenubarItem" >
                                            New Tab (Home) <div className="RightSlot">⌘ T</div>
                                        </Menubar.Item>
                                    </Link>
                                    <Link href="/" target="_blank">
                                        <Menubar.Item className="MenubarItem">
                                            New Window <div className="RightSlot">⌘ N</div>
                                        </Menubar.Item>
                                    </Link>
                                    <Menubar.Item className="MenubarItem" disabled>
                                        New Incognito Window
                                    </Menubar.Item>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <div onClick={onClick}>
                                        <Menubar.Item className="MenubarItem" onClick={onClick}>
                                            Resume
                                        </Menubar.Item>
                                    </div>
                                    <Link href="/project">
                                        <Menubar.Item className="MenubarItem">
                                            Project
                                        </Menubar.Item>
                                    </Link>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Link href="https://github.com/earthflex/" target="_blank">
                                        <Menubar.Item className="MenubarItem" >
                                            Github
                                        </Menubar.Item>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/apiwat-anekboon/" target="_blank">
                                        <Menubar.Item className="MenubarItem" >
                                            Linkedin
                                        </Menubar.Item>
                                    </Link>
                                    <Link href="https://twitter.com/earthflexible" target="_blank">
                                        <Menubar.Item className="MenubarItem" >
                                            Twitter
                                        </Menubar.Item>
                                    </Link>
                                </Menubar.Content>
                            </Menubar.Portal>
                        </Menubar.Menu>
                    </Menubar.Root>
                </div>
                <div>
                    <Menubar.Root className="MenubarRoot" >
                        <RunCat />
                        <Menubar.Menu>
                            <button className="MenubarTrigger btn-topbar" onClick={() => setIsVisible(!isVisible)}>
                                <img src="/play-circle.png" width={22} height={22} alt="spotify" />
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
