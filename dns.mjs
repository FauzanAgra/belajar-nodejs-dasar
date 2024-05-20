import dns from "dns/promises";

const address = await dns.lookup("fauzanagra.my.id");

console.info(address.address);
console.info(address.family);