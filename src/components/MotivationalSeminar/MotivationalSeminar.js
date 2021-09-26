import React, { useEffect, useState } from 'react';
import './MotivationalSeminar.css'
const MotivationalSeminar = () => {
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./persons.JSON')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    return (
        <div>
            <div className="motivational-seminar-container">
                <div className="motivated-person-container">

                </div>
                <div className="person-cart-container">

                </div>
            </div>
        </div>
    );
};

export default MotivationalSeminar;