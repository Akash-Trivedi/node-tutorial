/**
 * all the code in node scripts are private by default,
 * unless they are exposed explicitly by exporting
 */

const bankId = 11432

const bankName = 'HDFC'

const person = {
  name: 'user1',
  gender: 'male',
  accountNumber: `${bankId}55986210`
}

const draw = (edgeLength) => { console.log('figure drawn') }

// module.exports is an Object, set by Module system
// module.exports = {}

/**
 * module.exports is an object set by Module System
 * module.exports = {}
 * so all the operations done on module.exports will be same as for any other variable
 * {}.name='user' will result in {name:'user'}
 * {}.name will result in {} no appending key with value undefined
 * {}.name=null will result in {name:null}
 * {}='user' will change he variabe to string data type
 */
module.exports.akash

/**
 * exports
 */
exports = person
console.log(module);