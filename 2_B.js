k ko
// Functions
function logger() {
    console.log('My name is Jonas');
  }
   
  // calling / running / invoking function
  logger(); 
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }     
   
  const appleJuice = fruitProcessor(5, 0); 
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  
  
  ///////////////////////////////////////
  // Function Declarations vs. Expressions
  
  // Function declaration
  function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
  
   
  ///////////////////////////////////////
