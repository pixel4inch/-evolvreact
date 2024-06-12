import React from 'react'


//IMPORT PLUGINS
import {  NavLink } from 'react-router-dom'

// IMPORT COMPONENTS
import { PageTitle } from '../components'

// IMPORT DATA

import Calender_Data from "../data/CalenderData.json"

function Calender() {



  return (
    <>
      <div className='container'>
        <PageTitle title="INNOVATOR ECO-CONNECTS" />
        <h1 className="font-display2 text-center main-font-color  col-lg-11 mt-3 col-md-12 mx-auto ">
          Myriad of Programs Driven by Evolv™ Members, Partners, and Supporters
        </h1>
        <h2 className="font-display1 mt-0 text-center  col-lg-11 col-md-12 mx-auto text-capitalize">Let's <u>Evolve</u> Together!</h2>
      </div>

      <section className="timeline_area section_padding_130">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="apland-timeline-area">
              <div className="single-timeline-area">
                {
                  Calender_Data.CalenderList.map(post => {
                    return (
                      <div key={post.id}>
                          <div className="timeline-date wow fadeInLeft">
                            <p>{post.Month}</p>
                          </div>
                      
                          <div className="row pb-4 align-items-center" >
                        {
                          post.Event.map((data, index) => 
                           {
                            return (data.eventtype) === "liveevent" ?

                            <div className="  col-12 col-md-6 col-lg-5 col-xl-4  px-1 calender-lables   inpersonalevent-block   ">
                           
                              <div className="single-timeline-content inpersonal d-flex wow fadeInLeft">
                                  <div className="timeline-icon"><img src={data.icon} title={data.Title} alt={data.Title}/>
                                  </div>
                                <div className="timeline-text">
                                    <h6 className="d-flex flex-column">
                                    <span  className="mb-1 text-dark">{data.Title}</span>
                                    <span className="text-dark">{data.Title2}</span> </h6>
                                    <h5>{data.date}</h5>
                                      </div>
                                  </div>
                            </div>
                              : 
                              <div className={`col-12 col-md-6 calender-lables col-lg-4 px-1 ${data.Multi === 'Multi' ? "Multi" : ""}`}>
                                <NavLink  to={`/calender/calevents/${data.EventId}`}>
                                <div className="single-timeline-content d-flex wow ">
                                  <div className="timeline-icon">
                                    <img src={data.icon} title={data.Title} alt={data.Title}/></div>
                                  <div className="timeline-text">
                                    <h6>{data.Title}</h6>
                                    <h5>{data.date}</h5>
                                  </div>
                                </div>
                                </NavLink>
                              </div>
                            }
                          )}
                          </div>
                      </div>
                    )
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Calender