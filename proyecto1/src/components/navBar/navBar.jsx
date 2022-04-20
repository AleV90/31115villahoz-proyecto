import React from 'react'
import logo from '../../logo.svg'


export default function navBar(){
    return(
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="@">
      <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
      Bootstrap
    </a>
  </div>
</nav>
    )
}