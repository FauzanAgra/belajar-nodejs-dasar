import util from "util";

const firstName = "Agra";
const lastName = "Pracasta";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));


const person = {
    firstName: "Fauzan",
    lastName: "Agra"
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : $j", person));
