import React from 'react'

//import component
import { Hero, Helmet } from '../components'







function Home() {



  return<Helmet title={"Home"}> 
    <>
      <div class="w-100" style={{position:"relative"}}>
       <Hero/>
      </div>
 </>
  
  </Helmet>
}

export default Home