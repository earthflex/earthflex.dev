import Link from "next/link";
import * as Menubar from '@radix-ui/react-menubar';
import React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import SpotifyEmbed from "./spotify-embed";
import RunCat from "./runcat";
import RecentItems from "./recent-items";

export default function Topbar({
    onClick,
}: {
    onClick: () => void;
}) {

    const [isVisible, setIsVisible] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        const handleKeyDown = (event: { key: string; metaKey: any; }) => {
            if (event.key === 'Enter' && event.metaKey) {
                // ปฏิบัติการที่คุณต้องการทำเมื่อกด command + enter
                handleSleep();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // ล้าง event listener เมื่อ component ถูก unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleSleep = () => {
        // ใส่โค้ดสำหรับฟีเจอร์ Sleep ที่นี่
        router.push('/sleep');
        console.log('Sleep feature triggered');
    };

    return (
        <React.Fragment>
            <div className="ef-topbar">
                <div>
                    <Menubar.Root className="MenubarRoot">
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger">
                                <Image src="/banana.png" width={20} height={20} alt="banana" className="w-auto h-auto" />
                            </Menubar.Trigger>
                            <Menubar.Portal>
                                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                                    <Menubar.Item className="MenubarItem" >
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
                                    <RecentItems />
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <Link href="/sleep">
                                        <Menubar.Item className="MenubarItem" >
                                            Sleep <div className="RightSlot hidden lg:flex">⌘ Enter</div>
                                        </Menubar.Item>
                                    </Link>
                                </Menubar.Content>
                            </Menubar.Portal>
                        </Menubar.Menu>
                        <Menubar.Menu>
                            <Menubar.Trigger className="MenubarTrigger"><strong>Earthflex</strong></Menubar.Trigger>
                            <Menubar.Portal>
                                <Menubar.Content className="MenubarContent" align="start" sideOffset={5} alignOffset={-3}>
                                    <Link href="/">
                                        <Menubar.Item className="MenubarItem" >
                                            Home
                                        </Menubar.Item>
                                    </Link>
                                    <Menubar.Separator className="MenubarSeparator" />
                                    <div onClick={onClick}>
                                        <Menubar.Item className="MenubarItem" onClick={onClick}>
                                            Resume
                                        </Menubar.Item>
                                    </div>
                                    <Link href="/works">
                                        <Menubar.Item className="MenubarItem">
                                            Works
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
                            <button className="MenubarTrigger btn-topbar mobile-location ">
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
