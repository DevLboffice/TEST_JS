document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    if (window.confirm("Go back to main page ?")) {
      window.location.href = "index.html";
    }
  }
});


function makeSize(size) {
 return function () {
   var currsize = parseInt(window.getComputedStyle(document.documentElement).fontSize);
   console.log(currsize);
document.body.style.fontSize = `${size + currsize}px`;
 };  
}


const inc = makeSize(1);

const dec = makeSize(-1);

document.getElementById("plus").onclick = inc; 
document.getElementById("minus").onclick = dec;
