// ES6 code goes here
import { greeting } from './helper';

console.log(greeting);


import { multiply } from './helper';

console.log(multiply(2, 5));

//otra forma de importar todos a la vez

/* import { multiply, greeting } from './helper';

console.log(multiply(2, 5));*/


//OTRA SINTAXIS PARA IMPORTAR TODO LO QUE HAYA EN HELPER
/*
import * as helper from './helper'
EN ESTE CASO; CUANDO LO QUEREMOS IMPRIMIR PARA QUE NO HAYA PROBLEMAS O ERRORES;
HEMOS PUESTO *AS NAME
así, podemos llamar a la funcion o variable con name.function

EX: console.log(helper.multiply(5,6));*/

import navigation, { greeting, multiply } from './navigation';

console.log(navigation());
