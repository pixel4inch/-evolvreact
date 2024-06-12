import React from 'react'

function ButtonSm({link, value}) {
  return (
    <>
        <a href={link} className='btn main-bg-color mt-4 text-white btn-md font-weight-600 '>
                {value}
        </a>
    
    </>

  )
}

export default ButtonSm