
const num_card = document.querySelector("#num_card");
const name_card = document.querySelector("#name_card");
const expi_date = document.querySelector("#expi_date");
const contenu = document.querySelector("#contenu");
const form = document.querySelector("#form");
const carte= document.querySelector("#carte");
const small_containt2 = document.querySelector("#small_containt2");
const crypto = document.querySelector("#crypto");


/* form.addEventListener("submit", function(event){
    event.preventDefault();
    const value = input.value;
    h1.textContent +=` ${value}`;
    console.log(event);
}) */
/*crypto.onfocus = function(){
    carte.style.transform = "rotateY(180deg)";
}

crypto.onblur = function(){
    carte.style.transform = "rotateY(0deg)"
}
cryptos.onfocus = function(){
    contenu4.style.transform = "rotateY(180deg)";
}*/
num_card.addEventListener('input', (e) => {
    
    const value = num_card.value;
    if (num_card.value.length === 0){
    contenu.innerHTML ='<p>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;</p>';
    }
    if (num_card.value.length === 1 || num_card.value.length === 2 || num_card.value.length === 3 || num_card.value.length === 4 ||
        num_card.value.length === 5 || num_card.value.length === 6 || num_card.value.length === 7 || num_card.value.length === 8 ||
        num_card.value.length === 9 || num_card.value.length === 10 || num_card.value.length === 11 || num_card.value.length === 12 ||
        num_card.value.length === 13 || num_card.value.length === 14 || num_card.value.length === 15 || num_card.value.length === 16 ||
        num_card.value.length === 17 || num_card.value.length === 18 || num_card.value.length === 19 || num_card.value.length === 20 
        ){
        contenu.innerHTML =`${value}`;
        }
});

name_card.addEventListener('input', (e) => {
    
    const value = name_card.value;
    if (name_card.value.length === 0){
    contenu2.innerHTML ='<p>FULL NAME</p>';
    }
    if (name_card.value.length === 1 || name_card.value.length === 2 || name_card.value.length === 3 || name_card.value.length === 4 ||
        name_card.value.length === 5 || name_card.value.length === 6 || name_card.value.length === 7 || name_card.value.length === 8 ||
        name_card.value.length === 9 || name_card.value.length === 10 || name_card.value.length === 11 || name_card.value.length === 12 ||
        name_card.value.length === 13 || name_card.value.length === 14 || name_card.value.length === 15 || name_card.value.length === 16 ||
        name_card.value.length === 17 || name_card.value.length === 18 || name_card.value.length === 19 || name_card.value.length === 20 
        ){
        contenu2.innerHTML =`${value}`;
        }
});


expi_date.addEventListener('input', (e) => {
    
    const value = expi_date.value;
    contenu3.textContent =` ${value}`;
    
});

crypto.addEventListener('input', (e) => {
    
    const value = crypto.value;
    contenu4.textContent =` ${value}`;
    
});
/*name.addEventListener('input', (e) => {
    
    const value = name.value;
    contenu2.textContent =` ${value}`;
    
}); */

