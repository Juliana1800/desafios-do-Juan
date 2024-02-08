function Classificador(){
    let nomeHeroi = document.getElementById('nome').value;
    let XP = parseInt(document.getElementById('XP').value);

    let resultadoElement = document.getElementById('resultado');

    if (nomeHeroi === ''|| XP <= 0 ){
        alert("Preencher todos os campos corretamente para verificação");
        return;
    }
    if (XP >= 10001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é radiante`;
    }else  if (XP <= 10000 && XP >= 9001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é imortal`;
    }else if (XP <= 9000 && XP >= 8001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ascendente`;
    }else if (XP <= 8000 && XP >= 7001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Platina`;
    }else if (XP <= 7000 && XP >= 5001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ouro`;
    }else if (XP <= 5000 && XP >= 2001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Prata`;
    }else if (XP <= 2000 && XP >= 1001) {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Bronze`;
    }else {
        resultadoElement.textContent=`Nível do ${nomeHeroi} é Ferro`
    }

}

function limparResultado() {
    document.getElementById('nome').value = ''; // Limpa o valor do campo nome
    document.getElementById('XP').value = ''; // Limpa o valor do campo XP
    document.getElementById('resultado').innerHTML = ''; // Limpa o conteúdo dentro do elemento resultado
}

function calcular(){
    let=
        vitorias = document.getElementById("vitorias").value;
        derrotas = document.getElementById("derrotas").value;
        resultado= vitorias - derrotas;
        console.log(resultado);
        return;
    } 

    function resultado(){
        let saldoVitoria = resultado.innerHTML;
        if (saldoVitoria <= 10 ) {
            resultadoElement = 
        }
    }
