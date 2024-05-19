const userOne = {
    firstName: "Kristine",
    lastName: "Hudgens"
  };
  
  const userTwo = {
    firstName: "Tiffany",
    lastName: "Hudgens"
  };
  
  // Function expression
  const fullName = function() {
    return `${this.lastName}, ${this.firstName}`; //por qué hay que poner el this
  };
  
  // Nope! No se puede usar arrowfc porque aquí el this modifica el scope
  // const fullName = () => {
  //   return `${this.lastName}, ${this.firstName}`;
  // };
  
  const kristine = fullName.bind(userOne);
  const tiffany = fullName.bind(userTwo);
  
  kristine();
  tiffany();