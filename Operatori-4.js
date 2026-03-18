let gatti = 53;
let fila = 7

let file = gatti / fila
let avanzo = gatti % fila
let gatti_mancanti_per_altra_fila = fila - gatti % fila

console.log(file);
console.log(avanzo);

console.log(gatti_mancanti_per_altra_fila);

console.log("Ci sono " + fila + " fila di gatti e ne mancano " + gatti_mancanti_per_altra_fila + " con un avanzo di " + avanzo);


