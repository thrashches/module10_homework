function iterMap(mapObject) {
    for (let key of mapObject.keys()) {
        console.log(`Ключ - ${key}, значение - ${mapObject.get(key)}`);
    }
}

function task8() {
    map1 = new Map();
    map1.set('name', 'Igor');
    map1.set('age', 100);
    map1.set('true', true);
    iterMap(map1);
}