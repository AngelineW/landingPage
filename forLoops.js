for (i = 0; i < 6; i++){ // start point, end point and how to get to next item are in the same line argument//
    console.log("Printing out i = " + i);
}

for (let k = 12; k < 21; k++) {
    console.log(k);
  }

// prefix & postfix operators
  var x = 0;
  x++;
  console.log(x);

  var y = 0;
  ++y;
  console.log(y);

  //convert while loop to for loop

  /*
  let a = 9;

  while(a >= 1){
      console.log("Hello " + a);
      a= a-1;
  }
  */
  

  for( a = 9; a >= 1; a-=1)
{
    console.log("hello " + a);
    
}

//factorials
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

//nested loops
for (let x = 0; x < 5; x = x + 1) {
    for (let y = 0; y < 3; y = y + 1) {
      console.log(x + "," + y);
    }
  }

console.log(solution);

//find a seat quiz:nested
  for ( var x = 0; x <= 25; x++){
    for (var y = 0; y <= 99; y++){
      console.log(x + "-" + y);
    }
  }
    