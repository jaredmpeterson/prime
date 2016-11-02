const React = require('React')

class Details extends React.Component {

  render () {
    const params = this.props.params || {}
    const { title, category, description, picture, ingredients, instructions } = params

    return (
      <div className='container'>
        <div className='recipe__container'>
          <h2>{title}</h2>
          <h3>{category}</h3>
          <img src={`public/img/${picture}`} />
          <p>{description}</p>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient}</li>
            ))}
          </ul>
          <p>{instructions}</p>
        </div>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details
