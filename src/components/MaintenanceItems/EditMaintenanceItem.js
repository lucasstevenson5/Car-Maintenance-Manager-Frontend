import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class EditMaintenanceItem extends Component {
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
        if (this.props.userCarMaintenance != null) {
            this.setState({
                itemDescription: this.props.userCarMaintenance.itemDescription,
                carMiles: this.props.userCarMaintenance.carMiles,
                notes: this.props.userCarMaintenance.notes
            }) 
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.editMaintenanceItem(e, this.props.match.params.maintenanceDetails, this.state)}
                    className="flex flex-col w-4/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-lg m-auto"
                >
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2">
                        <span className="text-gainsboro">Item Description: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="itemDescription"
                            placeholder="What was done?"
                            value={this.state.itemDescription}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro">Mileage: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="carMiles"
                            placeholder="How many miles on the car?"
                            value={this.state.carMiles}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between m-2 mt-0">
                        <span className="text-gainsboro">Notes: </span>
                        <input 
                            className="border-solid border-2 border-gray-900 sm:w-3/5"
                            type="text"
                            name="notes"
                            placeholder="Any notes? Who did the work?"
                            value={this.state.notes}
                            onChange={this.updateForm}
                        />
                    </div>
                    <div className="mb-2">
                        <input type="submit" value="Edit Maintenance Item"
                            className="border-solid border-b-4 border-2 border-shamrock hover:text-gray-400 
                            hover:underline bg-gainsboro hover:bg-shamrock p-2 text-shamrock
                            rounded hover:border-black mt-2"
                        />
                    </div>
                </form><br />
                <Link to={"/profile/car/" + this.props.carId + "/maintenanceItem/" + this.props.match.params.maintenanceDetails}
                    className="hover:text-lavender hover:underline"
                >
                    Hide Form
                </Link><br /><br />

                <button onClick={(e) => this.props.deleteMaintenanceItem(e, parseInt(this.props.match.params.maintenanceDetails))}
                    className="hover:text-salsa hover:underline hover:font-bold"
                >
                    Delete this Maintenance Item
                </button><br /><br />
            </div>
        )
    }
}

export default EditMaintenanceItem;