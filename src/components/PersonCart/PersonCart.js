import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />

    const { personCart } = props;


    const total = personCart.reduce((a, b) => a + b.earning, 0);



    return (
        <div className="personCart">
            <h2 ><i style={{ color: '#375b08' }}>{element} Persons Added: <span style={{ color: 'red' }}> {personCart.length}</span></i></h2>

            <h3 style={{ color: '#375b08' }}> <strong>Total Payable: </strong> <span style={{ color: 'red' }}>${total}</span></h3>

            <h3 style={{ color: '#375b08' }}><u>NameList and Images: </u></h3>
            {personCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}

            ></PersonName>)}
        </div>
    );
};

export default PersonCart;