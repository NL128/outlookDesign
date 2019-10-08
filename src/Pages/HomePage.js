import React ,{Component} from 'react';
import LazyLoad from 'react-lazyload';
import TopContent from '../Components/TopContent';
import MidContent from '../Components/MidContent';
import ProductDetails from '../Components/ProductDetails';
import AfterMiddContent from '../Components/AfterMiddContent';
import GetProducts from '../Components/GetProducts';
import RotationComp from '../Components/RotationComp';
import ContentBottom from '../Components/ContentBottom';
import PhoneContent from '../Components/PhoneContent';
import Adver from '../Components/Adver';
import FooterComp from '../Components/FooterComp';
class HomePage extends Component{

 
    render(){
        return (

            <div>
                 <LazyLoad height={200} >
              <TopContent />
              </LazyLoad>
              <LazyLoad height={200} >
              <MidContent className="midFull" >
                  <div className="container">
                  <div className="topCard">
                      <div className="ImgFull"></div>
                  </div>
                  <div className="bottomCard">
                      <div className="textShow">
                  
                          <div>
                          <LazyLoad height={200} offset={-100}>
                          <h1>Email and calendar,together in one place</h1>
                          </LazyLoad>
                          <p>Stay on top of your most important messages and events.</p>
                          </div>
                       
                      </div>
                  </div>
                  </div>
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                  <ProductDetails />
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <AfterMiddContent />
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                  <div className="fullT">
                      <h1>Office Online apps.</h1>
                      <LazyLoad height={200}  once={false}>
                      <h1 className="changeH1Color fadeInUpMode">For free.</h1>
                      </LazyLoad>
                    
                  </div>
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                  <GetProducts />
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                <RotationComp />
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                 <ContentBottom />
              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                <PhoneContent LeftOrRight='Left' />

              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                <PhoneContent LeftOrRight='Right' />

              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                <Adver LeftOrRight="Right"/>

              </MidContent>
              </LazyLoad>
              <LazyLoad height={200} offset={100} once={true}>
              <MidContent className="midFullSmaller">
                  <FooterComp />

              </MidContent>
              </LazyLoad>
            </div>
        );
    }

}
export default HomePage;