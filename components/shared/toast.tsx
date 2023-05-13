import React from "react";
import * as Toast from '@radix-ui/react-toast';

export default function ToastMain({
    title,
    description,
    open,
    setOpen
}: {
    title: string;
    description: string;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <React.Fragment>
            <Toast.Provider swipeDirection='right' >
                <Toast.Root className="toast-root" open={open} onOpenChange={setOpen}>
                    <Toast.Title className="toast-title">{title}</Toast.Title>
                    <Toast.Description asChild>
                        <span>{description}</span>
                    </Toast.Description>
                    <Toast.Action className="toast-action" asChild altText="Close the toast">
                        <button className="toast-button" onClick={() => setOpen(false)}>Close</button>
                    </Toast.Action>
                </Toast.Root>
                <Toast.Viewport className="toast-viewport" />
            </Toast.Provider>
        </React.Fragment>
    );
};
