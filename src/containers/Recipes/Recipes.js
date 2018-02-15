import React, { Component } from "react";
import RecipeCard from "../../components/Recipe/RecipeCard/RecipeCard";
import classes from "./Recipes.css";
import axios from "../../axios-recipes";

class Recipes extends Component {
  state = {
    recipes: null,
    searchTerm: "",
    error: false
  };
  componentDidMount() {
    axios
      .get("recipes.json")
      .then(response => {
        console.log(response.data);
        this.setState({ recipes: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
  handleSearchTermEvent = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    let recipeCards = this.state.error ? (
      <p>Recipes cannot be loaded.</p>
    ) : null;

    if (this.state.recipes) {
      recipeCards = Object.keys(this.state.recipes)
        .filter(
          recipe =>
            `${recipe.title} ${recipe.category} ${recipe.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0
        )
        .map(recipe => <RecipeCard {...recipe} key={recipe.argID} />);
    }

    return (
      <div className={classes.Recipes}>
        <div className={classes.Search}>
          <h2>Recipies</h2>
          <input
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
            onChange={this.handleSearchTermEvent}
          />
        </div>
        <div className={classes.Recipe}>{recipeCards}</div>
      </div>
    );
  }
}

export default Recipes;
