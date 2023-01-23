import React from 'react'
import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

export default function MainPage() {
  
  return (
    <div>
      <div>
        <h2>Save Motivation</h2>
      </div>

        <div>
          <Link to='login'><button className='btn btn-lg btn-dark'>Login</button></Link>
        </div>
        <div>
          <Link to='signup'><button className='btn btn-lg btn-dark'>Create Account</button></Link>
        </div>
        <footer style={{bottom:'0',marginTop:'20rem'}}>
          <p>by <a href='/'>Vishnu Jadhav</a></p>
        </footer>
    </div>
  )
}
