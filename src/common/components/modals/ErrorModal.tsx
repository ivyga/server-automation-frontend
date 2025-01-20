/* eslint-disable no-console */
import React, { useState } from 'react';
import { Modal } from './modals';

let errorModalSetState: React.Dispatch<React.SetStateAction<{ title: string; body: string; isOpen: boolean }>> | null =
    null;

// TODO: Add last fetch and stack trace to aid troubleshooting
export const ErrorModal: React.FC = () => {
    const [modalState, setModalState] = useState({ title: '', body: '', isOpen: false });
    errorModalSetState = setModalState;

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
    if (errorModalSetState) {
        errorModalSetState({ title, body, isOpen: true });
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
