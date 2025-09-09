import React from "react";
import Image from "next/image";
import Script from "next/script";

const Index = () => {
    return (
    <div className="main-wrapper">
        <section className="section section-search">
            <div className="container-fluid">
                <div className="banner-wrapper">
                    <div className="banner-header text-center aos" data-aos="fade-up">
                        <h1>Search Doctor, Make an Appointment</h1>
                        <p>Discover the best doctors, clinic & hospital the city nearest to you.</p>
                    </div>

                    <div className="search-box">
                        <form action="search.html">
                            <div className="form-group search-location aos" data-aos="fade-up">
                                <input type="text" className="form-control" placeholder="Search Location" />
                                <span className="form-text">Based on your Location</span>
                            </div>
                            <div className="form-group search-info aos" data-aos="fade-up">
                                <input type="text" className="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                                <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                            </div>
                            <button type="submit" className="btn btn-primary search-btn mt-0 aos" data-aos="fade-up"><i className="fas fa-search"></i> <span>Search</span></button>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <section className="section category-sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <div className="section-header text-center aos" data-aos="fade-up">
                            <h2>What are you looking for?</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4 aos aos-init aos-animate" data-aos="fade-up">
                                <div className="set-category">
                                    <div className="d-flex align-items-center">
                                        <div className="img-holder">
                                            <a href=""><Image src="/img/icons/set-cat-01.png" alt="" /></a>
                                        </div>
                                        <div className="info-holder">
                                            <h3>Visit a Doctor</h3>
                                            <p>We hire the best specialists to deliver top-notch diagnostic services for you.</p>
                                            <a href="search.html" className="book-now">Visit Now <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <h1>01</h1>
                                </div>
                            </div>
                            <div className="col-md-4 aos aos-init aos-animate" data-aos="fade-up">
                                <div className="set-category light">
                                    <div className="d-flex align-items-center">
                                        <div className="img-holder">
                                            <a href=""><Image src="/img/icons/set-cat-02.png" alt="" /></a>
                                        </div>
                                        <div className="info-holder">
                                            <h3>Order Medicines</h3>
                                            <p>We provide the a wide range of medical services, so every person could have the opportunity.</p>
                                            <a href="order-medicines.html" className="book-now">Order Now <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <h1>02</h1>
                                </div>
                            </div>
                            <div className="col-md-4 aos aos-init aos-animate" data-aos="fade-up">
                                <div className="set-category lighter">
                                    <div className="d-flex align-items-center">
                                        <div className="img-holder">
                                            <a href=""><Image src="/img/icons/set-cat-03.png" alt="" /></a>
                                        </div>
                                        <div className="info-holder">
                                            <h3>Find a Lab</h3>
                                            <p>We use the first-className medical equipment for timely diagnostics of various diseases.</p>
                                            <a href="#" className="book-now">Book Now <i className="fas fa-long-arrow-alt-right"></i></a>
                                        </div>
                                    </div>
                                    <h1>03</h1>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>

        <section className="section section-specialities">
            <div className="container-fluid">
                <div className="section-header text-center aos" data-aos="fade-up">
                    <h2>Consult India's Best Doctors Online</h2>
                    <p className="sub-title">We have a broad network of top specialized doctors, with over 10 years of experience to provide you with quality care.</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9 aos" data-aos="fade-up">

                        <div className="specialities-slider slider">

                            <div className="speicality-item text-center">
                                <a href="/new-consultation.html"><div className="speicality-img">
                                    <Image src="/img/specialities/specialities-01.png" className="img-fluid" alt="Speciality" />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div></a>
                                <p><a href="/new-consultation.html">Urology</a><br></br>
                                    <a href="/new-consultation.html" style={{ color: "#44b1c6" }}>CONSULT NOW</a></p>
                            </div>


                            <div className="speicality-item text-center">
                                <a href="/new-consultation.html"><div className="speicality-img">
                                    <Image src="/img/specialities/specialities-02.png" className="img-fluid" alt="Speciality" />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div></a>
                                <p><a href="/new-consultation.html">Neurology</a><br />
                                    <a href="/new-consultation.html" style={{ color: "#44b1c6" }}>CONSULT NOW</a></p>
                            </div>


                            <div className="speicality-item text-center">
                                <a href="/new-consultation.html"><div className="speicality-img">
                                    <Image src="/img/specialities/specialities-03.png" className="img-fluid" alt="Speciality" />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div></a>
                                <p><a href="/new-consultation.html">Orthopedic</a><br />
                                    <a href="/new-consultation.html" style={{ color: "#44b1c6" }}>CONSULT NOW</a></p>
                            </div>


                            <div className="speicality-item text-center">
                                <a href="/new-consultation.html"><div className="speicality-img">
                                    <Image src="/img/specialities/specialities-04.png" className="img-fluid" alt="Speciality" />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div></a>
                                <p><a href="/new-consultation.html">Cardiologist</a><br />
                                    <a href="/new-consultation.html" style={{ color: "#44b1c6" }}>CONSULT NOW</a></p>
                            </div>


                            <div className="speicality-item text-center">
                                <a href="/new-consultation.html"><div className="speicality-img">
                                    <Image src="/img/specialities/specialities-05.png" className="img-fluid" alt="Speciality" />
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                </div></a>
                                <p><a href="/new-consultation.html">Dentist</a><br />
                                    <a href="/new-consultation.html" style={{ color: "#44b1c6" }}>CONSULT NOW</a></p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section className="section section-doctor">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 aos" data-aos="fade-up">
                        <div className="section-header ">
                            <h2>Popular Doctors Available</h2>
                            <p>Consult Doctors from Top Hospitals within 30 minutes</p>
                        </div>
                        <div className="about-content">
                            <p>Online medical consultations are the best way to ensure good health while staying safe and protected from the risk of infections. You can browse through a list of expert medical specialists, select a doctor and book an online appointment with a doctor who best suits your medical needs. You can book an online consultation with dermatologist, psychiatrist, gynecologist, psychologist, etc. and other specialists through the Bajaj Finserv Health App and website.</p>
                        </div>
                    </div>
                    <div className="col-lg-8 aos" data-aos="fade-up">
                        <div className="doctor-slider slider">

                            <div className="profile-widget">
                                <div className="doc-img">
                                    <a href="#">
                                        <Image className="img-fluid" alt="User Image" src="/img/doctors/doctor-01.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" className="fav-btn">
                                        <i className="far fa-bookmark"></i>
                                    </a>
                                </div>
                                <div className="pro-content">
                                    <h3 className="title">
                                        <a href="#">Dr. Sonali Sharma</a>
                                        <i className="fas fa-check-circle verified"></i>
                                    </h3>
                                    <p className="speciality">MDS - Periodontology and Oral Implantology, BDS</p>
                                    <div className="rating">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <span className="d-inline-block average-rating">(17)</span>
                                    </div>
                                    <ul className="available-info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i> Bavdhan, Pune
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                        </li>
                                        <li>
                                            <i className="far fa-money-bill-alt"></i> Consultation: Rs.500/-
                                            <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="Consultation Charges"></i>
                                        </li>
                                    </ul>
                                    <div className="row row-sm">
                                        <div className="col-6">
                                            <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="booking.html" className="btn book-btn">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="profile-widget">
                                <div className="doc-img">
                                    <a href="#">
                                        <Image className="img-fluid" alt="User Image" src="/img/doctors/doctor-02.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" className="fav-btn">
                                        <i className="far fa-bookmark"></i>
                                    </a>
                                </div>
                                <div className="pro-content">
                                    <h3 className="title">
                                        <a href="#">Dr. Ashish Pawar</a>
                                        <i className="fas fa-check-circle verified"></i>
                                    </h3>
                                    <p className="speciality">BDS, MDS - Oral & Maxillofacial Surgery</p>
                                    <div className="rating">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star"></i>
                                        <span className="d-inline-block average-rating">(35)</span>
                                    </div>
                                    <ul className="available-info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i> Pune, India
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                        </li>
                                        <li>
                                            <i className="far fa-money-bill-alt"></i> Consultation: Rs.600/-
                                            <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="Consultation charges are seperate"></i>
                                        </li>
                                    </ul>
                                    <div className="row row-sm">
                                        <div className="col-6">
                                            <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="booking.html" className="btn book-btn">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="profile-widget">
                                <div className="doc-img">
                                    <a href="#">
                                        <Image className="img-fluid" alt="User Image" src="/img/doctors/doctor-03.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" className="fav-btn">
                                        <i className="far fa-bookmark"></i>
                                    </a>
                                </div>
                                <div className="pro-content">
                                    <h3 className="title">
                                        <a href="#">Dr. Mahi Gill</a>
                                        <i className="fas fa-check-circle verified"></i>
                                    </h3>
                                    <p className="speciality">MBBS, MD - General Medicine, DNB - Cardiology</p>
                                    <div className="rating">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star"></i>
                                        <span className="d-inline-block average-rating">(27)</span>
                                    </div>
                                    <ul className="available-info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i> Mumbai, India
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                        </li>
                                        <li>
                                            <i className="far fa-money-bill-alt"></i> Consultation: Rs.800/-
                                            <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="Consultation charges are seperate"></i>
                                        </li>
                                    </ul>
                                    <div className="row row-sm">
                                        <div className="col-6">
                                            <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="booking.html" className="btn book-btn">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="profile-widget">
                                <div className="doc-img">
                                    <a href="#">
                                        <Image className="img-fluid" alt="User Image" src="/img/doctors/doctor-04.jpg" />
                                    </a>
                                    <a href="javascript:void(0)" className="fav-btn">
                                        <i className="far fa-bookmark"></i>
                                    </a>
                                </div>
                                <div className="pro-content">
                                    <h3 className="title">
                                        <a href="#">Dr. Vidya Bhosale</a>
                                        <i className="fas fa-check-circle verified"></i>
                                    </h3>
                                    <p className="speciality">MBBS, MS - General Surgery, MCh - Urology</p>
                                    <div className="rating">
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star filled"></i>
                                        <i className="fas fa-star"></i>
                                        <span className="d-inline-block average-rating">(4)</span>
                                    </div>
                                    <ul className="available-info">
                                        <li>
                                            <i className="fas fa-map-marker-alt"></i> Pune, India
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                        </li>
                                        <li>
                                            <i className="far fa-money-bill-alt"></i> Consultation: Rs.400/-
                                            <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="Consultation charges are seperate"></i>
                                        </li>
                                    </ul>
                                    <div className="row row-sm">
                                        <div className="col-6">
                                            <a href="doctor-profile.html" className="btn view-btn">View Profile</a>
                                        </div>
                                        <div className="col-6">
                                            <a href="booking.html" className="btn book-btn">Book Now</a>
                                        </div>
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


        <section className="section section-blogs">
            <div className="container-fluid">

                <div className="section-header text-center aos" data-aos="fade-up">
                    <h2>Read top articles from health experts</h2>
                    <p className="sub-title">Health articles that keep you informed about good health practices and achieve your goals.</p>
                </div>

                <div className="row blog-grid-row">
                    <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">

                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" src="/img/blog/blog-01.jpg" alt="Post Image" /></a>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <a href="#"><Image src="/img/doctors/doctor-thumb-01.jpg" alt="Post Author" /> <span>Dr. Vidya B</span></a>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 4 Dec 2022</li>
                                </ul>
                                <h3 className="blog-title"><a href="#">AidXpert – Making your clinic painless visit?</a></h3>
                                <p className="mb-0">At AidXpert, we work hard to make sure that you and your loved ones have a fantastic experience anytime there’s a healthcare need.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">

                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" src="/img/blog/blog-02.jpg" alt="Post Image" /></a>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <a href="#"><Image src="/img/doctors/doctor-thumb-02.jpg" alt="Post Author" /> <span>Dr. Ganesh K</span></a>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 23 Jan 2023</li>
                                </ul>
                                <h3 className="blog-title"><a href="#">What are the benefits of Online Doctor Booking?</a></h3>
                                <p className="mb-0">An online doctor appointment system enhances patient satisfaction. Patients no longer have to be worried about the wait times in your clinic.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">

                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" src="/img/blog/blog-03.jpg" alt="Post Image" /></a>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <a href="#"><Image src="/img/doctors/doctor-thumb-03.jpg" alt="Post Author" /> <span>Dr. Nisha Verma</span></a>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 12 July 2023</li>
                                </ul>
                                <h3 className="blog-title"><a href="#">Benefits of consulting with an Online Doctor</a></h3>
                                <p className="mb-0">With AidXpert, you don't have to drive to the doctor's office or clinic, park, walk or sit in a waiting room when you're sick</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 aos" data-aos="fade-up">

                        <div className="blog grid-blog">
                            <div className="blog-image">
                                <a href="#"><Image className="img-fluid" src="/img/blog/blog-04.jpg" alt="Post Image" /></a>
                            </div>
                            <div className="blog-content">
                                <ul className="entry-meta meta-item">
                                    <li>
                                        <div className="post-author">
                                            <a href="#"><Image src="/img/doctors/doctor-thumb-04.jpg" alt="Post Author" /> <span>Dr. Vidya B</span></a>
                                        </div>
                                    </li>
                                    <li><i className="far fa-clock"></i> 21 Feb 2023</li>
                                </ul>
                                <h3 className="blog-title"><a href="#">5 Great reasons to use an Online Doctor</a></h3>
                                <p className="mb-0">With AidXpert, depending on your schedule, you may not even have to take leave time from work or arrange for child care.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="view-all text-center aos" data-aos="fade-up">
                    <a href="#" className="btn btn-primary">View All</a>
                </div>
            </div>
        </section>

              
    </div>
    
    );
};

export default Index;