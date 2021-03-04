exports.min = function min(array) {
    if (array.length == 0) {
        return 0;
    } else return Math.min(...array);
};

exports.max = function max(array) {
    if (array.length == 0) {
        return 0;
    } else return Math.max(...array);
};

exports.avg = function avg(array) {
    if (array.length == 0) {
        return 0;
    } else {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue;
        const average = array.reduce(reducer) / array.length;
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
//         const reducer = (accumulator, currentValue) =>
//             accumulator + currentValue;
//         const sum = array.reduce(reducer);
//         console.log(sum / array.length);
//     }
// }
