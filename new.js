/*para empezar repo*/
/*Switch Statement*/
var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}



function switchStatement() {
    
    var myData = 5;

    switch (typeof myData) {
        case "string":
            console.log("string");
            break;
        case "number":
            console.log ("number");
            break;
        default:
            console.log("number");
    }
}
switchStatement();

function switchStatement() {
    var result;
    switch (typeof result) {
        case "number":
            result = "number";
            break;
        default:
            result = "number"; 
    }
    return result;
}

switchStatement(); 








