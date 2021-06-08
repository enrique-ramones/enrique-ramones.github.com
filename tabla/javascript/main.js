// DOM-
// querySelector / querySelectorAll-
/*
let links = document.querySelectorAll("a")

links.forEach(function(link){
  console.log(link);
});
*/
/*
let celdas = document.querySelectorAll("td");


celdas.forEach(function (td) {
  td.addEventListener('click',function() {
    console.log(this);

  })
});
*/
// Obtener los elementos de la clase .close

// Recorrerlos

// Agregar un evento click a cada uno de ellos
/*
let cerrar = document.querySelectorAll(".close");

cerrar.forEach(function (close) {
  close.addEventListener('click',function() {
    console.log("Click");

  })
});
*/
//Obtener los elemntos de la clase
let cerrar = document.querySelectorAll(".close");
//Agregar un evento click a cada uno de ellos
  cerrar.forEach(function (close) {
    close.addEventListener('click',function(ev) {
      ev.preventDefault();
      let content = document.querySelector('.content')
      //Quitarle las clases de animacion que ya tiene
      content.classList.remove("animate__fadeInDown")
      content.classList.remove("animate__animated")
      //Agregar clases para animar su salida
      content.classList.add("animate__fadeOutUp")
      content.classList.add("animate__animated")
      //Agregar regreso a pagina principal junto con un Timer para la animacion
      setTimeout(function functionName() {
          location.href = "/";
      },600);


      return false;

  });
});
