import React from "react";
import Image from "next/image";
import "../../styles/globals.css";

const LabTest = () => {
  return (<>
<div className="main-wrapper home-ten">
    <section className="banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content aos" data-aos="fade-up">
              <h6>GET UPTO</h6>
              <h1>40% <span>OFF</span></h1>
              <p>ON ANY DIAGNOSTICS TESTS. <br /><span style={{ color: "#fff" }}>Book your lab tests effortlessly via AidXpert</span></p>

              <a href="test-checkout.html" className="btn plan-btn">Book Now</a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-img aos" data-aos="fade-up">
              <Image src="/img/bg/home-10-banner-img.png" className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="search-box-one search-ten aos" data-aos="fade-up">
              <div className="search-title">
                <h5>Search for Test/Package( KFT, Full Body etc.)</h5>
              </div>
              <form action="test-description.html">
                <div className="row row-gap">
                  <div className="col-lg-3 col-md-12">
                    <div className="search-input-ten">
                      <span><i className="fa-solid fa-location-dot"></i></span>
                      <div className="form-group mb-0">
                        <input type="text" className="form-control" placeholder="Location" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="search-input-ten">
                      <span><i className="fa-solid fa-magnifying-glass"></i></span>
                      <div className="form-group mb-0">
                        <input type="text" className="form-control" placeholder="Search for Test" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-12">
                    <div className="form-search-btn search-btn-ten w-100">
                      <button className="btn" type="submit">Search</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="contact-section pres1">
      <div className="container">

        <div className="row">

          <div className="col-md-6 col-lg-6 col-xl-6">
            <h3>Upload Prescription</h3>
            <h6 className="pt-1">Not sure which tests to take?</h6>
            <p style={{ color: "#000" }}>Share your prescription with us and our team will call you to book tests for you.</p>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 patient-dashboard-top">

                <div className="card">

                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i className="fas fa-solid fa-camera" style={{ fontSize: "50px", color: "#1ba1cb" }}></i>
                    </div>
                    <h5>Add Prescription</h5>
                    <input type="file" accept="image/png, image/jpeg, image/jpg, application/pdf" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 col-xl-6 patient-dashboard-top">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mb-3">
                      <i className="fas fa-file-medical-alt" style={{ fontSize: "50px", color: "#1ba1cb" }}></i>
                    </div>
                    <h5>My Prescription</h5>

                  </div>
                </div>
              </div>


            </div>

            <div className="card">

            </div>
          </div>
          <div className="col-lg-6 col-md-12 d-flex">
            <div className="card contact-form-card w-100">
              <div className="card-body">
                <h4>Prescription Guide</h4>
                <ul>
                  <li>Prescription should have doctor name and signature</li>
                  <li>Patient Name</li>
                  <li>Date of Prescription</li>
                  <li>Don't crop out any part of the image</li>
                  <li>Avoid blurred image</li>
                  <li>Ensure suggested tests are cleary visible in the image</li>
                </ul>
                <a href="#" className="" data-bs-toggle="modal" data-bs-target="#presc">
                  <i className="far fa-eye"></i> View Sample Prescription</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="specialities-section-one">
      <div className="container">
        <div className="row">
          <div className="col-md-12 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">Why Choose <span>AidXpert?</span></h2>
              <h6 style={{ fontSize: "16px", fontWeight: 500, paddingTop: "10px" }}>Trusted by 10 Lakhs+ satisfied customers</h6>
            </div>
          </div>
        </div>
        <div className="specialities-block aos" data-aos="fade-up">
          <ul>
            <li>
              <div className="specialities-item">
                <div className="specialities-img">
                  <div className="hexogen"><Image src="/img/bg/tick.png" alt="" /></div>
                </div>
                <p>Free Sample Collection</p>
              </div>
            </li>
            <li>
              <div className="specialities-item">
                <div className="specialities-img">
                  <div className="hexogen"><Image src="/img/bg/tick.png" alt="" /></div>
                </div>
                <p>Free Report Consultation</p>
              </div>
            </li>
            <li>
              <div className="specialities-item">
                <div className="specialities-img">
                  <div className="hexogen"><Image src="/img/bg/tick.png" alt="" /></div>
                </div>
                <p>Fast & Accurate
                  Test Reports</p>
              </div>
            </li>
            <li>
              <div className="specialities-item">
                <div className="specialities-img">
                  <div className="hexogen"><Image src="/img/bg/tick.png" alt="" /></div>
                </div>
                <p>20 Lakh+ Satisfied
                  Customers</p>
              </div>
            </li>
            <li>
              <div className="specialities-item">
                <div className="specialities-img">
                  <div className="hexogen"><Image src="/img/bg/tick.png" alt="" /></div>
                </div>
                <p>Best Prices Guaranteed</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section className="feedback-section-fifteen">
      <div className="container">
        <div className="feedback-schedule-all">
          <div className="row">
            <div className="col-lg-5">
              <div className="feedback-inner-main">
                <Image src="/img/feedback-fifteen.png" alt="image" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="feedback-fifteen-content">

                <h3>Do you want any help for booking test?</h3>
                <p>Our experts are here to help you.</p>
                <p style={{ fontSize: "40px" }}>
                  <i className="fas fa-phone-alt"></i>
                  +91-858 505 6006
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="service-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">Popular <span>Health Checkups </span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap aos" data-aos="fade-up">
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Annual Health Checkup</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 70 Tests</span>
                        <h6>Rs.3999/-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Annual Health Checkup</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 70 Tests</span>
                        <h6>Rs.3999/-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Womens Health Essentials</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 33 Tests</span>
                        <h6>Rs.2500-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Full Body Checkup</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 107 Tests</span>
                        <h6>Rs.3850/-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Advanced Thyroid Profile</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 20 Tests</span>
                        <h6>Rs.3000/-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="listing-card">
              <div className="listing-img">
                <a href="test-description.html"><Image src="/img/features/feature-07.jpg" className="img-fluid" alt="" /></a>
                <div className="fav-item">
                  <a href="javascript:void(0)" className="fav-icon">
                    <i className="fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <div className="listing-content">
                <div className="listing-details">
                  <div className="listing-title">
                    <h3>
                      <a href="test-description.html">AidXpert Healthy Heart Package</a>
                    </h3>
                  </div>
                  <div className="listing-profile-details">
                    <div className="listing-user">
                      <div className="listing-user-details">
                        <span>Included 70 Tests</span>
                        <h6>Rs.3999/-</h6>
                      </div>
                    </div>
                    <div className="listing-btn">
                      <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="need-to-know-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">Top Booked <span>Diagnostic Tests</span></h2>
            </div>
          </div>
        </div>
        <div className="row row-gap aos" data-aos="fade-up">
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Covid Antibody</a><br />
                      <span style={{ fontSize: "12px" }}>Covid Antibody Igg Clia Blood Serum</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report in 3 Days</span>
                          <h6>Rs. 1300/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Lipid Profile</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Lipid Profile Blood</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on same day</span>
                          <h6>Rs. 200/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Thyroid Profile</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Thyroid Profile Total Blood</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on same day</span>
                          <h6>Rs. 500/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Liver Function Test</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Liver Function Tests Blood</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on same day</span>
                          <h6>Rs. 700/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Dengue NS 1</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Dengue Ns1 Antigen Pcr Blood</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report in 3 Days</span>
                          <h6>Rs. 400/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Vitamin B 12</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Vitamin B12 Conventional Blood</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on Same Day</span>
                          <h6>Rs. 1000/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Fasting Blood Sugar</a><br />
                      <span style={{ fontSize: "12px" }}>Known as Glucose Fasting Blood Sugar</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on Same Day</span>
                          <h6>Rs. 50/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3">
            <div className="module-border-wrap">
              <div className="listing-card">

                <div className="listing-content">
                  <div className="listing-details">
                    <div className="listing-category">
                      <a className="listing-category-tag tag-green">Urine Examination</a><br />
                      <span style={{ fontSize: "12px" }}>Urine Analysis also called as urine routine</span>
                    </div>
                    <div className="listing-profile-details">

                      <div className="listing-user">
                        <div className="listing-user-details">
                          <span>E-Report on Same Day</span>
                          <h6>Rs. 150/-</h6>
                        </div>
                      </div>
                      <div className="listing-btn">
                        <a href="test-checkout.html" className="btn consult-btn">Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="section-specialities" style={{ backgroundColor: "#e8f5f9" }}>
      <div className="row">
        <div className="col-md-12 aos" data-aos="fade-up">
          <div className="section-header-one section-header-slider">
            <h2 className="section-title">Organ Specific <span>Tests</span></h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-9 aos" data-aos="fade-up">

          <div className="specialities-slider slider">

            <div className="speicality-item text-center">
              <a href="lab-oragn-specific-test.html"><div className="speicality-img">
                <Image src="/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
              </div></a>

              <a href="lab-oragn-specific-test.html">Kidney</a>
            </div>


            <div className="speicality-item text-center">

              <a href="lab-oragn-specific-test.html"><div className="speicality-img">
                <Image src="/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
              </div></a>
              <a href="lab-oragn-specific-test.html">Brain</a>
            </div>


            <div className="speicality-item text-center">
              <a href="lab-oragn-specific-test.html"><div className="speicality-img">
                <Image src="/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
              </div></a>
              <a href="lab-oragn-specific-test.html">Bones, Joints, Ligaments</a>
            </div>


            <div className="speicality-item text-center">
              <a href="lab-oragn-specific-test.html"><div className="speicality-img">
                <Image src="/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
              </div></a>
              <a href="lab-oragn-specific-test.html">Heart</a>
            </div>

            <div className="speicality-item text-center">
              <a href="lab-oragn-specific-test.html"><div className="speicality-img">
                <Image src="/img/specialities/lungs.png" className="img-fluid" alt="Speciality" />
                <span><i className="fa fa-circle" aria-hidden="true"></i></span>
              </div></a>
              <a href="lab-oragn-specific-test.html">Lungs</a>
            </div>


          </div>

        </div>
      </div>

    </section>


    <section className="need-to-know-section steps-to-follow">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-12 aos" data-aos="fade-up">
            <div className="gallery-box-block">
              <div className="gallery-box-right">
                <div className="box-detail">
                  <div className="steps-list-box">
                    <div className="steps-list-img">
                      <span>1</span>
                      <Image src="/img/icons/hreat-pulse.svg" className="img-fluid" alt="" />
                    </div>
                    <h6>Select Your Location & Test</h6>
                  </div>
                </div>
                <div className="box-detail">
                  <div className="steps-list-box">
                    <div className="steps-list-img">
                      <span>3</span>
                      <Image src="/img/icons/hreat-pulse.svg" className="img-fluid" alt="" />
                    </div>
                    <h6>Testing Done at Lab</h6>
                  </div>
                </div>
              </div>
              <div className="gallery-box-left">
                <div className="box-detail mb-4 ">
                  <div className="steps-list-box">
                    <div className="steps-list-img">
                      <span>2</span>
                      <Image src="/img/icons/hreat-pulse.svg" className="img-fluid" alt="" />
                    </div>

                    <h6>Our Collection Agent Will Visit You</h6>
                  </div>
                </div>
                <div className="box-detail">
                  <div className="steps-list-box">
                    <div className="steps-list-img">
                      <span>4</span>
                      <Image src="/img/icons/hreat-pulse.svg" className="img-fluid" alt="" />
                    </div>
                    <h6>View/Download Your Report Online</h6>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">India's Most <span>Trusted Lab</span></h2>
              <div className="need-to-know-content">
                <p>
                  Avail home collection through an easy 4-stage process. Visit our website and select the prescribed test.
                  Choose the Home Collection option. Select the time and date, then pay online or pay after availing our service.
                  Our collection agent will visit you and take a sample, while following all the necessary precautions.
                  We will perform the required tests at our state-of-our-art lab.
                  Once the results arrive, you can view or download your report online.
                  Taking a test couldn’t be easier or safer than at Apollo Diagnostics.
                </p>
                <div className="content-btn-block d-flex">
                  <a href="#" className=" need-to-know-content-btn book-btn me-2">Get App Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <div className="testimonial-section-ten need-to-know-section">

      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-lg-5 aos" data-aos="fade-up">
            <div className="section-header-one section-header-slider">
              <h2 className="section-title">What Our <br /><span>Customer Saying</span></h2>
              <div className="need-to-know-content">
                <p>
                  Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With AidXperts you can get your lab tests done from the comfort of your home. Our highly qualified staff will collect the samples at your preferred time. Book your next lab test with AidXperts at the lowest price guaranteed!
                </p>
                <div className="patient-rating-block">
                  <div className="patient-rating">
                    <div className="circle-rating">
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle"></i>
                      <i className="fa-solid fa-circle-half-stroke"></i>
                      <span>(4.8/5)</span>
                    </div>
                    <h5>Overall Customer Ratings</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-7 aos" data-aos="fade-up">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-user-details">
                    <div className="testimonial-user-img">
                      <Image src="/img/clients/client-07.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-user-name">
                      <h5>
                        Mr. Sudhir Bochare
                      </h5>
                      <div className="circle-rating">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                  <div className="testmonial-user-coments">
                    <h6>“ Awesome Experience ”</h6>
                    <p>My first booking experience with AidXpert was simple and hassle-free. Selected sample collection slot on their app and the technician arrived right on time in the morning. Very impressive</p>
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-user-details">
                    <div className="testimonial-user-img">
                      <Image src="/img/clients/client-08.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-user-name">
                      <h5>
                        Mr. Nikhil Dahikar
                      </h5>
                      <div className="circle-rating">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                  <div className="testmonial-user-coments">
                    <h6>“ I am very grateful ”</h6>
                    <p>I regularly get tests done for my father, who is a diabetic patient. I like the convenience of home sample collection and quick delivery of test reports on my email.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testimonial-card">
                  <div className="testimonial-user-details">
                    <div className="testimonial-user-img">
                      <Image src="/img/clients/client-09.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-user-name">
                      <h5>
                        Mrs. Sunita Kulkarni
                      </h5>
                      <div className="circle-rating">
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-circle-half-stroke"></i>
                      </div>
                    </div>
                  </div>
                  <div className="testmonial-user-coments">
                    <h6>“ Excellent Clinician ”</h6>
                    <p> Thank you for
                      all of your assistance throughout this process as well as quick
                      response! Everything went swimmingly yesterday, We get report in
                      same day! </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </>);
};

export default LabTest;