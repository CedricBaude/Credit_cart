
const num_cart = document.querySelector("#num_cart");
const name_cart = document.querySelector("#name_cart");
const expi_date= document.querySelector("#expi_date");
const contenu = document.querySelector("#contenu");
const form = document.querySelector("#form");

/* form.addEventListener("submit", function(event){
    event.preventDefault();
    const value = input.value;
    h1.textContent +=` ${value}`;
    console.log(event);
}) */

num_cart.addEventListener('input', (e) => {
    
    const value = num_cart.value;
    contenu.textContent =` ${value}`;
    
});

name_cart.addEventListener('input', (e) => {
    
    const value = name_cart.value;
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

