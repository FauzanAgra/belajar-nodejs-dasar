import {Console} from "console";
import fs from "fs";

const logFile = fs.createWriteStream('application.log');

const log = new Console({
    stdout:logFile,
    stderr:logFile
});

log.info("Hello World");
log.error("Hello World");

const person = {
    firstName: "Fauzan",
    lastName: "Agra"
}

log.table(person);