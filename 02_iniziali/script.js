/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/* function first_letter_of_names (names) {
    const letter_name = []
    for(let i = 0; i < names.length; i++){
        //const char = names[i] 
        let element = names[i]
        letter_name.push(element.charAt(0))
        console.log("letter is:", letter_name[i]);
        
    }

}
first_letter_of_names(names)
     */
        


// Invoca la funzione qui e stampa il risultato in console

const first_letter_of_names = names => {
    const letter_name = []
    for(let i = 0; i < names.length; i++){
        //const char = names[i] 
        let element = names[i]
        letter_name.push(element.charAt(0))
        console.log("letter is:", letter_name[i]);
        
    }

}
first_letter_of_names(names)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]