import React from "react";
import Image from "next/image";
import "../../styles/globals.css";
import Script from "next/script";

const ConsulationIndex = () => {
  return (
    <div className="main-wrapper">
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content aos" data-aos="fade-up">
                <h1>
                  Consult Best Doctors Your Nearby Location.
                </h1>
                <Image
                  src="/img/icons/header-icon.svg"
                  className="header-icon"
                  alt="header-icon"
                  width={50}
                  height={50}
                />
                <p>Get consultation for 50+ diseases across India</p>
                <div className="card-body" style={{ paddingLeft: "0px" }}>
                  <h6>
                    <Image
                      src="/img/satisfaction.png"
                      alt="img"
                      width={20}
                      height={20}
                    />
                    4.8 Well Experienced
                  </h6>
                  <div className="avatar-group">
                    <div className="avatar">
                      <Image
                        className="avatar-img rounded-circle border border-white"
                        alt="User Image"
                        src="/img/doctors/doctor-01.jpg"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="avatar">
                      <Image
                        className="avatar-img rounded-circle border border-white"
                        alt="User Image"
                        src="/img/doctors/doctor-02.jpg"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="avatar">
                      <Image
                        className="avatar-img rounded-circle border border-white"
                        alt="User Image"
                        src="/img/doctors/doctor-03.jpg"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div style={{ padding: "15px" }}>
                      <span
                        className=""
                        style={{ fontWeight: "bold", color: " #44b1c6" }}
                      >
                        100+
                      </span>{" "}
                      <span
                        style={{ color: "#44b1c6", fontWeight: "bold" }}
                      >
                        Doctors Available Now
                      </span>
                    </div>
                  </div>
                </div>
                <a href="/consult/new-consultation" className="btn">
                  Consult Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img aos" data-aos="fade-up">
                <Image
                  src="/img/doctor-optimized.png"
                  className="img-fluid"
                  alt="Doctor"
                  width={500}
                  height={500}
                />
                <div className="banner-img1">
                  <Image
                    src="/img/banner-img1.png"
                    className="img-fluid"
                    alt="Banner 1"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="banner-img2">
                  <Image
                    src="/img/banner-img2.png"
                    className="img-fluid"
                    alt="Banner 2"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="specialities-section-one">
        <div className="container">
          <div className="partners-info aos" data-aos="fade-up">
            <ul className="owl-carousel partners-slider d-flex">
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/forbes.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/tech-crunch.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/RHC_SWH.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/theeco.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/for.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/forbes.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/tech-crunch.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/RHC_SWH.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/theeco.png"
                    alt="partners"
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <Image
                    className="img-fluid"
                    src="/img/partners/for.png"
                    alt="partners"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">
                  Consult top doctors online for any health concern
                </h2>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className=""></div>
            </div>
          </div>
          <div
            className="owl-carousel specialities-slider-one owl-theme"
            data-aos="fade-up"
          >
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <span>
                    <Image
                      className="specialities-img"
                      src="/img/specialities/1.png"
                      alt=""
                    />
                  </span>
                </a>
                <p>
                  <a href="/consult/new-consultation">Cardiology</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <span>
                    <Image
                      className="specialities-img"
                      src="/img/specialities/2.png"
                      alt=""
                    />
                  </span>
                </a>
                <p>
                  <a href="/consult/new-consultation">Neurology</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <span>
                    <Image
                      className="specialities-img"
                      src="/img/specialities/3.png"
                      alt=""
                    />
                  </span>
                </a>
                <p>
                  <a href="consult/new-consultation">Urology</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <span>
                    <Image
                      className="specialities-img"
                      src="/img/specialities/5.png"
                      alt=""
                    />
                  </span>
                </a>
                <p>
                  <a href="/consult/new-consultation">Orthopedic</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <a href="search.html">
                    <span>
                      <Image
                        className="specialities-img"
                        src="/img/specialities/4.png"
                        alt=""
                      />
                    </span>
                  </a>
                </a>
                <p>
                  <a href="/consult/new-consultation">Dentist</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <span>
                    <Image
                      className="specialities-img"
                      src="/img/specialities/6.png"
                      alt=""
                    />
                  </span>
                </a>
                <p>
                  <a href="/consult/new-consultation">Ophthalmology</a>
                  <br />
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <div className="specialities-item">
                <a href="/consult/new-consultation">
                  <a href="search.html">
                    <span>
                      <Image
                        className="specialities-img"
                        src="/img/specialities/2.png"
                        alt=""
                      />
                    </span>
                  </a>
                </a>
                <p>
                  <a href="/consult/new-consultation">Neurology</a>
                  <a
                    href="/consult/new-consultation"
                    style={{ color: "#44b1c6" }}
                  >
                    CONSULT NOW
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="specialities-btn aos" data-aos="fade-up">
            <a href="/consult/new-consultation" className="btn">
              See All Specialities
            </a>
          </div>
        </div>
      </section>

      <section className="doctors-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up">
              <div className="section-header-one section-header-slider">
                <h2 className="section-title">Top Doctors</h2>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <div className="owl-nav slide-nav-2 text-end nav-control"></div>
            </div>
          </div>
          <div
            className="owl-carousel doctor-slider-one owl-theme"
            data-aos="fade-up"
          >
            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <style className="doctor-profile-img">
                      <Image
                        src="/img/doctors/doctor-03.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </style>
                  </a>
                  <div className="doctor-amount">
                    <span>Rs. 500/-</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Vidya B</a>
                      <p>Cardiology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star"></i> 4.5
                        </span>{" "}
                        (35)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin"></i> Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <style className="doctor-profile-img">
                      <Image
                        src="/img/doctors/doctor-04.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </style>
                  </a>
                  <div className="doctor-amount">
                    <span>Rs. 500/-</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Nisha Sharma</a>
                      <p>Neurology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star"></i> 4.0
                        </span>{" "}
                        (20)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin"></i> Pune, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <style className="doctor-profile-img">
                      <Image
                        src="/img/doctors/doctor-05.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </style>
                  </a>
                  <div className="doctor-amount">
                    <span>Rs. 600/-</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Ganesh K</a>
                      <p>Urology</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star"></i> 4.5
                        </span>{" "}
                        (30)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin"></i> Pune, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <style className="doctor-profile-img">
                      <Image
                        src="/img/doctors/doctor-02.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </style>
                  </a>
                  <div className="doctor-amount">
                    <span>Rs. 500/-</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Ashish Pawar</a>
                      <p>Orthopedic</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star"></i> 4.3
                        </span>{" "}
                        (45)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin"></i> Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="doctor-profile-widget">
                <div className="doc-pro-img">
                  <a href="doctor-profile.html">
                    <style className="doctor-profile-img">
                      <Image
                        src="/img/doctors/doctor-01.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </style>
                  </a>
                  <div className="doctor-amount">
                    <span>Rs. 800/-</span>
                  </div>
                </div>
                <div className="doc-content">
                  <div className="doc-pro-info">
                    <div className="doc-pro-name">
                      <a href="doctor-profile.html">Dr. Nisha Verma</a>
                      <p>Dentist</p>
                    </div>
                    <div className="reviews-ratings">
                      <p>
                        <span>
                          <i className="fas fa-star"></i> 4.4
                        </span>{" "}
                        (50)
                      </p>
                    </div>
                  </div>
                  <div className="doc-pro-location">
                    <p>
                      <i className="feather-map-pin"></i> Mumbai, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 work-img-info aos" data-aos="fade-up">
              <div className="work-img">
                <Image src="/img/work-img.png" className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 work-details">
              <div className="section-header-one aos" data-aos="fade-up">
                <h5>How it Works</h5>
                <h2 className="section-title">4 easy steps to get your solution</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span><Image src="/img/icons/work-01.svg" alt="" /></span>
                    </div>
                    <div className="work-content">
                      <h5>Search Doctor</h5>
                      <p>Find a Doctor by Name, Specialty, City, Pin/Zip Code by searching AidXpert's comprehensive directory of over 50,000+ doctors in India.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span><Image src="/img/icons/work-02.svg" alt="" /></span>
                    </div>
                    <div className="work-content">
                      <h5>Check Doctor Profile</h5>
                      <p>Check information about the doctor's specialty, medical school, residency training, honors/awards, publications and a host of other information. </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span><Image src="/img/icons/work-03.svg" alt="" /></span>
                    </div>
                    <div className="work-content">
                      <h5>Schedule Appointment</h5>
                      <p>Empower your patients to book or reschedule appointments online 24/7. Reduce average booking time from 8+ minutes by phone* to just a few clicks.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 aos" data-aos="fade-up">
                  <div className="work-info">
                    <div className="work-icon">
                      <span><Image src="/img/icons/work-04.svg" alt="" /></span>
                    </div>
                    <div className="work-content">
                      <h5>Get Your Solution</h5>
                      <p>Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="testimonial-shape-img">
          <div className="testimonial-shape-left">
            <Image src="/img/shape-04.png" alt="" />
          </div>
          <div className="testimonial-shape-right">
            <Image src="/img/shape-05.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="testimonial-slider slick">
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <Image src="/img/clients/client-01.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our User Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>I have many years of experience in hospital industry out of my experience I can say AidXpert is one of
                          the best hospital management system which covers every aspects of hospital business.</p>
                        <h6><span>Ganesh K</span> Pune</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <Image src="/img/clients/client-02.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our User Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>Excellent Customer Support, Software is good and responds well, appreciate continuous updates.</p>
                        <h6><span>Manisha Mahajan</span> Mumbai</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-grid">
                  <div className="testimonial-info">
                    <div className="testimonial-img">
                      <Image src="/img/clients/client-03.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="testimonial-content">
                      <div className="section-inner-header testimonial-header">
                        <h6>Testimonials</h6>
                        <h2>What Our User Says</h2>
                      </div>
                      <div className="testimonial-details">
                        <p>I am very happy with the results of my video consultation on AidXpert. They made the whole process seamless and stress-free.</p>
                        <h6><span>Ram H</span> Pune</h6>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-section">
        <div className="container">
          <div className="app-bg">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="app-content">
                  <div className="app-header aos" data-aos="fade-up">
                    <h5>Working for Your Better Health.</h5>
                    <h2>Download the AidXpert App today!</h2>
                  </div>
                  <div className="app-scan aos" data-aos="fade-up">
                    <p>Scan the QR code to get the app now</p>
                    <Image src="/img/scan-img.png" alt="" />
                  </div>
                  <div className="google-imgs aos" data-aos="fade-up">
                    <a href="javascript:void(0);"><Image src="/img/google-play.png" alt="img" /></a>
                    <a href="javascript:void(0);"><Image src="/img/app-store.png" alt="img" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
                <div className="mobile-img">
                  <Image src="/img/mobile-img.png" className="img-fluid" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header-one text-center aos" data-aos="fade-up">
                <h5>Get Your Answer</h5>
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 aos" data-aos="fade-up">
              <div className="faq-img">
                <Image src="/img/faq-img.png" className="img-fluid" alt="img" />
                <div className="faq-patients-count">
                  <div className="faq-smile-img">
                    <Image src="/img/icons/smiling-icon.svg" alt="icon" />
                  </div>
                  <div className="faq-patients-content">
                    <h4><span className="count-digit">95</span>k+</h4>
                    <p>Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-info aos" data-aos="fade-up">
                <div className="accordion" id="faq-details">

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <a href="javascript:void(0);" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What is online doctor consultation?
                      </a>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>When you speak to a doctor about your health concerns through an audio/video/ chat, it is known as an online doctor consultation or online medical consultation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <a href="javascript:void(0);" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do I start online consultation with doctors on AidXpert?
                      </a>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>We help you connect to a doctor in just 60 seconds. All you have to do is tell us your symptoms or health problems, choose the speciality, make a payment. Once payment is made, we alert our panel of verified, high-quality doctors and allocate a doctor to your consultation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <a href="javascript:void(0);" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Are your online doctors qualified?
                      </a>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>We follow a strict verification process for every doctor providing online medical services on AidXpert. Our team manually verifies necessary documents, registrations, and certifications for every doctor.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <a href="javascript:void(0);" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Is online doctor consultation safe and secured on AidXpert?
                      </a>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>Everything you discuss with your doctor online is, as always, private. Your online doctor will adhere to the 1996 HIPAA (Health Insurance Portability and Accountability Act). This ensures that your medical information is secure.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <a href="javascript:void(0);" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        What happens if I don’t get a response from a doctor?
                      </a>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq-details">
                      <div className="accordion-body">
                        <div className="accordion-content">
                          <p>You will get 100% Refund.</p>
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
    </div>
  );
};

export default ConsulationIndex;