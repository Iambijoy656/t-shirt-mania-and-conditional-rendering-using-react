import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h4>uncle</h4>
            <p>House:{house} </p>
            <p><small>Money:{money} </small></p>
        </div>
    );
};

export default Uncle;