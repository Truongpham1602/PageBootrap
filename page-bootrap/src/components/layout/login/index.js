import React from "react";
import "./css/main.css";
import "./css/util.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import { Link, Navigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import $ from "jquery";
import "tilt.js";
import axios from "axios";
import { DOMAIN } from "../../../util/url.constant";
import Swal from "sweetalert2";

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userName: "",
      password: "",
      checkuserName: "",
      checkpassword: "",
    };
  }
  setParams = (event) => {
    if (event.target.name === "userName") {
      this.setState({ ["checkuserName"]: "" });
    } else if (event.target.name === "password") {
      this.setState({ ["checkpassword"]: "" });
    }
    this.setState({ [event.target.name]: event.target.value });
  };

  login = () => {
    if (this.state.userName.trim() === "") {
      this.setState({ ["checkuserName"]: "null" });
    }
    if (this.state.password.trim() === "") {
      this.setState({ ["checkpassword"]: "null" });
    }
    if (
      this.state.userName.trim() === "" ||
      this.state.password.trim() === ""
    ) {
      return;
    }

    let data = JSON.stringify({
      userName: this.state.userName,
      password: this.state.password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: DOMAIN + "poseidon/public/api/v1/auth/authenticate",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        localStorage.getItem("access_token", response.data.access_token);
        this.setState({ ["user"]: "abc" });
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire(error.response.data.message, "", "warning");
        } else {
          Swal.fire("Error", "Lỗi server", "error");
        }
      });

    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //     "userName": this.state.userName,
    //     "password": this.state.password
    // });

    // var requestOptions = {
    //     method: 'POST',
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: 'follow'
    // };

    // fetch(`${DOMAIN}poseidon/public/api/v1/auth/authenticate`, requestOptions)
    // .then(response =>{
    //     if(response.ok || response.status == 400){
    //         alert(response.ok);
    //         return response.json()
    //     }
    //     throw Error(response.status)
    // })
    // .then(result => {
    //     if(result.code == 200){
    //         console.log("thanh cong");
    //     }
    // })
    // .catch(error => alert('error', error));

    // var settings = {
    //     "url": (`${DOMAIN}/poseidon/public/api/v1/auth/authenticate`),
    //     "method": "POST",
    //     crossDomain : true,
    //     "timeout": 0,
    //     "headers": {
    //       "Content-Type": "application/json"
    //     },
    //     "data": JSON.stringify({
    //       "userName": this.state.userName,
    //       "password": this.state.password
    //     }),
    //   };

    //   $.ajax(settings).done(function (response) {
    //     console.log(response);
    //   });
  };
  componentDidMount() {
    $(".js-tilt").tilt({
      scale: 1.1,
    });
  }

  render() {
    return (
      <>
        {this.state.user && <Navigate to="/" replace={true} />}
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <Tilt className="login100-pic js-tilt" data-tilt>
                <img src={require("./images/img-01.png")} alt="IMG" />
              </Tilt>

              <form className="login100-form validate-form">
                <span className="login100-form-title">Member Login</span>

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="userName"
                    placeholder="User Name"
                    onChange={this.setParams}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </div>
                {this.state.checkuserName === "null" && (
                  <p style={{ color: "red", marginBottom: "2%" }}>
                    Vui lòng nhập User Name !
                  </p>
                )}

                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.setParams}
                  />
                  <span className="focus-input100"></span>
                  <span className="symbol-input100">
                    <i className="fa fa-lock" aria-hidden="true"></i>
                  </span>
                </div>
                {this.state.checkpassword === "null" && (
                  <p style={{ color: "red", marginBottom: "2%" }}>
                    Vui lòng nhập Password !
                  </p>
                )}

                <div className="container-login100-form-btn">
                  <button
                    type="button"
                    className="login100-form-btn"
                    onClick={this.login}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center p-t-12">
                  <span className="txt1">&#32;Forgot&#32;</span>
                  <a className="txt2" href="#">
                    Username / Password?
                  </a>
                </div>

                <div className="text-center p-t-20">
                  <Link className="txt2" to="/register">
                    Create your Account
                    <i
                      className="fa fa-long-arrow-right m-l-5"
                      aria-hidden="true"
                    ></i>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default login;
