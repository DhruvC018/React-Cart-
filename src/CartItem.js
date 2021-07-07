import React from 'react';

class CartItem extends React.Component {   //CartItem will inherit some items from the class Component in the react module.Hence this is a class based component.
    render (){  //for class component to be a react component we give the method render.
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
    
                    <div style={ { fontSize: 25 } }>Phone</div>
                    <div style={ {color: '#777'} }>Rs 999</div>
                    <div style={ {color: '#777'} }>Qty: 1</div>

                    <div className="cart-item-actions">
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