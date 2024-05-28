let entradas = document.querySelectorAll("input")
let boton = document.querySelector(".boton")

boton.addEventListener("click", ()=>{
    entradas.forEach(elemento => {
        if (elemento.value == "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes rellenar todos los campos",
                footer: '<a href="#">Tutorial aca</a>'
              });
        }
    });
})
