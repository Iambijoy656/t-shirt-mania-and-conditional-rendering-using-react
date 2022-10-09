import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunt = ({ house }) => {
    return (
        <div>
            <h3>Aunt : {house}</h3>
            <section className='flex'>
                <Cousin house={house} ></Cousin>
                <Cousin house={house} ></Cousin>
            </section>
        </div>
    );
};

export default Aunt;