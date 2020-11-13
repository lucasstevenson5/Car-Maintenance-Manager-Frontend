import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NewMaintenanceForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemDescription: "",
            carMiles: "",
            notes: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.addMaintenanceItem(e, this.props.carId, this.state)}
                    className="flex flex-col w-4/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-lg m-auto"
                >
                    <div className="my-2">
                        <span className="text-gainsboro">Item Description: </span>
                       <input 
                            className="border-solid border-2 border-gray-900 ml-2"
                            type="text"
                            name="itemDescription"
                            placeholder="What was done?"
                            value={this.state.itemDescription}
                            onChange={this.updateForm}
                        /> 
                    </div>
                    <div className="mb-2">
                        <span className="text-gainsboro mr-2">Mileage: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 ml-16"
                            type="text"
                            name="carMiles"
                            placeholder="How many miles on the car?"
                            value={this.state.carMiles}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        <span className="text-gainsboro mr-2">Notes: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 ml-20"
                            type="text"
                            name="notes"
                            placeholder="Any notes? Who did the work?"
                            value={this.state.notes}
                            onChange={this.updateForm}
                        /> 
                    </div>
                    <div className="mb-2 mt-2">
                        <input type="submit" value="Add Maintenance Item to List"
                            className="border-solid border-b-4 border-2 border-starblue hover:text-gray-400 
                                hover:underline bg-gainsboro hover:bg-starblue p-2 text-starblue
                                rounded hover:border-black mt-2"
                        />
                    </div>
                </form><br />
                <Link to={"/profile/car/" + this.props.carId + "/maintenance"} className="hover:text-lavender hover:underline">Hide Form</Link><br /><br />
            </div>
        )
    }
}

export default NewMaintenanceForm;