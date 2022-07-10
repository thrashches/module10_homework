function typeOf(x) {
    if (typeof x === 'number') {
        console.log('X - число!');
    }
    else if (typeof x === 'string') {
        console.log('X - строка!');
    }
    else if (typeof x === 'boolean') {
        console.log('X - логический тип!');
    }
    else {
        console.log('Тип x не определён!');
    }
    return typeof x
}


function task2() {
    typeOf('str');
    typeOf(null);
    typeOf(false);
    typeOf(12);
    typeOf(NaN);
    typeOf({});
}