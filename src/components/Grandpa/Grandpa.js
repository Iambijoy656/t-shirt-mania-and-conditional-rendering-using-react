import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


export const RingContext = createContext('Matir Rink');
export const MoneyContext = createContext(555);

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);

    const ring = ' Diamond Ring';
    return (
        <RingContext.Provider value={[house, setHouse]} >
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa'>
                    <h2>Granpa</h2>
                    <section className='flex'>
                        <Father house={house} ring={ring}></Father>
                        <Uncle house={house}></Uncle>
                        <Aunt house={house}></Aunt>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;