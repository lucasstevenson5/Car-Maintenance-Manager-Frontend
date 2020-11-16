import React, { Component } from 'react';
import ScheduleList from './ScheduleList';
import NewScheduleForm from './NewScheduleForm';

import { Link, Route } from 'react-router-dom';

class ScheduleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.userCar &&
                    <h3>Your {this.props.userCar.make} {this.props.userCar.model}'s Maintenance Schedule</h3>
                }<br />
                <nav>
                    <Link to ={"/profile/car/" + this.props.carId + "/schedule/new"} className="hover:text-lavender hover:underline">Add Maintenance Schedule Item</Link>
                </nav><br />
                <main>
                    <Route path="/profile/car/:carDetails/schedule/new" 
                        render={ (props) => {
                            return  <NewScheduleForm
                                        addScheduleItem={this.props.addScheduleItem}
                                        userProf={this.props.userProf}
                                        carId={this.props.match.params.carDetails}
                                        {...props}
                                        {...this.state}
                                    />
                        }}
                    />
                    {this.props.userCar ?
                        <div className="flex flex-wrap justify-center">
                            {this.props.userCar.MaintenanceSchedules.map((item, id) => {
                                return  <ScheduleList
                                            maintenanceSchedule={item}
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

export default ScheduleContainer;