const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')

const Prime = React.createClass({
  render () {
    return (
      <div className='prime-container'>
        <h1>Prime Diet</h1>
      </div>
    )
  }
})

ReactDOM.render(<Prime />, document.getElementById('prime'))
