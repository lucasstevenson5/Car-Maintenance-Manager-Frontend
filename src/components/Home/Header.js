import React from 'react';
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <header className="text-gainsboro border-solid border-b-2 border-black block text-center sm:flex sm:justify-between p-8 bg-blackcoral text-xl hover:text-3xl">
                <Link to="/" className="hover:text-black hover:underline hover:text-3xl">Car Maintenance Manager</Link>
                <nav className="text-center border-t-2 sm:border-none">
                    {!props.currentUser && <Link to="/signup" 
                        className="mr-4 hover:text-black hover:underline">Sign Up</Link>}

                    {!props.currentUser && <Link to="/login" 
                        className="ml-4 hover:text-black hover:underline">Log In</Link>}

                    {props.currentUser && <Link to="/profile" 
                        className="mr-4 hover:text-black hover:underline">Your Profile</Link>}

                    {props.currentUser && <button onClick={(e) => props.handleLogout(e)} 
                        className="ml-4 hover:text-black hover:underline">Logout</button>}
                </nav>
            </header>
        </div>
    )
}

export default Header;