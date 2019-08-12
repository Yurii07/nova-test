class Random {
    randomNumber() {
        let arrNumb = [
            [],
            [],
            [],
            [],
            [],
        ];

        function randomInteger(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }

        // console.log(randomInteger(1, 20));

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                arrNumb[i].push(randomInteger(1, 20));
            }
        }

        let strNumb = document.getElementById("random-number");
        arrNumb.forEach(function (el, i) {
            let div = document.createElement('div');
            div.setAttribute("value", i);
            div.append("card " + (++i) + " : " + el);
            strNumb.append(div);
        });

        // console.log(strNumb);
        return arrNumb;
    }
}

export let random = new Random();

