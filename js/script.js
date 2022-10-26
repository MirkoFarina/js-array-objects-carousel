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

const containerImgLg = document.querySelector('.container-slider-top');
const containerImgXs = document.querySelector('.container-slider-bottom');
const buttonRight = document.querySelector('.btn.right');
const buttonLeft = document.querySelector('.btn.left');

// creo l'html dinamicamente
postiDaVisitare.forEach(luogo => {
  createContentTop(luogo);
  createContentBottom(luogo);
});

// creo la situazione di default

document.querySelector('.img-slider-top').classList.remove('d-none');
document.querySelector('.img-slider-bottom img').classList.add('active');
let counter = 0;




// creo i due arrey contenenti la mia collezione di immagini
const arrayImgTop = document.getElementsByClassName('img-slider-top');
const arrayImgBottom = document.getElementsByClassName('img-slider-bottom');
let isLeft;


buttonLeft.addEventListener('click', function(){
  isLeft = true;
  sliderNextPrev(isLeft,arrayImgTop,arrayImgBottom );
})
buttonRight.addEventListener('click', function(){
  isLeft = false;
  sliderNextPrev(isLeft,arrayImgTop,arrayImgBottom );
})












//FUNZIONI
function createContentTop(oggetto){
 let contentTop = '';
 
  contentTop = `
  <div class="img-slider-top d-none">
    <img src="img/${oggetto.urlImg}" alt="${oggetto.nome}"> 
  
    <div class="description">
      <h2> ${oggetto.nome}  </h2>
      <p>  ${oggetto.descrizione} </p>
    </div>
  </div>  
`;

containerImgLg.innerHTML += contentTop;
};

function createContentBottom(oggetto){
let contentBottom = '';


contentBottom = `
  <div class="img-slider-bottom">
    <img class="" src="img/${oggetto.urlImg}" alt="${oggetto.nome}">
  </div>
`;

containerImgXs.innerHTML += contentBottom;
};

function sliderNextPrev(flag,array1, array2){
  array1[counter].classList.add('d-none');
  array2[counter].classList.remove('active');

  if(!(flag)) {
    ++counter
    if(counter == postiDaVisitare.length) counter = 0;
  } else {
    if(counter == 0) counter = postiDaVisitare.length;
    --counter
  }
  
  array1[counter].classList.remove('d-none');
  array2[counter].classList.add('active')
}
