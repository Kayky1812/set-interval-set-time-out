// set interval serve para chamar uma função com um intervalo de tempo que eu definir
// set time out serve para parar a executao apos o tempo que eu determinar
function mostraHora(){
    let data = new Date();
    let options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return data.toLocaleDateString ('pt-BR',options);
}

function mostraIntervalHour(){
    console.log(mostraHora());
}

const timer = setInterval(mostraIntervalHour,1000);

setTimeout(() => {
    clearInterval(timer);
}, 5000);
