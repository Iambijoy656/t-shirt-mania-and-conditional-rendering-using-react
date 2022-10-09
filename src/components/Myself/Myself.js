import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h4>My self</h4>
            <p><small>House:{house}</small></p>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default Myself;