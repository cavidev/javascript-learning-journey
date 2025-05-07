// This will print firt, because this entry to the call stack
console.log(1);

function first() {
  //once the function is called, it will be printed later
  console.log(2);
  second();
  Promise.resolve().then(() => {
    // This will be added in the microtask
    console.log(3);
  });
}

function second() {
  //following the logic, it will be a call after console.log(2)
  console.log(4);
}

Promise.resolve().then(() => {
  //This will put in the microtask
  console.log(5);
});

// The code will call it and put the funtion in the callstack
first();

console.log(6);

// output: 1 2 4 6 5 3
