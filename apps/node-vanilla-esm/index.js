import diff from "just-diff";

const obj1 = { a: 4, b: 5 };
const obj2 = { a: 3, b: 5 };
const obj3 = { a: 4, c: 5 };

console.log(diff(obj1, obj2));
