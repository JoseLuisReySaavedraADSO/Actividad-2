addEventListener("DOMContentLoaded", ()=>{
    // Calcular una distancia
    let x1 = Number(prompt("ingrese la abcsisa 1: ", 3));
    let x2 = Number(prompt("ingrese la ordenada 1: ", 4));
    let y1 = Number(prompt("ingrese la abcsisa 2: ", 3));
    let y2 = Number(prompt("ingrese la ordenada 2: ", 4));
    x  = Math.pow(x2-x1, 2)
    y  = Math.pow(y2-y1, 2)
    d  = Math.sqrt(x+y)
    let res = (d<0)
            ? "¡¡LA SOLUCION ES INDEFINIDA!!"
            : `La distancia es ${d}`;

        document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El valor de la distancia es ${d}</div> `);
})