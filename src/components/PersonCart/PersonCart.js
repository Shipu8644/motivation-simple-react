import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />
    console.log(props);
    const { personCart } = props;
    const total = personCart.reduce((a, b) => a + b.earning, 0);

    return (
        <div className="personCart">
            <h2 ><i style={{ color: 'aquamarine' }}>{element} Persons Added: <span style={{ color: 'red' }}> {personCart.length}</span></i></h2>
            <h3 style={{ color: 'aquamarine' }}>Total Payable: <span style={{ color: 'red' }}>${total}</span></h3>

            <h3 style={{ color: 'aquamarine' }}><u>NameList and Images: </u></h3>
            {personCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}></PersonName>)}
        </div>
    );
};

export default PersonCart;