const React = require('React')

class Details extends React.Component {

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <p>hi</p>
        </header>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object.isRequired
}

module.exports = Details
