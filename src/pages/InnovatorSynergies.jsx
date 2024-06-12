import React from 'react'

//IMAGE IMPORT


// IMPORT COMPONETNS
import{PageTitle, Datagraphic} from '../components'

function InnovatorSynergies() {
  return (
    <>
    <div className='container'>

      <PageTitle title="INNOVATOR SYNERGIES"/> 

      <div className="col-lg-11 col-md-12 mx-auto mt-1">
        <h3 className="font-weight-bold font-display2 my-3 d-block text-center text-capitalize">
          To engage and empower a million entrepreneurs globally with cohesive, collaborative and well coordinated programs. Focused on a new generation of tech entrepreneurs. </h3>
       </div>
        <Datagraphic DataGrapic="https://www.evolv.cc/images/evolv/data/InnovatorSynergies.jpg" DataGraphicLink='https://www.strategyr.com/'/>
    </div>
  </>

    
  )
}

export default InnovatorSynergies