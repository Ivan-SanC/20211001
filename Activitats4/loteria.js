
const combinacion = new Set();

for (i=1;i<=50;i++) {
    document.write(`<h3>Combinación ${i}:</h3>`)

    do {
        combinacion.add(parseInt(Math.random()*49) + 1);
    } while (combinacion.size<6);

    document.write(`<p>`)
    for(numero of combinacion) {
        document.write (`${numero} ` );
    }
    document.write(`<\p>`);

    
    combinacion.clear();
}