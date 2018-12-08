export const randomWordExcluding = (collection, exclusions) => {
    // pick a random number betwee n and m
    const x = Math.round(Math.random() * collection.length);

    // use the random to get a candidate word from the collection
    const candidate = collection[x];

    // if the word should be excluded try again
    // otherwise return the candidate word
    if (exclusions.includes(x)) {
        return randomWordExcluding(collection, exclusions);
    } else {
        return candidate;
    }
};

export const randomSetExcluding = (collection, length, exclusions) => {
    const set = [];
    for (let n = 0; n < length; n++) {
        set.push(randomWordExcluding(collection, exclusions.concat(set)));
    }
    return set;
};
