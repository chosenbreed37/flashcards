import React from 'react';

import './CardDefinition.css';

export const CardDefinition = ({ description, antonyms, synonyms }) => {
    return (
        <div className='definition'>
            <p id='description' className='description'>{description}</p>
            <div className='field'>
                <label className='caption'>synonyms</label>
                <label id='synonyms' className='field'>{synonyms}</label>
            </div>
            <div className='field'>
                <label className='caption'>antonyms</label>
                <label id='antonyms' className='field'>{antonyms}</label>
            </div>
        </div>
    );
}