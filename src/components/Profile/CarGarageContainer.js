import React, { Component } from 'react';
import CarGarage from '../Car/CarGarage';
import NewCarForm from '../Car/NewCarForm';

import { Link, Route } from 'react-router-dom';

class CarGarageContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        await this.props.handleVerify();
    }

    render() {
        return (
            <div className="bg-gainsboro">
                <nav className="text-center">
                    <Link to="/profile/cars/new" className="text-center hover:text-lavender hover:underline">Add a car to your garage</Link>
                </nav>
                <main>
                    <Route exact path="/profile/cars/new" 
                        render={ (props) => {
                            return  <NewCarForm
                                        addCar={this.props.addCar}
                                        {...props}
                                    />
                        }}
                    />
                    {this.props.userProf ?
                        <div className="flex flex-wrap justify-center">
                            {this.props.userProf.Cars.map((car, id) => {
                                return  <CarGarage 
                                            handleVerify={this.props.handleVerify}
                                            car={car}
                                            key={id}
                                        />
                            })}
                        </div>
                    :
                        <div></div>
                    }
                    
                </main>
                
            </div>
        )
    }
    
}

export default CarGarageContainer;