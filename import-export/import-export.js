// exporting as objects
module.exports = { property1, function1, function2 }
// importing and using
const type1 = require('./sample')
console.log(type1.property1)
type1.function1()
type1.function2()
// or by destructuring
const { property1, function1 } = require('./sample')
console.log(property1);
function1()

// exporting directly
const person = {
  name: 'user1',
  gender: male
}
module.exports = person

// shorthand
exports.person
/**
 * Module {
  id: '.',
  path: 'F:\\nodejs\\node-tutorial',
  exports: {},
  filename: 'F:\\nodejs\\node-tutorial\\4-names.js',
  loaded: false,
  children: [],
  paths: [
    'F:\\nodejs\\node-tutorial\\node_modules',
    'F:\\nodejs\\node_modules',
    'F:\\node_modules'
  ]
}
 */