import { diff } from "just-diff";

const obj1 = { a: 4, b: 5 };
const obj2 = { a: 3, b: 5 };

document.querySelector("body").innerHTML = `<h1>DIFF => ${JSON.stringify(
  diff(obj1, obj2)
)}</h1>`;
