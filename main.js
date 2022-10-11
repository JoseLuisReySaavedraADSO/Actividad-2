addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let total = 0
    let desc = 0
    for (let step = 0; step < 3; step++){
        let p1 = Number(prompt("Cual fue el costo del producto? ", 2300))
        c1 = p1-(p1*5/100)
        i1 = p1-c1
        total = c1 + total
        desc = i1 + desc
    }
    for (let step = 0; step < 2; step++){
        let p1 = Number(prompt("Cual fue el costo del producto? ", 2300))
        c1 = p1-(p1*2/100)
        i1 = p1-c1
        total = c1 + total
        desc = i1 + desc
    }
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">el costo de sus productos con el descuento es ${total}$, su descuento fue de ${desc}$</div> `);
})