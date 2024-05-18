// Same function written as function declaration
function fullName (fName, lName) { 
    console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');
  
// Same function written as function expression
fullName = function (fName, lName) {
    console.log(`${fName}, ${lName}`);
}
fullName('Kristine', 'Hudgens');
  
// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');


// For Checkpoint8: arrow function
helloWorld = () => { return("Hello World"); }
helloWorld();