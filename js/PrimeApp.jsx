const React = require('react')
const ReactDOM = require('react-dom')
const Signup = require('./Signup')
const Diet = require('./Diet')
const Info = require('./Info')
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
          <Route path='/info' component={Info} />
          <Route path='/signup' component={Signup} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<Prime />, document.getElementById('prime'))
