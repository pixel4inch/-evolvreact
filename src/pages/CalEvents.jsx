import React from 'react'
//IMPORT PLUGINS
import { useParams } from 'react-router-dom';

//IMPORT DATABASE

import EventsData from '../data/EventsData.json'

//IMPORT COMPONENTS
import { VerticalsBanner, Datagraphic } from '../components'


function Calevents() {

  let { EventId } = useParams();

  return (
    <>
      <VerticalsBanner Title={EventId} />
      {EventsData.eventslist.map(data => {
        return (data.Event) === `${EventId}` ?


          <>
            <div className="container my-4">
              <div className="col-lg-9 col-md-12 col-12 mx-auto">

                <a href="javascript:valid(0)" data-toggle="modal" data-target="#infograpicModel">
                  <Datagraphic DataGrapic={data.eventdatagraphic} DataGraphicLink={data.eventdatagraphiclink} className="img-fluid border shadow-sm" />
                </a>
                <p>{data.eventtitle}</p>
              </div>

              {/* Model Display */}
              <div className="modal fade" id="infograpicModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg shadow">
                  <div className="modal-content">
                    <img src={data.eventdatagraphic} alt="img" />
                  </div>
                </div>
              </div>
            </div>






          </>


          : " "
      }
      )}
    </>
  )
}

export default Calevents