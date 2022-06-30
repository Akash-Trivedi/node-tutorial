# Node Tutorial

### Difference between Node and the Browser

> Browsers have web api like cookies and dom, but node does not have
> we can control the environment in nodejs and not in Browsers
> nodejs has backward compatibility on its own, no need of babble
> Node uses the CommonJS module system, while in the browser we
> are starting to see the ES Modules standard being implemented.
> In practice, this means that for the time being you use require() in Node and import in the
> browser. The DOM and the other web platform api's are provided by the Browsers.

### V8

> v8 takes the javascript and executes in the google chrome.
> v8 provides the runtime provides the runtime environment in which the javascript runs

### npm

> npm i <package> for local project having package.json npm install <package> for global project

package.json is like the manifest file that stores
the project/ package info
npm init for creating package.json by cli
npm init -y for automaticaly default values for all the questions

installing the dependencies via package.json
-> npm install

dev dependencies
->npm i nodemon -D

scripts in package.json is the cli, it runs the command corresponding
to the value for the key of scripts object
ex: npm test or npm start
we can also run our programs, check package.json

asynchronous functions are always offloaded and run after synchronous functions

---

## Event Loop

> best resource: [JSConf](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
> allows node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single threaded. But the truth is, these operations are performed outside the javascript and pushed on the stack by the event loop.
> Also, the setTimeout(()=>{}, time) runs the call back function close to time='time' and not exaclty time='time'. 0 seconds is not perfectly 0.

---

## Async Patterns

---
>
## Event Emitters

---

## Streams
