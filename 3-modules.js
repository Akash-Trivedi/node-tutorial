// splitting the code in different files for better maintainability
/**
 * every file in node is a module
 * creating module is creating new file
 * require invokes the file
 * builtin modules: os, path, fs, http
 */
const names = require('./4-names');
const sayHi2 = require('./5-utils');
const utils = require('./5-utils')
console.log(names);
utils.sayHi()
utils.sayHi(names.user1)
sayHi2()
