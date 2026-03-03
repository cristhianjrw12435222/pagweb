const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){

    let respuestasCorrectas = 0;

    if(document.querySelector('input[name="q1"]:checked')?.value === "b") respuestasCorrectas++;
    if(document.querySelector('input[name="q2"]:checked')?.value === "b") respuestasCorrectas++;
    if(document.querySelector('input[name="q3"]:checked')?.value === "c") respuestasCorrectas++;
    if(document.querySelector('input[name="q4"]:checked')?.value === "b") respuestasCorrectas++;

    const resultado = document.getElementById("resultado");
    const imagen = document.getElementById("imagenfinal");

    resultado.innerHTML = `Obtuviste ${respuestasCorrectas} de 4 respuestas correctas 🖤`;
    imagen.style.display="block"

});

