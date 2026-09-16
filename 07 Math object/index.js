document.getElementById("p1").textContent = `Math.PI = ${Math.PI}`;
document.getElementById("p2").textContent = `Math.E = ${Math.E}`;

let v = 3.2;
let w = 3.5;
let x = 3.7;
let y = 2;
let z;


z = Math.round(w);
document.getElementById("p3").textContent = `Math.round(${w}) = ${z}`;

z = Math.floor(x);
document.getElementById("p4").textContent = `Math.floor(${x}) = ${z}`;

z = Math.ceil(v);
document.getElementById("p5").textContent = `Math.ceil(${v}) = ${z}`;

z = Math.trunc(w); // short for truncate (eliminates any decimal portion)
document.getElementById("p6").textContent = `Math.trunc(${w}) = ${z}`;

z = Math.pow(2, 3);
document.getElementById("p7").textContent = `Math.pow(2, 3) = ${z}`;

z = Math.sqrt(16);
document.getElementById("p8").textContent = `Math.sqrt(16) = ${z}`;

z = Math.log(10);
document.getElementById("p9").textContent = `Math.log(10) = ${z}`;

z = Math.sin(45);
document.getElementById("p10").textContent = `Math.sin(45) = ${z}`;

z = Math.cos(60);
document.getElementById("p11").textContent = `Math.cos(60) = ${z}`;

z = Math.tan(30);
document.getElementById("p12").textContent = `Math.tan(30) = ${z}`;

z = Math.abs(-3);
document.getElementById("p13").textContent = `Math.abs(-3) = ${z}`;

z = Math.sign(-59);
document.getElementById("p14").textContent = `Math.sign(-59) = ${z}`;

let max = Math.max(v, w, x, y, z);
document.getElementById("p15").textContent = `Math.max(${v}, ${w}, ${x}, ${y}, ${z}) = ${max}`;

let min = Math.min(v, w, x, y, z);
document.getElementById("p16").textContent = `Math.min(${v}, ${w}, ${x}, ${y}, ${z}) = ${min}`;