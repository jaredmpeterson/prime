const React = require('react')

const RecipeCard = props => (
  <div className='recipe-card'>
    <img src={`public/img/${props.picture}`} className='recipe-card__image' />
    <div className='recipe-card__text'>
      <h3 className='recipe-card__text--title'>{props.title}</h3>
      <h4 className='recipe-card__text--category'>{props.category}</h4>
      <p className='recipe-card__text--description'>{props.description}</p>
    </div>
  </div>
)

const { string, array } = React.PropTypes

RecipeCard.propTypes = {
  title: string.isRequired,
  category: string,
  description: string,
  picture: string,
  ingredients: array,
  instructions: string
}

module.exports = RecipeCard
