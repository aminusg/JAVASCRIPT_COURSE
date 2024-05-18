const city = "Scottsdale";
console.log(city);

city = "Scottsdale";
console.log(city);

//Backticks exercise of string interpolation
function movieLine() {
    const movie = "It's a trap!";
    
    return (`The film title is: ${movie}`);
}
//Cintegrating conditionals into Js Strings (?:)
const page = 'about';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`);

//Exercise:In the below function's return, use a ternary that returns "1 point",
   // when the ship variable is set to "hit". Otherwise, have it return "You lost a point". 
   //Then, set the ship variable to "hit" or "miss".
var ship = "hit";

function battleShip() {
    return(`${ ship === "hit" ? "1 point" : "You lost a point"}`);
}
battleShip()
