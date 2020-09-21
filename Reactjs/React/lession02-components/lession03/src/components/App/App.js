import React,{Component} from 'react';
import './App.css';
import Products from '../Products/Products';
import Modal from '../Modals/Modal';
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products : [
          {
            name : "Laptop DELL 5459",
            price: 500000,
            images: "\\images\\1.jpg"
          },
          {
            name : "Laptop ASUS 5459",
            price:1000000,
            images: "\\images\\2.jpg"
          },
          {
            name : "Laptop MSI 5459",
            price : 2000000,
            images : "\\images\\3.jpg"
          },
          {
            name : "Laptop LENOVO 5459",
            price : 3000000,
            images : "\\images\\4.jpg"
          }]
    };
}

  showProducts = ()=>{
      const listProducts = this.state.products.map((item,index)=>  
          <Products key = {index} price = {item.price} images = {item.images}>{item.name}</Products>
      );
      return listProducts;
  }

  render() {
      var elem = this.state.products.map((item, index)=>{
        return <Products />
      })

        
      return (
        <div className="App">
        <div className="container">  
          {elem}
  
          <Modal />
        </div>
      </div>
      );
  }
}

export default App;
