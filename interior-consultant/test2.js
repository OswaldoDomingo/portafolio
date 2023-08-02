document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".hamburgesa").addEventListener("click", function () {
        let menu = document.querySelector(".cabecera-navegador-lista");
        let cabeceraNavegador = document.querySelector(".cabecera-navegador");
        let boton = document.querySelector(".cabecera-boton");
        let logoHamburgesa = document.querySelector(".hamburgesa");
        let logoCruz = document.querySelector(".cruz");
        let cuerpoStyle = document.querySelector(".cuerpo");

        let computedStyle = window.getComputedStyle(menu);
        if (computedStyle.display === "none") {
            menu.style.display = "flex";
            boton.style.display = "none";
            logoCruz.style.display="none";
            logoHamburgesa.innerHTML="&#10007";
            cuerpoStyle.style.display="none";
            cabeceraNavegador.style.height="100vh";
        } else {
            menu.style.display = "none";
            boton.style.display = "flex";
            logoHamburgesa.innerHTML="&#9776";
            cuerpoStyle.style.display="flex";
            cabeceraNavegador.style.height="auto";
        }
    });
});
// La idea es que cuando se hace click al icono de === 
// todo se pase a display none excepto la clase cabecera-navegador
// cabecera-navegador se pone el icono X  que se pone en la parte de arriba a la derecha
// y el listado pasa a ser vertical ocupando el centro 
// 