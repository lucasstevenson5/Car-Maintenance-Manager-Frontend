import React, { Component } from 'react';
import EditScheduleItem from './EditScheduleItem';

import { rendSchedule, updateSchedule, deleteSchedule } from '../../services/api_helper';

import { Link, Route } from 'react-router-dom';


class ScheduleDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userCarSchedule: null
        }
    }

    rendSingleScheduleItem = async () => {
        const userCarSchedule = await rendSchedule(this.props.match.params.scheduleDetails);
        this.setState({
            userCarSchedule: userCarSchedule
        })
    }

    editScheduleItem = async (e, index, item) => {
        e.preventDefault();
        const data = await updateSchedule(index, item);
        this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/scheduleItem/${index}`)
        window.location.reload(false);
    }

    deleteScheduleItem = async (e, id) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete this item? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteSchedule(id);
            this.props.history.push(`/profile/car/${this.props.match.params.carDetails}/schedule/`)
            window.location.reload(false);
        }
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendSingleScheduleItem();
    }

    render() {
        return (
            <div>
                {this.state.userCarSchedule != null &&
                       <h1 className="text-xl">{this.state.userCarSchedule.itemDescription}'s Maintenance Schedule</h1>
                }
                {this.state.userCarSchedule != null &&
                    <div className="m-2 border-2 border-black p-2 bg-starblue text-center w-4/5 max-w-md m-auto">
                        <span className="text-gainsboro">Type of Maintenance: </span>{this.state.userCarSchedule.itemDescription}<br />
                        <span className="text-gainsboro">Every: </span>{this.state.userCarSchedule.carMiles} Miles<br />
                        <span className="text-gainsboro">Notes: </span>{this.state.userCarSchedule.notes}<br />
                    </div>
                }<br />
                <nav>
                    <Link to={"/profile/car/" + this.props.carId + "/scheduleItem/" + this.props.match.params.scheduleDetails + "/edit"}
                        className="hover:text-lavender hover:underline"
                    >
                        Edit Maintenance Item
                    </Link>
                </nav>
                <main>
                    <Route path="/profile/car/:carDetails/scheduleItem/:scheduleDetails/edit" 
                        render={ (props) => {
                            return  <EditScheduleItem
                                        deleteScheduleItem={this.deleteScheduleItem}
                                        editScheduleItem={this.editScheduleItem}
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

export default ScheduleDetails;