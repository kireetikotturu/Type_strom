let quoteDisplayEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");
let displayIdEl = document.getElementById("displayId");

let option = {
    method: "GET"
}
let url = "https://apis.ccbp.in/random-quote";
fetch(url, option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        quoteDisplayEl.textContent = jsonData.content;
    });
let num = 0;
let intervelId = setInterval(function() {
    timerEl.textContent = num + 1;
    num += 1;
}, 1000);

function submitBtnOnclick() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(intervelId);
        let timeC = timerEl.textContent;
        resultEl.textContent = "You typed in " + timeC + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}
submitBtnEl.addEventListener("click", submitBtnOnclick);

function resetBtnOnclick() {
    displayIdEl.classList.toggle("d-none");
    spinnerEl.classList.toggle("d-none");
    num = 0;
    clearInterval(intervelId);
    quoteInputEl.value = "";
    resultEl.textContent = "";
    let option = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, option)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.toggle("d-none");
            displayIdEl.classList.toggle("d-none");
            quoteDisplayEl.textContent = jsonData.content;
        });

    intervelId = setInterval(function() {
        timerEl.textContent = num;
        num += 1;
    }, 1000);
}

resetBtnEl.addEventListener("click", resetBtnOnclick);