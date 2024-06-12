import React from 'react'

//IMPORT COMPONENTS
import { PageTitle, TextCard } from '../components'

//Import JSON DATA

import deepTechData from '../data/DeepTechData.json'


function Data() {
  return (
    <>
    <section className="design-team section pt-2">
	    <div className="container">
            <div className="row w-100 mx-0 text-center">
              <PageTitle title="GLOBAL INNOVATION ECOSYSTEMS" />
            </div>


            <div className='row mx-auto'>
              
                   
              {
                   deepTechData.deeptechList.map((value, index) => (
                    <div className='col-lg-4 my-2'>
                    <TextCard Title={value.Title} techValues={value.techValues} action={value.action} />
                    </div>
                  ))
               }
            
            
            </div>
           
        </div>
    </section>
     </>
  )
}

export default Data