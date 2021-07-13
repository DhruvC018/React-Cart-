import React from 'react';
import CartItem from './CartItem';

// class Cart extends React.Component {  
    //**We comment this constructor part till the render part because we don't want the cart component to have access to modify the state of hte app component. 
 
    //    constructor() {  
    //         super(); 
    //         this.state = { 
    //             products: [ //array created and here we will map over hte items of the array and put it in our list.
    //                 {
    //                     price: 99,
    //                     title: 'Watch',
    //                     qty: 10,
    //                     img: '',
    //                     id: 1
    //                 },
    //                 {
    //                     price: 999,
    //                     title: 'Mobile Phone',
    //                     qty: 1,
    //                     img: '',
    //                     id: 2
    //                 },
    //                 {
    //                     price: 999,
    //                     title: 'Laptop',
    //                     qty: 4,
    //                     img: '',
    //                     id: 3
    //                 }
    //             ]
    //         }
    //     }
    
    // handleIncreaseQty = (product) => {
    //     const{ products } = this.state;
    //     const index = products.indexOf(product);

    //     products[index].qty += 1;

    //     this.setState({
    //         products: products
    //     })
    // }

    // handleDecreaseQty = (product) => {
    //     const{ products } =this.state;
    //     const index = products.indexOf(product);

    //     if(products[index].qty === 0){
    //         return;
    //     }

    //     products[index].qty -= 1;

    //     this.setState({
    //         products: products
    //     })
    // }

    // handleDeleteProduct = (id) => {
    //     const{products} = this.state;

    //     const items = products.filter((item) => item.id!=id);
    
    //     this.setState({
    //         products: items 
    //     })
    // }

    const Cart = (props) => {    
        const {products} = props; //this.state; //getting products from the state.
        return(
            <div className="cart">
                {products.map((product) => {
                    return( 
                        <CartItem 
                            product={product} 
                            key={product.id}
                            onIncreaseQty={props.onIncreaseQty}
                            onDecreaseQty={props.onDecreaseQty}
                            onDeleteProduct={props.onDeleteProduct}
                            //here we can add multiple things like: 
                            // func={() => console.log('abcd')}
                            // isLoggedin={false}
                            // jsx={<h1>HEllo</h1>}
                            // comp={<CartItem/>}
                        />
                    ) 
                })}
            </div>
        );
    
    
}

export default Cart;