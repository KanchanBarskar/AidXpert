"use client";
import React from "react";
import Image from "next/image";
import "../../styles/globals.css";
import Script from "next/script";

const OrderMedecine = () => {
    return (<>

<style jsx>{`
                .sticky-divi-button {
                    color: #ffffff;
                    font-family: inherit;
                    font-size: 16px;
                    background-color: #a61f25;
                    font-family: "Poppins";
                    border-radius: 4px;
                    text-transform: uppercase;
                    text-decoration: none;
                    box-shadow: 0px 25px 28px -21px rgba(194, 180, 190, 1);
                    padding: 20px 10px;
                    z-index: 10;
                    position: fixed;
                    bottom: 40%;
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

        <div className="main-wrapper">

            <section className="section full-slide-home">
                <div>
                    <div className="slick-wrapper">
                        <div className="slider-1">

                            <div className="col-12 d-flex">
                                <div className="col-12 col-lg-6">
                                    <div className="slide-image">
                                        <span className="text-secondary text-uppercase d-block mb-3">Available Everywhere</span>
                                        <h2 className="mb-3">Delivering in 100+ cities <br /> all over India</h2>
                                        <ul className="list-inline slide-ul">
                                            <li className="list-inline-item">Reasonable wait time</li>
                                            <li className="list-inline-item">Fixed Consultation Fee</li>
                                            <li className="list-inline-item">Consulation with the preferred doctor</li>
                                        </ul>
                                        <div className="d-inline-block">
                                            <a href="#contents" className="btn book-btn1" tabIndex={0}>Order Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 d-flex justify-content-center">
                                    <Image src="/img/doc-slide-1.png" alt="" />
                                </div>
                            </div>


                            <div className="col-12 d-flex">
                                <div className="col-12 col-lg-6">
                                    <div className="slide-image">
                                        <span className="text-secondary text-uppercase d-block mb-3">Fast Healthcare</span>
                                        <h2 className="mb-3">Reliable on time <br /> home delivery</h2>
                                        <ul className="list-inline slide-ul">
                                            <li className="list-inline-item">Reasonable wait time</li>
                                            <li className="list-inline-item">Fixed Consultation Fee</li>
                                            <li className="list-inline-item">Consulation with the preferred doctor</li>
                                        </ul>
                                        <div className="d-inline-block">
                                            <a href="#contents" className="btn book-btn1" tabIndex={0}>Order Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-12 col-lg-6 d-flex justify-left">
                                    <Image src="/img/doc-slide-12.png" alt="" />
                                </div>
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

                            <p style={{ color: "#000" }}>Share your prescription with us and our team will help you to order medicines.</p>
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
            <div className="content" id="contents">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-3 col-xl-3 theiaStickySidebar">

                            <div className="card search-filter">
                                <div className="card-header">
                                    <h4 className="card-title mb-0">Filter</h4>
                                </div>
                                <div className="card-body">
                                    <div className="filter-widget">
                                        <label className="mb-2">Search Medicine</label>
                                        <input type="text" className="form-control" placeholder=" " />
                                    </div>
                                    <div className="filter-widget">
                                        <h4>Categories</h4>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" checked />
                                                <span className="checkmark"></span> Family Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Skin Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Hair Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Lip Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Men's Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Women's Care
                                            </label>
                                        </div>
                                        <div>
                                            <label className="custom_check">
                                                <input type="checkbox" name="gender_type" />
                                                <span className="checkmark"></span> Baby care
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn-search">
                                        <button type="button" className="btn w-100">Search</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-7 col-lg-9 col-xl-9">
                            <div className="row align-items-center pb-3">
                                <div className="col-md-4 col-12 d-md-block d-none custom-short-by">
                                    <h3 className="title pharmacy-title">Order Medicines</h3>
                                    <span className="sort-title">Showing 6 of 98 products</span>
                                </div>
                                <div className="col-md-8 col-12 d-md-block d-none custom-short-by">
                                    <div className="sort-by pb-3">
                                        <span className="sort-title">Sort by</span>
                                        <span className="sortby-fliter">
                                            <select className="form-select">
                                                <option>Select</option>
                                                <option className="sorting">Rating</option>
                                                <option className="sorting">Popular</option>
                                                <option className="sorting">Latest</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Benzaxapine Croplex</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.19.00</span>
                                                    <span className="price-strike">Rs.45.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product13.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Rapalac Neuronium</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.16.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product1.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Ombinazol Bonibamol</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.22.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product2.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Dantotate Dantodazole</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.10.00</span>
                                                    <span className="price-strike">Rs.12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product12.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Acetrace Amionel</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.7.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product11.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Ergorinex Caffeigestin</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.15.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product3.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Alispirox Aerorenone</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.26.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product10.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Lysofranil Dorzostin</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.10.00</span>
                                                    <span className="price-strike">Rs.12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product4.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Nitrolozin Zithrotropin</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.12.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product14.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Cordacriptine Mardipine</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.9.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product5.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Iconevist Ampyplex</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.16.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product6.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Alcafsteride Omebide</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.7.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product15.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Neubide Aborase</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.30.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product7.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>ITONE eye drops 10ml</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.50.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-lg-4 col-xl-4 product-custom">
                                    <div className="profile-widget">
                                        <div className="doc-img">
                                            <a href="product-description.html" tabIndex={-1}>
                                                <Image className="img-fluid" alt="Product image" src="/img/products/product8.jpg" />
                                            </a>
                                            <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                                                <i className="far fa-bookmark"></i>
                                            </a>
                                        </div>
                                        <div className="pro-content">
                                            <h3 className="title pb-4">
                                                <a href="product-description.html" tabIndex={-1}>Antatriene Drospiletra</a>
                                            </h3>
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <span className="price">Rs.10.00</span>
                                                    <span className="price-strike">Rs.20.00</span>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <a href="cart.html" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <a href="#" className="btn book-btn1 mb-4">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
};

export default OrderMedecine;
