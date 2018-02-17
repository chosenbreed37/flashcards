import React from 'react';

import './CardDefinition.css';

export const CardDefinition = ({ definition, example, antonyms, synonyms }) => {
    return (
        <div className='definition'>
            <p id='description' className='description'>{definition}</p>
            {example && <blockquote><p id='example' className='example'>{`"${example}"`}</p></blockquote>}
            {synonyms &&
                <div className='field'>
                    <label className='caption'>synonyms</label>
                    <label id='synonyms' className='field'>{synonyms}</label>
                </div>
            }
            {antonyms &&
                <div className='field'>
                    <label className='caption'>antonyms</label>
                    <label id='antonyms' className='field'>{antonyms}</label>
                </div>
            }
        </div>
    );
}