//Create an array
var generatedArray = new Array(3); // [undefined, undefined, undefined]

var literalArray = [1, 2, 3];

var mixedArray = ['Hi', 1, ['a', 'b', 'c'], { name: 'Kristine' }];

//Adding and removing elements

var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];

arr.pop(); // "Springer"

arr; // ['Altuve', 'Bregman', 'Correa']

arr.push('Bagwell'); // 4

arr; // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

arr.shift(); // ['Bregman', 'Correa', 'Bagwell']

arr.unshift('Kyle'); // 4

arr; // ['Kyle', 'Bregman', 'Correa', 'Bagwell']