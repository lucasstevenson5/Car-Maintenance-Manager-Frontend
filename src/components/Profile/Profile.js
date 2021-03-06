import React, { Component } from 'react';
import EditProfileInfo from './EditProfileInfo';
import CarGarageContainer from './CarGarageContainer';
import CarDetails from '../Car/CarDetails';
import GenericMaintenance from '../MaintenanceItems/GenericMaintenance'

import { rendProf, updateProf, deleteProf, postCar, updateCar, deleteCar } from '../../services/api_helper';

import { Link, Route, withRouter } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userProf: null
        }
    }

    rendProfile = async () => {
        const userProf = await rendProf();
        this.setState({
            userProf: userProf
        })
    }

    updateProfile = async (e, registerData) => {
        e.preventDefault();
        const userProf = await updateProf(registerData);
        this.setState({
            userProf: userProf
        })
        window.location.reload(false);
    }

    deleteProfile = async (e) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete your profile? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteProf();
            this.setState({
                userProf: null
            })
            this.props.handleVerify();
        }
    }

    addCar = async (e, car) => {
        e.preventDefault();
        const userProf = this.state.userProf;
        const data = await postCar(car);
        userProf.Cars.push(data);
        this.setState({
            userProf: userProf
        })
        this.props.history.push("/profile/cars")
    }

    editCar = async (e, id, car) => {
        e.preventDefault();
        const data = await updateCar(id, car);
        this.props.history.push("/profile/cars")
        this.rendProfile();
    }

    deleteACar = async (e, id) => {
        e.preventDefault();
        const userResp = prompt("Are you sure you want to delete your profile? This cannot be undone. [y] for yes, any key for no");
        if (userResp === "Y" || userResp == "y") {
            await deleteCar(id);
            this.props.history.push("/profile/cars")
            this.rendProfile();
        }
    }

    componentDidMount() {
        this.props.handleVerify();
        this.rendProfile();
    }

    render() {
        return (
            <div>
                <nav className="flex flex-col sm:flex-row justify-around text-center bg-starblue p-6 border-solid border-b-2 border-black">
                    <Link to="/profile/edit" 
                        className="hover:text-gainsboro hover:underline -mt-4 pb-2 sm:pb-0 sm:mt-0">
                            Edit Profile Info
                    </Link>
                    <Link to="/profile/cars" 
                        className="hover:text-gainsboro hover:underline py-2 sm:py-0 border-black border-t-2 sm:border-none">
                            Your Garage
                    </Link>
                    <Link to="/profile/schedule" 
                        className="hover:text-gainsboro hover:underline -mb-4 sm:mb-0 pt-2 sm:pt-0 border-black border-t-2 sm:border-none">
                            Generic Maintenance Schedules
                    </Link>
                </nav>
                {this.props.currentUser ? 
                <h1 className="text-center bg-gainsboro pt-2 pb-4 text-2xl">Welcome {this.props.currentUser.name}</h1>
                :
                <h1 className="text-center bg-gainsboro py-2">Welcome</h1>
                }
                <main>

                    <Route path="/profile/edit" 
                        render={ (props) => {
                            return  <EditProfileInfo
                                        {...this.props}
                                        {...this.state} 
                                        updateProfile={this.updateProfile} 
                                        deleteProfile={this.deleteProfile}
                                        handleVerify={this.props.handleVerify}
                                    />
                        }}
                    />
                    <Route path="/profile/cars" 
                        render={ (props) => {
                            return  <CarGarageContainer
                                        addCar={this.addCar}
                                        handleVerify={this.props.handleVerify}
                                        {...this.state}
                                        {...this.props}
                                    />
                        }}
                    />
                    <Route path="/profile/schedule" 
                        render={ (props) => {
                            return  <GenericMaintenance
                                        {...this.state}
                                        {...this.props}
                                    />
                        }}
                    />
                    <Route path="/profile/car/:carDetails" 
                        render={ (props) => {
                            return  <CarDetails
                                        handleVerify={this.props.handleVerify}
                                        deleteACar={this.deleteACar}
                                        editCar={this.editCar}
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

export default withRouter(Profile);