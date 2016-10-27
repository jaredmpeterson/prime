const React = require('react')
const { Link } = require('react-router')

const Header = React.createClass({
  render () {
    return (
      <header className='header'>
        <h1 className='prime'>
          <Link to='/' className='brand-link'>
            PRIME Diet
          </Link>
        </h1>
        <h2 className='header-info'>
          <Link to='/info'>
            Info
          </Link>
        </h2>
      </header>
    )
  }
})

module.exports = Header
