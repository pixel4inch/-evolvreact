   import React, { useEffect } from 'react'

   // components
   import{PageTitle, SectionTitle, TextCard} from '../components'

   // dependency
   
   import Aos from 'aos'
   import 'aos/dist/aos.css'

   // data
   import InitiativeData from '../data/Initiatives.json'
   function Initiatives() {
   
      useEffect(() => {
      Aos.init({
         duration:1000
      });

   }, []);


   return (
      <>

      <div className="container mb-5">
         <div className='row text-center'>
            <PageTitle title="initiatives"/>
         </div>
         <div className='row text-center'>
            <SectionTitle title1="To Engage And Empower Entrepreneurs Globally With Action-Oriented Programs. Focused On A New Generation Of Tech Entrepreneurs."  />
         </div>
         <div className="row mx-0 " >
               {
                    InitiativeData.initiatives_list.map((value, index) => (
                     <div className='col-md-6 col-12 my-2'>
                     <TextCard Title={value.Title} Description={value.description} CardLink={value.link} action={value.action} />
                     </div>
                  ))
               }
         </div>

      </div>
      </>
   )
   }

   export default Initiatives