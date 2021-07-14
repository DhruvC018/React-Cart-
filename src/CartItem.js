import React from 'react';

// class CartItem extends React.Component {   //CartItem will inherit some items from the class Component in the react module.Hence this is a class based component.

const CartItem = (props) => {


////////////////////
//We don't need this since props are used. We can directly give values to the <CartItem> in the cart file and use those values instead of the local values created in this object.    
    //we will instead use this in the next class, create a list of products and a list of hte values and render them directly in the objects.
    // constructor() {  //This is used to add state. A state is a plain javascript object, which is used to store the data for the current component.
    //     super(); //calling this calls the constructor of the component class.
    //     this.state = { //initially this will throw an error, saying super constructor must be called. It is an inhertance error.
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     } //we use this data in the jsx component. example in line 21.
    //     //this.testing(); used promises here.
    // }
/////////////////////


    // using promises and check how setState actually works
    
    /////////////Using promises////////////
    
    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done')
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         this.setState({qty: this.state.qty + 10});

    //         console.log('state', this.state);
    //     });
    // }

    ///////////////////////////////

    // TO INCREASE THE QUANTITY
    // increaseQuantity =  () => {
        // this.state.qty += 1;
        //the arrow function binds the elements naturally. we can even use the bind keyword. example: line 38
        //Batching takes place for this form (form 1)
        // console.log('this.state', this.state); --> makes it asynchronus. making it synchronus explained in line 34-36.
        
        // setState form 1
        // this.setState({     //changes made, i.e. increasing the quantity needs to be reandered in the react component. Hence we use the setState function that is imported from react.
        //     qty: this.state.qty + 1
        // }, () => {
            // console.log('this.state', this.state)
        // });  
        //above is the callback to make it asynchronus like done in line 40-42.



        //setState form 2 --> use when previous state required.
        //Batching doesn't take place for this form.
        
    //these won't work for the moment because of the use of props instead of state
        
        // this.setState((prevState) => {
        //     return{
        //         qty: prevState.qty + 1 //shallow merging with the state object takes place, i.e. only the qty get's changed and nothing else.
        //     }
        //     //Since React is asynchronus in nature, it doesn't get updated correctly. Hence to make it synchronus in nature, there is an option:
        //     //setState is asynchronus hence it's hard to know when the call will end and so we can't solely rely on this.state
        //     //for this(to make it synchronus), react gives us an option to make it synchronus by
        //     //by sending another call-back
        // }, () => {
        //     console.log('this.state', this.state);
        // });  //Now, How does it make it Asynchronus?
        // //this call-back is called after the execution of the setState, i.e. after we click and then it get's updated.



        //Above mentioned are the 2 form through which we can change our state and re-renders our component
        //Which form to use when????
        //When we require the previus state, we use the function method, i.e. the second method. If we don't need the previous state, we use the first form.
    
    
    //these won't work for the moment because of the use of props instead of state
    
    // decreseQuantity = () => { //won't work while using props beacuse this uses state and props doesn't
    //     // doesn't let hte quantity decrease beyond 0
    //     const{ qty } = this.state;
    //     if(qty == 0){
    //         return;
    //     }
    //     //Here we will use the 2 form because to change the quantity, we need the previous value.
    //     this.setState((prevState) => {
    //         return{
    //             qty: prevState.qty - 1
    //         }
    //     });
    // }

    //Batching takes place for form 1 and not form 2. 
    //setState function is Asynchronus.

    //Batching doesn't take place for Ajax and Promises.

    // render (){  //for class component to be a react component we give the method render.
        // console.log('this.props', this.props)
    const { price, title, qty } = props.product; //using object destructuring. getting the object, the one above created. We get the properties from the object
                                                //product is the array that stores all the properties.
    const {
        product, 
        onIncreaseQty, 
        onDecreaseQty, 
        onDeleteProduct
    } = props;
        
    return(
        <div className="cart-item">
            {/* {this.props.jsx} */}
            <div className="left-block">
                <img style={styles.image} src={product.img}/>
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
                        // onClick={this.increaseQuantity} //Event listener addded here. Here we can use the bind function in order to use it better. A better alternative to bind function is using the arrow function.
                        //onClick = {this.increaseQuantity.bind(this) // here we bind with the object.} this is how binding takes place. to improve this we use the arrow function.
                        onClick={() => onIncreaseQty(product)} //here we are using props and are calling the funciton from the Cart file.
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        onClick={() => onDecreaseQty(product)}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/1214/1214428.png" 
                        onClick={() => onDeleteProduct(product.id)}
                    />
                    {/* Buttons */}
                </div>
            </div>
        </div>
        ); 
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