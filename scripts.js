// JavaScript for TP5


window.onload = function() {
  
  document.querySelector("#titleBanner h1").classList.add("tp");
  
  document.querySelector("#titleBanner h1").onclick = function() {  
    
    this.classList.toggle("black");
  }
  
  document.querySelector("#rowsRecipe #ingredients").onclick = function() {
    
    this.classList.toggle("show");
  }
  
  document.querySelector("#rowsRecipe #equipment").onclick = function() {
    this.classList.toggle("show");
  }
  
  document.querySelector("#rowsRecipe #directions").onclick = function() {
    this.classList.toggle("show");
  }
  
  document.querySelector("#rowsRecipe #ingredients").innerHTML += "<li>People to share with</li>";
  
  
} //end window.onload