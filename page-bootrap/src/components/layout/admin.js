import React from 'react'
import '../css/admin.css';
import { Link, Outlet } from 'react-router-dom';

export default function admin() {
    return (
        <>
            <div className="sb-nav-fixed">
                <div className="layoutSidenav">
                    <div className="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark"
                            id="sidenavAccordion"
                        >
                            <div className="sb-sidenav-menu">
                                <div className="nav">

                                    <Link className="navbar-brand ps-3 row" to="/" style={{ color: 'orange' }}>
                                        <img className='col-3 img-logo' src='https://preview.keenthemes.com/metronic8/demo1/assets/media/logos/default-dark.svg'></img>
                                        {/* <h3 className='col-9'>LuTra Store</h3> */}
                                    </Link>

                                    <Link className="nav-link" to="" end
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseLayouts"
                                        aria-expanded="false"
                                        aria-controls="collapseLayouts">
                                        <div className="sb-nav-link-icon">
                                            <i className="fas fa-tachometer-alt"></i>
                                        </div>
                                        Bảng điều khiển
                                    </Link>
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
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as:</div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
