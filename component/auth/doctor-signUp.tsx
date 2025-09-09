"use client";
import React, { useState } from "react";

const DoctorSignUp: React.FC = () => {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        user_name: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        gender: "",
        birthday: "",
        biography: "",
        password: "",
        address: "",
        city: "",
        state: "",
        country: "",
        postal_code: "",
        role_id: "2", // Doctor
        terms: false,
    });
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [msg, setMsg] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox"
                ? (e.target as HTMLInputElement).checked
                : value,
        }));
    };

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setProfileImage(e.target.files[0]);
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePrev = () => setStep(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMsg("");
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (key !== "terms") formData.append(key, value as string);
        });
        if (profileImage) formData.append("profile_image", profileImage);

        const res = await fetch("/api/register", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();
        setMsg(res.ok ? "Registration successful!" : data.error || "Registration failed");
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
                                            <img src="/img/shape-01.png" alt="" />
                                        </div>
                                        <div className="shape-img-right">
                                           <img src="/img/shape-02.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="widget-set">
                                        <div className="account-info">
                                            <div className="widget-content multistep-form">
                                                <fieldset id="first">
                                                    <div className="login-back">
                                                        <a href="index.html"><i className="fa-solid fa-arrow-left-long"></i> Back</a>
                                                    </div>
                                                    <div className="login-title">
                                                        <h3>Doctor Signup</h3>
                                                        <p className="mb-0">Welcome back! Please enter your details.</p>
                                                    </div>
                                                    <div className="widget-setcount">
                                                        <ul id="progressbar">
                                                            <li className="progress-active">
                                                                <div className="step-box">
                                                                    <div className="step-icon">
                                                                        <span>
                                                                            <img src="/img/icons/signup-users.svg" alt="icon"/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="step-content">
                                                                        <p>Step 1</p>
                                                                        <h4>Create Account</h4>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="step-box">
                                                                    <div className="step-icon">
                                                                        <span>
                                                                            <img src="/img/icons/signup-unlock.svg" alt="icon"/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="step-content">
                                                                        <p>Step 2</p>
                                                                        <h4>Verify Account</h4>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label>Name</label>
                                                            <input type="text" className="form-control" placeholder="Enter Your Name"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input type="text" className="form-control" placeholder="Enter Your Email"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Phone Number</label>
                                                            <input className="form-control form-control-lg group_formcontrol form-control-phone" id="phone" name="phone" type="text"/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Password
                                                            </label>
                                                            <div className="pass-group">
                                                                <input type="password" className="form-control pass-input-sub" placeholder="*************"/>
                                                                    <span className="feather-eye toggle-password-sub"></span>
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="widget-btn">
                                                        <a className="btn btn-primary btn-block next_btn">Next</a>
                                                    </div>
                                                </fieldset>
                                                <fieldset className="field-card">
                                                    <div className="login-back">
                                                        <a href="javascript:void(0);" className="prev_btn">
                                                            <i className="fa-solid fa-arrow-left-long"></i> Back
                                                        </a>
                                                    </div>
                                                    <div className="login-title">
                                                        <h3>Security Verification</h3>
                                                        <p className="mb-0">To Secure your Account create complete the following verify request.</p>
                                                    </div>
                                                    <div className="widget-setcount">
                                                        <ul id="progressbar">
                                                            <li className="progress-active">
                                                                <div className="step-box">
                                                                    <div className="step-icon">
                                                                        <span>
                                                                            <img src="/img/icons/signup-users.svg" alt="icon"/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="step-content">
                                                                        <p>Step 1</p>
                                                                        <h4>Create Account</h4>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="step-box">
                                                                    <div className="step-icon">
                                                                        <span>
                                                                            <img src="/img/icons/signup-unlock.svg" alt="icon"/>
                                                                        </span>
                                                                    </div>
                                                                    <div className="step-content">
                                                                        <p>Step 2</p>
                                                                        <h4>Verify Account</h4>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <form action="#" className="signup-verfication-form">
                                                        <div className="form-group">
                                                            <div className="form-group-flex">
                                                                <label>Phone Number Verfication Code</label>
                                                                <a href="javascript:void(0);" className="forgot-link">Get Code</a>
                                                            </div>
                                                            <div className="pass-group">
                                                                <input className="form-control form-control-lg group_formcontrol form-control-phone" id="phone-number" name="phone-number" type="text"/>
                                                            </div>
                                                            <p className="signup-code">Enter the 6 digit code sent to 98****4578</p>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="form-group-flex">
                                                                <label>Email Verfication Code</label>
                                                                <a href="javascript:void(0);" className="forgot-link">Get Code</a>
                                                            </div>
                                                            <div className="pass-group">
                                                                <input type="text" className="form-control form-control-phone" placeholder=""/>
                                                            </div>
                                                            <p className="signup-code">Enter the 6 digit code sent to ex****@gmail.com</p>
                                                        </div>
                                                        <div className="mb-3 form-check-box terms-check-box">
                                                            <div className="form-group-flex">
                                                                <label className="custom_check">
                                                                    I have read and agree to AidXpert's <a href="terms-conditions.html" target="_blank">Terms of Service</a> and <a href="privacy-policy.html" target="_blank">Privacy Policy.</a>
                                                                    <input type="checkbox" name="Terms"/>
                                                                        <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <button className="btn btn-primary btn-block" type="submit">Submit</button>
                                                        </div>
                                                    </form>
                                                </fieldset>
                                            </div>
                                        </div>
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

export default DoctorSignUp;