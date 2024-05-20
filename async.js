function samplePromise(){
    return Promise.resolve("Fauzan Agra");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();