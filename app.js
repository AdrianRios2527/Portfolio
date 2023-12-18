document.addEventListener("scroll", function() {
    var elementosAnimados = document.querySelectorAll(".elemento-animado");

    elementosAnimados.forEach(function(elemento, index) {
      if (esElementoVisible(elemento)) {
        setTimeout(function() {
          elemento.classList.add("aparecer");
        }, index * 300); // Ajusta el valor del retraso (en milisegundos) según tus necesidades
      }
    });
  });

  function esElementoVisible(elemento) {
    var rect = elemento.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight - 100;
  }