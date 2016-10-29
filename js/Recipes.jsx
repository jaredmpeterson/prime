const React = require('react')
const RecipeCard = require('./RecipeCard')
const data = require('../public/data')

const Recipes = () => (
  <div className='container'>
    <h1>Recipies</h1>
    <div className='recipes'>
      {data.recipes.map((recipe) => (
        <RecipeCard {...recipe} key={recipe.argID}/>
      ))}
    </div>
  </div>
)

module.exports = Recipes
