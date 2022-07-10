function getType() {
    let value = prompt('Введите значение');
    if (value === null) {
        alert('Ничего не введено!')
    }
    else {
        ++value;

        // Дополнительная проверка на NaN не требуется, т.к. NaN эквивалентен flase
        if (value) {
            if (typeof value === 'number') {
                --value;
                if (value % 2) {
                    alert('Число нечетное!')
                }
                else {
                    alert('Число четное!')
                }
            }


        }
        else {
            alert('Упс, кажется, вы ошиблись!')
        }
    }

}
