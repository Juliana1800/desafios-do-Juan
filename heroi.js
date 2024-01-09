function Classificador(){

    let nomeHeroi ="",
        XP = "";
    
    if (XP >= 1.001) {
    
        console.log ("Radiante")
    
    }else  if (XP <= 10.000 && XP === 9.001) {
    
        console.log ("Imortal")
    
    }else if (XP <= 9.000 && XP === 8.001) {
        
        console.log ("Ascendete")
    
    }else if (XP <= 8.000 && XP === 7.001) {
    
        console.log ("Platina")
    
    }else if (XP <= 7.000 && XP === 5.001) {
    
            console.log ("Ouro") 
    
    }else if (XP <= 5.000 && XP === 2.001) {
    
        consolo.log ("Prata")
    
    } else if (XP <= 2.000 || XP === 1.001) {
    
        console.log ("Bronze")
    
    }else {
    
        console.log ("Ferro")
    }

}

