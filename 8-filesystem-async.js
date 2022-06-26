/**
 * we must provide the call back
 * callback runs after the execution of called function
 */

const { readFile, writeFile, write } = require('fs')

readFile(
    './content/first.txt',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
    }
)
// <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>

readFile(
    './content/first.txt',
    'utf-8',
    (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(result);
        const first = result;
        readFile('./content/second.txt', 'utf-8',
            (err, result2) => {
                if (err) {
                    console.log(err);
                    return
                }
                writeFile(
                    './content/result-sync.txt',
                    `here is the result -> ${first}, ${result}`,
                    (err, result3) => {
                        if (err) {
                            console.log(err);
                            return
                        }
                        console.log(result3);
                    }
                )
            })
    }
)

// fix the error