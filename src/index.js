exports.min = function min(array) {
    if (typeof array === undefined || array.length === 0) {
        return 0;
    } else return Math.min(...array);
};

exports.max = function max(array) {
    if (typeof array === undefined || ) {
        return 0;
    } else return Math.max(...array);
};

exports.avg = function avg(array) {
    if (typeof array === undefined ||) {
        return 0;
    } else {
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        let average = array.reduce(reducer) / array.length;
        return average;
    }
};

// function min(array) {
//     if (array.length == 0) {
//         console.log("empty");
//         return 0;
//     } else console.log(Math.min(...array));
// }
// function max(array) {
//     if (array.length == 0) {
//         console.log("empty");
//         return 0;
//     } else console.log(Math.max(...array));
// }
// function avg(array) {
//     if (array.length == 0) {
//         console.log("empty");
//         return 0;
//     } else {
//         let reducer = (accumulator, currentValue) => accumulator + currentValue;
//         let sum = array.reduce(reducer);
//         console.log(sum / array.length);
//     }
// }
// avg([1, 2, 3, "n", "g"]);
