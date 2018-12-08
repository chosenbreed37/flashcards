import { words } from '../data/word-bank';
import { randomSetExcluding } from './random-word-generator';

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export const generateAntonymQuestion = (word) => {
    if (word && word.definitions && word.definitions.length > 0 && word.definitions[0].antonyms !== null) {
        // question id
        const id = '1';
        // question text
        const text = `Which of the following is an antonym of ${word.name}?`;

        const options = shuffle(randomSetExcluding(words, 3, [word])
            .concat([word]))
            .map((w, n) => {
                switch (n) {
                    case 0:
                        return { key: 'a', label: w };
                    case 1:
                        return { key: 'b', label: w };
                    case 2:
                        return { key: 'c', label: w };
                    case 3:
                        return { key: 'd', label: w };
                }
            });
        return {
            id, text, options
        };
    }
    return null;
};

export const generateSynonymQuestion = (word) => {
    if (word && word.definitions && word.definitions.length > 0 && word.definitions[0].synonyms !== null) {
        // question id
        const id = '1';
        // question text
        const text = `Which of the following is a synonym of ${word.name}?`;

        const options = shuffle(randomSetExcluding(words, 3, [word])
            .concat([word]))
            .map((w, n) => {
                switch (n) {
                    case 0:
                        return { key: 'a', label: w };
                    case 1:
                        return { key: 'b', label: w };
                    case 2:
                        return { key: 'c', label: w };
                    case 3:
                        return { key: 'd', label: w };
                }
            });
        return {
            id, text, options
        };
    }
    return null;
};