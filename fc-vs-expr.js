var age = 3;

if (age <= 10) {
  var buildMenu = function () {
    return "Kids' Menu";
  };
console.log(buildMenu());
}
//"Kid's menu"


function buildMenuTwo () {
    return "Another kids' menu";
    }
    
    console.log(buildMenu());
    console.log(buildMenuTwo());
    
    
    // "Kid's menu"
    //"Another kids' menu"

    var greeting = function () {
        return "Hi there!";
       };
       
       var age = 4;
       
       if (age <= 10) {
         var buildMenu = function () {
           return "Kids' Menu";
         };
       
         function wrongMenuBuilder () {
           return "Wrong Kids' Menu";
         }
       
         console.log(buildMenu());
         console.log(wrongMenuBuilder());
       }