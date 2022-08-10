// Your code here




const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerLeft();
    }
  });




    function moveDodgerLeft(){

    
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      dodger.style.left = `${left - 1}px`;


    }

    function moveDodgerRight(){

    
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
    
        dodger.style.left = `${left + 1}px`;
  
  
      }
