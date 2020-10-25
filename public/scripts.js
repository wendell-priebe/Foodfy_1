const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.fix');

// const recipes = require("./data.js");
// console.log(recipes)

for(let card of cards){
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")

        const img = card.querySelector('img').src
        const title = card.querySelector('h3').innerHTML
        const by = card.querySelector('q').innerHTML
        const rec = card.querySelector('p').innerHTML

        modalOverlay.querySelector("img").src = img      
        modalOverlay.querySelector("h3").textContent = title
        modalOverlay.querySelector('q').textContent = by
        modalOverlay.querySelector('p').innerHTML = rec

        // const recipeID = card.getAttribute("id")
        // for(recipe of recipes){
        //     if(recipe.id == recipeID){
        //         modalOverlay.querySelector("img").src=`${recipeID}`
        //         modalOverlay.querySelector("h3").innerHTML=`${recipeID.title}`      
        //     }
        // }
    })
}

document.querySelector("#clear").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src=""

})