import React,{Component} from 'react';
import LazyLoad from 'react-lazyload';
import FolderIcon  from '../Images/folder.png';
import AttachmentIcon  from '../Images/attachment.png';
import WindowIcon  from '../Images/windowIcon.png';
import ShieldIcon  from '../Images/shield.png';
class AfterMiddContent extends Component{
    render(){
        return(
            <div className="afterMidFull">

<LazyLoad height={200} offset={-100}>
                <div className="afterMidFullAnim"></div>
                </LazyLoad>
               <div className="fullStandAlone">
               <div className="afterMidFullTitle">
                    <h1>Backed by enterprise-grade security</h1>
                    <p>Outlook works around the clock to help protect your privacy and keep your inbox free of clutter.</p>
                    
                    
                </div>
                <div className="afterMidFullCont">
                   <div className="midleftCont">
                       <LazyLoad height={100} offset={-100} >
                       <div className="IconsOnShield timeRotationAnim1">
                          <img src={WindowIcon} alt="window icon" className="iconFull"></img>
                       </div>
                       <div className="IconsOnShield timeRotationAnim2">
                       <img src={ShieldIcon} alt="shield icon" className="iconFull"></img>
                       </div>
                       <div className="IconsOnShield timeRotationAnim3">
                       <img src={AttachmentIcon} alt="attachment icon" className="iconFull"></img>
                       </div>
                       <div className="IconsOnShield timeRotationAnim4">
                       <img src={FolderIcon} alt="folder icon" className="iconFull"></img>
                       </div>
                       </LazyLoad>
                   </div>
                    <div className="midrightCont">
                        <p>Protection delivered by the same tools Microsoft uses for business customers.</p>
                         <p>Data encryption in your mailbox and after email is sent.</p>
                        <p>Automatic deactivation of unsafe links that contain phishing scams, viruses, or malware.
Premium</p>
                    <p>Ransomware detection and recovery for your important files in OneDrive.</p>
                    </div>
                    
                </div>
                
               </div>
                
                

               
            </div>
        );
    }
}
export default AfterMiddContent;