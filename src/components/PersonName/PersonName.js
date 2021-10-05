import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import './PersonName.css';

const PersonName = (props) => {
    // console.log(props);
    const { img, name } = props.personinfo;
    const element = <FontAwesomeIcon icon={faWindowClose} />
    return (
        <div className='person-name'>
            <h1
                style={{ color: 'red', cursor: 'pointer' }}>{element}</h1>
            <h3 style={{ marginLeft: '5px', marginRight: '5px' }}> {name}</h3>
            <img style={{ width: '200px', borderRadius: '50%' }} src={img} alt="" />
        </div>
    );
};

export default PersonName;