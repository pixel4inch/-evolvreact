import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import EvolvData from '../data/EvolvData.json'

//import Dependience

// dependience
import Aos from 'aos'
import 'aos/dist/aos.css'


//import component 
import { Helmet, PageTitle } from '../components'

function Partner() {

  useEffect(() => {
    Aos.init({
    
      duration:2000
    }
    );
  }, []);
  


  return (
   <Helmet title="PARTNER">
    <section className="design-team section pt-2">
	    <div className="container">
      <div className="text-center w-100">
        <PageTitle title="PARTNERING WITH Evolve SV" />
      </div>

        <div className='row mx-auto'>
          <p className='para-display2 text-center font-weight-bold w-100'>
          We welcome partnerships with entities and associations that support the global tech entrepreneur. Please <Link to="/contact"   style={{color: "blue"}}>contact </Link> us.
          </p>  
        </div>

          <div className='row mt-4 mx-auto ligh-bg'>
            {
              EvolvData.slice(0, 30).map((value) =>
                (
                  <div  key={value.Id} className='col-xl-2 col-lg-2    col-md-3 col-6 '  data-aos="fade-up">
                  <a href={value.CompanyWebSite} target='_blank' rel="noreferrer">  
                        <div class="col-11 border  my-3 mx-auto bg-white  shadow-sm d-flex align-items-center   text-center p-4" style={{ height:"100px", overflow:"hidden"}}>
                            <img src={value.CompanyLogo} className="img-fluid" alt={value.CompanyName} />
                        </div>
                    </a>  
                  
                  </div>
                  )
              )

            }
          </div>


      </div>
      </section>
    </Helmet>
  )
}

export default Partner