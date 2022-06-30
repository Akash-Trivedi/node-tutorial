/**
 * importing stuff in node is different from javascript
 */


/**
 * while importing i.e. require for global modules, we write the package names
 * while importing user defined local package or files we place './' at the begining
 * we can straight away destructre the properties and functions
 */

// const personObject = require('./export-data')
// console.log(personObject.name, personObject.gender, personObject.accountNumber)

// const { name, gender, accountNumber } = require('./export-data')
// console.log(name, gender, accountNumber)


const drawMethod = require('./export-data')
console.log(typeof (drawMethod));
console.log(drawMethod);

