"use client";
import React from "react";

const DoctorDashboard = () => {
    return (
        <div className="main-wrapper">
            <div className="breadcrumb-bar-two">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title">Doctor Dashboard</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item" aria-current="page">Doctor Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

                            <div className="profile-sidebar">
                                <div className="widget-profile pro-widget-content">
                                    <div className="profile-info-widget">
                                        <a href="#" className="booking-doc-img">
                                            <img src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
                                        </a>
                                        <div className="profile-det-info">
                                            <h3>Dr. Ganesh K</h3>
                                            <div className="patient-details">
                                                <h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard-widget">
                                    <nav className="dashboard-menu">
                                        <ul>
                                            <li className="active">
                                                <a href="doctor-dashboard.html">
                                                    <i className="fas fa-columns"></i>
                                                    <span>Dashboard</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="appointments.html">
                                                    <i className="fas fa-calendar-check"></i>
                                                    <span>Appointments</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="my-patients.html">
                                                    <i className="fas fa-user-injured"></i>
                                                    <span>My Patients</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="schedule-timings.html">
                                                    <i className="fas fa-hourglass-start"></i>
                                                    <span>Schedule Timings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="available-timings.html">
                                                    <i className="fas fa-clock"></i>
                                                    <span>Available Timings</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="invoices.html">
                                                    <i className="fas fa-file-invoice"></i>
                                                    <span>Invoices</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="chat-doctor.html">
                                                    <i className="fas fa-comments"></i>
                                                    <span>Message</span>
                                                    <small className="unread-msg">23</small>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="doctor-profile-settings.html">
                                                    <i className="fas fa-user-cog"></i>
                                                    <span>Profile Settings</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href="doctor-change-password.html">
                                                    <i className="fas fa-lock"></i>
                                                    <span>Change Password</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="index.html">
                                                    <i className="fas fa-sign-out-alt"></i>
                                                    <span>Logout</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card dash-card">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget dct-border-rht">
                                                        <div className="circle-bar circle-bar1">
                                                            <div className="circle-graph1" data-percent="75">
                                                                <img src="assets/img/icon-01.png" className="img-fluid" alt="patient"/>
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Total Patient</h6>
                                                            <h3>1500</h3>
                                                            <p className="text-muted">Till Today</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget dct-border-rht">
                                                        <div className="circle-bar circle-bar2">
                                                            <div className="circle-graph2" data-percent="65">
                                                                <img src="assets/img/icon-02.png" className="img-fluid" alt="Patient"/>
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Today Patient</h6>
                                                            <h3>160</h3>
                                                            <p className="text-muted">08, Sep 2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-lg-4">
                                                    <div className="dash-widget">
                                                        <div className="circle-bar circle-bar3">
                                                            <div className="circle-graph3" data-percent="50">
                                                                <img src="assets/img/icon-03.png" className="img-fluid" alt="Patient"/>
                                                            </div>
                                                        </div>
                                                        <div className="dash-widget-info">
                                                            <h6>Appoinments</h6>
                                                            <h3>85</h3>
                                                            <p className="text-muted">08, Sep 2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mb-4">Patient Appoinment</h4>
                                    <div className="appointment-tab">

                                        <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#upcoming-appointments" data-bs-toggle="tab">Upcoming</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#today-appointments" data-bs-toggle="tab">Today</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content">

                                            <div className="tab-pane show active" id="upcoming-appointments">
                                                <div className="card card-table mb-0">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th className="text-center">Paid Amount</th>
                                                                        <th className="text-center">Consultation Requested</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a href="patient-profile.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient9.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Sudhir B <span>#PT0016</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>12 Sep 2023 <span className="d-block text-info">10.00 AM</span></td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td className="text-center">Rs.500/-</td>
                                                                        <td className="text-center">
                                                                            <div className="consultation-types" style={{ display: "inline-block" }}>
                                                                                <a href="javascript:void(0);" style={{ width: "40px", minWidth: "40px", color: "#eb1831", border: "1px solid #eb1831" }}>
                                                                                    <i className="feather-video" style={{ marginRight: "0px" }}></i>
                                                                                </a>

                                                                            </div>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <div className="table-action">
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                    <i className="far fa-eye"></i> View
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                    <i className="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                    <i className="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a href="patient-profile.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Sneha K<span>#PT0001</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>13 Sep 2023 <span className="d-block text-info">11.00 AM</span></td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">Rs. 300/-</td>
                                                                        <td className="text-center">
                                                                            <div className="consultation-types" style={{ display: "inline-block" }}>
                                                                                <a href="javascript:void(0);" style={{ width: "40px", minWidth: "40px", color: "#34b74f", border: "1px solid #34b74f" }}>
                                                                                    <i className="feather-mic" style={{ marginRight: "0px" }}></i>
                                                                                </a>

                                                                            </div>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <div className="table-action">
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                    <i className="far fa-eye"></i> View
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                    <i className="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                    <i className="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="tab-pane" id="today-appointments">
                                                <div className="card card-table mb-0">
                                                    <div className="card-body">
                                                        <div className="table-responsive">
                                                            <table className="table table-hover table-center mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th className="text-center">Paid Amount</th>
                                                                        <th className="text-center">Consultation Requested</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a href="patient-profile.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient10.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Sunil K <span>#PT0006</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>9 Sep 2023 <span className="d-block text-info">6.00 PM</span></td>
                                                                        <td>Fever</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">Rs.300/-</td>
                                                                        <td className="text-center">
                                                                            <div className="consultation-types" style={{ display: "inline-block" }}>
                                                                                <a href="javascript:void(0);" style={{ width: "40px", minWidth: "40px", color: "#eb1831", border: "1px solid #eb1831" }}>
                                                                                    <i className="feather-video" style={{ marginRight: "0px" }}></i>
                                                                                </a>

                                                                            </div>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <div className="table-action">
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                    <i className="far fa-eye"></i> View
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                    <i className="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                    <i className="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a href="patient-profile.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient7.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Monika G <span>#PT0006</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>9 Sep 2023 <span className="d-block text-info">5.00 PM</span></td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">Rs.300/-</td>
                                                                        <td className="text-center">
                                                                            <div className="consultation-types" style={{display: "inline-block"}}>
                                                                                <a href="javascript:void(0);" style={{ width: "40px", minWidth: "40px", color: "#34b74f", border: "1px solid #34b74f" }}>
                                                                                    <i className="feather-mic" style={{ marginRight: "0px" }}></i>
                                                                                </a>

                                                                            </div>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <div className="table-action">
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                    <i className="far fa-eye"></i> View
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                    <i className="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                    <i className="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 className="table-avatar">
                                                                                <a href="patient-profile.html" className="avatar avatar-sm me-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient11.jpg" alt="User Image"/></a>
                                                                                <a href="patient-profile.html">Swami G<span>#PT0006</span></a>
                                                                            </h2>
                                                                        </td>
                                                                        <td>14 Nov 2019 <span className="d-block text-info">4.00 PM</span></td>
                                                                        <td>General</td>
                                                                        <td>Old Patient</td>
                                                                        <td className="text-center">Rs.300/-</td>
                                                                        <td className="text-center">
                                                                            <div className="consultation-types" style={{ display: "inline-block" }}>
                                                                                <a href="javascript:void(0);" style={{ width: "40px", minWidth: "40px", color: "#34b74f", border: "1px solid #34b74f" }}>
                                                                                    <i className="feather-mic" style={{ marginRight: "0px" }}></i>
                                                                                </a>

                                                                            </div>
                                                                        </td>
                                                                        <td className="text-end">
                                                                            <div className="table-action">
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                                                                    <i className="far fa-eye"></i> View
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-success-light">
                                                                                    <i className="fas fa-check"></i> Accept
                                                                                </a>
                                                                                <a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
                                                                                    <i className="fas fa-times"></i> Cancel
                                                                                </a>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
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
                </div>
            </div>

        </div>
    );
};

export default DoctorDashboard;
