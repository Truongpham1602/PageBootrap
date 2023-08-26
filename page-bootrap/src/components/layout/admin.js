import React from 'react'
import '../css/admin.css';
import { Link, Outlet } from 'react-router-dom';
import { BsGrid, BsPersonRolodex, BsIntersect, BsPerson, BsCardChecklist, BsCheck2Square, BsPercent } from "react-icons/bs";

export default function admin() {
    return (
        <>
            <div className="navbar navbar-expand-lg member-logo">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbarbrand" to="/">
                    <img className='imglogo' src='https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-dark.svg'></img>
                </Link>

                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {/*  */}
                        <div className="sb-nav-fixed">
                            <div className="layoutSidenav">
                                <div className="layoutSidenav_nav">
                                    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                                        <div className="sb-sidenav-menu">
                                            <div className="nav">

                                                <Link className="navbar-brand ps-3 img-admin" to="/">
                                                    <span className='textLogo d-none d-sm-inline'>Metronic</span>
                                                    <img className='img-logo' src='https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg'></img>
                                                </Link>

                                                <hr className='text-white d-none d-sm-block' />

                                                <div className='Dashboards'>
                                                    <button className="accordion-button" type="" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        <div className="sb-nav-link-icon">
                                                            <BsGrid />
                                                        </div>
                                                        <span className='d-none d-sm-block'>Dashboards</span>
                                                    </button>
                                                    <div id="collapseOne" className="collapse">
                                                        <div className="accordionbodyy">
                                                            <ul className="nav  ms-1">
                                                                <li className='nav-item itme'><a className="nav-link" href="#">Action</a></li>
                                                                <li className='nav-item itme'><a className="nav-link" href="#">Another action</a></li>
                                                                <li className='nav-item itme'><a className="nav-link" href="#">Something else here</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="menu-item pt-1 d-none d-sm-block">
                                                        {/* begin:Menu content */}
                                                        <div className="menu-content">
                                                            <span className="menu-heading fw-bold text-uppercase">Pages</span>
                                                        </div>
                                                        {/* end:Menu content */}
                                                    </div>
                                                    <Link
                                                        className="nav-link collapsed"
                                                        to="#"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseLayouts"
                                                        aria-expanded="false"
                                                        aria-controls="collapseLayouts"
                                                    >
                                                        <div className="sb-nav-link-icon">
                                                            <BsPersonRolodex />
                                                        </div>
                                                        Tài khoản
                                                        <div className="sb-sidenav-collapse-arrow">
                                                            {/* <i className="fas fa-angle-down"></i> */}
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="nav-link"
                                                        to="#"
                                                        activeclassname="active"
                                                    >
                                                        <div className="sb-nav-link-icon">
                                                            < BsPerson />
                                                        </div>
                                                        Quyền
                                                    </Link>
                                                    <Link
                                                        className="nav-link"
                                                        to="#"
                                                        activeclassname="active"
                                                    >
                                                        <div className="sb-nav-link-icon">
                                                            <BsIntersect />
                                                        </div>
                                                        Sản phẩm
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <BsCardChecklist />
                                                        </div>
                                                        Loại sản phẩm
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <BsCheck2Square />
                                                        </div>
                                                        Đơn hàng
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <BsPercent />
                                                        </div>
                                                        Khuyến mãi
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sb-sidenav-footer">
                                            <div className="small">Logged in as:</div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                </div>
            </div>



        </>
    )
}
