import React from 'react'
import { Outlet , NavLink} from 'react-router-dom'
import Logo from "../../assetes/images/freshcart-logo.svg"

export default function Authilayout() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
  <div className="container-fluid mx-3">
    <NavLink className="navbar-brand" to="/">
      <img src= {Logo}alt="" />
    </NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
       
        <li className="nav-item  position-relative">
          <NavLink className="nav-link" to="/signin">signin
         </NavLink> 

        </li> 
        <li className="nav-item  position-relative">
          <NavLink className="nav-link" to="/signup">signup
         </NavLink> 

        </li>
       
       
       
      </ul>
    
    </div>
  </div>
</nav>
      <Outlet/>
    </div>
  )
}
