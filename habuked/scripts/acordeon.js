var titulos = document.getElementsByClassName("acordeon-titulo");
var i;

for (i = 0; i < titulos.length; i++) {
    titulos[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var contenido = this.nextElementSibling;
        if (contenido.style.maxHeight) {
            contenido.style.maxHeight = null;
        } else {
            contenido.style.maxHeight = contenido.scrollHeight + "px";
        }
    });
}