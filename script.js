
     //Part 1: Variable declarations and conditionals
let age = 75;

if (age < 18) {
  console.log('You cannot drive!');
}
else if (age >= 18) {
  console.log('You can drive!');
}

   //Part 2: custom functions
function calculate(a, b) {
  let sum = a + b;
  return sum;
}
console.log(calculate(10, 5));

function format(text) {
  let lines = text.toUpperCase();
  return lines;
}

console.log(format("These are four words")); 
 
   // Part 3: JavaScript Loops 
  for (let i = 0; i < 5; i++) {
    console.log("Hello world!");
  }
 
  let name = "";
  while (name === "") {
    name = prompt("Please enter your name:");
  }
  console.log(`Hello ${name}`);

  // Part 4: DOM Interactions
  let title = document.getElementById("page-title");
  title.textContent = "New Title!";

   let changeText = () => {
  document.getElementById("text").textContent = "The message has changed!";
  };

      
  let hideText = () => {
  document.getElementById("text").style.display = "none";
  };


