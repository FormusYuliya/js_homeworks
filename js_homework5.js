/*ДЗ1 

Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). 
Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 

*/

let brains = {
    weight: "1.4 кг",
    percentageOfBurnedNeurons: 50,
    function: "Контроль над тілом та мисленням, та залипання в TikTok",
    

    getInfo: function() {
      for(let iterator in this) {
        if(typeof this[iterator] !== 'function') { 
          console.log(iterator + ": " + this[iterator]); 
        }
      }
    }
  };
  
  
  brains.learning = 'Вивчаемо JS!';

  brains.getInfo();

  // ДЗ2 Сума вартості послуг

    var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  

    price: function() {
        let total = 0;
        for (let key in this) {
            if (typeof this[key] !== 'function'){
                total += +this[key].replace(' грн', '');
            }
        }
        return total;
    },

    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                let price = this[key].replace(' грн', '');
                min = Math.min(min, price);
            }
        }
        return min;
    },


    maxPrice: function() {
        let max = 0;
        for (let key in this) {
            if(typeof this[key] !== 'function') {
                let price = this[key].replace(' грн', '');
                max = Math.max(max, price);
            }
        }
        return max;
    }
};


services['Розбити скло'] = "200 грн";


console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна вартість: " + services.minPrice() + " грн");
console.log("Максимальна вартість: " + services.maxPrice() + " грн");

