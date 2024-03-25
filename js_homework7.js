// ДЗ 1 Без А

// Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)

var strings = [
    "Test123",   
    "Aram zam zam",   
    "Long sentence with spaces",
];

var regex = /^(?!.*[Aa]).{6,}$/;

strings.forEach(function(str) {
    if (regex.test(str)) {
        console.log(`Рядок "${str}" є придатним`);
    } else {
        console.log(`Рядок "${str}" є непридатним`);
    }
});

// ДЗ 2 Параноя 

var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var trustedEmails = [];
var regex = /^[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/i;

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (regex.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);