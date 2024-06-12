import React from 'react'

//IMPORT PLUGIN
import { Link, NavLink } from 'react-router-dom'
//IMPORT DATA
import MenuData from '../data/MenuTabs.json'

function HeaderNav() {
  return (
    <>

    <ul className="navbar-nav ml-auto">
        {MenuData.Header.map(data => {
            return (data.SubTab == undefined  ? 
                <li className="nav-item dropdown @@about" key={data.id}>
                    <NavLink className="nav-link dropdown-toggle" to={data.link} >{data.Tab} </NavLink>
                </li>

                :
                <li className="nav-item dropdown @@about " key={data.id}>
                <a className="nav-link dropdown-toggle"  data-toggle="dropdown" aria-expanded="true"> {data.Tab}
                   <span><i className="ti-angle-down"></i></span>
                </a>
                <ul className="dropdown-menu">

                    {
                        data.SubTab.map( subdata => {
                            return(
                                <li key={subdata.id}>
                                        <NavLink className="dropdown-item @profile " to={subdata.sublinks}>
                                            {subdata.subtabs}
                                        </NavLink>
                                </li>
                            )

                        })
                    }


                     
               </ul>
             </li>

             )
         }
        )
        }

    </ul>
    
    
    </>
  )
}

export default HeaderNav