import React from 'react';

interface IMessageBoxProps {
	title: string;
    message: string;
    // eslint-disable-next-line no-unused-vars
    closeModal: (event: React.MouseEvent) => void;
}

const MessageBox = ({title, message, closeModal}: IMessageBoxProps) => {
    return (
        <div className="modal fade show" tabIndex={-1} role="dialog" aria-labelledby="details" aria-hidden="true" onClick={closeModal}>
            <div className="modal-dialog modal-dialog-centered modal">
                <div className="modal-content shadow">
                    <div className="modal-header">
                        <h5 className="modal-title" id="details">{title}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="">{message}</div>
                    </div>
                    <div className="modal-footer justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={closeModal}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageBox;
