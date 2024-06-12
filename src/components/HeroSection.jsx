import React, {useEffect} from 'react'
// CSS IMPORT

//Import dependience

import Aos from 'aos'
import'aos/dist/aos.css'

// IMAGES 

import { Link } from 'react-router-dom'


function HeroSection() {

    useEffect(() => {
        Aos.init({
          duration:1000
        });
      }, []);
    

    return (
        <>
            <section class="section hero_section py-4 mb-0">
            
                <video muted="" loop="" autoplay="">
                    <source src="https://evolvesv.org/images/evolv/hero_page/video_bg.mp4"  type="video/mp4"/>
                </video>
            </section>

            <section className='join-event ' data-aos="fade-up">
           <div className='container'>
            <div className="row">
                <div className="  d-flex justify-content-between align-items-center flex-xl-row flex-lg-row  flex-column w-100 ">
                    <Link class="d-xl-block d-lg-block d-md-none  d-sm-none d-none"to='/magic'>JOIN THE EVOLVE MAGIC</Link>
                    <h5>THE MOST</h5>
                </div>
                <h1  >FOUNDER-FOCUSED</h1>
                <div className="w-100 d-flex  flex-xl-row flex-lg-row   flex-column justify-content-xl-between justify-content-lg-between justify-content-center ">
                <h4>EVENT ON THE EARTH</h4>
                <p>Evolve™ is a not-for-profit building the world’s leading startup event and the largest gathering of VC — delivering actionable company-building advice and bringing together the who’s who in the ecosystem.</p>
               
                <Link to='/magic' class="d-lg-none d-xl-none d-md-block d-sm-block d-block">JOIN THE EVOLVE MAGIC</Link>

                </div>
            </div>
            </div>
           
        </section>
        </>
    )

}

export default HeroSection