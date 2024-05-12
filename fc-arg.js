function fullName(firstName, lastName, language) {
    var language = language || 'English';
    return lastName.toUpperCase() + ", " + firstName.toUpperCase() + " - " + language;
}

console.log(fullName('Jordan', 'Hudgens', 'Spanish'));


function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
    }
    
    sample();   //undefined