class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }
  
    renderDetails() {
      console.log(`${this.name}: ${this.role}`);
    }
  }
  
  const jon = new Instructor({name: 'Jon Snow'});
  const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
  jon.renderDetails();
  brayden.renderDetails();

  //Exercise
  /*Ejercicio de Codificacion.You're in the market for a new car but want it to be electric. 
  Create an instance of the Car class called model3. The year must be a number (so don't wrap it in quotation marks). 
  Set the brand to "Tesla" and change the poweredBy to "electricity".
*/
class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`);
	}
}

const model3 = new Car({year: 2024, brand: 'Tesla', poweredBy: 'electricity'});