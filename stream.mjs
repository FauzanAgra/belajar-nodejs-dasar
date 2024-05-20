import fs from "fs";

const writer = fs.createWriteStream('target.log');

writer.write("Fauzan\n");
writer.write("Agra\n");
writer.write("Pracasta\n");
writer.end();


const reader = fs.createReadStream("target.log");

reader.addListener('data', (data)=>{
    console.info(data.toString()); 
});