
const csvFilePath = './flashcards.csv'

const csv = require('csvtojson')
const jsonfile = require('jsonfile');
const utils = require('./src/utilities/conversions.js');

const data = [];

console.log(`Processing [${csvFilePath}]...`);

const predicate = (e, entry) => e.id === entry.id && e.name === entry.name;

csv()
    .fromFile(csvFilePath)
    .on('json', (entry) => {
        const match = data.find(e => predicate(e, entry));
        if (match) {
            match.definitions.push(utils.extractDefinition(entry));
        } else {
            data.push(utils.extractWord(entry));
        }
    })
    .on('done', (error) => {
        jsonfile.writeFile('./src/data/flashcards.json', { words: data }, (err) => console.error(err));
        console.log('end')
    })