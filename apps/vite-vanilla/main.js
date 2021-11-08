import "./style.css";
import { diff } from "just-diff";

const obj1 = { a: 4, b: 5 };
const obj2 = { a: 3, b: 5 };

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <span>DIFF => ${JSON.stringify(diff(obj1, obj2))}</span>
`;
