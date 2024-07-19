import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

function AdminHeader() {
  return (
   <>
    <nav className="navbar main-nav navbar-expand-lg px-2 pt-0 pb-2 customeNavBar border-bottom active">
            <div className="container">
               <Link className="navbar-brand" to="/"><img src={Logo} alt="Evolv" className="brandImg" /></Link>
            
               <div class="dropdown">
                    <a class="btn btn-secondary" href="#" role="button" aria-expanded="false">
                     Logout
                    </a>
               </div>

            </div>

    </nav>

   </>
  )
}

export default AdminHeader