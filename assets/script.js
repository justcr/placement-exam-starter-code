
let yourName = "Carlos Rodriguez"
document.getElementById('credit').textContent = `Created by ${yourName}`

//tbrow
let gbTbRow = document.querySelector("#qty-gb");
let gbCounter = 0;

//gbCounter = localStorage.getItem("qty-gb");
   // if (gbCounter) {
   //     gbTbRow.textContent = parseInt(gbCounter);
   // };

   
let ccTbRow = document.querySelector("#qty-cc");
let ccCounter = 0;
// let ccCounter = localStorage.getItem("qty-cc");
   // if (ccCounter) {
  //      ccTbRow.textContent = parseInt(ccCounter);
  //  };



let sugarTbRow = document.querySelector("#qty-sugar");
let sugarCounter = 0;

// sugarCounter = localStorage.getItem("qty-sugar");
   // if (sugarCounter) {
     //   sugarTbRow.textContent = parseInt(sugarCounter);
    // };


let totalTbRow = document.querySelector("#qty-total");

//btns
document.getElementById("add-gb").addEventListener("click",function() {
    // let gbCounter = parseInt(gbTbRow.textContent);
    gbCounter = gbCounter + 1;
    gbTbRow.textContent = gbCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

    // localStorage.setItem("qty-gb", gbCounter);

    
});
// 
document.getElementById("minus-gb").addEventListener("click",function() {
    // let gbCounter = parseInt(gbTbRow.textContent);
    gbCounter = gbCounter - 1;
    gbTbRow.textContent = gbCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

   // localStorage.setItem("qty-gb", ccCounter);
});

document.getElementById("add-cc").addEventListener("click",function() {
    // let ccCounter = parseInt(ccTbRow.textContent);
    ccCounter = ccCounter + 1;
    ccTbRow.textContent = ccCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

   // localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("minus-cc").addEventListener("click",function() {
    // let ccCounter = parseInt(ccTbRow.textContent);
    ccCounter = ccCounter - 1;
    ccTbRow.textContent = ccCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

   // localStorage.setItem("qty-cc", ccCounter);
});

document.getElementById("add-sugar").addEventListener("click",function() {
   // let sugarCounter = parseInt(sugarTbRow.textContent);
    sugarCounter = sugarCounter + 1;
    sugarTbRow.textContent = sugarCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

   // localStorage.setItem("qty-sugar", sugarCounter);
});

document.getElementById("minus-sugar").addEventListener("click",function() {
    // let sugarCounter = parseInt(sugarTbRow.textContent);
    sugarCounter = sugarCounter - 1;
    sugarTbRow.textContent = sugarCounter;
    totalTbRow.textContent = gbCounter + ccCounter + sugarCounter;

   // localStorage.setItem("qty-sugar", sugarCounter);
});

//total votes



