

// let container = document.querySelector(".container");
// let btn = document.getElementById("spin");
// let number = Math.ceil(Math.random() * 10000);

// let flash = document.querySelector(".container div");


// btn.onclick = function () {
   
//   container.style.transform = "rotate(" + number + "deg)";
//   number += Math.ceil(Math.random() * 10000);


// }
  



let container = document.querySelector(".container");
let btn = document.querySelector(".spin-button");
let number = Math.ceil(Math.random() * 10000); // Generate a random starting angle
let spinCount = 0; // Variable to track the spin count

btn.onclick = function () {
  // Disable the button during the animation
  btn.disabled = true;

  // Generate a random angle for the wheel to stop
  let randomAngle = Math.ceil(Math.random() * 10000);

  // Apply the final rotation to the wheel
  container.style.transform = "rotate(" + (number + randomAngle) + "deg)";

  // Wait for the wheel to stop spinning
  setTimeout(function () {
    // Enable the button after the animation
    btn.disabled = false;

    // Increment the spin count
    spinCount++;

    // Show the result based on the spin count
    if (spinCount === 1) {
      alert("Try again");
    } else if (spinCount === 2) {
      alert("Congratulations! You won a gift card!");
    }
  }, 3000); // 4 seconds (same duration as the spin animation)
};
