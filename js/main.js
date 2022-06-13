
const num_card = document.querySelector("#num_card");
const name_card = document.querySelector("#name_card");
const expi_date= document.querySelector("#expi_date");
const contenu = document.querySelector("#contenu");
const form = document.querySelector("#form");

/* form.addEventListener("submit", function(event){
    event.preventDefault();
    const value = input.value;
    h1.textContent +=` ${value}`;
    console.log(event);
}) */

num_card.addEventListener('input', (e) => {
    
    const value = num_card.value;
    if (num_card.value.length === 0){
    contenu.innerHTML ='<p>&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;</p>';
    }
    if (num_card.value.length === 1 || num_card.value.length === 2 || num_card.value.length === 3 || num_card.value.length === 4 ||
        num_card.value.length === 5 || num_card.value.length === 6 || num_card.value.length === 7 || num_card.value.length === 8 ||
        num_card.value.length === 9 || num_card.value.length === 10 || num_card.value.length === 11 || num_card.value.length === 12 ||
        num_card.value.length === 13 || num_card.value.length === 14 || num_card.value.length === 15 || num_card.value.length === 16 ||
        num_card.value.length === 17 || num_card.value.length === 18 || num_card.value.length === 19 || num_card.value.length === 20 
        ){
        contenu.innerHTML =` ${value}`;
        }
});

name_card.addEventListener('input', (e) => {
    
    const value = name_card.value;
    contenu2.textContent =` ${value}`;
    
});

expi_date.addEventListener('input', (e) => {
    
    const value = expi_date.value;
    contenu3.textContent =` ${value}`;
    
});

/*name.addEventListener('input', (e) => {
    
    const value = name.value;
    contenu2.textContent =` ${value}`;
    
}); */

