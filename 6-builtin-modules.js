// external have to be installed
// builtin can be directly access without ./name

const obj = require('os')
// console.log(obj1.userInfo());

// destructure for specific function/ variable
const { userInfo } = require('os')
// console.log(userInfo());
/**
 * {
  uid: -1,
  gid: -1,
  username: 'robot',
  homedir: 'C:\\Users\\robot',
  shell: null
}
 */

const obj2 = require('os')
const currentOs = {
    name: obj2.type(),
    release: obj2.release(),
    totalMem: obj2.totalmem(),
    freeMem: obj2.freemem()
}

// console.log(currentOs);
/**
 * {
  name: 'Windows_NT',
  release: '10.0.19044',
  totalMem: 8452829184,
  freeMem: 4640657408
}
 */


// builtin module path
const path = require('path')
// platform seperator
// console.log(path.sep); // '/'

const filepath = path.join('/content', 'subfolder', 'test.txt')
// console.log(filepath);
// \content\subfolder\test.txt

const filepath2 = path.basename(filepath)
// console.log(filepath2); // test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);
// F:\nodejs\node-tutorial\content\subfolder\test.txt

// usefull for running app in different machines and file
// systems
