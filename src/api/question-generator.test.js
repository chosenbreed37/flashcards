import * as target from './question-generator';
import { words } from '../data/word-bank';

describe('Question generator', () => {
    const wordText = `{
        "id": "4",
        "name": "abundance",
        "type": "noun",
        "definitions": [
            {
                "definition": "a large amount of something",
                "example": "The food supply was in abundance at the party",
                "synonyms": "affluence, bounty, myriad, plenty, plethora, prosperity, wealth",
                "antonyms": "few, lack, little, need, poverty, scarcity"
            }
        ],
        "derivations": []
    }`;
    const word = JSON.parse(wordText);

    describe('given a word with synonyms', () => {
        it('generates appropriate question', () => {
            const questionText = `{
                "id": "1",
                "text": "Which of the following is a synonym of abundance?",
                "options": [ 
                    {"key":"a", "label": "affluence"}, 
                    {"key":"b", "label": "harvest"}, 
                    {"key":"c", "label":"hold"},
                    {"key":"d", "label": "pull"}
                ],
                "answer": {"key":"a", "label":"affluence"}
            }`;
            const expected = JSON.parse(questionText);
            const actual = target.generateSynonymQuestion(word);
            expect(actual.text).toBe(`Which of the following is a synonym of ${word.name}?`);
            expect(actual.options.length).toBe(4);
        });
    });

    describe('given a word without synonyms', () => {
        it('does not generate a question', () => {
            const wordWithoutSynonym = { ...word, definitions: [] };
            const expected = null;
            const actual = target.generateSynonymQuestion(wordWithoutSynonym);
            expect(actual).toEqual(expected);
        });
    });

    describe('given a word with antonyms', () => {
        it('generates appropriate question', () => {
            const questionText = `{
                "id": "1",
                "text": "Which of the following is a antonym of abundance?",
                "options": [ 
                    {"key":"a", "label": "affluence"}, 
                    {"key":"b", "label": "harvest"}, 
                    {"key":"c", "label":"hold"},
                    {"key":"d", "label": "pull"}
                ],
                "answer": {"key":"a", "label":"affluence"}
            }`;
            const expected = JSON.parse(questionText);
            const actual = target.generateAntonymQuestion(word);
            expect(actual.text).toBe(`Which of the following is an antonym of ${word.name}?`);
            expect(actual.options.length).toBe(4);
        });
    });

    describe('given a word without antonyms', () => {
        it('does not generate a question', () => {
            const wordWithoutAntonym = { ...word, definitions: [] };
            const expected = null;
            const actual = target.generateAntonymQuestion(wordWithoutAntonym);
            expect(actual).toEqual(expected);
        });
    });
});

