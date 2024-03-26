import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GiRotaryPhone } from "react-icons/gi";
import { TfiEmail } from "react-icons/tfi";
import { BsPersonCircle } from 'react-icons/bs';


export const Navbar = () => {
    const history = useHistory()
    const items = [
        {
            label: <li onClick={() => history.push("/blog")}>Blog Grid</li>,
            key: '0',
        },
        {
            label: <li onClick={() => history.push("/single")}>Blog Details</li>,
            key: '1',
        }
    ];

    return (
        <div>
            <div className="container-fluid bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0"></div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-white px-3" href="">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container position-relative" style={{ zIndex: 9 }}>
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" className="navbar-brand">
                            {/* <h1 class="m-0 display-5 text-white"><span class="text-primary">i</span>DESIGN</h1> */}
                            <img
                                src="img/change-removebg-preview1.png"
                                alt="infinity interior"
                                style={{ width: 250 }}
                            />
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between px-3"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav ml-auto py-0">
                                <li onClick={() => history.push("/")}>
                                    Home
                                </li>
                                <li onClick={() => history.push("/about")}>
                                    About
                                </li>
                                <li onClick={() => history.push("/service")}>
                                    Service
                                </li>
                                <li onClick={() => history.push("/project")}>
                                    Project
                                </li>
                                <div className="nav-item dropdown">

                                    <Dropdown
                                        menu={{
                                            items,
                                        }}
                                        trigger={['click']}
                                    >
                                        <li onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                Pages
                                                <DownOutlined />
                                            </Space>
                                        </li>
                                    </Dropdown>
                                </div>
                                <li onClick={() => history.push("/contact")}>Contact</li>
                                <li onClick={() => history.push("/oders")}>
                                    Book Oders
                                </li>
                                <li onClick={() => history.push("/login")}><BsPersonCircle className='login-person-circle' /></li>
                                <div className="dropdown-menu rounded-0 m-0">
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
            {/* Under Nav Start */}
            <div className="container-fluid bg-white py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-left mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <center><HiOutlineBuildingOffice2 className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /></center>
                                <div className="d-flex flex-column">
                                    <h5>Our Office</h5>
                                    <p className="m-0"> The Grand Plaza, Vesu, Surat</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <center><TfiEmail className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /> </center>

                                <div className="d-flex flex-column">
                                    <h5>Email Us</h5>
                                    <p className="m-0">Infinity@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <center><GiRotaryPhone className="flaticon-office font-weight-normal text-primary m-0 mr-3" style={{ width: "50px", height: "50px" }} /></center>
                                <div className="d-flex flex-column">
                                    <h5>Call Us</h5>
                                    <p className="m-0">+91 932-465-955</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Under Nav End */}
        </div>
    )
}

