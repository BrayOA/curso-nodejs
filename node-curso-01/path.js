const path = require("path");

const fielPath = path.join("/public", "/dist", "/styles", "main.css");

console.log(fielPath);
console.log(path.basename(fielPath));
console.log(path.dirname(fielPath));
console.log(path.parse(fielPath));
console.log(path.resolve("dist"));
