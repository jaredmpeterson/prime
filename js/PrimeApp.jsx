const React = require('react')
const ReactDOM = require('react-dom')
const Signup = require('./Signup')
const Details = require('./Details')
const Diet = require('./Diet')
const Info = require('./Info')
const Landing = require('./Landing')
const Layout = require('./Layout')
const Recipes = require('./Recipes')
const { recipes } = require('../public/data')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Prime = React.createClass({
  assignRecipe (nextState, replace) {
    const recipeArray = recipes.filter((recipe) => recipe.argID === nextState.params.id)

    if (recipeArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, recipeArray[0])
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/recipes' component={Recipes} recipes={recipes} />
          <Route path='/recipes/:id' component={Details} onEnter={this.assignRecipe} />
          <Route path='/diet' component={Diet} />
          <Route path='/info' component={Info} />
          <Route path='/signup' component={Signup} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Prime />, document.getElementById('prime'))
