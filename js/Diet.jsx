const React = require('react')
const data = require('../public/calories')

const Diet = React.createClass({
  getInitialState () {
    return {
      weight: 195,
      bodyfat: 15,
      leanBodyMass: null,
      fatMass: null,
      calories: null
    }
  },
  handleWeightChange (event) {
    this.setState({ weight: event.target.value })
  },
  handleBodyFatChange (event) {
    this.setState({ bodyfat: event.target.value })
  },
  handleSubmit (event) {
    var weight = this.state.weight
    var bfp = this.state.bodyfat
    var mci = data.calories[bfp]
    var lbm = function (weight, bfp) {
      return Math.round(((100 - bfp) / 100) * weight)
    }
    var fm = function (weight, bfp) {
      return Math.round(weight - (weight * ((100 - bfp) / 100)))
    }
    var cal = function (mci) {
      return lbm(weight, bfp) * mci
    }

    this.setState({ leanBodyMass: lbm(weight, bfp) })
    this.setState({ fatMass: fm(weight, bfp) })
    this.setState({ calories: cal(mci) })
  },
  render () {
    return (
      <div className='container'>
        <div className='diet__form'>
          <h2>Calculate Your Intake</h2>
          <div className='diet__form'>
            <label htmlFor='weight'>Weight: </label>
            <input
              type='text'
              className='diet__input'
              value={this.state.weight}
              id='weight'
              placeholder='weight'
              onChange={this.handleWeightChange} />
            <label htmlFor='bodyfat'>Body Fat %: </label>
            <input
              type='text'
              className='diet__input'
              value={this.state.bodyfat}
              id='bodyfat'
              placeholder='bodyfat'
              onChange={this.handleBodyFatChange} />
            <button className='button' onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <p>Lean Body Mass: {this.state.leanBodyMass}</p>
        <p>Fat Mass: {this.state.fatMass}</p>
        <p>Calories: {this.state.calories}</p>
      </div>
    )
  }
})

module.exports = Diet
