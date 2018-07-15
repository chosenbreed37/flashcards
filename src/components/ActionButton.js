import React from 'react';

export const ActionButton = ({ id, label, onClick }) => {
    return (
    <button id={id} onClick={onClick}>
        {label}
    </button>)
}