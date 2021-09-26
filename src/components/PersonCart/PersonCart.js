import React from 'react';
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    console.log(props);
    const { personCart } = props;
    const total = personCart.reduce((a, b) => a + b.earning, 0);

    return (
        <div className="personCart">
            <h2>Persons Added: {personCart.length}</h2>
            <h3>Total Payable: ${total}</h3>
            <h3 className>NameList and Image:</h3>
            {personCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}></PersonName>)}
        </div>
    );
};

export default PersonCart;