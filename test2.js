var greatestLetter = function (s) {

    let j = 0;
    const arr = [];

    for (i = 0; i < s.length; i++) {

        if (s[i] === s[i].toUpperCase()) {
            let x = s[i];
            while (j < s.length) {
                if (x === s[j + 1].toUpperCase()) {
                    arr.push(x)
                }
                else { j++ }
            }
        }

    }

};

let v = "arRAzFif";

console.log(greatestLetter(v));