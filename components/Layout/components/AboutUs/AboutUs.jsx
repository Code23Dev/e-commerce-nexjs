import React from 'react'

export default function Compare(){
    return (
        <div>
            <style jsx>{`
          .member-name{
                margin-bottom:1rem!important;
            }
            .member-info{
                padding-top:1rem!important;
            } 
            .overlayYuxari{
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: 79% !important;
              display: -webkit-box !important;
              display: -ms-flexbox !important;
              display: flex !important;
              -webkit-box-orient: vertical !important;
              -webkit-box-direction: normal !important;
              -ms-flex-direction: column !important;
              flex-direction: column !important;
              -webkit-box-align: center !important;
              -ms-flex-align: center !important;
              align-items: center !important;
              -webkit-box-pack: center !important;
              -ms-flex-pack: center !important;
              justify-content: center !important;
              padding-top: 10rem !important;
              background: rgba(0, 0, 0, 0.3) !important;
              border-radius: 1.3rem !important;
              opacity: 0 !important;
              border-radius: 1.3rem !important;
              -webkit-transition: opacity 0.3s, padding-top 0.3s !important;
              transition: opacity 0.3s, padding-top 0.3s !important;
              cursor: pointer !important;
            }
            .devotedMarket {
              margin-bottom: 1.3rem;
              font-size: 3.4rem;
              -webkit-box-pack: center;
              justify-content: center;
              display: flex;
              flex-wrap: wrap;
              position: relative;
              -webkit-box-align: center;
              align-items: center;
                text-align: center;
                font-weight: 800;
                line-height: 1.2;
            }
            .fourText{
              text-align: center;
              font-size: 1.4rem;
              line-height: 1.86;
              margin-bottom: 4.3rem;
              max-width: 57rem;
              margin-left: auto !important;
              margin-right: auto !important;
            }
            .count-tos span {
            font-size: 6rem;
            font-weight: 800;
            color: #ccc;
            letter-spacing: -0.05em;
            line-height: 1.54;
        }
        .social-icons {
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .meetOur {
    font-size: 3.4rem;
    justify-content: center;
    align-items: center;
    text-align: center;
}
        .fourWin {
        margin-bottom: 0;
        font-size: 2rem;
        color: #333;
        line-height: 1.6;
        letter-spacing: -0.025em;
    }
        .fourPicture{
          width: 109px!important;
          height:105px;
          margin: 0 auto 2rem;
        }
     `} </style>
            <main className="main">
                <div className="page-header">
                    <div className="container">
                        <h1 className="page-title mb-0">About Us</h1>
                    </div>
                </div>
                <nav className="breadcrumb-nav mb-10 pb-8">
                    <div className="container">
                        <ul className="breadcrumb">
                            <li><a href="demo1.html">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content">
                    <div className="container">
                        <section className="introduce mb-10 pb-10">
                            <h2 className="devotedMarket" style={{fontSize: '4rem'}}>
                                We’re Devoted Marketing<br/>Consultants Helping Your Business Grow
                            </h2>
                            <p className="fourText">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor
                                labore et dolore magna aliqua. Venenatis tellu metus</p>
                            <figure className="br-lg">
                                <img src="assets/images/pages/about_us/1.jpg" alt="Banner"
                                     width="1240" height="540" style={{backgroundColor: '#D0C1AE'}}/>
                            </figure>
                        </section>

                        <section className="customer-service mb-7">
                            <div className="row align-items-center">
                                <div className="col-md-6 pr-lg-8 mb-8">
                                    <h2 className="provide" style={{fontSize: '3.4rem'}}>We Provide Continuous &amp; Kind Service for
                                        Customers</h2>
                                    <div className="accordion accordion-simple accordion-plus">
                                        <div className="card border-no">
                                            <div className="card-header">
                                                <a href="#collapse3-1" className="collapse" style={{fontSize: '2.2rem'}}>Customer Service</a>
                                            </div>
                                            <div className="card-body expanded" id="collapse3-1">
                                                <p className="mb-0" style={{fontSize: '1.6rem'}}>
                                                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                    sed do eius mod tempor incididunt ut labore
                                                    et dolore magna aliqua. Venenatis tell
                                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse3-2" className="expand" style={{fontSize: '2.2rem'}}>Online Consultation</a>
                                            </div>
                                            <div className="card-body collapsed" id="collapse3-2">
                                                <p className="mb-0" style={{fontSize: '1.6rem'}}>
                                                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                    sed do eius mod tempor incididunt ut labore
                                                    et dolore magna aliqua. Venenatis tell
                                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a href="#collapse3-3" className="expand" style={{fontSize: '2.2rem'}}>Sales Management</a>
                                            </div>
                                            <div className="card-body collapsed" id="collapse3-3">
                                                <p className="mb-0" style={{fontSize: '1.6rem'}}>
                                                    Lorem ipsum dolor sit eiusamet, consectetur adipiscing elit,
                                                    sed do eius mod tempor incididunt ut labore
                                                    et dolore magna aliqua. Venenatis tell
                                                    us in metus vulputate eu scelerisque felis. Vel pretium vulp.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-8">
                                    <figure className="br-lg">
                                        <img src="assets/images/pages/about_us/2.jpg" alt="Banner"
                                             width="610" height="500" style={{backgroundColor: '#CECECC'}}/>
                                    </figure>
                                </div>
                            </div>
                        </section>

                        <section className="count-section mb-10 pb-5">
                            <div className="swiper-container swiper-theme" data-swiper-options="{
                            'slidesPerView': 1,
                            'breakpoints': {
                                '768': {
                                    'slidesPerView': 2
                                },
                                '992': {
                                    'slidesPerView': 3
                                }
                            }
                        }">
                                <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                                    <div className="swiper-slide counter-wrap">
                                        <div className="counter text-center count-tos">
                                            <span className="count-to" data-to="15">0</span>
                                            <span>M+</span>
                                            <h4 className="title title-center">Products For Sale</h4>
                                            <p>Diam maecenas ultricies mi eget mauris<br/>
                                                Nibh tellus molestie nunc non</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide counter-wrap">
                                        <div className="counter text-center count-tos">
                                            <span>$</span>
                                            <span className="count-to" data-to="25">0</span>
                                            <span>B+</span>
                                            <h4 className="title title-center">Community Earnings</h4>
                                            <p>Diam maecenas ultricies mi eget mauris<br/>
                                                Nibh tellus molestie nunc non</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide counter-wrap">
                                        <div className="counter text-center count-tos">
                                            <span className="count-to" data-to="100">0</span>
                                            <span>M+</span>
                                            <h4 className="title title-center">Growing Buyers</h4>
                                            <p>Diam maecenas ultricies mi eget mauris<br/>
                                                Nibh tellus molestie nunc non</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </section>
                    </div>
                    <section className="boost-sections pt-10 pb-10" style={{backgroundColor:'#fafafb'}}>
                        <div className="container mt-10 mb-9">
                            <div className="row align-items-center mb-10">
                                <div className="col-md-6 mb-8">
                                    <figure className="br-lg">
                                        <img src="assets/images/pages/about_us/3.jpg" alt="Banner"
                                             width="610" height="450" style={{backgroundColor: '#9E9DA2'}}/>
                                    </figure>
                                </div>
                                <div className="col-md-6 pl-lg-8 mb-8">
                                    <h4 className="weBoost" style={{fontSize: '3.4rem'}}>We Boost Our Clients’ Bottom
                                        Line by Optimizing Their Growth Potential</h4>
                                    <p className="mb-6" style={{fontSizeize: '1.4rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Venenatis tellus in.
                                        metus vulputate eu scelerisque felis. Vel pretium lectus qua .
                                        Arpis massa. Nunc id cursus metus ididunt ut labore metus vulputate
                                        episcing.</p>
                                    <a href="#" className="btn btn-dark btn-rounded">Visit Our Store</a>
                                </div>
                            </div>


                            <div className="awards-wrappers">

                                <h4 className="title title-center font-weight-bold mb-10 pb-1 ls-25" style={{fontSize: '3rem'}}>Awards</h4>
                                <div className="swiper-container swiper-theme" data-swiper-options="{
                                'spaceBetween': 20,
                                'slidesPerView': 1,
                                'breakpoints': {
                                    '768': {
                                        'slidesPerView': 2
                                    },
                                    '992': {
                                        'slidesPerView': 3
                                    },
                                    '1200': {
                                        'slidesPerView': 4
                                    }
                                }
                            }">
                                    <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2 cols-1">
                                        <div className="swiper-slide image-box-wrapper">
                                            <div className="image-box text-center">
                                                <figure>
                                                    <img className="fourPicture" src="assets/images/pages/about_us/1.png" alt="Award Image"
                                                         width={109} height={105}/>
                                                </figure>
                                                <p className='fourWin'>Winner Seo Master MAGT<br/>
                                                    Smart Start Award 2018</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide image-box-wrapper">
                                            <div className="image-box text-center">
                                                <figure>
                                                    <img className="fourPicture" src="assets/images/pages/about_us/2.png" alt="Award Image"
                                                         width={109} height={105}/>
                                                </figure>
                                                <p className='fourWin'>Top Social Media Agencies<br/>
                                                    Next Partner 2019</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide image-box-wrapper ">
                                            <div className="image-box text-center">
                                                <figure>
                                                    <img className="fourPicture" src="assets/images/pages/about_us/3.png" alt="Award Image"
                                                         width={109} height={105}/>
                                                </figure>
                                                <p className='fourWin'>5 Fastest Growing Abstract<br/>
                                                    Solution Providers 2020</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide image-box-wrapper">
                                            <div className="image-box text-center">
                                                <figure>
                                                    <img className="fourPicture" src="assets/images/pages/about_us/4.png" alt="Award Image"
                                                         width={109} height={105}/>
                                                </figure>
                                                <p className='fourWin'>National Excellence Agencie<br/>
                                                    Award Winner 2021</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="member-section mt-10 pt-9 mb-10 pb-4">
                        <div className="container">
                            <h4 className="meetOur">Meet Our Leaders</h4>
                            <p className="text-center mb-8">Nunc id cursus metus aliquam. Libero id faucibus nisl
                                tincidunt eget. Aliquam<br/>
                                maecenas ultricies mi eget mauris. Volutpat ac</p>
                            <div className="swiper-container swiper-theme" data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '576': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                                <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-sm-2 cols-1">
                                    <div className="swiper-slide member-wrap">
                                        <figure className="br-lg">
                                            <img src="assets/images/pages/about_us/4.jpg" alt="Member" width={295}
                                                 height={332}/>
                                            <div className="overlayYuxari">
                                                <div className="social-icons">
                                                    <a href="#"
                                                       className="social-icon social-facebook w-icon-facebook"></a>
                                                    <a href="#"
                                                       className="social-icon social-twitter w-icon-twitter"></a>
                                                    <a href="#"
                                                       className="social-icon social-instagram w-icon-instagram"></a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="member-info text-center pt-5">
                                            <h4 className="member-name">John Doe</h4>
                                            <p className="text-uppercase">Founder &amp; CEO</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide member-wrap">
                                        <figure className="br-lg">
                                            <img src="assets/images/pages/about_us/5.jpg" alt="Member" width={295}
                                                 height={332}/>
                                            <div className="overlayYuxari">
                                                <div className="social-icons">
                                                    <a href="#"
                                                       className="social-icon social-facebook w-icon-facebook"></a>
                                                    <a href="#"
                                                       className="social-icon social-twitter w-icon-twitter"></a>
                                                    <a href="#"
                                                       className="social-icon social-instagram w-icon-instagram"></a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="member-info text-center pt-5">
                                            <h4 className="member-name">Jessica Doe</h4>
                                            <p className="text-uppercase">Marketing</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide member-wrap">
                                        <figure className="br-lg">
                                            <img src="assets/images/pages/about_us/6.jpg" alt="Member" width={295}
                                                 height={332}/>
                                            <div className="overlayYuxari">
                                                <div className="social-icons">
                                                    <a href="#"
                                                       className="social-icon social-facebook w-icon-facebook"></a>
                                                    <a href="#"
                                                       className="social-icon social-twitter w-icon-twitter"></a>
                                                    <a href="#"
                                                       className="social-icon social-instagram w-icon-instagram"></a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="member-info text-center pt-5">
                                            <h4 className="member-name">Rick Edward Doe</h4>
                                            <p className="text-uppercase">Developer</p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide member-wrap">
                                        <figure className="br-lg">
                                            <img src="assets/images/pages/about_us/7.jpg" alt="Member" width={295}
                                                 height={332}/>
                                            <div className="overlayYuxari">
                                                <div className="social-icons">
                                                    <a href="#"
                                                       className="social-icon social-facebook w-icon-facebook"></a>
                                                    <a href="#"
                                                       className="social-icon social-twitter w-icon-twitter"></a>
                                                    <a href="#"
                                                       className="social-icon social-instagram w-icon-instagram"></a>
                                                </div>
                                            </div>
                                        </figure>
                                        <div className="member-info text-center pt-5">
                                            <h4 className="member-name">Melinda Wolosky</h4>
                                            <p className="text-uppercase">Design</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )}