const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// open modal
openBtn.onclick = function(){
  modal.style.display = "block";
}

// close modal
closeBtn.onclick = function(){
  modal.style.display = "none";
}

// close when clicking outside
window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}

// close with ESC key
document.addEventListener("keydown", function(event){
  if(event.key === "Escape"){
    modal.style.display = "none";
  }
});