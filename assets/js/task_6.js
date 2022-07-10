function checkEqual(arr) {
    // task 6
    let result = true;
    arr.forEach(item => {
        if (item !== arr[0]) {
            result = false;
        }
    });
    
    return result
}

function task6() {
    console.log(checkEqual([1, 2, 3]));
    console.log(checkEqual(['str', 'str', 'str']));
    console.log(checkEqual([1, '1', 1]));
    console.log(checkEqual([2, 2, 2, 2, 2]));
}