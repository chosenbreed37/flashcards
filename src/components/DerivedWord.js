import React from 'react';

import './DerivedWord.css';

export const DerivedWord = ({ derivation, type }) => {
    return (
            <div className='field'>
                <span>&ndash;</span>
                <span id='derived-word' className='derived-word'>{derivation}</span>
                <span id='derived-word-type' className='derived-word-type'>({type})</span>
            </div>
    );
}