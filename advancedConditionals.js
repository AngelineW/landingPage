if ("false") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

/*
true , "true"
false , "false"
42
"pizza"
"0" , 0 , 0.0 ,  1 , "1" , 
"null" , null
"undefined" , undefined
"NaN" , NaN
" " (empty string)
{}
[]
*/

/*
const isGoing = true;
let color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);
*/

const isGoing = true;
const color = isGoing ? "green" : "red";
console.log(color);

const x = 4;
const y = 3;
const z = (x + y) > 6 ?  2 * x : 2 * y ;
console.log(z);

const adult = true;
const preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

const eatsPlants = true;
const eatsAnimals = false;
let category;

category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

console.log(category)

const option = 1;

if (option === 1) {
    console.log("You selected option 1.");
  } else if (option === 2) {
    console.log("You selected option 2.");
  } else if (option === 3) {
    console.log("You selected option 3.");
  } else if (option === 4) {
    console.log("You selected option 4.");
  } else if (option === 5) {
    console.log("You selected option 5.");
  } else if (option === 6) {
    console.log("You selected option 6.");
  }

  switch (option){
    case 1 : 
        console.log ("You selected option 1");
    break;
    
    case 2 : 
        console.log ("You selected option 2");
    break;
    
    case 3 : 
        console.log ("You selected option 3");
    break;

    default:                                               //good practice to set a default case//
        console.log("You did not select a valid option.") // last case doesn't need a break; optional.//
  }

const month = 5;
let days;

switch (month) {
  case 1:
    days = 31;
    break;
  case 2:
    days = 28;
    break;
  case 3:
    days = 31;
    break;
  case 4:
    days = 30;
    break;
  case 5:
    days = 31;
    break;
  case 6:
    days = 30;
    break;
  case 7:
    days = 31;
    break;
  case 8:
    days = 31;
    break;
  case 9:
    days = 30;
    break;
  case 10:
    days = 31;
    break;
  case 11:
    days = 30;
    break;
  case 12:
    days = 31;
}

console.log('There are ' + days + ' days in this month.');

const education = "high school diploma";
let salary = 0;

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "high school diploma":
        salary = 35256;
        break;
    case "Associate's degree":
        salary = 41496;
        break;
    case "Bachelor's degree":
        salary = 59124;
        break;
    case "Master's degree":
        salary = 69732;
        break;
    case "Professional degree":
        salary = 89960;
        break;
    case "Doctoral degree":
        salary = 84396;
        break;
}


console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");

// cannot print out commas without 'to.LocaleSrting("en-US")'; to print numbers with commas. () can be empty. 