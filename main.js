addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let m2 = Number(prompt("Cantidad de m²"))
    let valor = Number(prompt("Precio del m²?"))
    total = m2 * valor
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El valor de su pintura es ${total}$</div> `);
})