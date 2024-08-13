import { addCardsFromCookies } from "./card.js";
window.onload = function () {
    const json = document.cookie;
    stringToQueue(json.split("queue=")[1]);
    addCardsFromCookies(prioq);
};
// how to format the prioq
const prioq = [];
// add only object (string, string) to prioq, first string is card title, second is description
const node = {
    cardTitle: "",
    description: "",
};
// when user loads the page, load cookies into queue.
function stringToQueue(json) {
    const string = json.substring(1, json.length - 1);
    const noCommas = string.split(",");
    for (let i = 0; i < noCommas.length; i++) {
        const currElement = noCommas[i].split(":");
        addQueue(currElement[0], currElement[1]);
    }
}
function queueToString(queue) {
    let newString = "[";
    let comma = ",";
    for (let i = 0; i < queue.length; i++) {
        if (i >= queue.length - 1) {
            comma = "";
        }
        newString += queue[i].cardTitle + ":" + queue[i].description + comma;
    }
    return newString + "]";
}
export function addQueue(cardTitle, description) {
    const element = structuredClone(node);
    element.cardTitle = cardTitle;
    element.description = description;
    return prioq.push(element);
}

export function removeQueue() {
    return prioq.shift();
}

export function updateCookies() {
    const myString = queueToString(prioq);
    document.cookie = "queue=" + myString;
}
