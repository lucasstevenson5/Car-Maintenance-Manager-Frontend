import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CarGarage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="m-2 border-2 border-black p-2 bg-shamrock text-center">
                <br /><h4>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h4>
                <img src={this.props.car.image} alt="picture of your car" 
                    className="h-48 max-w-xs" 
                />
                <Link to={"/profile/car/" + this.props.car.id} className="hover:text-gainsboro hover:underline">
                    View Details
                </Link><br /><br />
            </div>
        )
    }
    
}

export default CarGarage;