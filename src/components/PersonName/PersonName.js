import React from 'react';
import './PersonName.css'
const PersonName = (props) => {
    console.log(props);
    const { img, name } = props.personinfo;
    return (
        <div style={{ display: 'flex', marginTop: '10px', color: 'aquamarine' }}>
            <h3> {name}</h3>
            <img style={{ width: '200px', borderRadius: '50%' }} src={img} alt="" />
        </div>
    );
};

export default PersonName;