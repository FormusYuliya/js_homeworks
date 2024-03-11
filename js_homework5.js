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