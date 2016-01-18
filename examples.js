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


function freeShipping() {
  // Do nothing
}
function juggle() {
  // Do nothing
}