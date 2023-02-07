const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const indexPath = join(__dirname, '../web/dist/index.html');

let indexFile = readFileSync(indexPath, 'utf-8').split('\n');

for (let [index, row] of indexFile.entries()) {
    if (row.includes('/assets/')) {
        const charIndex = row.indexOf('/assets/');
        let rowSplit = row.split('');
        rowSplit[charIndex] = './';
        row = rowSplit.join('');
        indexFile[index] = row;
    }
}

writeFileSync(indexPath, indexFile.join('\n'), 'utf-8');
