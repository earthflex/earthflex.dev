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
        id: '',
        name: 'Notion',
        img: '/application/notion.png',
    },
    {
        id: '',
        name: 'Notes',
        img: '/application/notes.png',
    },
    {
        id: '',
        name: 'Bing ChatGPT',
        img: '/application/chatgpt.png',
    },
    {
        id: '',
        name: 'Chrome',
        img: '/application/chrome.png',
    },
    {
        id: '',
        name: 'Gmail',
        img: '/application/gmail.png',
    },
    {
        id: '',
        name: 'Figma',
        img: '/application/figma.png',
    },
    {
        id: '',
        name: 'Visual Studio Code',
        img: '/application/vscode.png',
    },
    {
        id: '',
        name: 'Iterm',
        img: '/application/iterm.png',
    },
];

const RecentItems: React.FC = () => {
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
                                <img className="app-item" src={item.img} width={16} height={16} alt={item.name} />{item.name}
                            </Menubar.Item>
                        ))}
                    </Menubar.SubContent>
                </Menubar.Portal>
            </Menubar.Sub>
        </React.Fragment>
    );
};

export default RecentItems;