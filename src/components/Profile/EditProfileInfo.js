import React, { Component } from 'react';

class EditProfileInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount = async () => {
        await this.props.handleVerify();
        if (this.props.currentUser != null) {
            this.setState({
                name: this.props.currentUser.name,
                username: this.props.currentUser.username,
                password: this.props.currentUser.password
            })
        }
    }

    render() {
        return (
            <div className="text-center bg-gainsboro">
                <br /><form 
                        onSubmit={(e) => this.props.updateProfile(e, this.state)}
                        className="bg-blackcoral p-2 border-solid border-2 border-gray-900 w-3/5 max-w-sm text-center m-auto">
                        <span className="text-gainsboro">Name: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 ml-10 pl-1"
                                type="text"
                                name="name"
                                placeholder="Your name... duh"
                                value={this.state.name}
                                onChange={this.updateForm}
                            /><br /><br />
                        <span className="text-gainsboro">Username: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 ml-3 pl-1"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.updateForm}
                            /><br /><br />
                        <span className="text-gainsboro">Password: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 ml-4 pl-1"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.updateForm}
                            /><br /><br />
                        <input 
                            type="submit" 
                            value="Edit Profile" 
                            className="border-solid border-b-4 border-2 border-shamrock hover:text-gray-400 
                                        hover:underline bg-gainsboro hover:bg-shamrock p-2 text-shamrock
                                        rounded hover:border-black"
                        />
                    </form><br /><br />
                    <button onClick={(e) => this.props.deleteProfile(e)} 
                        className="hover:text-salsa hover:underline hover:font-bold"
                    >
                        Delete Your Entire Profile
                    </button>
            </div>
        ) 
    }
}

export default EditProfileInfo;