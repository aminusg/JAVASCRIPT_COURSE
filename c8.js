const myList= [
    'velma',
    'scout',
    'jane',
    'john',
    'harry'
]
//Create a for loop
//print each name of myList
for (let i = 0; i < myList.length; i++) {
    console.log(myList[i]);
  }


//Create a whileLoop and print them
let i = 0;
while (i < myList.length) {
  console.log(myList[i]);
  i++;
}

//Crear una función flecha que devuelva "Hello World"
const saludo = () => "Hello World";
console.log(saludo());