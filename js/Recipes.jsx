const React = require('react')
const RecipeCard = require('./RecipeCard')
const data = require('../public/data')

const Recipes = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <div className='recipes__search'>
          <h2>Recipies</h2>
          <input value={this.state.searchTerm} className='search__input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </div>
        <div className='recipes'>
          {data.recipes
            .filter((recipe) => `${recipe.title} ${recipe.category} ${recipe.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((recipe) => (
              <RecipeCard {...recipe} key={recipe.argID} />
            ))}
        </div>
      </div>
    )
  }
})

module.exports = Recipes
