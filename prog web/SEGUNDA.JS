const formulario = document.getElementById("rockForm");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert("✅ Todo guardado correctamente 🖤");
    formulario.reset(); 

});