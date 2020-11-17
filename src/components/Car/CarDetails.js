import React, { Component } from 'react';
import EditCarForm from './EditCarForm';
import MaintenanceContainer from '../MaintenanceItems/MaintenanceContainer';
import MaintenanceDetails from '../MaintenanceItems/MaintenanceDetails';
import ScheduleContainer from '../MaintenanceSchedule/ScheduleContainer';
import ScheduleDetails from '../MaintenanceSchedule/ScheduleDetails';

import { rendCar, postMaintenance, postSchedule } from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


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
        item.carId = parseInt(index);
        await postMaintenance(item);
        this.props.history.push(`/profile/car/${index}/maintenance`)
        window.location.reload(false);
    }
    
    addScheduleItem = async (e, index, item) => {
        e.preventDefault();
        item.carId = parseInt(index);
        await postSchedule(item);
        this.props.history.push(`/profile/car/${index}/schedule`)
        window.location.reload(false);
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendSingleCar();
    }

    generatePDF = (car) => {
        const doc = new jsPDF();

        const tableColumn = ["Maintenance Item Description", "Mileage on Car", "Notes", "Created"];
        const tableRows = [];

        const items = car.MaintenanceItems;

        items.forEach(item => {
            const itemData = [
                item.itemDescription,
                item.carMiles,
                item.notes,
                item.createdAt
            ];
            tableRows.push(itemData);
        });
        
        doc.autoTable(tableColumn, tableRows, { startY: 13 });
        doc.save(`${car.year}_${car.make}_${car.model}_Maintenance_Log.pdf`);
    }

    generatePDF2 = (car) => {
        const doc = new jsPDF();

        const tableColumn = ["Type of Maintenance", "Every _ Miles", "Notes", "Created"];
        const tableRows = [];

        const items = car.MaintenanceSchedules;

        items.forEach(item => {
            const itemData = [
                item.itemDescription,
                item.carMiles,
                item.notes,
                item.createdAt
            ];
            tableRows.push(itemData);
        });
        
        doc.autoTable(tableColumn, tableRows, { startY: 13 });
        doc.save(`${car.year}_${car.make}_${car.model}_Maintenance_Schedule.pdf`);
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
                                        generatePDF={this.generatePDF}
                                        addMaintenanceItem={this.addMaintenanceItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails/schedule" 
                        render={ (props) => {
                            return  <ScheduleContainer
                                        generatePDF2={this.generatePDF2}
                                        addScheduleItem={this.addScheduleItem}
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
                                        handleVerify={this.props.handleVerify}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails/scheduleItem/:scheduleDetails" 
                        render={ (props) => {
                            return  <ScheduleDetails
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

export default CarDetails;