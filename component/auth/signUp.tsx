import React from "react";
import Image from "next/image";

const SignUp = () => {
    return (
        <div>
            <div className="login-content-info">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="account-content">
                                <div className="login-shapes">
                                    <div className="shape-img-left">
                                        <Image src="/img/shape-01.png" alt="" />
                                    </div>
                                    <div className="shape-img-right">
                                        <Image src="/img/shape-02.png" alt="" />
                                    </div>
                                </div>
                                <div className="account-info">
                                    <div className="login-back">
                                        <a href="/login"><i className="fa-solid fa-arrow-left-long"></i> Back to Login</a>
                                    </div>
                                    <div className="login-title">
                                        <h3>Signup</h3>
                                    </div>
                                    <div className="signup-option-btns">
                                        <a href="/signUp/doctor" className="signup-btn-info">
                                            <div className="signup-info">
                                                <div className="signup-icon">
                                                    <Image src="/img/icons/doctor.png" alt="" />
                                                </div>
                                                <div className="signup-content">
                                                    <h4>Doctor</h4>
                                                    <p>Regsiter as Doctor</p>
                                                </div>
                                            </div>
                                            <div className="signup-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <a href="/signUp/patient" className="signup-btn-info">
                                            <div className="signup-info">
                                                <div className="signup-icon">
                                                    <Image src="/img/icons/patient.png" alt="" />
                                                </div>
                                                <div className="signup-content">
                                                    <h4>Patient</h4>
                                                    <p>Regsiter as Patient</p>
                                                </div>
                                            </div>
                                            <div className="signup-arrow">
                                                <i className="fas fa-arrow-right"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SignUp;