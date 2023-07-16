import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <div className='container_fluid'>
                <div className='row'>
                    <div className='col'>
                        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "chocolate" }}>
                            <div class="container-fluid">
                                <a class="navbar-brand me-auto" href="#"><img src='./burger.jpg' style={{ height: "40px" }} /></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul class="navbar-nav mb-2 mb-lg-0" style={{ fontSize: "25px" }}>
                                        <li class="nav-item">
                                            <Link to="/">Burger</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link to="/form">Login</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;