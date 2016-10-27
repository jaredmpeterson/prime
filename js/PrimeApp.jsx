const React = require('react')
const ReactDOM = require('react-dom')
const Diet = require('./Diet')
const Landing = require('./Landing')
const Layout = require('./Layout')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Prime = React.createClass({
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/diet' component={Diet} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Prime />, document.getElementById('prime'))
