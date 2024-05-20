function samplePromise(){
    return Promise.resolve("Fauzan Agra");
}

const name = await samplePromise();
console.info(name);