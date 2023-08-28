import  React from 'react';
import './css/fonts.googleapis.com.css';
import './css/style.css';
import '../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css'

class Register extends React.Component {

    render(){
        return (
            <>
               <div class="img registerBody" style={{  backgroundImage: require('./images/bg.jpg')  }}>
                    <section class="ftco-section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-6 text-center mb-5">
                                    <h2 class="heading-section">Sign Up #09</h2>
                                </div>
                            </div>
                            <div class="row justify-content-center">
                                <div class="col-md-7 col-lg-5">
                                    <div class="login-wrap">
                                <h3 class="text-center mb-4">Create Your Account</h3>
                                        <form action="#" class="signup-form">
                                    <div class="form-group mb-3">
                                        <label class="label" for="name">Full Name</label>
                                        <input type="text" class="form-control" placeholder="John Doe"/>
                                        <span class="icon fa fa-user-o"></span>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="label" for="email">Email Address</label>
                                        <input type="text" class="form-control" placeholder="johndoe@gmail.com"/>
                                        <span class="icon fa fa-paper-plane-o"></span>
                                    </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                <input id="password" type="password" class="form-control" placeholder="Password"/>
                                <span toggle="#password" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <span class="icon fa fa-lock"></span>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                <input id="password-confirm" type="password" class="form-control" placeholder="Password"/>
                                <span toggle="#password-confirm" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                                <span class="icon fa fa-lock"></span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-primary submit px-3">Sign Up</button>
                                </div>
                            </form>
                            <p>I'm already a member! <a data-toggle="tab" href="#signin">Sign In</a></p>
                            </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
    }
export default Register;