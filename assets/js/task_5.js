function printArray(arr) {
    console.log(arr.length);
    arr.map(function (item, index, array) { console.log(item) });
}

function task5() {
    printArray([1, 2, 3, 5, 125]);
    printArray(['str', 'some', 12, false, NaN, undefined]);
}
