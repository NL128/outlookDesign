import React,{Component } from 'react';

class  NavBar extends Component{
    render(){
        return(
            <div>
              <div className="Nav">
                 <div className="Nav-Content">
                    <div className="Nav-Content-inner">
                       <div className="Logo"></div>
                       <h3>Microsoft</h3>
                    </div>
                    <div className="Nav-Content-inner-right">
                      <button className="Premium-Btn">Try premium</button>
                      <button className="White-Btn">Sign in</button>
                    </div>
                 </div>
              </div>
            </div>
        );
    }
}
export default NavBar;