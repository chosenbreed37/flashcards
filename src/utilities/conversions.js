const extractDefinition = (source) => ({
    definition: source.definition,
    example: source.example,
    synonyms: source.synonyms,
    antonyms: source.antonyms
});

const extractDerivations = (source) => {
    const result = [];
 
    if (source.derived1) {
        result.push({
            derivation: source.derived1,
            type: source.derived1Type
        });
    }

    if (source.derived2) {
        result.push({
            derivation: source.derived2,
            type: source.derived2Type
        });
    }

    if (source.derived3) {
        result.push({
            derivation: source.derived3,
            type: source.derived3Type
        });
    }

    return result;
}

const extractWord = (source) => {
    return {
        id: source.id,
        name: source.name,
        type: source.type,
        definitions: [ extractDefinition(source)],
        derivations: extractDerivations(source)
    }
}

exports.extractDefinition = extractDefinition;
exports.extractWord = extractWord;
exports.extractDerivations = extractDerivations;