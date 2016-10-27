const React = require('react')

const Layout = (props) => (
  <div className='prime-container'>
    {props.children}
  </div>
)

const { element } = React.PropTypes

Layout.propTypes = {
  children: element.isRequired
}

module.exports = Layout
