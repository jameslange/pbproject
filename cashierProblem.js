
function cashier(price, payment){  
  //difference between payment and price
  let change =  payment-price;
  let myArray = [0.01, 0.05, 0.20, 0.50, 1, 5, 10, 20, 50, 100];
  let output;

  if(change <0){
      return console.log(`I need ${Math.abs(change)} more please`)
  } else if(change ===0){
      return console.log("You paid with the exact amount. Thank you!");
  } else{
    output =  myArray.reverse().reduce((acc, curr) =>{
      acc[curr] = Math.floor(change/curr);
      change -= curr * Math.floor(change/curr);
      change = parseFloat(change.toFixed(2));
   
      return acc;  
    }, {});
  
    for(let keys in output){
      if(output[keys]>0){
      console.log(`$${keys}: ${output[keys]}`)
      }
    }
  } 
}
cashier(23.23, 60);

