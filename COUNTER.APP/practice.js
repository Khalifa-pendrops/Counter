let counter = document.getElementById("count-me");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
let saveStr = document.getElementById("saver");

let count = 0;

function increment() {
  counter.textContent = count;
  ++count;
}
increment();


//to save the count
function save() {
  let countDown = count + " - ";
  saveStr.textContent += countDown;

  //to revert the counter to zero after each save
  counter.textContent = 0;
  count = 0;
}


