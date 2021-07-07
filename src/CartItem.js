import React from 'react';

class CartItem extends React.Component {   //CartItem will inherit some items from the class Component in the react module.Hence this is a class based component.
    constructor() {  //This is used to add state. A state is a plain javascript object, which is used to store the data for the current component.
        super(); //calling this calls the constructor of the component class.
        this.state = { //initially this will throw an error, saying super constructor must be called. It is an inhertance error.
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        } //we use this data in the jsx component. example in line 21.
    }

    increaseQuantity =  () => {
        //the arrow function binds the elements naturally. we can even use the bind keyword.
        console.log('this.state', this.state);
    }

    render (){  //for class component to be a react component we give the method render.
        const { price, title, qty } = this.state; //using object destructuring. getting the object, the one above created. We get the properties from the object
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
    
                    <div style={ { fontSize: 25 } }> {title} </div> 
                    <div style={ {color: '#777'} }> Rs {price} </div>
                    <div style={ {color: '#777'} }> Qty: {qty} </div>

                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick={this.increaseQuantity} //Event listener addded here. Here we can use the bind function in order to use it better. A better alternative to bind function is using the arrow function.
                            //onClick = {this.increaseQuantity.bind(this) // here we bind with the object.} this is how binding takes place. to improve this we use the arrow function.
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png" 
                        />
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;