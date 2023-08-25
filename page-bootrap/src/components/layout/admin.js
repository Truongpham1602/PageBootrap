import React from 'react'
import '../css/admin.css';
import { Link, Outlet } from 'react-router-dom';
import { BsGrid } from "react-icons/bs";

export default function admin() {
    return (
        <>
            <div class="navbar navbar-expand-lg">
                <div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbarbrand" to="/">
                        <img className='img-logo' src='https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-small.svg'></img>
                    </Link>
                </div>

                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
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
                                                            <ul class="nav  ms-1">
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
                                                            <i className="fas fa-columns"></i>
                                                        </div>
                                                        Tài khoản
                                                        <div className="sb-sidenav-collapse-arrow">
                                                            {/* <i className="fas fa-angle-down"></i> */}
                                                        </div>
                                                    </Link>
                                                    <Link
                                                        className="nav-link"
                                                        to="#"
                                                        activeClassName="active"
                                                    >
                                                        <div className="sb-nav-link-icon">
                                                            <i className="fas fa-store-alt-slash"></i>
                                                        </div>
                                                        Quyền
                                                    </Link>
                                                    <Link
                                                        className="nav-link"
                                                        to="#"
                                                        activeClassName="active"
                                                    >
                                                        <div className="sb-nav-link-icon">
                                                            <i className="fas fa-store-alt-slash"></i>
                                                        </div>
                                                        Sản phẩm
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <i className="fas fa-address-card"></i>
                                                        </div>
                                                        Loại sản phẩm
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <i className="fas fa-table"></i>
                                                        </div>
                                                        Đơn hàng
                                                    </Link>
                                                    <Link className="nav-link collapsed" to="#">
                                                        <div className="sb-nav-link-icon">
                                                            <i className="fas fa-shopping-bag"></i>
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
