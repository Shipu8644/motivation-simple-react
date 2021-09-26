import React, { useEffect, useState } from 'react';
import MotivatedPerson from '../MotivatedPerson/MotivatedPerson';
import PersonCart from '../PersonCart/PersonCart';
import './MotivationalSeminar.css'
const MotivationalSeminar = () => {
    const [persons, setPersons] = useState([]);
    const [personCart, setPersonCart] = useState([]);
    // Effect zone
    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    // Handler Zone
    const addToCartHandle = (person) => {
        const newCart = [...personCart, person];
        setPersonCart(newCart);
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> <span style={{ color: '#ffbd00' }} > Total Budget: </span> <strong style={{ color: 'aquamarine', fontWeight: 'bolder' }}>500 Million</strong></h1>
            <div className="motivational-seminar-container">
                <div className="motivated-person-container">
                    {persons.map(person => <MotivatedPerson
                        key={person.name}
                        person={person}
                        addToCartHandle={addToCartHandle}
                    >

                    </MotivatedPerson>)}
                </div>
                <div className="person-cart-container">
                    <PersonCart personCart={personCart} ></PersonCart>
                </div>
            </div>
        </div>
    );
};

export default MotivationalSeminar;