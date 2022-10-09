import React, { useContext } from 'react';
import Friend from '../Friend/Friend';
import { RingContext } from '../Grandpa/Grandpa';

const Cousin = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Cousin </h3>
            <p><small>House :{house} </small></p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;