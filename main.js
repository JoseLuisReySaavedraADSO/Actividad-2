addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let llaves = 11500 * 5
    let bomba=1168000
    let pernos=87000*3
    let vueltos=91000
    total=llaves+bomba+pernos+vueltos
    total1=llaves+bomba+pernos
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El total que pago por los productos:<b> ${total1}$</b><br>Entonces sabemos que traia: <b>${total}$</b></div> `);
})