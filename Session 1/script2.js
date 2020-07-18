// challenge : save in a variable the info that you get from the prompt and display it on the console.

// getting the info from the prompt (products name, price, qty)
var info = prompt("Product Name");
var cost = prompt("price");
var many = prompt("quantity")

// display the info on the console.log
// subtotal= price*qty;
console.log(info);
console.log(cost);
console.log(many);
// math operator (subtotal)
var subtotal=cost*many;
console.log(subtotal);
// add taxes
const taxes=1.16;
console.log(taxes);
var total=subtotal*taxes;
console.log(total);
