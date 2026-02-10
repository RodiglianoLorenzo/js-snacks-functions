/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const nome = 'Mario';

let data = new Date().getHours();
data = 21
// Dichiara la funzione qui.
function saluta(){
    if(data <= 13){
        console.log("Buongiorno " , nome)
    }
    else if(data > 13 && data <= 17){
        console.log("Buon pomeriggio " , nome)
    }
    else if(data > 17){
        console.log("Buona sera ", nome);
    }

}

saluta()
// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.