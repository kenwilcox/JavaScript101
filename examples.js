// example 1
var price = 28.99; 
var discount = 10; 
var total = price - (price * (discount / 100)); 
if (total > 25) {
  freeShipping(); 
}

// example 2
var count = 10; 
while (count > 0) {
  juggle();
  count = count - 1; 
}

// example 3
var dog = {name: "Rover", weight: 35};
if (dog.weight > 30) { 
  alert("WOOF WOOF");
} else {
  alert("woof woof");
}

// example 4
var circleRadius = 20; 
var circleArea = Math.PI * (circleRadius * circleRadius);

// Comments
// You can start them at the beginning of a line
var age = 10; // or at the end
/* Or you can comment out a block of code
var topSecret = 100;
var magicNumber = 42;
*/
/* or you can just use it to
write a large note to yourself
or whoever needs to maintain
what you created later
*/

var scoops = 10;

while (scoops > 0) {
  document.write("Another scoop!"); 
  scoops = scoops - 1;
}

var cashInWallet = 10;
var order;

// if example

if (cashInWallet > 5) {
  order = "I’ll take the works: cheeseburger, fries and a coke";
} else {
  order = "I’ll just have a glass of water"; 
}


function freeShipping() {
  // Do nothing
}
function juggle() {
  // Do nothing
}


// 
if (scoops < 3) {
  alert("Ice cream is running low!"); 
}












if (scoops >= 5) {
  alert("Eat faster, the ice cream is going to melt!");
} else if (scoops < 3) {
  alert("Ice cream is running low!"); 
}






if (scoops >= 5) {
  alert("Eat faster, the ice cream is going to melt!");
} else if (scoops == 3) {
  alert("Ice cream is running low!");
} else if (scoops == 2) { 
  alert("Going once!");
} else if (scoops == 1) {
  alert("Going twice!");
} else if (scoops == 0) {
  alert("Gone!"); 
} else {
  alert("Still lots of ice cream left, come and get it."); 
}