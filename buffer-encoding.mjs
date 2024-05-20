const buffer = Buffer.from("Welcome Agra", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("V2VsY29tZSBBZ3Jh", "base64");

console.info(bufferBase64.reverse().toString("utf8"));