import React, { Component } from 'react';
import EditCarForm from './EditCarForm';
import MaintenanceContainer from '../MaintenanceItems/MaintenanceContainer';
import MaintenanceDetails from '../MaintenanceItems/MaintenanceDetails';
import EditMaintenanceItem from '../MaintenanceItems/EditMaintenanceItem';

import { rendCar, postMaintenance, updateMaintenance } from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';


class CarDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userCar: null
        }
    }

    rendSingleCar = async () => {
        const userCar = await rendCar(this.props.match.params.carDetails);
        this.setState({
            userCar: userCar
        })
    }

    addMaintenanceItem = async (e, index, item) => {
        e.preventDefault();
        console.log("in here")
        console.log(index)
        item.carId = parseInt(index);
        console.log(item)
        const data = await postMaintenance(item);
        console.log(data);
    }

    // editMaintenanceItem = async (e, index, item) => {
    //     e.preventDefault();
    //     const data = await updateMaintenance(index, item);
    //     console.log(data)
    //     this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/maintenanceItem/${index}`)
    //     this.rendSingleCar();
    // }

    componentDidMount() {
        this.props.handleVerify();
        this.rendSingleCar();
    }

    render() {
        return (
            <div className="bg-gainsboro text-center">
                <nav className="flex flex-col sm:flex-row justify-around bg-shamrock p-6 border-solid border-b-2 border-t-2 border-black">
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/edit"}
                        className="hover:text-gainsboro hover:underline -mt-4 pb-2 sm:pb-0 sm:mt-0"
                    >Edit Car</Link>
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/maintenance"}
                        className="hover:text-gainsboro hover:underline py-2 sm:py-0 border-black border-t-2 sm:border-none"
                    >View Maintenance List</Link>
                    {this.state.userCar != null && 
                    <Link to={"/profile/car/" + this.props.match.params.carDetails + "/schedule"}
                        className="hover:text-gainsboro hover:underline -mb-4 sm:mb-0 pt-2 sm:pt-0 border-black border-t-2 sm:border-none"
                    >Your {this.state.userCar.model}'s Maintenance Schedule</Link>
                    }
                </nav><br />

                {this.state.userCar != null && 
                    <img src={this.state.userCar.image} alt="picture of your car" 
                        className="h-48 m-auto mb-2" 
                    />
                }<br />
                
                

                <main>
                    <Route path="/profile/car/:carDetails/edit" 
                        render={ (props) => {
                            return  <EditCarForm
                                        userProf={this.props.userProf}
                                        deleteACar={this.props.deleteACar}
                                        editCar={this.props.editCar}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails/maintenance" 
                        render={ (props) => {
                            return  <MaintenanceContainer
                                        addMaintenanceItem={this.addMaintenanceItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails/maintenanceItem/:maintenanceDetails" 
                        render={ (props) => {
                            return  <MaintenanceDetails
                                        // editMaintenanceItem={this.editMaintenanceItem}
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    {/* <Route path="/profile/car/:carDetails/maintenanceItem/:maintenanceDetails/edit" 
                        render={ (props) => {
                            return  <EditMaintenanceItem
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    /> */}
                </main>
            </div>
        ) 
    }
}

export default CarDetails;