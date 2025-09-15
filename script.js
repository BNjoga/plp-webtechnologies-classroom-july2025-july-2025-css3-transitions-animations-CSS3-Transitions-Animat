// 🌟 Part 2: Functions, Scope, Parameters & Return Values

// Global variable
let globalMessage = "Global Scope Accessible";

// Function with parameters + return
function addNumbers(a, b) {
  let result = a + b; // local scope
  return result;
}

// Function to demonstrate scope
function showScopeExample() {
  let localMessage = "Local Scope Accessible Only Here";
  console.log(globalMessage);  // ✅ Works
  console.log(localMessage);   // ✅ Works here
}

// 🌟 Part 3: Combining CSS + JS

// Animate the box on button click
const animateBtn = document.getElementById("animateBtn");
const box = document.querySelector(".box");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("bounce"); // Add/remove animation
});

// Calculate and display result
const calcBtn = document.getElementById("calcBtn");
const calcResult = document.getElementById("calcResult");

calcBtn.addEventListener("click", () => {
  let sum = addNumbers(5, 7); // use function with parameters + return
  calcResult.textContent = `The result of 5 + 7 is: ${sum}`;
});

// Run scope example in console
showScopeExample();
