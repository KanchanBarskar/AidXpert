import React from "react";
import Image from "next/image";


const NewConsultation = () => {
    return (
    <div className="main-wrapper"><div className="breadcrumb-bar-two">
    <div className="container">
    <div className="row align-items-center inner-banner">
    <div className="col-md-12 col-12 text-center">
    <h2 className="breadcrumb-title">Consultation</h2>
    <nav aria-label="breadcrumb" className="page-breadcrumb">
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
    <li className="breadcrumb-item" aria-current="page">Consultation</li>
    </ol>
    </nav>
    </div>
    </div>
    </div>
</div>
<div className="" style={{backgroundColor: "#fff"}} id="register">
<div className="container-fluid mt-5 mb-5">
    <div className="row">
        <div className="col-md-7 col-lg-7 login-left">
            <Image src="/img/newconsult.jpg" className="img-fluid" alt="Login"/>
            </div>



        <div className="col-md-12 col-lg-5 login-right form-box" style={{backgroundColor: "#44b1c6"}}>
            <form role="form" action="" method="post" className="f1">
                <h3>Consult with a Doctor</h3>
                
                <fieldset>
                    <h4 style={{fontWeight: "bold"}}>Tell us your symptom or health problem</h4>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-about-yourself">About yourself</label>
                        <textarea name="f1-about-yourself" placeholder="your systems or health problem" 
                        className="f1-about-yourself form-control" id="f1-about-yourself"></textarea>
                    </div>
                    <div className="form-group row">
                        <label className="col-form-label">Choose a relevant speciality</label><br />
                        <div className="col-md-12">
                            <select className="form-select">
                                <option>Select a relevant speciality</option>
                                <option>Ear, Nose, Throat</option>
                                <option>Pediatrics</option>
                                <option>General Physician</option>
                            </select>
                    </div>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-first-name">Mobile No</label>
                        <input type="text" name="f1-first-name" placeholder="Mobile No" className="f1-first-name form-control" id="f1-first-name"/>
                    </div>
                   
                    <div className="f1-buttons">
                        <button type="button" className="btn btn-primary btn-next">Next</button>
                    </div>
                </fieldset>

                <fieldset>
                    <h5 style={{fontWeight: "bold"}}>Confirm & Pay</h5>
                    <div>
                        <span className="" style={{fontWeight: "bold",color: "#44b1c6"}}>100+</span> <span style={{color:"#44b1c6",fontWeight: "bold"}}>Verified doctors are available now</span>
                    </div>
                    <div className="avatar-group" style={{paddingBottom: "10px"}}>
                        <div className="avatar">
                        <Image className="avatar-img rounded-circle border border-white" alt="User Image" src="/img/doctors/doctor-01.jpg"/>
                        </div>
                        <div className="avatar">
                        <Image className="avatar-img rounded-circle border border-white" alt="User Image" src="/img/doctors/doctor-02.jpg"/>
                        </div>
                        <div className="avatar">
                        <Image className="avatar-img rounded-circle border border-white" alt="User Image" src="/img/doctors/doctor-03.jpg"/>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <h6>Select Type of Consultation</h6>
                        <div className="col-md-12">
                            <select className="form-select">
                                <option>Clinic Visit</option>
                                <option>Video Consultation</option>
                                <option>Tele Consultation</option>
                            </select>
                    </div>
                    </div>
                    <div className="form-group">
                        <h6>Patient Name</h6>
                     
                        <input type="text" name="f1-email" placeholder="Patient Name" className="f1-email form-control" id="f1-email"/>
                    </div>
                    
                    <h6 style={{fontWeight: "bold"}}>Do you have any coupon code?</h6>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-email">Coupon Code</label>
                        <input type="text" name="f1-email" placeholder="Coupon Code" className="form-control"/>
                    </div>
                    <div className="pricing-amount">
                        <h6 style={{color: "#44b1c6"}}>Final Payment</h6>
                        <h2>Rs. 399<span>/-</span></h2>
                        
                    </div>
                    <div className="pricing-btn"><a className="btn" href="consultation-checkout.html">Make Payment</a></div>
                </fieldset>

                <fieldset>
                    <h4 style={{fontWeight: "normal"}}>Checkout</h4>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-facebook">Facebook</label>
                        <input type="text" name="f1-facebook" placeholder="Facebook..." className="f1-facebook form-control" id="f1-facebook"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-twitter">Twitter</label>
                        <input type="text" name="f1-twitter" placeholder="Twitter..." className="f1-twitter form-control" id="f1-twitter"/>
                    </div>
                    <div className="form-group">
                        <label className="sr-only" htmlFor="f1-google-plus">Google plus</label>
                        <input type="text" name="f1-google-plus" placeholder="Google plus..." className="f1-google-plus form-control" id="f1-google-plus"/>
                    </div>
                    <div className="f1-buttons">
                        <button type="button" className="btn btn-primary btn-previous">Previous</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </fieldset>
            
            </form>
        </div>
    </div>
</div>
</div></div>

    )}

 export default NewConsultation;   