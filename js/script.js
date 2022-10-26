/* 
  **Consegna:**
Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine.
**Bonus 1:**
Sperimentiamo attraverso l’uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:al click di un bottone o già dall’inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
****
**Bonus 2:**
E se volessi un bottone per invertire la “direzione” del carosello?
****
*/ 
const postiDaVisitare = [
  {
    nome: "Italia",
    descrizione: "L’Italia è l’unico Paese al mondo dove è nata prima la cultura e poi la nazione, non esiste nessun altro luogo al mondo.",
    urlImg: 'amalfi.jpg'
  },
  {
    nome: "Olanda",
    descrizione: "I fiori più belli sbocciano sul bordo degli abissi.",
    urlImg: 'amsterdam.webp'
  },
  {
    nome: "Brasile",
    descrizione: "Molti luoghi sanno raccontare con le immagini. <br> Pochi sanno farlo anche con il ritmo e la musica.",
    urlImg: 'brasile.jpg'
  },
  {
    nome: "Inghilterra",
    descrizione: "Le nove parole più terrificanti nella linguainglese sono: Io sono del governo e sono qui per aiutarla.",
    urlImg: 'london.jpg'
  },
  {
    nome: "Spagna",
    descrizione: "Francisco Franco ha lasciato in eredità l'ordine. In Spagna funziona tutto e funziona bene, ci sono educazione, pulizia, rispetto e poca burocrazia.",
    urlImg: 'spagna.jpg'
  }
];

// 1 richiamare tutti i tag che mi servono
const containerImgLg = document.querySelector('.container-slider-top');
const containerImgXs = document.querySelector('.container-slider-bottom');
// 2 create tutti gli elementi html che mi servono e comporre esso dinamicamente

// 3 usare i bottini right e left per andare avanti e dietro con le immagini usando lo spostamento delle classi
// 4 creare il loop per far si che torni indietro nello scorrimento

