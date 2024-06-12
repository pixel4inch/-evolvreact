import React from 'react'

//IMPORT PLUGIN
import { NavLink } from 'react-router-dom'
//IMPORT DATA
import MenuData from '../data/MenuTabs.json'



function FooterNav() {
  return (
    <>

    <ul className="footerLinks">
        {MenuData.Footer.map(data => {
            return (
                <li className="nav-item" key={data.id}>
                <NavLink className="nav-link dropdown-toggle" to={data.link} >{data.Tab}
                </NavLink>
                </li>
             )
         }
        )
        }

    </ul>
    
    
    </>
  )
}

export default FooterNav