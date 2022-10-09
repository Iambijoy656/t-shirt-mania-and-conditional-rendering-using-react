import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>House </small></p>
            <p><small>Money : {money}</small></p>
            <button onClick={() => setMoney(money + 1000)} >Add 1000</button>

        </div>
    );
};

export default Sister;