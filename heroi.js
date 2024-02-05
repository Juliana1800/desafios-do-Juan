function Classificador(){
    let nomeHeroi = document.getElementById('nome').value;
    let XP = parseInt(document.getElementById('XP').value);

    let resultadoElement = document.getElementById('resultado');
    
    if (XP >= 1001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é radiante`;
    }else  if (XP <= 10000 && XP >= 9001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é imortal`;
    }else if (XP <= 9000 && XP >= 8001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ascendete`;
    }else if (XP <= 8000 && XP >= 7001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Platina`;
    }else if (XP <= 7000 && XP >= 5001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ouro`;
    }else if (XP <= 5000 && XP >= 2001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Prata`;
    } else if (XP <= 2000 || XP >= 1001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Bronze`;
    }else {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ferro`
    }

}
function limparResultado() {
    document.getElementById('nome').value;
    document.getElementById('XP').value;
    document.getElementById('resultado').textContent='';
}

