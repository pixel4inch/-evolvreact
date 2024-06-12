import React from 'react'
import { Link } from 'react-router-dom'


//import COMPONENT
import FooterNav  from "./FooterNav"

function footer() {

	const getYear = () => {
		return new Date().getFullYear();
	}

  return (
    <>
   
	  <footer>
	  <div className="footer-main">
		<div className="container">
		  <div className="row">
		   
			<div className="col-xl-12 col-1g-12 col-md-12 col-12 mx-auto align-self-center">
				<div className="block">
					<FooterNav/>	
				</div>
			</div>
			<div className="col-xl-11 col-1g-12 col-md-12 col-12 mx-auto footer-divider"></div>
			
  
			<div className="col-xl-11 col-1g-12 col-md-12 col-12 mx-auto align-self-center mt-2">
			  <div className="block text-center">
			
				<div className="elements-social social-icon-style-02 mt-20px xs-mt-15px">
                                <ul className="footer-social-icons">
                                    <li className="my-0"><Link className="facebook" to="https://www.facebook.com/" ><i className="fa-brands fa-facebook-f"></i></Link></li>
                                    <li className="my-0"><Link className="dribbble" to="http://www.dribbble.com"><i className="fa-brands fa-dribbble"></i></Link></li> 
                                    <li className="my-0"><Link className="twitter" to="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></Link></li> 
                                    <li className="my-0"><Link className="instagram" to="http://www.instagram.com"><i className="fa-brands fa-instagram"></i></Link></li> 
                                </ul>
                            </div>
				
				
				
				



			  </div>
			</div>
		  
		  </div>
		</div>
	  </div>
	  <div className="text-center py-1 footer-copyright">
		<small className="text-secondary text-dark ">Copyright © {getYear()} Evolve Silicon Valley Foundation, All Rights Reserved.</small>
	  </div>
	</footer>

      
      
      


    
    </>
  )
}

export default footer