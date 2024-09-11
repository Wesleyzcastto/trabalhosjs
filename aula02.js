const teclado = require('prompt-sync')({sigint:true});


let controle = parseFloat(teclado("digite a opção: "));

switch(controle){
    case 1 :
     console.log("voce digitou 1");
     break; 

    case 2:
        console.log("voce digitou 2");
        break; 

    case 3:
        console.log("voce digitou 3");
        break; 
    
    case 4:
        console.log("voce digitou 4");
        break; 

    case 5:
        console.log("voce digitou 5");
        break; 

     default: 
     console.log ("default")
}