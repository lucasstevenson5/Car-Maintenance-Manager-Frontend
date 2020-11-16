import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class CarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            year: "",
            make: "",
            model: "",
            image: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        if (this.props.userCar != null) {
            this.setState({
                year: this.props.userCar.year,
                make: this.props.userCar.make,
                model: this.props.userCar.model,
                image: this.props.userCar.image
            }) 
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.editCar(e, parseInt(this.props.match.params.carDetails), this.state)}
                    className="flex flex-col w-3/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-sm m-auto"
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro">Year:</span>
                        <input 
                            className="border-solid border-2 border-gray-900 px-1"
                            type="text"
                            name="year"
                            placeholder="model year"
                            value={this.state.year}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro">Make: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 px-1"
                            type="text"
                            name="make"
                            placeholder="car manufacturer"
                            value={this.state.make}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro">Model: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 px-1"
                            type="text"
                            name="model"
                            placeholder="model of car"
                            value={this.state.model}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro">Image URL: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 px-1"
                            type="text"
                            name="image"
                            placeholder="url of image of car"
                            value={this.state.image}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="submit" value="Edit Car"
                            className="border-solid border-b-4 border-2 border-shamrock hover:text-gray-400 
                                hover:underline bg-gainsboro hover:bg-shamrock p-2 text-shamrock
                                rounded hover:border-black mt-2"
                        />
                    </div>
                </form>
                <div className="mb-4 mt-2">
                    <Link to={"/profile/car/" + this.props.match.params.carDetails}
                        className="hover:text-lavender hover:underline"
                    >Hide Form</Link><br />
                </div>
                
                <button onClick={(e) => this.props.deleteACar(e, parseInt(this.props.match.params.carDetails))}
                    className="hover:text-salsa hover:underline hover:font-bold"
                >
                    Delete this car from your garage
                </button>
            </div>
        ) 
    }
}

export default CarDetails;