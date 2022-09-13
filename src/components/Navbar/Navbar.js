import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.scss";

export default function Navbar() {
  let userId = 1;
  return (
    <div className='container'>
      <nav>
        <ul>
          <li><Link to={"/"}> Home and Posts </Link></li>
          <li><Link to={{ pathname: '/users/' + userId }}> User</Link></li>
          <li><Link to={"/postform"}> Post Form</Link></li>
        </ul>


      </nav>
    </div>
  )
}
