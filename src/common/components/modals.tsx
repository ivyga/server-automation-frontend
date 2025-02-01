/* eslint-disable no-console */
import React, { useState } from 'react';

interface ModalProps {
    title: string;
    body: string;
    footer?: React.ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, body, footer = null, isOpen, onClose = null }) => {
    if (!isOpen) return null;

    return (
        <div className="modal show d-block" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        {onClose && (
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        )}
                    </div>
                    <div className="modal-body">{body}</div>
                    {footer && <div className="modal-footer">{footer}</div>}
                </div>
            </div>
        </div>
    );
};

// Error Modal
let setErrorModalSetState: React.Dispatch<
    React.SetStateAction<{ title: string; body: string; isOpen: boolean }>
> | null = null;

// TODO: Add last fetch and stack trace to aid troubleshooting (See enhancedFetch.tsx)
export const ErrorModal: React.FC = () => {
    const [modalState, setModalState] = useState({ title: '', body: '', isOpen: false });
    setErrorModalSetState = setModalState;

    return (
        <Modal
            title={modalState.title}
            body={modalState.body}
            isOpen={modalState.isOpen}
            onClose={() => setModalState({ ...modalState, isOpen: false })}
        />
    );
};

export const displayError = (title: string, body: string) => {
    if (setErrorModalSetState) {
        setErrorModalSetState({ title, body, isOpen: true });
    } else {
        console.error('ErrorModal is not mounted.');
    }
};

// Waiting Modal
let waitingModalSetState: React.Dispatch<React.SetStateAction<{ isOpen: boolean }>> | null = null;

export const WaitingModal: React.FC = () => {
    const [modalState, setModalState] = useState({ isOpen: false });
    waitingModalSetState = setModalState;

    return <Modal title="Please Wait" body="An API call is in progress." isOpen={modalState.isOpen} />;
};

export const displayWaiting = () => {
    if (waitingModalSetState) {
        waitingModalSetState({ isOpen: true });
    } else {
        console.error('WaitingModal is not mounted.');
    }
};

export const hideWaiting = () => {
    if (waitingModalSetState) {
        waitingModalSetState({ isOpen: false });
    } else {
        console.error('WaitingModal is not mounted.');
    }
};
