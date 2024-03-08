// ДЗ 1  Написати свою реалізацію функції isNaN. 

function myIsNaN(value) {
    return value !== value;
  }
  
  console.log(myIsNaN(4)); 

  // ДЗ 2   Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи

  function pad(sentence, char, charAmount, order){

    var sumSubsring = '';
  
    for (var i = 0; i<(charAmount - (sentence.toString().length)); i++)
    {
        var sumSubsring = sumSubsring.concat(char);
    }

    
    if(order==true){
        let  resultSting = sumSubsring.concat(sentence)
        console.log(resultSting);

    }
    else{
        let resultSting = sentence.concat(sumSubsring)
        console.log(resultSting);
    }
  }

  pad("String12", '*', 10, true)
  pad('String', '*', 7, false)

//  ДЗ #3 Перевірка теорії ймовірності. 
/* Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. 
Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число. */

function checkProbabilityTheory(count) {
    var evenCount = 0;
    var oddCount = 0;

    for (var i = 0; i < count; i++) {
        var randomNumber = Math.floor(Math.random() * (900)) + 100;

        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    
    var evenPercentage = Math.round(((evenCount / count) * 100)).toString().concat('%');
    var oddPercentage = Math.round(((oddCount / count) * 100)).toString().concat('%');
    

    return {
        total:(evenCount+oddCount),
        evenCount: evenCount,
        oddCount: oddCount,
        proportion: evenPercentage.concat('/').concat(oddPercentage)
    };
}

// Приклад використання
var result = checkProbabilityTheory(145); // Перевіряємо на 10000 випадкових чисел
console.log("Кількість згенерованих чисел:", result.total);
console.log("Кількість парних чисел:", result.evenCount);
console.log("Кількість непарних чисел:", result.oddCount);
console.log("Відсоткове співвідношення", result.proportion);

