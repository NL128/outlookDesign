import React from 'react';

const PhoneContent= ({LeftOrRight})=>{
     
    return(
        <div>
           <div className="GoLeft">
               <div className={LeftOrRight==="Left"?"elementHalf elementOrderFirst":"elementHalf elementOrderSecond"}>
               {LeftOrRight==="Left"?<h1>Simplify scheduling by sending your availability</h1>:<h1>Easily check in to upcoming flights</h1>} 
               </div>
               <div className={LeftOrRight==="Left"?"elementHalf elementOrderSecond":"elementHalf elementOrderFirst"}>
                  <div className="phoneImageContainer">
                      <div className="phone phoneUrlOne"></div>
                      <div className="phone phoneUrlTwo"></div>
                      <div className="phone phoneUrlThree"></div>
                  </div>
               </div>
           </div>

        </div>
    );
}
export default PhoneContent;