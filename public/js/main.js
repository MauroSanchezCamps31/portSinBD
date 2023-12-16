const section = document.querySelector(".imgsproy");
const boton = document.querySelector(".bot");


boton.addEventListener("click", function() {
  section.style.display = (section.style.display === "none") ? "block" : "none";
});
