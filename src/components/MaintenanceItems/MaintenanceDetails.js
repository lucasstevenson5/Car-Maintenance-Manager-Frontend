import React, { Component } from 'react';
import EditMaintenanceItem from './EditMaintenanceItem';

import { rendMaintenance, updateMaintenance, deleteMaintenance} from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';

class MaintenanceDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userCarMaintenance: null
        }
    }

    rendSingleMaintenanceItem = async () => {
        const userCarMaintenance = await rendMaintenance(this.props.match.params.maintenanceDetails);
        this.setState({
            userCarMaintenance: userCarMaintenance
        })
    }

    editMaintenanceItem = async (e, index, item) => {
        e.preventDefault();
        const data = await updateMaintenance(index, item);
        this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/maintenanceItem/${index}`)
        window.location.reload(false);
    }

    deleteMaintenanceItem = async (e, id) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete your profile? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteMaintenance(id);
            this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/maintenance/`)
            window.location.reload(false);
        }
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendSingleMaintenanceItem();
    }

    render() {
        return (
            <div>
                <h1 className="text-xl">Maintenance Details</h1>
                {this.state.userCarMaintenance != null &&
                    <div className="m-2 border-2 border-black p-2 bg-starblue text-center w-4/5 max-w-md m-auto">
                        <span className="text-gainsboro">Type of Maintenance: </span>{this.state.userCarMaintenance.itemDescription}<br />
                        <span className="text-gainsboro">Miles on Car: </span>{this.state.userCarMaintenance.carMiles}<br />
                        <span className="text-gainsboro">Notes: </span>{this.state.userCarMaintenance.notes}<br />
                    </div>
                }<br />

                <nav>
                    <Link to={"/profile/car/" + this.props.carId + "/maintenanceItem/" + this.props.match.params.maintenanceDetails + "/edit"}
                        className="hover:text-lavender hover:underline"
                    >
                        Edit Maintenance Item
                    </Link>
                </nav>
                
                <main>
                    <Route path="/profile/car/:carDetails/maintenanceItem/:maintenanceDetails/edit" 
                        render={ (props) => {
                            return  <EditMaintenanceItem
                                        deleteMaintenanceItem={this.deleteMaintenanceItem}
                                        editMaintenanceItem={this.editMaintenanceItem}
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                </main>
            </div>
        ) 
    }
}

export default MaintenanceDetails;