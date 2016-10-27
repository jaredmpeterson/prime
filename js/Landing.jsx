const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='prime-info'>
    <h1 className='title'>Prime Diet</h1>
    <Link to='/diet' className='browse-all'> See Diet</Link>
  </div>
)

module.exports = Landing
