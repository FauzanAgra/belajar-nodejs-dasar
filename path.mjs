import path from "path";

const file = "/Users/Agra/contoh.html";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.isAbsolute(file))

const parseFile = path.parse(file);

console.info(parseFile.base);
console.info(parseFile.name);
