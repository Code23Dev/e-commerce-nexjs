import React from 'react'

export default function Footer(){
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="demo1.html">Home</a></li>
                            <li>Error 404</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content error-404">
                    <div className="container">
                        <div className="banner">
                            <figure>
                                <img src="assets/images/pages/404.png" alt="Error 404"
                                     width="820" height="460"/>
                            </figure>
                            <div className="banner-content text-center">
                                <h2 className="banner-title">
                                    <span className="text-secondary">Oops!!!</span> Something Went Wrong Here
                                </h2>
                                <p className="text-light">There may be a misspelling in the URL entered, or the page you
                                    are looking for may no longer exist</p>
                                <a href="demo1.html" className="btn btn-dark btn-rounded btn-icon-right">Go Back Home<i
                                    className="w-icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}