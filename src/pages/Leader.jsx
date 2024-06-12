import React from 'react'

//IMPORT COMPONENTS
import { PageTitle } from '../components'


//IMPORT DATA
import LeaderData from "../data/LeaderData.json"


function Leader() {


  return (
    <>
    <section className="design-team section pt-2">
	    <div className="container">
      <PageTitle title="CO-CHAIRS" />
      <div className="row px-5">
        {LeaderData['CO-CHAIRS'].map(data => {
          return (
            <div className="col-lg-4 col-md-6 mx-auto" key={data.id}>
                <div className="team-sm">

                  <div className="image mb-3">
                    <a href={data.linkedlink} target="blank">
                      <img className="w-100 shadow border" src={data.pic} alt={data.name} /></a>
                  </div>

                  <a href={data.linkedlink}  target="blank">
                    <h3 className="text-center font-weight-bold ">{data.name}</h3>
                  </a>
                    <h4 className="text-center designation">{data.designation}</h4>
                    <h4 className="text-center designation">{data.company}</h4>
                </div>
              </div>
          )
        })
        }
      </div>

    
      
      <hr className="divider mt-0 pb-3 mt-0"/>
      <PageTitle title="ADVISORY COUNCIL" />
      <div className="row px-5">
     
     <br/>
      <div className="row px-5">
        {LeaderData['ADVISORY COUNCIL'].map(data => {
          return (
            <div className="col-lg-4 col-md-6 mx-auto" key={data.id}>
                <div className="team-sm">

                  <div className="image mb-3">
                    <a href={data.linkedlink} target="blank">
                      <img className="w-100 shadow border" src={data.pic} alt={data.name} /></a>


                  </div>

                  <a href={data.linkedlink}  target="blank">
                    <h3 className="text-center font-weight-bold ">{data.name}</h3>
                  </a>
                    <h4 className="text-center designation">{data.designation}</h4>
                    <h4 className="text-center designation">{data.company}</h4>
                </div>
              </div>
          )
        })
        }
      </div>
      </div>
      </div>
       </section>
    </>
  )
}

export default Leader