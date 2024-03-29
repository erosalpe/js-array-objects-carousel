const nextPhoto = document.getElementById("btnR");
const prevPhoto = document.getElementById("btnL");
const stopAutoRunHtml = document.getElementById("stopAutoRun");
let contatoreCarosello = 0;
const arrayImmagini = [
    {
        immagine: "iceland-photo-tours10.jpg",
        titolo: "Islanda",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        immagine: "fence-wall-in-scotland.jpg",
        titolo: "Scozia",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        immagine: "great-landscape-hd-wallpaper-preview.jpg",
        titolo: "Paesaggio Ai N.1",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        immagine: "landscape-view-green.jpg",
        titolo: "Paesaggio Ai N.2",
        descrizione: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const caroselloHtml = document.getElementById("carosello");
const suggestedHtml = document.getElementById("suggested");
const autoRunHtml = document.getElementById("autoRun");

for(let i = 0; i < arrayImmagini.length; i++){
    let percorsoImmagine = arrayImmagini[i].immagine;
    console.log(percorsoImmagine);

    if (i === 0){
        caroselloHtml.innerHTML += `
            <div class="scheda active">
                <span class="titolo">${arrayImmagini[i].titolo}</span>
                <span class="descrizione">${arrayImmagini[i].descrizione}</span>
                <figure>
                    <img src='./assets/img/${arrayImmagini[i].immagine}'>
                </figure>
            </div>
            `
        ;
    } else{
        caroselloHtml.innerHTML += `
            <div class="scheda none">
                <span class="titolo">${arrayImmagini[i].titolo}</span>
                <span class="descrizione">${arrayImmagini[i].descrizione}</span>
                <figure>
                    <img src='./assets/img/${arrayImmagini[i].immagine}'>
                </figure>
            </div>
            `
        ;
    }

    if (i === 0){
        suggestedHtml.innerHTML += `
            <figure id="sidePic" class="activeSide">
                <img src='./assets/img/${arrayImmagini[i].immagine}'>
            </figure>
            `
        ;
    } else {
        suggestedHtml.innerHTML += `
        <figure id="sidePic" class="noneSide">
            <img src='./assets/img/${arrayImmagini[i].immagine}'>
        </figure>
        `
    ;
    }
    

};



function slideshow(){
    const arrayImmaginiPagina = document.querySelectorAll("div.scheda");
    const arrayImmaginiSide = document.querySelectorAll("#sidePic");
    console.log(arrayImmaginiSide);
    if(contatoreCarosello < arrayImmagini.length - 1){
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );

        contatoreCarosello++;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );

        console.log(contatoreCarosello);
    } else {
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );

        contatoreCarosello = 0;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );
    }
}

let a

autoRunHtml.addEventListener("click", function(){
    a = setInterval(slideshow, 3000);
})

stopAutoRunHtml.addEventListener("click", function(){
    clearInterval(a);
})




nextPhoto.addEventListener("click", function(){
    const arrayImmaginiPagina = document.querySelectorAll("div.scheda");
    const arrayImmaginiSide = document.querySelectorAll("#sidePic");
    if(contatoreCarosello < arrayImmagini.length - 1){
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );

        contatoreCarosello++;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );
        console.log(contatoreCarosello);

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );

    } else {
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );

        contatoreCarosello = 0;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );
    }
    
})

prevPhoto.addEventListener("click", function(){
    const arrayImmaginiPagina = document.querySelectorAll("div.scheda");
    const arrayImmaginiSide = document.querySelectorAll("#sidePic");
    if(contatoreCarosello === 0){
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );
        contatoreCarosello = arrayImmagini.length - 1;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );
        console.log(contatoreCarosello);
    } else {
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.add( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.remove( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.add( "noneSide" );
        contatoreCarosello--;
        arrayImmaginiPagina[contatoreCarosello].classList.add( "active" );
        arrayImmaginiPagina[contatoreCarosello].classList.remove( "none" );

        arrayImmaginiSide[contatoreCarosello].classList.add( "activeSide" );
        arrayImmaginiSide[contatoreCarosello].classList.remove( "noneSide" );
    }
})