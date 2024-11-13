const posicio = (frase, paraula) => frase.length - frase.indexOf(paraula);

const dividir = (frase, paraula) => frase.slice(frase.indexOf(paraula) + paraula.length).trim();

let frase = "Hola com estàs";
let paraula = "com";

if (frase.indexOf(paraula) === -1) {
    console.log("La paraula no es a la frase");

} else {
    console.log(posicio(frase, paraula));
    console.log(dividir(frase, paraula));
}





