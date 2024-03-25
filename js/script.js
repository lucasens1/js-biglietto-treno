const costoKm = 0.21;
let costoTot = 0; 
const scontoMin = 0.20;
const scontoAnz = 0.40;

const userKm = prompt ("Dimmi quanti Km devi fare col tuo biglietto :"); //string
const userAge = prompt("Dimmi quanti anni hai : "); //string

if(userAge < 18 ){
    costoTot = userKm * costoKm; //number, in quanto la moltiplicazione mi converte in automatica la stringa
    console.log(costoTot, typeof costoTot);
    let scontoTot = (costoTot) * scontoMin;
    console.log(scontoTot);
    costoTot = costoTot - scontoTot;
    console.log(costoTot);
    document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Minorenne`;
} else if(userAge > 65 ){
    costoTot = userKm * costoKm; //number
    console.log(costoTot, typeof costoTot);
    let scontoTot = (costoTot) * scontoAnz;
    console.log(scontoTot);
    costoTot = costoTot - scontoTot;
    console.log(costoTot);
    document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Over 65`;
} else{
    costoTot = userKm * costoKm;
    console.log(costoTot);
    document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}, purtroppo non hai accesso a sconti in quanto non sei né Minorenne né Over 65`;
}

//document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}`; Se voglio stampare solo OUTPUT ALLA FINE E NON PER CONDIZIONE SINGOLA