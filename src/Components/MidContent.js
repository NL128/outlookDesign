import React from 'react';

const MidContent  =(props) => {

        return(
            <div className={props.className}>
              {props.children}
            </div>
        );
    
}
export default MidContent;