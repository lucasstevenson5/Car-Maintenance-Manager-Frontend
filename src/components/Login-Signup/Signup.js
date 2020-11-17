import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            password: "",
            passwordConfirm: "",
            error: ""
        }
    }

    updateForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="bg-gainsboro">
                <h1 className="text-center text-2xl">Sign Up Page</h1>
                {this.props.error && 
                    <div className="text-center text-red-500 font-bold">Username {this.props.errorMsg} is already taken</div>
                }
                <div className="g-gainboro text-center pb-10 pt-4">
                    <form onSubmit={(e) => this.props.handleSignup(e, this.state)}
                        className="bg-blackcoral p-2 border-solid border-2 border-gray-900 w-3/5 max-w-sm text-center m-auto"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <span className="text-gainsboro">Full Name: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 pl-1"
                                type="text"
                                name="name"
                                placeholder="Your name... duh"
                                value={this.state.name}
                                onChange={this.updateForm}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <span className="text-gainsboro">Username: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 pl-1"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.updateForm}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <span className="text-gainsboro">Password: </span>
                            <input 
                                className="border-solid border-2 border-gray-900 pl-1"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.updateForm}
                            />
                        </div>
                        <div className="mb-2">
                            <input 
                                type="submit" 
                                value="Create Profile" 
                                className="border-solid border-b-4 border-2 border-starblue hover:text-gray-400 
                                hover:underline bg-gainsboro hover:bg-starblue p-2 text-starblue
                                rounded m-2 hover:border-black"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Signup;