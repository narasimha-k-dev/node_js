const path = require("path");
console.log(path.sep);

const filepath = path.join("/content", "/subfolder", "/textfile.txt");
console.log(filepath);

console.log(path.basename(filepath));
const absolute = path.resolve(
  __dirname,
  "content",
  "subfolder",
  "textfile.txt"
);

console.log(absolute);