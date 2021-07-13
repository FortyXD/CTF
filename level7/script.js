document.getElementById("cluc").onclick = function() {myFunction()};

function myFunction() {
    let a= document.getElementById("text").value

  window.location.href="../index.html";
    if (a==="text"){
        alert("Correct")
        window.location.replace('../level2/level.html');
    }
    else{
      alert("Uncorrect")
    }
}