import https from "https";

const url = "https://webhook.site/23b5830a-7c14-4955-8cf4-74e9163c27b7"

const request = https.request(url, {
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
},(response)=>{
    response.addListener("data", (data)=>{
        console.info(`Recieve data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "Agra",
    lastName: "Pracasta"
});

request.write(body);
request.end();