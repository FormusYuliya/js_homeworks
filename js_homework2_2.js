let measurenment =  prompt('Будь ласка вкажіть одиницю вимірювання. Наразі підтримуються 3 операціії конвертації: \n'+
                                '\tКілометри в метри (км); \n\tГодини в хвилини (г); \n\tКілограми в грами. (кг)')
let insertedValue = Number(prompt('Введіть значення, яке бажаєте конвертувати:'))

if (isNaN(insertedValue)) {
    console.log('Введене значення не є числом. Будь ласка, перевірте правильність даних.');
}
else {
    switch(measurenment) {
        case 'км':  
            console.log(insertedValue + ' км це '+  insertedValue * 1000 + ' м.');
            break;

        case 'г':  
            console.log(insertedValue + ' г це '+  insertedValue * 60 + ' хв.');
            break;

        case 'кг':  
            console.log(insertedValue + ' кг це '+  insertedValue * 1000 + ' грм.');
            break;
    
        default:
            console.log ('Конвертер не підтримує ' + measurenment + ' одиницю вимірювання. Наразі доступні наступні операції: "км -> м", "г->хв" та "кг-> г "');
        break;
    }
}   