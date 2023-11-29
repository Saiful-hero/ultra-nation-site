import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // adding populaiton with for loop

    // let totalPopulation = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const country = cart[i];
    //     totalPopulation = totalPopulation + country.population;
        
    // }

    // adding population with reduce method
    const totalPopulation = cart.reduce((sum,country) => sum + country.population , 0)
    
    return(
        <div>
            <h3>This is cart:{cart.length}</h3>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
       
};

export default Cart;