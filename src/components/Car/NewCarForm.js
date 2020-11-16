import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NewCarForm extends Component {
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

    render() {
        return (
            <div className="text-center mt-2">
                {this.props.error && <div>{this.props.error}</div>}
                <form onSubmit={(e) => this.props.addCar(e, this.state)} 
                    className="flex flex-col border-solid border-2 border-gray-900 bg-blackcoral w-3/5 max-w-sm m-auto"
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
                    <div>
                        <input 
                            type="submit" 
                            value="Add Car to Garage"
                            className="border-solid border-b-4 border-2 border-starblue hover:text-gray-400 
                                hover:underline bg-gainsboro hover:bg-starblue p-2 text-starblue
                                rounded m-2 hover:border-black"
                        />
                    </div>
                </form>
                <Link to="/profile/cars" className="hover:text-lavender hover:underline">Hide Form</Link>
            </div>
        )
    }
}

export default NewCarForm;