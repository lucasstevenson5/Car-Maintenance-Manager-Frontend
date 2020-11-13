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

    // checkPasswordMatch = () => {
    //     if(this.state.password != this.state.passwordConfirm) {
    //         this.setState({
    //             error: "Passwords Do Not Match"
    //         })
    //     } else {
    //         this.setState({
    //             error: ""
    //         })
    //     }
    // }

    render() {
        return (
            <div className="bg-gainsboro">
                <h1 className="text-center">Sign Up Page</h1>
                <div className="flex flex-wrap justify-center">
                    {this.state.error && <div>{this.state.error}</div>}<br />
                    <form onSubmit={(e) => this.props.handleSignup(e, this.state)}
                        className="mb-4 text-center w-3/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-sm m-auto"
                    >
                        <div className="my-2">
                            <span className="text-gainsboro">Full Name: </span>
                            <input 
                                className="border-solid border-2 border-gray-900"
                                type="text"
                                name="name"
                                placeholder="Your name... duh"
                                value={this.state.name}
                                onChange={this.updateForm}
                            /><br /><br />
                        </div>
                        <div className="mb-2">
                            <span className="text-gainsboro">Username: </span>
                            <input 
                                className="border-solid border-2 border-gray-900"
                                type="text"
                                name="username"
                                placeholder="username"
                                value={this.state.username}
                                onChange={this.updateForm}
                            /><br /><br />
                        </div>
                        <div className="mb-2">
                            <span className="text-gainsboro">Password: </span>
                            <input 
                                className="border-solid border-2 border-gray-900"
                                type="password"
                                name="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.updateForm}
                            /><br /><br />
                        </div>
                        {/* <input
                            type="password"
                            name="passwordConfirm"
                            placeholder="confirm password"
                            value={this.state.passwordConfirm}
                            onChange={this.updateForm}
                        /> */}
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