function reverse(str) {
    let arr = str.split('');
    str = arr.reverse().join("");
    console.log(str);
    return str
}


function task3() {
    reverse('test');
    reverse('reverse');
}