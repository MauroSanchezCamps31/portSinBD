document.querySelector(".sig").addEventListener("click", function() {
    var divs = document.querySelectorAll(".contenedor-proy:not(:hidden)");
    var index = divs.indexOf(document.querySelector(".contenedor-proy2"));
  
    if (index === divs.length - 1) {
      index = 0;
    } else {
      index++;
    }
  
    divs[index].style.display = "block";
    divs[index - 1].style.display = "none";
  });
  