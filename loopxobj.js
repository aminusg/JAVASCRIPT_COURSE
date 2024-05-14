var student = {
    name: 'Kristine',
    age: 12,
    city: 'Scottsdale'
  };
  
  for (var key in student) {
    console.log(key + " => " + student[key]);
  }

//Exercise
let user = {
    username: 'copito',
    email: 'copito@copito.es',
    phone: 945654213
};

for (var key in user) {
  console.log(key + " => " + user[key]);
}