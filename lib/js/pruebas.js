"use strict"; //Sistema obliga que la semántica a respetar el lenguaje

(function () {
    function contar(ciclos) {
        let total = 0, count = 1;
        while (count <= ciclos) {
            console.log("total: " + total + " count: " + count)
            total += count;
            count++;
            console.log("total: " + total)
        }
    }
    //contar(5);

    function factorial(n) {
        if (n == 0) {
            return 1;
        } else {
            console.log(n - 1) * n
            return factorial(n - 1) * n;
        }
    }
    //factorial(3);

    let theNumber = Number(prompt("Pick a number"));
    console.log(`Your number is the square root of ${theNumber} * ${theNumber}`);
})()


