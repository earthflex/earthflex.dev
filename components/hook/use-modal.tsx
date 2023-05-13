import React from "react";

const useModal = () => {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (modalOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [modalOpen]);

    const close = (): void => setModalOpen(false);
    const open = (): void => setModalOpen(true);

    return { modalOpen, close, open };
};

export default useModal;