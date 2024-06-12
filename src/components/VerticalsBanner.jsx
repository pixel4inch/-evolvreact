import React from 'react'

//IMPORT IAMGES


function VerticalsBanner({Title}) {
  return (
    <>
    <section className="pagebanners">
        <div className="container">
        <div className="row mx-0" id="pagebanner-block">
            <h1>
                 {Title}
             </h1>
        </div>
    </div>
    </section>

    </>
  )
}

export default VerticalsBanner