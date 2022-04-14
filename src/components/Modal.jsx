import React from 'react'
import devbook from '../assets/devbook.gif'

const Modal = ({ open, onClose }) => {

    if (!open) return null;
    return (
        <div onClick={onClose} className='overlay'>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className='modalContainer'>
                <img className="modalImg" src={devbook} alt='/' />
                <div className='modalRight'>
                    <button className='closeBtn' onClick={onClose}>
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal