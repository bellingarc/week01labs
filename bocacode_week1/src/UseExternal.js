let coffees = require('./coffees.json')
/*
{
      "title": "Black",
      "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
      "ingredients": [
        "Coffee"
      ],
      "id": 1
    }
    */
  coffees.forEach(recipe => {
      if (recipe.ingredients.includes('Milk') ||
       (recipe.ingredients.includes('Steamed Milk')) ||
       (recipe.ingredients.includes('Foam')) ||
       (recipe.ingredients.includes('1oz Steamed Milk')))
       console.log(recipe.id, recipe.title)
  })