import React from 'react';
import './css/main.css';
import './css/util.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import $ from 'jquery';
import 'tilt.js';
import { ToastContainer, toast } from 'react-toastify';
// import { useState } from 'react';

class login extends React.Component {
    componentDidMount(){
        $('.js-tilt').tilt({
            scale: 1.1
		})
    }

    state ={
        userName: "",
        password: ""
    }
    // const [AdminUser, setAdminUser] = useState({ userName: "", password: "", firstName: "", lastName: "", email: "" });
    
    render(){


        const styleToast = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        }
        const notifySuccess = (text) => {
            toast.success(text, styleToast)
        };
        const notifyWarning = (text) => {
            toast.warning(text, styleToast);
        };

        const [check, setCheck] = this.state({
            userName: "",
            password: "",
        });

        const handleOnchangeInput = (e, id) => {
            const copyUser = { ...this.state };
            let checkr = { ...check };
            copyUser[id] = e.target.value;
            if (copyUser[id] == 0) {
                if (id === 'userName') checkr[id] = "UserName cannot be empty !"
                if (id === 'password') checkr[id] = "Password cannot be empty !"
            } else {
                checkr[id] = ''
            }
    
            setCheck({ ...checkr })
            this.setState({ ...copyUser });
        };
    
        const hanleLogin = async () => {
            // let ch0 = { ...check };
            // if (AdminUser.userName?.trim().length <= 0
            //     && AdminUser.password?.trim().length <= 0) {
            //     ch0["userName"] = "UserName cannot be empty !"
            //     ch0["password"] = "Password cannot be empty !"
            //     setCheck({ ...ch0 })
            //     return
            // }
            // else if (AdminUser.userName?.trim().length <= 0) {
            //     ch0["userName"] = "UserName cannot be empty !"
            //     setCheck({ ...ch0 })
            //     return
            // }
            // else if (AdminUser.password?.trim().length <= 0) {
            //     ch0["password"] = "Password cannot be empty !"
            //     setCheck({ ...ch0 })
            //     return
            // }
            // else if (AdminUser.userName.trim().length > 0
            //     || AdminUser.password.trim().length > 0) {
            //     return
            // }
    
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            var raw = JSON.stringify({
                "userName": this.state.userName,
                "password": this.state.password
            });
    
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
    
            fetch("http://localhost:8086/poseidon/public/customer/user/login", requestOptions)
                .then(response => {
                    if (response.ok || response.status == 400) {
                        return response.json()
                    }
                    throw Error(response.status)
                })
                .then(result => {
                    if (result.code == 200) {
                        localStorage.getItem("accessToken", result.accessToken)
                        notifySuccess("Login in successfully")
                    } else {
                        notifyWarning(result.message)
                    }
                    // console.log(result)
                })
                .catch(error => {
                    // console.log('error', error)
                    notifyWarning("The system is under maintenance")
                });
        };


        return (
            <>
                <div className="limiter">
                <ToastContainer />
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <Tilt className="login100-pic js-tilt" data-tilt>
                                <img src={require('./images/img-01.png')} alt="IMG" />
                            </Tilt>

                            <form className="login100-form validate-form">
                                <span className="login100-form-title">
                                    Member Login
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" 
                                    name="userName" 
                                    placeholder="User Name" 
                                    value={this.state.userName}
                                    onChange={(e) => handleOnchangeInput(e, "userName")}
                                    />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={() => hanleLogin()}>
                                        Login
                                    </button>
                                </div>

                                <div className="text-center p-t-12">
                                    <span className="txt1">
                                    &#32;Forgot&#32;
                                    </span> 
                                    <a className="txt2" href="#">
                                        Username / Password?
                                    </a>
                                </div>

                                <div className="text-center p-t-136">
                                    <Link className="txt2" to="/register">
                                        Create your Account
                                        <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default login;