document.getElementById("load-more").addEventListener("click", function () {
  const hiddenDestinations = document.querySelector(".hidden-destinations");
  hiddenDestinations.style.display = "flex"; // Muestra los destinos ocultos
  hiddenDestinations.style.flexWrap = "wrap"; // Asegura que se comporten igual que los otros
  hiddenDestinations.style.justifyContent = "space-between"; // Alineación uniforme
  this.style.display = "none"; // Oculta el botón
});

document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos el elemento de la navbar
  const navbar = document.querySelector(".menu");

  // Obtenemos la altura de la navbar
  const navbarHeight = navbar.offsetHeight;

  // Seleccionamos el contenedor de los destinos
  const destino = document.querySelector("#d");

  // Establecemos la propiedad scroll-margin-top dinámicamente
  destino.style.scrollMarginTop = `${navbarHeight}px`;
});