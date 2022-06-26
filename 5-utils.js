const sayHi = (name = 'no-name') => {
    console.log(`hello ${name}`);
}
const sayHi2 = (name = 'no-name') => {
    console.log(`hello ${name}`);
}
// export as object
module.exports = { sayHi }

// export as variable and call directly
module.exports = sayHi2

// custom
module.exports.items = ['one', 'two']
const person = {
    name: 'akash'
}

module.exports.singlePerson = person
// this create the object and sets its keys to 
// items and singlePerson, accessible by object.key