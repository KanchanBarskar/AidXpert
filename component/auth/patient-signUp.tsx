"use client";

import React, { useState } from "react";
import Link from "next/link";

const PatientSignUp: React.FC = () => {
    const [form, setForm] = useState({
        phone: "",
        firstName: "",
        lastName: "",
        terms: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!form.phone) newErrors.phone = "Phone number is required";
        if (!form.firstName) newErrors.firstName = "First name is required";
        if (!form.lastName) newErrors.lastName = "Last name is required";
        if (!form.terms) newErrors.terms = "You must agree to the terms";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // Submit logic here
        alert("Registered successfully!");
    };

    return (
        <div className="login-body">
            <div className="main-wrapper">
                <div className="login-content-info">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="account-content">
                                    <div className="login-shapes">
                                        <div className="shape-img-left">
                                            <img src="/img/shape-01.png" alt=""/>
                                        </div>
                                        <div className="shape-img-right">
                                            <img src="/img/shape-02.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="account-info">
                                        <div className="login-back">
                                            <a href="signup.html"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                                        </div>
                                        <div className="login-title">
                                            <h3>Patient Signup</h3>
                                            <p className="mb-0">Welcome back! Please enter your details.</p>
                                        </div>
                                        <form action="#">
                                            <div className="form-group">
                                                <label>Phone Number</label>
                                                <input className="form-control form-control-lg group_formcontrol form-control-phone" id="phone" name="phone" type="text"/>
                                            </div>
                                            <div className="form-group">
                                                <label>First Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Your First Name"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Last Name</label>
                                                <input type="text" className="form-control" placeholder="Enter Your Last Name"/>
                                            </div>
                                            <div className="form-group form-check-box terms-check-box">
                                                <div className="form-group-flex">
                                                    <label className="custom_check">
                                                        I have read and agree to AidXpert's <a href="terms-conditions.html" target="_blank">Terms of Service</a> and <a href="privacy-policy.html" target="_blank">Privacy Policy.</a>
                                                        <input type="checkbox" name="Terms"/>
                                                            <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-block" type="submit">Register Now</button>
                                            </div>
                                            <div className="form-group back-btn-light">
                                                <button className="btn btn-light btn-block" type="submit">Create an Account</button>
                                            </div>
                                            <div className="account-signup">
                                                <p>Already a Member? <a href="login-email.html">Sign in</a></p>
                                            </div>
                                        </form>
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

export default PatientSignUp;