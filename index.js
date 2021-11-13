// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}
function decrement() {
  count -= 1;
  countEl.innerText = count;
}

function save() {
  let strCount = " " + count + " / ";
  saveEl.innerText += strCount;
  console.log(count);
}
