import {random} from "./random";

class Table {

    renderTable(row, col) {

        let app = document.getElementById("app"),
            table = document.createElement("table");
        table.style.borderCollapse = "collapse";
        let count = 1;
        for (let i = 0; i < row; i++) {
            let tr = table.insertRow();
            for (let j = 0; j < col; j++, count++) {
                let td = tr.insertCell();
                td.setAttribute('number', count);
                td.appendChild(document.createTextNode(count));
                td.style.border = "1px solid black";
                td.style.padding = "15px";
                td.style.textAlign = "center";
            }
        }
        app.appendChild(table);

        let arr = [];

        table.onclick = function () {

            let target = event.target,
                tdElement = event.srcElement;
            tdElement.classList.toggle("line-through");

            if (tdElement.classList.contains("line-through")) {
                arr.push(tdElement);
            } else {
                arr.pop();
            }

            if (arr.length > 5) {
                table.style.boxShadow = "0 10px 20px rgba(255,0,0,0.19), 0 6px 6px rgba(255,0,0,0.23)";
                table.classList.add("error");
            } else {
                table.style.boxShadow = "none";
                table.classList.remove("error")
            }

            let submitBtn = document.getElementById("submit"),
                tableAll = document.querySelector("table");
            if (tableAll.classList.contains("error")) {
                submitBtn.disabled = true;
            } else {
                submitBtn.disabled = false;
            }
            console.log(tableAll);
        }
    }

    getCards() {
        return document.querySelectorAll('table');
    }

    winNumber() {
        let cards = this.getCards(),
            winNumbers = random.randomNumber(),
            td = document.querySelectorAll("td");

        for (let j = 0; j < cards.length; j++) {

            let cardNumbers = cards[j].querySelectorAll('td');

            for (let i = 0; i < cardNumbers.length; i++) {
                let cardNumber = parseInt(cardNumbers[i].getAttribute('number'));
                if (winNumbers[j].includes(cardNumber)) {
                    cardNumbers[i].classList.add("green");
                }
            }

        }
        // console.log(cards,winNumbers);
    }

    countBall() {
        let winCount = document.querySelectorAll('.line-through.green').length,
            totalPoint = document.getElementById('total-points');
        totalPoint.innerHTML = "Total points: " + winCount;
        console.log(winCount);
    }

}

export let table = new Table();