import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    const element = <FontAwesomeIcon icon={faUser} />

    const { personCart } = props;
    const [existingCart, setExistingCart] = useState([]);

    useEffect(() => {
        setExistingCart(personCart);
    }, [personCart])

    console.log(existingCart);
    const closeHandler = (person) => {
        const existCart = existingCart.filter(p => p.name !== person.name);
        setExistingCart(existCart);
    }
    // console.log(existingCart);

    const total = personCart.reduce((a, b) => a + b.earning, 0);



    return (
        <div className="personCart">
            <h2 ><i style={{ color: 'green' }}>{element} Persons Added: <span style={{ color: 'red' }}> {personCart.length}</span></i></h2>

            <h3 style={{ color: 'green' }}> <strong>Total Payable: </strong> <span style={{ color: 'red' }}>${total}</span></h3>

            <h3 style={{ color: 'green' }}><u>NameList and Images: </u></h3>
            {existingCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}
                closeHandler={closeHandler}
            ></PersonName>)}
        </div>
    );
};

export default PersonCart;