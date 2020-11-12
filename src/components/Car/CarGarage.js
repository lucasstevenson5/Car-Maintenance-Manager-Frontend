import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CarGarage extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <br /><h4>{this.props.car.year} {this.props.car.make} {this.props.car.model}</h4>
                <img src={this.props.car.image} alt="picture of your car" className="h-48" />
                <Link to={"/profile/car/" + this.props.car.id}>
                    View Details
                </Link><br /><br />
            </div>
        )
    }
    
}

export default CarGarage;