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
            img: '',
            id: 1
          },
          {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: '',
            id: 2
          },
          {
            price: 999,
            title: 'Laptop',
            qty: 4,
            img: '',
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
      </div>
    );
  }
}

export default App;
