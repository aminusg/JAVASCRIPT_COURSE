//title
//type of heading
//headingGenerator('Hi there?, 1) <h1>"Hi there"</h1>


const headingGenerator = (title, typeOfHeading) => {
    return (`
      <h${typeOfHeading}>${title}</h${typeOfHeading}>
    `)
  }
  
  headingGenerator('Greetings', 1);
