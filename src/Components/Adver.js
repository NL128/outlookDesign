import React from   'react';

const Adver=({LeftOrRight})=>{

    return (
        <div>
           <div className="GoLeft">
               <div className={LeftOrRight==="Left"?"elementHalf elementOrderFirst":"elementHalf elementOrderSecond"}style={{color:'#0078D4'}} >
                 <div>
                  <h1>
                  More accessible than ever
                  </h1>
                  <p>We've designed Outlook.com to be everyone's most accessible inbox, with intuitive voice-controlled navigation, support for multiple assistive devices—and more.</p>
                  </div>
               </div>
               <div className={LeftOrRight==="Left"?"elementHalf elementOrderSecond":"elementHalf elementOrderFirst"}>
                  <div className="phoneImageContainer">
                      
                         <div className="AdverImage"></div>
                      
                      
                      
                  </div>
               </div>
           </div>

        </div>
    );
}

export default Adver;