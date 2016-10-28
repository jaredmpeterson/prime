const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='box'>
    <h1 className='title'>PRIME Diet</h1>
    <p className='text'>"A journey of a thousand miles begins with a single step."</p>
    <p className='text--quote'>- Lao-Tsu</p>
    <Link to='/info' className='button'>START</Link>
  </div>
)

module.exports = Landing
