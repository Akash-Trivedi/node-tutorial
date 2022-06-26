/**
 * using filesystem module
 * can be implemented asynchronously as well as synchronously
 * node knows how to decode the files
 */

const { readFileSync, writeFileSync } = require('fs')


const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);
// hello this is first text file hello this is second text file

// writeFileSync(
//     './content/result-sync.txt', `here is the results -> ${first}, ${second}`
// )
// node will create if not present and override if present


// appending the file
writeFileSync(
    './content/result-sync.txt',
    `here is the results -> ${first}, ${second}`,
    { flag: 'a' }
)


