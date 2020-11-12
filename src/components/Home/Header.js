import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <header className="flex flex-row justify-between p-8 bg-blackcoral">
                <Link to="/" className="hover:text-gainsboro hover:underline">Car Maintenance Manager</Link>
                <nav>
                    {!props.currentUser && <Link to="/signup" 
                        className="hover:text-gainsboro hover:underline">Sign Up</Link>}

                    {!props.currentUser && <Link to="/login" 
                        className="ml-8 hover:text-gainsboro hover:underline">Log In</Link>}

                    {props.currentUser && <Link to="/profile" 
                        className="mr-8 hover:text-gainsboro hover:underline">Your Profile</Link>}

                    {props.currentUser && <button onClick={(e) => props.handleLogout(e)} 
                        className="mr-8 hover:text-gainsboro hover:underline">Logout</button>}

                </nav>
            </header>
        </div>
    )
}

export default Header;