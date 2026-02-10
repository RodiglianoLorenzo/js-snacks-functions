/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

let letter_vocali = [];


// Dichiara la funzione qui.

function vocale(word) {

    let vocale = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < word.length; i++) {

        for (let y = 0; y < vocale.length; y++)

            if (word[i] === vocale[y]) {

                letter_vocali.push(vocale[y])
            }

    }

}
vocale(word)
console.log(letter_vocali);

// Invoca la funzione qui e stampa il risultato in console

const vocali = (word) => {
    let vocale = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < word.length; i++) {

        for (let y = 0; y < vocale.length; y++)

            if (word[i] === vocale[y]) {

                letter_vocali.push(vocale[y])
            }

    }

}
console.log(letter_vocali);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)