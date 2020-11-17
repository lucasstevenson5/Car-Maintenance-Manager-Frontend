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
                <h1 className="text-center text-2xl">Log In Page</h1>
                {this.props.errorLogin && 
                    <div className="text-center text-red-500 font-bold">{this.props.errorMsgLogin}</div>
                }
                <div className="bg-gainboro text-center pb-10 pt-4">
                    <form onSubmit={(e) => this.props.handleLogin(e, this.state)}
                        className="bg-blackcoral p-2 border-solid border-2 border-gray-900 w-3/5 max-w-sm text-center m-auto"
                    >
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
                        <input 
                            type="submit" 
                            value="Login"
                            className="border-solid border-b-4 border-2 border-starblue hover:text-gray-400 
                            hover:underline bg-gainsboro hover:bg-starblue p-2 text-starblue
                            rounded m-2 hover:border-black"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;