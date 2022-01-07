//
// Make a counter that will count to 10 and stop.
//

let count=1 // this is setting the count variable
setInterval(() => { // this sets the interval
    count=count+1 // adds 1 to the count
    console.log(count); // logs the count 
    if (count==10) { // checks so that count is 10 (true)
      process.exit() // stopes the codes
    } // ends the if statement
}, 1000) // how fast the count changes
