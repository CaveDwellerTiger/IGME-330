import {randomElement} from "../src/utils.js";

let words1 = [];

let words2 = [];

let words3 = [];

const init = () => {
    loadBabble();
}

const generate = (num) => {
    //return randomElement(words1) + " " + randomElement(words2) + " " + randomElement(words3);
    let str = ``;
    for(let i = 0; i < num; i++){
        str += `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}`;
        if(i != num - 1){
            str += `<br>`;
        }

    }
    document.querySelector("#output").innerHTML = str;
}

const loadBabble = () => {
    const url = "../data/babble-data.json";

    const xhr = new XMLHttpRequest();

    xhr.onload = (e) => {
        babbleLoaded(e);
    }

    xhr.open("GET", url);
    xhr.send();
}

const babbleLoaded = (e) => {
    const text = e.target.responseText;

    let json;
    json = JSON.parse(text);

    console.log(json);
    words1 = json.words1;
    words2 = json.words2;
    words3 = json.words3;

    document.querySelector("#my-button").onclick = () => generate(1);
    document.querySelector("#five-button").onclick = () => generate(5);

    generate(1);
}

init();