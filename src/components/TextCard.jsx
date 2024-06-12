import React from 'react'

// dependency
import { Link } from 'react-router-dom'

function TextCard({Title, CardLink, Description, action, techValues }) {

  return (
          
                  <div className=' h-100 w-100 d-flex flex-column justify-content-between align-items-center evolve-text-card ' data-aos={action}>
                    <div className='w-100'>
                        <h4 class="font-weight-600 text-center mb-3">{Title}</h4>
                       { Description ? ( <p> {Description} </p>):null}

                       { techValues ? ( <h5 class="font-weight-600 text-center text-center main-font-color font-display3"> {techValues} </h5>):null}
                   </div>
                    
                    {CardLink ? (
                      <div className='w-100 text-center my-3'>
                        <Link to={CardLink} className='btn btn-evolve btn-md mx-auto'>SIGN-UP</Link>
                        </div>  
                     ) : null}
                    
                 
                  </div>
                


  )
}

export default TextCard