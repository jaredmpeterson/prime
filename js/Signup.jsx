const React = require('react')

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  handleSubmit (event) {
    alert('Welcome ' + this.state.value)
  }

  render () {
    return (
      <div className='prime-info'>
        <h2 className='title'>Register</h2>
        <label htmlFor='name'>Name </label>
        <input
          id='name'
          type='text'
          placeholder='John Smith'
          onChange={this.handleChange} /><br />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

module.exports = Signup
