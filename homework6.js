
// ДЗ1 Тусувати масив 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(arr) {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (arr.length));
        const temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
    }
}


console.log("Початковий масив:", arr);
myBlend(arr);
console.log("Після перемішування:", arr);

// ДЗ2 BigBoss

const company = {
    name: "Велика Компанія",
    type: "Головна компанія",
    platform: "Платформа для продажу квитків",
    sellsSolution: "Рішення для продажу квитків",
    clients: [
      {
        name: "Клієнт 1",
        type: "subCompany",
        uses: "ПО для продажу квитків",
        sells: "Рішення для продажу квитків",
        partners: [
          {
            name: "Клієнт 1.1",
            type: "subSubCompany",
            uses: "Рішення для продажу квитків",
            sells: "Рішення для продажу квитків",
          },
          {
            name: "Клієнт 1.2",
            type: "subSubCompany",
            uses: "Рішення для продажу квитків",
            sells: "Рішення для продажу квитків",
            partners: [
              {
                name: "Клієнт 1.2.3",
                type: "subSubCompany",
                uses: "Рішення для продажу квитків",
                sells: "Рішення для продажу квитків",
              },
            ],
          },
        ],
      },
      {
        name: "Клієнт 2",
        type: "subCompany",
        uses: "ПО для продажу квитків",
        sells: "Рішення для продажу квитків",
      },
    ],
  };
  
  function findValueByKey(company, name) {
    if (company.name === name) {

      const filteredObject = {
        name: company.name,
        type: company.type,
      };

      if (company.uses !== undefined) {
        filteredObject.uses = company.uses;
      }
  
      if (company.sells !== undefined) {
        filteredObject.sells = company.sells;
      }
  
      if (company.platform !== undefined) {
        filteredObject.platform = company.platform;
      }
  
      if (company.sellsSolution !== undefined) {
        filteredObject.sellsSolution = company.sellsSolution;
      }
  
      return filteredObject;
    }
  
    // Переглядаємо всі властивості об'єкта company
    for (var prop in company) {
      // Перевіряємо, чи властивість є масивом, і якщо так, переглядаємо всі його елементи
      if (Array.isArray(company[prop])) {
        for (var i = 0; i < company[prop].length; i++) {
          // Рекурсивно викликаємо функцію для кожного елемента масиву
          var result = findValueByKey(company[prop][i], name);
          if (result) {
            return result;
          }
        }
      }
      // Рекурсивно викликаємо функцію для кожного об'єкта
      else if (typeof company[prop] === "object") {
        var result = findValueByKey(company[prop], name);
        if (result) {
          return result;
        }
      }
    }
    
    //'Комапанії з таким іменем не існує';
    return null;
  }
  

  const result = findValueByKey(company, "Клієнт 1.2.3");
  console.log(result);
  
  const result2 = findValueByKey(company, "Велика Компанія");
  console.log(result2);
  
  const result3 = findValueByKey(company, "Клієнт 1.2");
  console.log(result3);

  const result4 = findValueByKey(company, "Клієнт 0.1");
  console.log(result4);

