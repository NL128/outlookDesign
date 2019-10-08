import React,{Component} from 'react';



class ProductDetails extends Component{
      constructor(){
          super()

          this.state = {
              options: [],
              currentId:"../outsource/Email.png"
          }
      }
      componentWillMount(){
      var data =   {
            "products":[
              {"productName":"Email", "src":"../outsource/Email.png"},
              {"productName":"Calendar", "src":"../outsource/Calendar.png"},
              {"productName":"People", "src":"../outsource/People.png"},
              {"productName":"Task", "src":"../outsource/Task.png"},
              {"productName":"Search", "src":"../outsource/Search.png"}
            ]
          
        }
        var allProducts=[];
         data.products.forEach(x=>{
            let product = {
                productName:x.productName,
                imagePath:x.src
            }
            allProducts.push(product);
         })
         this.setState({options:allProducts});
      
       };
       getImage = (e)=>{
        //alert("E "+e);
           this.setState({currentId:e});
           
       };
    render() {
        return (

            
              <div className="ProductDisplay">
                  <div>               
                         <div className="topDisplay">
                      <img src={this.state.currentId} alt="Product is missing" />
                  </div>
                  <div className="productOptions">
                   
                        
                    {this.state.options.map(x=><button key={x.productName} onClick={(e)=>this.getImage(x.imagePath)} className="productBtn">{x.productName}</button>)}
                  
                  </div>
                  </div>

              </div>
            
        );
    }
}
export default ProductDetails;