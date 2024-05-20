import {EventEmitter} from "events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})

emmiter.addListener("hello", (name) => {
    console.info(`Hello ${name}`);
})

emmiter.emit("hello", "Agra");