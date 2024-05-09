//Advanced method
/*const getAverage = arr => {
    const total = 0;
    arr.array.forEach(element => {
        total += element
    });
}*/

//SOLUTION: GET THE AVERAGE OF AN ARRAY
/*
const getAverage = arr => {
    //sum the values from the array
    const reducer = (total, currentValue) => total + currentValue;
    const sum = arr.reduce(reducer);
    //get the length of the array
    return sum / arr.length;
    //divide the array sum by the lehgth
}

getAverage([1, 3, 5, 12]);*/


const getAverage = arr => {
    const reducer = (total, currentValue) => total + currentValue;
    const total = arr.reduce(reducer);
    return total / arr.length;
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  getAverage(arr);