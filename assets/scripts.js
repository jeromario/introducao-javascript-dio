var count = 0

var CURRENT_NUMBER = document.getElementById("currentNumber");
var TEXTO = document.getElementById('text');
var FUNCAO = document.getElementById('funcao');


function increment() {
    if(count  < 10){	
        count++;
        CURRENT_NUMBER.innerHTML = count;
        CURRENT_NUMBER.style.color = 'black'
        if (count > 0 ){
            CURRENT_NUMBER.style.color = "blue";
        }
        
        CURRENT_NUMBER.addEventListener("increment", desabilitar());
        
    }
    FUNCAO.innerHTML = "INCREMENTANDO";
    
}

    function decrement() {
        if(count <= 10 && count > -10){	
            count--;
            CURRENT_NUMBER.innerHTML = count;
            CURRENT_NUMBER.style.color = 'black'
            if (count < 0) {
                CURRENT_NUMBER.style.color = "red";
            }
            CURRENT_NUMBER.addEventListener("decrement", desabilitar());
        }
        FUNCAO.innerHTML = "DECREMENTANDO";
        
    }


function desabilitar(){
    if(count == 10 || count == -10){
        TEXTO.innerHTML = "Valor Limite !";
    }
    
    else
    TEXTO.innerHTML = "";
}
