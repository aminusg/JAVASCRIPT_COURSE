/***
 * DATA
 */

const mainMenu = [
    {
        baseDish: "Pizza    ",
        basePrice: 15.50,
        ingredients: ["jamón york", " bacon", " pollo a la parrilla", " bacon crispy", " carne vacuno ", " pollo buffalo", " pepperoni", " anchoas", " atún", " champiñon", " aceitunas negras", " cebolla", " tomate", " pimiento verde", " maiz", " queso parmesano"]
    },
    {
        baseDish: "Hamburguesa",
        basePrice: 7.50,
        ingredients: ["bacon", " huevo frito", " cebolla", " cebolla caramelizada"," pepinillos", " lechuga", " extra de carne", " extra de queso", " mostaza"]
    },
    {
        baseDish: "Poke Bol",
        basePrice: 17.50,
        ingredients: ["salmón ", " atún rojo", " cebolla", " aguacate", " tomate cherry", " edamame", " alga wakame", " anacardo", " semilla sésamo", " alga nori", " cebollino", " sésamo"]
    }
];

const sideMenu = [
    {
        extras: ["bebida", " patatas fritas", " ensalada original",
    " nuggets 8u", " alitas 8u", " aros cebolla", " gyozas 4u",
    " langostino tempurizado 4u", " shushi 4u", " nigiris 4u"],
        price: 2.75
    }
];


const comments = [
    "Es una buena elección",
    "Debería elegir otra cosa con ese plato",
    "Necesita algo más ?",
    "Tendrá que esperar 15 min."
];

/**
 * VARIABLES
 */
const ingredExtras = [];
const index = ingredExtras.length;
const extrasSelection = [];
let extrasMenu = null; 
let response = null;
const extrasNumber = extrasSelection.length;


/**
 * FUNCTIONS
*/

function commentsWaitress() {
    const comment01 = comments[Math.floor(Math.random() * comments.length)];
    console.log(`Comentario: ${comment01}`);
}

/**
 * MAIN
*/

console.log('=========================');
console.log('    BOTTEGA DINER JS     ');
console.log('=========================');


/**
 * Visualizar el menu principal
*/
console.log('Menu Principal');

mainMenu.forEach((menu, index) =>{
    console.log(`${index + 1}. ${menu.baseDish}`);
});

/**
 * Seleccionar el menu principal
*/

const selection = parseInt(prompt('Selecciona opción [1 - 3]: '));

/**
 * Visualizar ingredientes
*/

const indxSelected = (selection - 1);
console.log('Elige dos ingredientes extras con el menu');
console.log(`${mainMenu[indxSelected].ingredients}`);

/**
 * Seleccionar ingredientes extras
*/
do {
    const ingred = prompt('Selecciona ingrediente: ');
    ingredExtras.push(ingred);
} while (ingredExtras.length < 2);


/**
 * Visualizar ingredientes extras incluidos con el menu
 */
console.log(`Se han seleccionado como ingredientes extra: ${ingredExtras}`);


/**
 * Comentarios Camarero
 */
commentsWaitress();

/**
 * Ver precio Menu Principal
 */
console.log(`Precio del menu: ${mainMenu[indxSelected].basePrice}`);


/**
 * Ver los extras
 */
console.log('Elige tus extras: ');
sideMenu.forEach((extra ) => {
    console.log(`${extra.extras}`);
});


/**
 * Elección de extras
 */
do {
    
    extrasMenu = prompt('Selecciona extra del menu: ');
    if (extrasMenu !== null || extrasMenu !== '' ) {
        extrasSelection.push(extrasMenu);
    } 
    response = prompt('Desea elegir otro extra? [s/n]: ')

} while(response == 's' );
console.log(`Se han seleccionado como extras: ${extrasSelection}`);


/**
 * Comentarios Camarero
*/
commentsWaitress();


/**
 * Totales
*/
const priceExtra = sideMenu.map((price)=> {
    return (`${price.price}`);
});
let totals = (extrasNumber * priceExtra ) +  (mainMenu[indxSelected].basePrice); 
console.log(`Precio total Menu: ${totals}`);