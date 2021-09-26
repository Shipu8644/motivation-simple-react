import React from 'react';
import './MotivatedPerson.css'
const MotivatedPerson = (props) => {
    // console.log(props);
    const { img, name, gender, earning, followers, age } = props.person;
    return (
        <div className='person'>
            <img className='circular-img' src={img} alt="" />
            <p style={{ color: 'aquamarine' }}>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Earning: <strong style={{ color: 'aquamarine' }}>${earning}</strong></p>
            <p>Followers: {followers}</p>
            <button onClick={() => props.addToCartHandle(props.person)}
                className='btn-regular'>Add to Cart</button>

        </div>
    );
};

export default MotivatedPerson;