import * as target from './random-word-generator';
import { words } from '../data/word-bank';

describe('Random word generator', () => {
    describe('given a word as a starting point', () => {
        it('generates a set of n words excluding that word', () => {
            const exclude = 'abundance';
            const collection = words.map(w => w.name);
            const actual = target.randomSetExcluding(collection, 3, [exclude]);
            expect(actual.length).toBe(3);
            expect(actual).not.toContain(exclude);
        });
    });
});

