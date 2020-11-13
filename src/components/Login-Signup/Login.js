import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
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
                <h1 className="text-center">Log In Page</h1>
                <div className="flex flex-wrap justify-center">
                    {this.props.error && <div>{this.props.error}</div>}<br />
                    <form onSubmit={(e) => this.props.handleLogin(e, this.state)}
                        className="mb-4 text-center w-3/5 border-solid border-2 border-gray-900 bg-blackcoral max-w-sm m-auto"
                    >
                        <div className="my-2">
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
                        <div className="mb-2">
                            <input 
                                type="submit" 
                                value="Login"
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

export default Login;