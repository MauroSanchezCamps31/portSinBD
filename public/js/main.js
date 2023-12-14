function abrirContenedor(elemento) {
    elemento.style.visibility = "visible";
  }
  
  const boton = document.querySelector(".titulo-proyectos");
  boton.addEventListener("click", abrirContenedor);