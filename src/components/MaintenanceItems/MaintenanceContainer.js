import React, { Component } from 'react';
import MaintenanceList from './MaintenanceList';
import NewMaintenanceForm from '../MaintenanceItems/NewMaintenanceForm';

import { Link, Route } from 'react-router-dom';

class MaintenanceContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.userCar &&
                    <h3 className="text-xl">Your {this.props.userCar.make} {this.props.userCar.model}'s Maintenance Log</h3>
                }<br />
                {this.props.userCar &&
                <button onClick={() => this.props.generatePDF(this.props.userCar)}
                    className="border-solid border-b-4 border-2 border-shamrock hover:text-gray-400 
                    hover:underline bg-blackcoral hover:bg-shamrock p-2 text-shamrock
                    rounded hover:border-black"
                >Generate PDF of your {this.props.userCar.model}'s Maintenance Log</button>
                }<br /><br />
                <nav>
                    <Link to ={"/profile/car/" + this.props.carId + "/maintenance/new"} className="hover:text-lavender hover:underline">Add Maintenance Item</Link>
                </nav><br />
                <main>
                    <Route path="/profile/car/:carDetails/maintenance/new" 
                        render={ (props) => {
                            return  <NewMaintenanceForm
                                        addMaintenanceItem={this.props.addMaintenanceItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    {this.props.userCar ?
                        <div className="flex flex-wrap justify-center">
                            {this.props.userCar.MaintenanceItems.map((item, id) => {
                                return  <MaintenanceList
                                            maintenanceItem={item}
                                            key={id}
                                            carId={this.props.carId}
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

export default MaintenanceContainer;