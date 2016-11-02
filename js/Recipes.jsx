const React = require('react')
const RecipeCard = require('./RecipeCard')
const { arrayOf, object } = React.PropTypes

const Recipes = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    recipes: arrayOf(object)
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
          {this.props.route.recipes
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
