import React,{Component} from 'react';
import LazyLoad from 'react-lazyload';
class TopContent extends Component{
    render(){
        return(
            <div className="MainComponent">
                
                <div className="Sub-Title">
                    <h4>Outlook</h4>
                </div>
                <div className="title-content">
                <LazyLoad height={200}>
                    <h1><span>Connect.</span><span><br/>Organize.</span><span><br/>Get things done.</span></h1>
                 </LazyLoad>
                </div>
                <div className="BottomCreatAccount">
                    <div className="showAll">
                    <div className="firstSpace"></div>
                    <div className="secondSpace">
                        <section>
                        <div>
                            <h3>Free Outlook email and calendar</h3>
                            <p>Everything you need to be your most productive and connected self-at home,on the go, and everywhere in between.</p>
                        </div>
                        <button>Create free account</button>
                        </section>
                    </div>
                    <div className="thirdSpace"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TopContent;