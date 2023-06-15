import React from "react";
import Image from "next/image";
import * as Menubar from '@radix-ui/react-menubar';
import { ChevronRightIcon } from '@radix-ui/react-icons';

interface AppItems {
    id: string;
    name: string;
    img: string;
}

const APP_ITEMS: AppItems[] = [
    {
        id: 'notion',
        name: 'Notion',
        img: '/application/notion',
    },
    {
        id: 'notes',
        name: 'Notes',
        img: '/application/notes',
    },
    {
        id: 'chatgpt',
        name: 'ChatGPT',
        img: '/application/chatgpt',
    },
    {
        id: 'chrome',
        name: 'Chrome',
        img: '/application/chrome',
    },
    {
        id: 'gmail',
        name: 'Gmail',
        img: '/application/gmail',
    },
    {
        id: 'figma',
        name: 'Figma',
        img: '/application/figma',
    },
    {
        id: 'vscode',
        name: 'Visual Studio Code',
        img: '/application/vscode',
    },
    {
        id: 'iterm',
        name: 'Iterm',
        img: '/application/iterm',
    },
];


export default function RecentItems() {
    return (
        <React.Fragment>
            <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                    Recent Items
                    <div className="RightSlot">
                        <ChevronRightIcon />
                    </div>
                </Menubar.SubTrigger>
                <Menubar.Portal>
                    <Menubar.SubContent className="MenubarSubContent" alignOffset={-5}>
                        {APP_ITEMS.map((item) => (
                            <Menubar.Item className="MenubarItem" key={item.id}>
                                <img className="app-item" src={`${item.img}.webp`} width={16} height={16} alt={item.name} />{item.name}
                            </Menubar.Item>
                        ))}
                    </Menubar.SubContent>
                </Menubar.Portal>
            </Menubar.Sub>
        </React.Fragment>
    );
};
