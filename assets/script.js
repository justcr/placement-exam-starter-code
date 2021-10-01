
//counter
let gbCounter = 0;

let qtygb = localStorage.getItem("qty-gb");


let ccCounter = 0; 

let qtycc = localStorage.getItem("qty-cc");


let sugarCounter = 0;

let qtysugar = localStorage.getItem("qty-sugar");



//tbrow
let gbTbRow = document.querySelector("qty-gb");

let ccTbRow = document.querySelector("qty-cc");

let sugarTbRow = document.querySelector("qty-sugar");

let totalTbRow = document.querySelector("qty-total");

//btns
document.getElementById("add-gb").addEventListener("click",function(){
    //console.log(gbTbRow);
   gbCounter = gbCounter + 1;
   gbTbRow.textContent = gbCounter;

   localStorage.setItem("qty-gb", gbCounter);
});

document.getElementById("minus-gb").addEventListener("click",function(){
    //console.log(gbTbRow);
   gbCounter = gbCounter - 1;
   gbTbRow.textContent = gbCounter;

   localStorage.setItem("qty-gb", ccCounter);
});

document.getElementById("add-cc").addEventListener("click",function(){
    //console.log(ccTbRow);
   ccCounter = ccCounter + 1;
   ccTbRow.textContent = ccCounter;

   localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("minus-cc").addEventListener("click",function(){
    //console.log(ccTbRow);
   ccCounter = ccCounter - 1;
   ccTbRow.textContent = ccCounter;

   localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("add-sugar").addEventListener("click",function(){
    //console.log(sugarTbRow);
    sugarCounter = sugarCounter + 1;
    sugarTbRow.textContent = sugarCounter;

   localStorage.setItem("qty-sugar", sugarCounter);
});

document.getElementById("minus-sugar").addEventListener("click",function(){
    //console.log(sugarTbRow);
    sugarCounter = sugarCounter - 1;
    sugarTbRow.textContent = sugarCounter;

   localStorage.setItem("qty-sugar", sugarCounter);
});

//total votes
totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

document.getElementById("credit").textContent = `Created by ${Carlos Rodriguez}`