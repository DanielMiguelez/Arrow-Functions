//1. Funciones flecha
//Convierte la siguiente función en una función flecha:

const saludar = () => "Hola"
console.log(saludar())
  
//Convierte la siguiente función en una función flecha en línea:

const division = (a,b) => a / b;
console.log(division(2,2))
  
//Convierte la siguiente función en una función flecha:

const miNombre = nombre => `Mi nombre es ${nombre}`;
console.log(miNombre("dani"))

//Convierte las siguientes funciones en funciones flecha:

const test2 = () => ("Función test 2 ejecutada.");
  
const test1 = (callback) => callback();
  
console.log(test2 , test1)
  
  
  // 2. Foreach

  let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  //Crea un array con la gente mayor de 25 años y muéstralo por consola.

  /*const mas25 = []
  gente.forEach(persona => {
  if (persona.edad > 25){
    mas25.push(persona)
  }
})
  console.log((mas25))*/

  //Crea un array con la gente que empieza por J.

  /*const nombreJ = []

  gente.forEach(inicial => {
    if(inicial.nombre.startsWith("J")){
        nombreJ.push(inicial)
    }
  })
  console.log(nombreJ)*/

  //3. Map

  //Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

  const majors25 = gente.map(personas=>{
    if(personas.edad > 25){
        console.log(personas)
        return personas
    }
  })
  console.log(majors25)

  //Crea un array con la gente que empieza por J. 

  const empiezaPorJ = gente.map(personas=>{
    if(personas.nombre.startsWith("J")){
        console.log(personas)
        return personas
    }
  })
  console.log(empiezaPorJ)

  //Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

  
    // Resultado esperado
    // [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

    const numbers = [ 4, 5, 6, 7, 8, 9, 10];

    const misNumeros = numbers.map((value)=> Math.pow(value, value)
    )
    console.log(misNumeros)

    //4. Filter

    //Crea un segundo array que devuelva los impares

    const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let numImpares = numbers1.filter(numer => numer % 2 != 0 );

    console.log(numImpares)

    //Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

    const foodList = [
        {
          name: 'Tempeh',
          isVeggie: true
        },
        {
          name: 'Cheesbacon burguer',
          isVeggie: false
        },
        {
          name: 'Tofu burguer',
          isVeggie: true
        },
        {
          name: 'Entrecot',
          isVeggie: false
        }
      ];

      /*const comidita = foodList.filter(comidita => comidita.isVeggie == true).map( (comidita.filter)  "que rico" ${comiditaFilter.name}"me voy a comer!");
      console.log(comidita)*/

      // no me sale :((((((     )))))):
      
  
    
    


     // 5. Reduce

     //Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

     const numeros = [39, 2, 4, 25, 62];

     const multiplicacioncita = numeros.reduce((a,b)=> a * b)

     console.log(multiplicacioncita)



     
