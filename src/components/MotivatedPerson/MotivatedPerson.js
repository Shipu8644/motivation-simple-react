import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import './MotivatedPerson.css'
const MotivatedPerson = (props) => {
    // console.log(props);
    const { img, name, gender, earning, followers, age, star } = props.person;
    const element = <FontAwesomeIcon icon={faUserCheck} />
    return (
        <div className='person'>
            <img className='circular-img' src={img} alt="" />
            <p style={{ color: 'aquamarine' }}>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Earning: <strong style={{ color: 'aquamarine' }}>${earning}</strong></p>
            <p>Followers: {followers}</p>
            <Rating className='Rating' initialRating={star}
                emptySymbol="far fa-star "
                fullSymbol="fas fa-star "
                readonly
            />
            <br /><br />
            <button onClick={() => props.addToCartHandle(props.person)}
                className='btn-regular'>{element} Add to Cart</button>

        </div>
    );
};

export default MotivatedPerson;