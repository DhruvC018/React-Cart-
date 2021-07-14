import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart'
import Navbar from './Navbar';

class App extends React.Component { //here, App is a function based component.
  
  constructor() {  
    super(); 
      this.state = { 
        products: [ //array created and here we will map over hte items of the array and put it in our list.
          {
            price: 99,
            title: 'Watch',
            qty: 10,
            img: 'https://www.longines.com/media/catalog/product/cache/8db0cbef53b094d1dd99f8463500f53a/t/h/the-longines-master-collection-l2-673-4-78-3-detailed-view-2000x2000-1.jpg',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: 'https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1613672894000',
            id: 3
          }
        ]
      }
  }
    
    handleIncreaseQty = (product) => {
        const{ products } = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQty = (product) => {
        const{ products } =this.state;
        const index = products.indexOf(product);

        if(products[index].qty === 0){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products: products
        })
    }

    handleDeleteProduct = (id) => {
        const{products} = this.state;

        const items = products.filter((item) => item.id!=id);
    
        this.setState({
            products: items 
        })
    }

    getCartCount = () => {
       const { products } = this.state;

       let count = 0;
       
       products.forEach((product) => {
         count+=product.qty;
       })
      return count;
    }

    getCartTotal = () => {
      const{products} = this.state;

      let cartTotal = 0;
      products.map((product) => {
        cartTotal = cartTotal + product.qty * product.price;
      })
      return cartTotal;
    }

    render() {
      const { products } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDeleteProduct={this.handleDeleteProduct}
        />
        
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
