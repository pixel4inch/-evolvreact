import React from 'react'

function SectionTitle({title1, title2}) {
  return (
    <>
        <div className='w-100 section-title'>
            <h4>{title1}</h4>
            <h3>{title2}</h3>
        </div>
    </>
  )
}

export default SectionTitle