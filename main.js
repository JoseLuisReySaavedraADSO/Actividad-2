addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let nombre = prompt("Ingrese el nombre del personal: ")
    let apellido = prompt("Ingrese apellido del personal")
    let año = Number(prompt("Ingrese el año de nacimiento: "))
    edad = 2022 - año
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">Nombre: ${nombre} ${apellido} <br> Edad: ${edad} </div> `);
})