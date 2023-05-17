import React from 'react'

function NoPage() {
  return (
    <div className='NoPage' style={{marginTop:'100px'}}>
        <div style={{marginTop:'150px',textAlign:'center'}}>
            <img
            src="https://stories.freepiklabs.com/storage/26838/oops-404-error-with-a-broken-robot-pana-2854.png"
              width="450"
              height="450"
              className="404notfound"
              alt="caner logo"></img>

         <h2 className='notfoundText' style={{marginTop:'50px',fontWeight:'bolder'}}>
             404 PAGE NOT FOUND!
             {/* 404 SAYFA BULUNUNAMADI! */}
         </h2>
         <h5 className='h5' style={{textAlign:'center',marginTop:'50px',fontStyle:'italic'}}>
            The Page you are looking for does not exist or deleted.
            {/* Aradığınız Sayfa mevcut değildir ya da silinmiş. Lütfen daha sonra tekrar deneyiniz. */}
         </h5>
    </div>
     </div>
  )
}

export default NoPage