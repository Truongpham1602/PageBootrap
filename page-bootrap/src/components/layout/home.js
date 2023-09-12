import React, { useState, useEffect } from "react";
import "../css/home.css";
import { Link, Outlet } from "react-router-dom";
import MODAL from "../layout/page4/modal.js";
import UpFiles from "./upLoad.js";
import authService from "../../services/auth.services";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, [currentUser]);

  const logout = () => {
    authService.logout();
    setCurrentUser(undefined);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar scroll
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="page2">
                  Page2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="page3">
                  Page3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="page4">
                  Page4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="admin">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="sidebar">
                  SideBar
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li> */}
              {currentUser ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={logout}>
                    Logout
                  </Link>
                </li>
              ) : (
                <div className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </div>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Link
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <MODAL />
      {currentUser && <UpFiles />}
      <Outlet />
    </>
  );
}
