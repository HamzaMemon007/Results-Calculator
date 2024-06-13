// Getting the input elements
let num1 = document.getElementById("1num1");
let num2 = document.getElementById("1num2");
let num3 = document.getElementById("2num1");
let num4 = document.getElementById("2num2");
let num5 = document.getElementById("3num1");
let num6 = document.getElementById("3num2");
let num7 = document.getElementById("4num1");
let num8 = document.getElementById("4num2");
let num9 = document.getElementById("5num1");
let num10 = document.getElementById("5num2");
let num11 = document.getElementById("6num1");
let num12 = document.getElementById("6num2");
let num13 = document.getElementById("7num1");
let num14 = document.getElementById("7num2");

// Getting the result elements
let result = document.getElementById("result");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");

// Function to calculate and display the results
function myFunction(e) {
    e.preventDefault();

    // Calculating obtained and total marks
    let obtainedmarks = Number(num1.value) + Number(num3.value) + Number(num5.value) + Number(num7.value) + Number(num9.value) + Number(num11.value) + Number(num13.value);
    let totalmarks = Number(num2.value) + Number(num4.value) + Number(num6.value) + Number(num8.value) + Number(num10.value) + Number(num12.value) + Number(num14.value);

    // Checking if obtained marks are greater than total marks
    if (obtainedmarks > totalmarks) {
        alert("Obtained marks cannot be greater than total marks");
    } else {
        // Displaying the results
        result.innerHTML = obtainedmarks;
        result2.innerHTML = totalmarks;
        result3.innerHTML = (obtainedmarks / totalmarks) * 100;
    }
}