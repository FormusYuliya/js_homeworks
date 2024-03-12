
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

