import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NewScheduleForm extends Component {
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
                <form onSubmit={(e) => this.props.addScheduleItem(e, this.props.carId, this.state)}
                    className="flex flex-col w-4/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-lg m-auto"
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro">Item Description: </span>
                       <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="itemDescription"
                            placeholder="Maintenance Item"
                            value={this.state.itemDescription}
                            onChange={this.updateForm}
                        /> 
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro mr-2">Every: </span>
                        <div className="sm:w-3/5 flex justify-between">
                            <input 
                                className="border-solid border-2 border-gray-900 w-4/5"
                                type="text"
                                name="carMiles"
                                placeholder="Mileage Interval"
                                value={this.state.carMiles}
                                onChange={this.updateForm}
                            />
                            <span className="text-gainsboro self-start"> Miles</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro mr-2">Notes: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="notes"
                            placeholder="Any notes?"
                            value={this.state.notes}
                            onChange={this.updateForm}
                        /> 
                    </div>
                    <div className="my-2">
                        <input type="submit" value="Add Schedule Item to List"
                            className="border-solid border-b-4 border-2 border-starblue hover:text-gray-400 
                                hover:underline bg-gainsboro hover:bg-starblue p-2 text-starblue
                                rounded hover:border-black mt-2"
                        />
                    </div>
                </form><br />
                <Link to={"/profile/car/" + this.props.carId + "/schedule"} className="hover:text-lavender hover:underline">Hide Form</Link><br /><br />
            </div>
        )
    }
}

export default NewScheduleForm;