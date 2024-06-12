import React from 'react'

function ImgCard({imgData, nameData, designationData, companyData}) {
  return (
    <div className='text-center h-100 w-100 p-lg-4 p-sm-2 p-3 border evolve-card'>
     <div className="w-100">
         <img src={imgData} alt={nameData} className="img-fluid"/>
     </div>

     <div className="evolve-card-content w-100">
         <h3 className="text-center">{nameData}</h3>
         <h4 className="text-center">{designationData}</h4>
         <h4 className="text-center">{companyData}</h4>
     </div>
 </div>

  )
}

export default ImgCard