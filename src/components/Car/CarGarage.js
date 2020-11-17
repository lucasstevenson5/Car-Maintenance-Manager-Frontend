import React from 'react';

import { Link } from 'react-router-dom';

function CarGarage(props) {
    return (
        <div className="m-2 border-2 border-black p-2 bg-shamrock text-center">
            <br /><h4>{props.car.year} {props.car.make} {props.car.model}</h4>
            <img src={props.car.image} alt="picture of your car" 
                className="h-48 max-w-xs" 
            />
            <Link to={"/profile/car/" + props.car.id} className="hover:text-gainsboro hover:underline">
                View Details
            </Link><br /><br />
        </div>
    )
}

export default CarGarage;