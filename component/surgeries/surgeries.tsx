"use client";
import React from "react";
import Image from "next/image";
import "../../styles/globals.css";
import Script from "next/script";

const Surgeries = () => {
  return (<>

    <style jsx>{`
    .main-wrapper.home-ten .view-all a:hover{
        color: #fff;;
    }
    .brower-box {
    text-align: center;
    border-radius: 10px;
    border: 2px solid #44b1c6;
    background-color: #ffffff;
    margin-bottom: 20px;
    padding: 10px;
}
.brower-img{
    padding-bottom: 10px;
}
.brower-box h4 {
    font-size: 15px;
    font-weight: 700;
    color: #44b1c6;
}
`}</style>
    <div className="main-wrapper home-ten">

      <section className="banner-slider1">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-down">

                <h1>A personal service from <span>people that care</span></h1>
                <p>Get help from Experts from AidXpert!
                  You can submit <br />any medical query, including an appointment request.</p>
                <div className="view-all">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap" className="btn btn-view d-inline-flex align-items-center">Book Your Appointment<span><i className="feather-arrow-right ms-2"></i></span></a>
                </div>
              </div>
              <div className="col-lg-6 aos" data-aos="fade-up">
                <div className="banner-imgs">

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services">
        <div className="service-right">
          <Image src="/img/bg/service-right.svg" className="img-fluid" alt="services right" />
        </div>
        <div className="container">

          <div className="section-heading" data-aos="fade-down">
            <h2>How It Works</h2>
            <p>Our surgical team is made up of experts in multiple subspecialty areas. Many of our clinicians consistently achieve recognition as being among the best doctors in the country.</p>
          </div>

          <div className="services-work">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>1. Connect with <br />Our Expert</h3>
                    <p>We provide various communication channels to ensure seamless connectivity with our experts. This may include options such as phone consultations, video calls, online chat, or even in-person appointments, depending on the nature of the service and your preference.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>2. Hospital & Doctor Recommendations</h3>
                    <p>Professional networks and associations within the medical community can be excellent resources for obtaining recommendations. Select an experienced surgeon & premium hospital that match your requirement</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>3. Treatment for <br />Surgery</h3>
                    <p>Before the surgery, patients may undergo various pre-operative assessments, such as blood tests, imaging scans, and consultations with the surgical team.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-12" data-aos="fade-down">
                <div className="services-group">
                  <div className="services-icon border-secondary">
                    <Image className="icon-img bg-secondary" src="/img/icons/services-icon-01.svg" alt="Choose Locations" />
                  </div>
                  <div className="services-content">
                    <h3>4. Receive Post-Operative support</h3>
                    <p>We understand the importance of a smooth recovery process after surgery, and our platform offers various resources and assistance to help patients during this phase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section service-section popular-services popular-explore" style={{ backgroundColor: "#fff" }}>
        <div className="container">

          <div className="section-heading" data-aos="fade-down">
            <h2>Surgeries we cover</h2>
            <p>Extensive medical assistance throughout your treatment. Our surgical services include multiple surgical specialty areas.</p>
          </div>

          <div className="row">
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/chair.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Anal Fissure</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/blood.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Piles</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/inguinal-hernia.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Hernia</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/kidney-stone.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Kidney Stone</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/appendix.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Appendix</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/cataract.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Cataract</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/laser-surgery.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Lasik</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/varicose-veins.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Varicose Veins</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/gallstones.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Gallstone</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/abortion.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Abortion</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/broken-bone.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Knee Replacement</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/hip-replacement.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Hip Replacement</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/arthritis.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Arthroscopy</a></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/slim.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Lipoma Removal</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/hair-transplant.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Hair Transplant</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/chiropractic.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Spine Surgery</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/implant.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Dental Implant</a></h4>

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 aos aos-init aos-animate" data-aos="fade-up">
              <div className="brower-box">
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap"><div className="brower-img">
                    <Image src="/img/shapes/cancer.png" alt="" />
                  </div></a>
                  <h4><a data-bs-toggle="modal" data-bs-target="#Modalgetbootstrap">Cancer</a></h4>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section facts-number">
        <div className="facts-left">
          <Image src="/img/banner-doc.png" className="img-fluid" alt="facts left" />
        </div>
        <div className="facts-right">
          <Image src="/img/bg/facts-right.png" className="img-fluid" alt="facts right" />
        </div>
        <div className="container">
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title">Insights</h2>
            <p className="description">Our Aim is to  aims to deliver a hassle free surgical experience to all patients by leveraging technology, and a set of advanced operations and powerful processes.</p>
          </div>

          <div className="counter-group">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">

              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/bx-heart.svg" alt="" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">25</span>K+</h4>
                      <p>Happy Patients</p>
                    </div>
                  </div>
                </div>


              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/building.png" alt="" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">10</span>+</h4>
                      <p>Cities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12 d-flex" data-aos="fade-down">
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <Image src="/img/icons/doctor1.png" alt="" />
                    </div>
                    <div className="count-content">
                      <h4><span className="counterUp">240</span>+</h4>
                      <p>Doctors</p>
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

          <div className="section-heading">
            <h2>Why Choose Us</h2>

          </div>

          <div className="row pt-5">
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-1.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Expert Surgeons</h5>
                  <p>Patients may have the option to seek second opinions from multiple expert surgeons through the platform, helping them gain more insights and confidence in their treatment plans.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-2.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Secure and trusted</h5>
                  <p>Implement robust security measures to protect patient data, including encryption, secure data storage, and adherence to privacy regulations or other data protection laws.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 aos aos-init aos-animate">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-3.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Meaningful insights</h5>
                  <p>Our commitment lies in providing the very best care possible, fostering a sense of reliability and openness throughout the entire healthcare experience.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="work-info">
                <div className="work-icon">
                  <span><Image src="/img/number-4.png" alt="" /></span>
                </div>
                <div className="work-content">
                  <h5>Post Surgery Care</h5>
                  <p>Our comprehensive support includes personalized dietary recommendations and exercise instructions, guaranteeing a successful recovery.</p>
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

          <div className="section-heading">
            <h2>Frequently Asked Questions </h2>
            <p>We've got A's for your Q's</p>
          </div>

          <div className="faq-info">
            <div className="faq-card bg-white">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqOne" aria-expanded="false">Does AidXpert provide any emergency surgical treatment?</a>
              </h4>
              <div id="faqOne" className="card-collapse collapse">
                <p>AidXpert focuses solely on elective surgical care, which entails pre-scheduled surgeries and treatments. However, it is important to note that AidXpert does not handle any form of emergency surgeries or treatments that require immediate medical attention.</p>
              </div>
            </div>
            <div className="faq-card bg-white">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqTwo" aria-expanded="false">
                  Does AidXpert have its own hospitals?</a>
              </h4>
              <div id="faqTwo" className="card-collapse collapse">
                <p>No, AidXpert does not own any hospital. AidXpert works in association with other hospitals. AidXpert doctors/ surgeons perform the surgeries leveraging the medical infrastructure of the associated hospitals.</p>
              </div>
            </div>
            <div className="faq-card bg-white">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqThree" aria-expanded="false">
                  Can I consult with a doctor online?</a>
              </h4>
              <div id="faqThree" className="card-collapse collapse">
                <p>Yes, AidXpert provides convenient online doctor consultations, enabling patients to seek specialized medical advice from anywhere and at any time, based on the available slots. Our platform offers the flexibility for patients to connect with our doctors through phone calls or online chat, allowing them to discuss their health concerns.</p>
              </div>
            </div>
            <div className="faq-card bg-white">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqFour" aria-expanded="false">
                  Does AidXpert have insurance coverage for all surgeries?</a>
              </h4>
              <div id="faqFour" className="card-collapse collapse">
                <p>AidXpert does not operate as an insurance regulatory body. The extent of your insurance coverage depends on the type of health insurance you have (personal or corporate) and the specific terms and conditions established by your insurance provider.</p>
              </div>
            </div>
            <div className="faq-card bg-white">
              <h4 className="faq-title">
                <a className="collapsed" data-bs-toggle="collapse" href="#faqFive" aria-expanded="false">
                  Does AidXpert Care provide a second opinion for any disease?</a>
              </h4>
              <div id="faqFive" className="card-collapse collapse">
                <p>Yes, Our platform offers the option to obtain a second medical opinion from specialized doctors for various diseases. By analyzing your pathology reports, post-operative reports (if applicable), discharge summaries (if you were previously hospitalized for the disease), current treatment, and medication plan, our doctors provide guidance on the necessary or recommended treatment course moving forward.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  </>);
};

export default Surgeries;