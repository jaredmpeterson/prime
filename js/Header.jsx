const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render() {
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand--link'>
            PRIME Diet
          </Link>
        </h1>
        <nav className='nav'>
          <h2 className='nav__item'>
            <Link to='/diet' className='nav__item--link'>
              Diet
            </Link>
          </h2>
          <h2 className='nav__item'>
            <Link to='/signup' className='nav__item--link'>
              Register
            </Link>
          </h2>
        </nav>
      </header>
    )
  }
})

module.exports = Header
