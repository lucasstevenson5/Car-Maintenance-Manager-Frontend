import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class EditScheduleItem extends Component {
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

    componentDidMount = async () => {
        if (this.props.userCarSchedule != null) {
            this.setState({
                itemDescription: this.props.userCarSchedule.itemDescription,
                carMiles: this.props.userCarSchedule.carMiles,
                notes: this.props.userCarSchedule.notes
            }) 
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.editScheduleItem(e, this.props.match.params.scheduleDetails, this.state)}
                    className="flex flex-col w-4/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-lg m-auto"
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro text">Item Description: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="itemDescription"
                            placeholder="Maintenance Item"
                            value={this.state.itemDescription}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro">Every: </span>
                        <div className="flex justify-between sm:w-3/5">
                            <input 
                                className="border-solid border-2 border-gray-900 w-4/5"
                                type="text"
                                name="carMiles"
                                placeholder="Mileage Interval"
                                value={this.state.carMiles}
                                onChange={this.updateForm}
                            />
                            <span className="text-gainsboro"> Miles</span>
                        </div>
                        
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro">Notes: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="notes"
                            placeholder="Any notes?"
                            value={this.state.notes}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="submit" value="Edit Schedule Item"
                            className="border-solid border-b-4 border-2 border-shamrock hover:text-gray-400 
                            hover:underline bg-gainsboro hover:bg-shamrock p-2 text-shamrock
                            rounded hover:border-black mt-2"
                        />
                    </div>
                </form><br />
                <Link to={"/profile/car/" + this.props.carId + "/scheduleItem/" + this.props.match.params.scheduleDetails}
                    className="hover:text-lavender hover:underline"
                >
                    Hide Form
                </Link><br /><br />
                <button onClick={(e) => this.props.deleteScheduleItem(e, parseInt(this.props.match.params.scheduleDetails))}
                    className="hover:text-salsa hover:underline hover:font-bold"
                >
                    Delete this Maintenance Item
                </button><br /><br />
            </div>
        )
    }
}

export default EditScheduleItem;