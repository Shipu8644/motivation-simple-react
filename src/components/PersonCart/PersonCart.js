import React from 'react';
import PersonName from '../PersonName/PersonName';
import './PersonCart.css'
const PersonCart = (props) => {
    console.log(props);
    const { personCart } = props;
    const total = personCart.reduce((a, b) => a + b.earning, 0);

    return (
        <div className="personCart">
            <h2 ><i style={{ color: 'red' }}>Persons Added: {personCart.length}</i></h2>
            <h3>Total Payable: <span style={{ color: 'red' }}>${total}</span></h3>
            <h3><u>NameList and Image: </u></h3>
            {personCart.map(personinfo => <PersonName
                key={personinfo.name}
                personinfo={personinfo}></PersonName>)}
        </div>
    );
};

export default PersonCart;