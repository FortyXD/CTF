document.getElementById("cluc").onclick = function() {myFunction()};

function myFunction() {
    let a= document.getElementById("text").value

  window.location.href="../index.html";
    if (a==="text"){
        alert("Correct")
    }
}