// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// genera 5 numeri casuali da 1 a 100



const container = document.querySelector('.container');
const numeri = generaRandom();

container.append(numeri);




function generaRandom(){
    const arrayNumber = [];
    while(arrayNumber.length < 5){
        const number = Math.round(Math.random()*99) + 1;
        console.log(number);
        if(!arrayNumber.includes(number)){
            arrayNumber.push(number);
        }
    }
    return arrayNumber;
}


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// setTimeout(funzione da attivare dopo 30 sec,30000){

// }