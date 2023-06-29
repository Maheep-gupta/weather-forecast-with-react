import React from 'react'
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar bg-body-dark" >
            <div className="container-fluid">
                <a className="navbar-brand " style={{color:'#fff'}} href="/">
                    <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
                        Weather Me
                </a>
            </div>
        </nav>
    )
}

export default Navbar