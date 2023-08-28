import React from 'react';
import './css/main.css';
import './css/util.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import login from '../login'
import { Link } from 'react-router-dom';
import { Tilt } from 'react-tilt';
import $ from 'jquery';
import 'tilt.js';

class register extends React.Component {

    componentDidMount(){
        $('.js-tilt').tilt({
			scale: 1.1
		})
    }

    render(){
        return (
            <>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src={require('./images/img-01.png')} alt="IMG" />
                            </div>

                            <form className="login100-form validate-form">
                                <span className="login100-form-title">
                                    Infomation
                                </span>

                                <div className="wrap-input100 validate-input" data-validate = "Vui lòng nhập họ tên">
                                    <input className="input100" type="text" name="user" placeholder="User Name" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" name="pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input className="input100" type="password" name="re-pass" placeholder="Password" />
                                    <span className="focus-input100"></span>
                                    <span className="symbol-input100">
                                        <i className="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Register
                                    </button>
                                </div>

                                

                                <div className="text-center p-t-136">
                                    <Link className="txt2" to="/login">
                                        Login
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
export default register;