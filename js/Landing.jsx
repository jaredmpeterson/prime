const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='prime-info'>
    <h1 className='title'>PRIME Diet</h1>
    <p>"A journey of a thousand miles begins with a single step."</p>
    <p id='quote'>- Lao-Tsu</p>
    <Link to='/info' className='start'>START</Link>
  </div>
)

module.exports = Landing
