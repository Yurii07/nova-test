import {table} from "./table";
import {modal} from "./madal";

let btnSubmit = document.getElementById('submit'),
    btnPlayAgain = document.getElementById('play-again');

btnSubmit.addEventListener('click', function (evt) {
    evt.preventDefault();

    modal.createModal();

    table.winNumber();

    table.countBall();

    btnSubmit.style.display = "none";
    btnPlayAgain.style.display = "block";
});

btnPlayAgain.addEventListener('click', function (evt) {
    evt.preventDefault();

    location.reload();
});


table.renderTable(5, 4); //create 1 card
table.renderTable(5, 4); //create 1 card
table.renderTable(5, 4); //create 1 card
table.renderTable(5, 4); //create 1 card
table.renderTable(5, 4); //create 1 card
