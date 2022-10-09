import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h3>Amar jnno nao</h3>
            <p>tmr jnno nao</p>
            <p><small>abr nao</small></p>
        </div>

    }

    else {
        message = <p>Thanks For Buying!</p>
    }



    return (
        <div>
            <h4 className={cart.length == 2 ? `orange` : `purple`}>Order Summery</h4>
            <h5 className={`bold ${cart.length === 2 ? 'orange' : 'yellow'}`}>Order Quantity: {cart.length} </h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }

            {
                message
            }

            {
                cart.length === 3 ? <p>Tin jon k diba</p> : <p>bah! kino  </p>
            }

            <p>and operator</p>
            {
                cart.length === 2 && <h2>Double item niba</h2>
            }
            <p>or oprator</p>
            {
                cart.length === 4 || <p>4 ta item nao</p>
            }

        </div>
    );
};

export default Cart;

/**
    Conditional rendering
    1. use element and if-else
    2. ternary operator condition ? true: false
    3. && operator
    4. || operator (if condition is false, i want to display something)
    5.Conditional css class
 */