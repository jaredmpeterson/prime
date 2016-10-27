const React = require('react')
const Header = require('./Header')

const Layout = (props) => (
  <div className='prime-container'>
    <Header />
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
