addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let cajas = Number(prompt("Cuantas cajas de repuestos transporta? "))
    total = cajas * 748
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El peso que transporta es de ${total} kg</div> `);
})