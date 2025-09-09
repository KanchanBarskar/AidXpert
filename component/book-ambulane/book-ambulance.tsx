"use client";
import React from "react";
import Image from "next/image";
import "../../styles/globals.css";
import Script from "next/script";

const BookAmbulance = () => {
  return (<>

    <style jsx>{`
    .sticky-divi-button {
        color: #ffffff;
    font-family: inherit;
    font-size: 16px;
    background-color: #a61f25;
    font-family:"Raleway";
    border-radius: 4px;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0px 25px 28px -21px rgba(194,180,190,1);
    padding: 20px 10px;
    z-index: 10;
    position: fixed;
    bottom: 50%;
    right: 0px;
    transform: rotate(180deg);
    text-orientation: sideways;
    writing-mode: vertical-lr;
}
.sticky-divi-button:hover {
background-color: #cb3737; /* You can change color button on hover */
box-shadow: none;
color: #ffffff;
}
 `}</style>
    <div className="main-wrapper home-ten">
      <section className="banner-slider">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-down">
                <p className="explore-text"> <span><i className="fa-solid fa-thumbs-up me-2"></i></span>Fastest & Most Trusted Ambulance Booking Services in India</p>
                <h1>Book The Nearest Ambulance<br />
                  <span>At Best Price</span></h1>
                <p>We are here to support you and your loved ones through every step of your healthcare journey.</p>
                <div className="view-all">
                  <a href="search-ambulance.html" className="btn btn-view d-inline-flex align-items-center">View all Ambulance<span><i className="feather-arrow-right ms-2"></i></span></a>
                </div>
              </div>
              <div className="col-lg-6 aos" data-aos="fade-up">
                <div className="banner-imgs">
                  <Image src="/img/ambulance.png" className="img-fluid aos" alt="bannerimage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="">
        <div className="container">
          <div className="search-box-banner">
            <form action="search-ambulance.html">
              <ul className="align-items-center">
                <li className="column-group-main">
                  <div className="form-group">
                    <label>Pickup Location</label>
                    <div className="group-img">
                      <input type="text" className="form-control" placeholder="Enter City or Address" />
                      <span><i className="feather-map-pin"></i></span>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="form-group">
                    <label>Drop Location</label>
                    <div className="group-img">
                      <input type="text" className="form-control" placeholder="Enter Hospital Name" />
                      <span><i className="feather-map-pin"></i></span>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="form-group">
                    <label>Pickup Date</label>
                  </div>
                  <div className="form-group-wrapp">
                    <div className="form-group date-widget">
                      <div className="group-img">
                        <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" />
                        <span><i className="feather-calendar"></i></span>
                      </div>
                    </div>
                    <div className="form-group time-widge">
                      <div className="group-img">
                        <input type="text" className="form-control timepicker" placeholder="11:00 AM" />
                        <span><i className="feather-clock"></i></span>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="column-group-last">
                  <div className="form-group">
                    <div className="search-btn">
                      <button className="btn search-button" type="submit"> <i className="fa fa-search" aria-hidden="true"></i>Search</button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>


      <section className="section services">
        <div className="service-right">
          <Image src="/img/bg/service-right.svg" className="img-fluid" alt="services right" />
        </div>
        <div className="container">

          <div className="section-heading" data-aos="fade-down">
            <h2>How It Works</h2>
            <p>One Click and AidXperts Ambulance comes right in front of the door for help.</p>
          </div>

          <div className="services-work">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>1. Choose Pick-Up Locations</h3>
                    <p>Your default pickup point is set to your current GPS location. If you are not being picked up at your current location, tap your pickup location on the map and update the address.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>2. Enter Drop Location</h3>
                    <p>You can enter the location details where the patient needs to be transported by simply entering the destination name or dropping a pin.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>3. Book your Ambulance</h3>
                    <p>Get Estimated Time of Arrival for Ambulance. Track Ambulance live location in real-time with advanced GPS tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section facts-number">
        <div className="facts-left">
          <Image src="/img/bg/facts-left.png" className="img-fluid" alt="facts left" />
        </div>
        <div className="facts-right">
          <Image src="/img/bg/facts-right.png" className="img-fluid" alt="facts right" />
        </div>
        <div className="container">
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title">Insights</h2>
            <p className="description">Response Time: Less then 15 mins</p>
          </div>

          <div className="counter-group">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/bx-heart.svg" alt="Heart Icon" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">16</span>K+</h4>
                      <p>Lives Saved</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/bx-car.svg" alt="Car Icon" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">150</span>+</h4>
                      <p>Cities in India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/bx-headphone.svg" alt="Headphone Icon" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">3500</span>+</h4>
                      <p>Fleet of Ambulances</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/bx-history.svg" alt="History Icon" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">200</span>+</h4>
                      <p>Partnered Hospitals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-choose popular-explore" style={{ backgroundColor: "#F2F7F6" }}>
        <div className="choose-left">
          <Image src="/img/bg/choose-left.png" className="img-fluid" alt="Why Choose Us" />
        </div>
        <div className="container">

          <div className="section-heading" data-aos="fade-down">
            <h2>Why Choose Us</h2>

          </div>

          <div className="row pt-5">
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-1.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Ease to use & find an ambulance nearby locations</h5>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-2.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Emergency assistance time of 15 minutes or less</h5>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-3.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>24/7 <br />Emergency <br />Service</h5>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-4.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Biggest fleet of ambulances across India</h5>

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

      <section className="section faq-section bg-light-primary" style={{ paddingTop: "50px" }}>
        <div className="container">

          <div className="section-heading" data-aos="fade-down">
            <h2>Frequently Asked Questions </h2>
            <p>Our integrated ambulance transport services were created to assist in saving human lives by providing an ultimate network of equipped Ambulances.</p>
          </div>

          <div className="faq-info">
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">How to request a ride?</a>
              </h4>
              <div id="faqOne" className="card-collapse collapse">
                <p>Enter your destination address in the "Search" box, or tap a shortcut icon at the bottom of your screen. Shortcuts include recent destinations from your ride history or custom "Saved Places" you can set in your app.</p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">How to contact a driver?</a>
              </h4>
              <div id="faqTwo" className="card-collapse collapse">
                <p>If you wish to contact your driver about a pickup location or talk about other details of the ride you requested, you can do that through the app.</p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">How to cancelling an Ambulance ride?</a>
              </h4>
              <div id="faqThree" className="card-collapse collapse">
                <p>You can cancel a trip at any time, before or after a driver has accepted your trip request. If you cancel when the driver is less than 5 minutes away from picking you up, you will be charged a cancellation fee.</p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">Can I Book ambulance for other?</a>
              </h4>
              <div id="faqFour" className="card-collapse collapse">
                <p>Yes, you can book and share the same to other</p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqFive" aria-expanded="false">What if the vehicle/ambulance does not reach in time?</a>
              </h4>
              <div id="faqFive" className="card-collapse collapse">
                <p>Contact Driver number</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>);
};

export default BookAmbulance;