addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion
    let q = Number(prompt("Cual es el caudal aproximado en (litros/segundo)? ", 210))
    let h = Number(prompt("Cual es la altura del deposito? ", 100))
    let r = Number(prompt("Cual es el radio del deposito? ", 200))
    v = (Math.PI) * Math.pow(r, 2) * h
    t = v / q
    m = t / 60
    document.body.insertAdjacentHTML("beforeend", `<div class="estilo">El tiempo en llenar su deposito es ${t} <br> El tiempo que demoraria en llecarse es ${m} </div> `);
})