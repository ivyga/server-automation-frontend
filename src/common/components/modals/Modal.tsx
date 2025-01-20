/* eslint-disable no-console */
import React, { useState } from 'react';

interface ModalProps {
    title: string;
    body: string;
    footer?: React.ReactNode;
    isOpen: boolean;
    onClose?: () => void;
}

// TODO: Consider using this instead: https://react-bootstrap.netlify.app/docs/components/modal
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
