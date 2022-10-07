
let btn = document.getElementById("btn");
btn.addEventListener("click", convert);

function convert() {
    console.log("button is clicked");

    let base = parseInt(document.getElementById("myInput").value);

    let rate = parseInt(document.getElementById("rate").innerText);

    let quote = parseInt(document.getElementById("quote"));
    quote = base * rate;

    document.getElementById("base").innerText = base;
    document.getElementById("quote").innerText = quote;
}

// conversion from PKR to USD

let rate1 = parseFloat(document.getElementById("rate1").innerText); // converting to decimal
rate1 = 1 / 220; // assigning value
// changing value and limiting to 4 decimal places
document.getElementById("rate1").innerText = rate1.toFixed(4);
document.getElementById("quote1").innerText = rate1.toFixed(4);

let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", convert1);

function convert1() {
    console.log("second button is clicked");

    let base1 = parseFloat(document.getElementById("myInput1").value);

    let rate_t = 1 / 220;
    // assign non numeric value

    let quote1 = parseFloat(document.getElementById("quote1"));
    quote1 = base1 * rate_t;

    document.getElementById("base1").innerText = base1;
    document.getElementById("quote1").innerText = quote1.toFixed(4);
}
