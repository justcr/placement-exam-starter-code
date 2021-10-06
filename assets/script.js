
let yourName = Carlos Rodriguez
document.getElementById('credit').textContent = `Created by ${yourName}`

//tbrow
let gbTbRow = document.querySelector("#qty-gb");
let gbCounter = 0;

let gbCounter = localStorage.getItem("qty-gb");
    if (gbCounter) {
        gbTbRow.textContent = gbCounter;
    };

   
let ccTbRow = document.querySelector("#qty-cc");
let ccCounter = localStorage.getItem("qty-cc");
    if (ccCounter) {
        ccTbRow.textContent = ccCounter;
    };



let sugarTbRow = document.querySelector("#qty-sugar");
let sugarCounter = 0;

let sugarCounter = localStorage.getItem("qty-sugar");
    if (sugarCounter) {
        sugarTbRow.textContent = sugarCounter;
    };


let totalTbRow = document.querySelector("#qty-total");

//btns
document.getElementById("add-gb").addEventListener("click",function() {
    let gbCounter = parseInt(gbTbRow.textContent);
    gbCounter = gbCounter + 1;
    gbTbRow.textContent = (gbCounter);
    localStorage.setItem("qty-gb", gbCounter);
    console.log('Ginger bread + button was clicked!')
    
});

document.getElementById("minus-gb").addEventListener("click",function() {
    let gbCounter = parseInt(gbTbRow.textContent);
    gbCounter = gbCounter - 1;
    gbTbRow.textContent = (gbCounter);
    localStorage.setItem("qty-gb", ccCounter);
});

document.getElementById("add-cc").addEventListener("click",function() {
    let ccCounter = parseInt(ccTbRow.textContent);
    ccCounter = ccCounter + 1;
    ccTbRow.textContent = (ccCounter);
    localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("minus-cc").addEventListener("click",function() {
    let ccCounter = parseInt(ccTbRow.textContent);
    ccCounter = ccCounter - 1;
    ccTbRow.textContent = (ccCounter);
    localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("add-sugar").addEventListener("click",function() {
    let sugarCounter = parseInt(sugarTbRow.textContent);
    sugarCounter = sugarCounter + 1;
    sugarTbRow.textContent = (sugarCounter);
    localStorage.setItem("qty-sugar", sugarCounter);
});

document.getElementById("minus-sugar").addEventListener("click",function() {
    let sugarCounter = parseInt(sugarTbRow.textContent);
    sugarCounter = sugarCounter - 1;
    sugarTbRow.textContent = (sugarCounter);
    localStorage.setItem("qty-sugar", sugarCounter);
});

//total votes
totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;



