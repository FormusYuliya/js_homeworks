
//ДЗ 1 Вам необхідно намалювати в консолі прямокутний трикутник (або плюсиків, або якогось іншого символу)


function drawTriangle(heightsOfTriangle, symbolForTriangle) {
    let row ='';
    for (let i=1; i <=heightsOfTriangle; i++){
        row +=symbolForTriangle;
        console.log(row);
    }
}

drawTriangle(10, '*');


//ДЗ 2 Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3


function countSum(){
    let sum = 0;
    for (let i=1; i<=100; i++){
        if (i%3 ==0)  continue;
        else
        {
            sum+=i;
        }

    }
    return sum;
}

console.log(countSum())


//ДЗ 3:  Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь


function pow(x,y){
    let powResult = 1;
    for (let i = 1; i<=y; i++)
    {
        powResult *=x;
    }
    return powResult;
}

console.log(pow (4,3))

