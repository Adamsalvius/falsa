const ingredients = [
  "Banana",
  "Mango",
  "Yogurt",
  "Sorbet",
  "Silken tofu",
  "Nut butters",
  "Avocado",
  "Bananas",
  "Pineapple",
  "Strawberries",
  "Blueberries",
  "Raspberries",
  "Blackberries",
  "Cherries",
  "Peaches",
  "Cantaloupe",
  "Watermelon",
  "Pomegranate seeds",
  "Kiwi",
  "Acai berries",
];
const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffle(){
    for (let i = 0; i < 5; i++) {
        /* ul.textContent=null; */
        const ingredient = ingredients[i];
        
        const li = document.createElement("li");
        
        li.textContent=ingredient;
        ul.append(li)
    }
}

button.addEventListener("click",() => {
    
    ul.textContent=null;
    shuffle();
    
    });


