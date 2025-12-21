
// Create a small web program that:

// Takes one integer input N from the user

// When a button is clicked:

// If N is even, display:
// "EVEN NUMBER"

// If N is odd, display:
// "ODD NUMBER"

// Display the result on the web page, not in console




let para = document.getElementById("result");

function checkNumber() {
    let check = Number(document.getElementById("numberInput").value);

    if (isNaN(check)) {
        para.innerHTML = "Please enter a valid number!";
        return;
    }

    if (check % 2 === 0) {
        para.innerHTML = "EVEN NUMBER";
    } else {
        para.innerHTML = "ODD NUMBER";
    }
}
