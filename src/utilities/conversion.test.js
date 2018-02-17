import { extractDefinition, extractDerivations, extractWord } from './conversions';

describe('Conversions', () => {
    const source = {
        id: 15,
        name: 'belligerent',
        type: 'adj',
        definition: 'hostile and aggressive',
        example: 'He was disliked because of his belligerent behaviour',
        synonyms: 'hostile, aggressive, bellicose',
        antonyms: 'friendly, peacable',
        derived1: 'belligerence',
        derived1Type: 'noun',
        derived2: 'belligerently',
        derived2Type: 'adverb'
    };

    it('Extracts words', () => {
        const actual = extractWord(source);
        const expected = {
            id: 15,
            name: 'belligerent',
            type: 'adj',
            definitions: [
                {
                    definition: 'hostile and aggressive',
                    example: 'He was disliked because of his belligerent behaviour',
                    synonyms: 'hostile, aggressive, bellicose',
                    antonyms: 'friendly, peacable',
                }
            ],
            derivations: [
                {
                    derivation: 'belligerence',
                    type: 'noun'
                },
                {
                    derivation: 'belligerently',
                    type: 'adverb'
                }
            ]
        };

        expect(actual).toEqual(expected);
    });

    it('Extracts definitions', () => {
        const result = extractDefinition(source);

        expect(result.definition).toBe(source.definition);
        expect(result.example).toBe(source.example);
        expect(result.synonyms).toBe(source.synonyms);
        expect(result.antonyms).toBe(source.antonyms);
    });

    it('Extracts derivations', () => {
        const results = extractDerivations(source);

        expect(results.length).toBe(2);
        expect(results[0]).toEqual({ derivation: 'belligerence', type: 'noun' });
        expect(results[1]).toEqual({ derivation: 'belligerently', type: 'adverb' });
    });
});