document.getElementById("cluc").onclick = function() {myFunction()};

function myFunction() {
    let a= document.getElementById("text").value

  
    if (a==="mguStego))"){
        alert("Correct")
        window.location.href="../CTF/level2/level.html";
    }
    else{ 
      alert("Uncorrect")
    }
}