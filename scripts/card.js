import { addQueue, removeQueue, updateCookies } from "./cookies.js";
let removeCounter = 0;
export function addCard() {
    const cardTitleElement = document.getElementById("title-text");
    const descriptionElement = document.getElementById("description-text");

    const cardTitle = cardTitleElement.value;
    const description = descriptionElement.value;

    if (cardTitle === "") {
    } else {
        const cardID = addQueue(cardTitle, description) - 1;
        updateCookies();
        cardTitleElement.value = "";
        descriptionElement.value = "";
        const currentQueue = document.getElementById("queue-1");
        const queueElement = `
        <div id="card-${cardID}" class="card bg-neutral mx-0.5 my-1 w-48 h-48 shadow-xl float-right">
            <div class="card-body">
                <h2 class="card-title"> ${cardTitle} </h2>
                <p> ${description} </p>
            </div>
        </div>`;
        currentQueue.innerHTML += queueElement;
    }
}

export function removeCard() {
    if (removeQueue() !== undefined) {
        document.getElementById("card-" + removeCounter).remove();
        removeCounter++;
    }
}

export function addCardsFromCookies(queue) {
    const currentQueue = document.getElementById("queue-1");
    for (let i = 0; i < queue.length; i++) {
        const queueElement = `
        <div id="card-${i}" class="card bg-neutral mx-0.5 my-1 w-48 h-48 shadow-xl float-right">
            <div class="card-body">
                <h2 class="card-title"> ${queue[i].cardTitle} </h2>
                <p> ${queue[i].description} </p>
            </div>
        </div>`;
        currentQueue.innerHTML += queueElement;
    }
}
