const miLista= [
    'velma',
    'exploradora',
    'jane',
    'john',
    'harry'
]
//Create a for loop
//print each name of myList
for (let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
  }


//Create a whileLoop and print them
let i = 0;
while (i < miLista.length) {
  console.log(miLista[i]);
  i++;
}

//Crear una función flecha que devuelva "Hola Mundo"
const saludo = () => "Hola Mundo";
console.log(saludo());