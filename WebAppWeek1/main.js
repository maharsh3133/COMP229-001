import { halfOf, multiply} from "./lib.js";
import doSomething from "./doSomething.js";
import {flag,touch} from "./validator.js"

console.log("halfOf function is :"+halfOf(100));
console.log("multiply function is :"+multiply(4,2))
doSomething();
console.log("before: "+flag);
touch();
console.log("After: "+flag)