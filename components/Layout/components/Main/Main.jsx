import React from "react";
import Home1Card from "../Home1Card/Home1Card";

export default function Main(){
    return (
        <div>
            <main className="main">
                <div className="container pb-2">
                    <div className="intro-wrapper mt-4">
                        <div className="swiper-container swiper-theme pg-inner animation-slider row cols-1 gutter-no"
                             data-swiper-options="{
                        'autoplay': {
                            'delay': 8000,
                            'disableOnInteraction': false
                        }
                    }">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide banner banner-fixed intro-slide intro-slide1 br-sm"
                                     style={{backgroundImage: 'url(assets/images/demos/demo8/slides/slide-1.jpg)',backgroundColor: '#E8EAEF'}}>
                                    <div className="banner-content y-50 text-right">
                                        <div className="slide-animate" data-animation-options="{
                                        'name': 'fadeInUpShorter', 'duration': '1s'
                                    }">
                                            <h5 className="banner-subtitle text-uppercase font-weight-bold mb-2">Deals And
                                                Promotions</h5>
                                            <h3 className="banner-title text-capitalize ls-25">
                                                <span className="text-primary">Introducing</span><br/>
                                                Fashion Lifestyle<br/>Collection
                                            </h3>
                                            <a href="demo8-shop.html"
                                               className="btn btn-dark btn-outline btn-rounded btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                                     style={{backgroundImage:' url(assets/images/demos/demo8/slides/slide-2.jpg)', backgroundColor: '#2e3233'}}>
                                    <div className="banner-content y-50">
                                        <div className="slide-animate" data-animation-options="{
                                        'name': 'flipInY', 'duration': '1s'
                                    }">
                                            <h5 className="banner-subtitle text-white text-uppercase font-weight-bold">Smartphones
                                            </h5>
                                            <h3 className="banner-title text-white text-capitalize mb-0 ls-25">Sumsong Galaxy</h3>
                                            <div className="banner-price-info text-white ls-25">Up to <strong
                                                className="text-secondary text-uppercase">30% Off</strong></div>
                                            <p className="text-white">Get Free Shipping on all orders over <strong
                                                className="font-weight-bold">$199.99</strong></p>
                                            <a href="demo8-shop.html"
                                               className="btn btn-white btn-outline btn-rounded btn-icon-right">
                                                Shop Now<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide banner banner-fixed intro-slide intro-slide3 br-sm"
                                     style={{backgroundImage: 'url(assets/images/demos/demo8/slides/slide-3.jpg)', backgroundColor:'#363332'}}>
                                    <div className="banner-content y-50">
                                        <div className="slide-animate" data-animation-options="{
                                        'name': 'zoomIn', 'duration': '1s'
                                    }">
                                            <h5 className="banner-subtitle text-uppercase font-weight-normal text-secondary mb-2">
                                                From online store</h5>
                                            <h3 className="banner-title text-white text-capitalize">Originals Comper<br/>Star. Shoes
                                            </h3>
                                            <hr className="divider bg-white"/>
                                            <p className="text-white text-uppercase mb-0 font-weight-bold">for - Women<br />
                                                <span className="font-weight-normal ls-normal">Product Identifier: </span><span
                                                    className="text-secondary ls-normal">DD2098</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
                <div className="container mb-10 pb-2">
                    <div className="swiper-container swiper-theme icon-box-wrapper appear-animate br-sm bg-white"
                         data-swiper-options="{
                    'loop': true,
                    'slidesPerView': 1,
                    'autoplay': {
                        'delay': 4000,
                        'disableOnInteraction': false
                    },
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '992': {
                            'slidesPerView': 3,
                            'spaceBetween': 20
                        },
                        '1200': {
                            'slidesPerView': 4,
                            'spaceBetween': 20
                        }
                    }
                }">
                        <div className="swiper-wrapper row cols-md-4 cols-sm-3 mt-3 cols-1">
                            <div className="swiper-slide icon-box icon-box-side text-dark">
                            <span className="icon-box-icon icon-shipping">
                                <i className="w-icon-truck"></i>
                            </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bolder ls-normal">Free Shipping & Returns</h4>
                                    <p className="text-default">For all orders over $99</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side text-dark">
                            <span className="icon-box-icon icon-payment">
                                <i className="w-icon-bag"></i>
                            </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bolder ls-normal">Secure Payment</h4>
                                    <p className="text-default">We ensure secure payment</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side text-dark icon-box-money">
                            <span className="icon-box-icon icon-money">
                                <i className="w-icon-money"></i>
                            </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bolder ls-normal">Money Back Guarantee</h4>
                                    <p className="text-default">Any back within 30 days</p>
                                </div>
                            </div>
                            <div className="swiper-slide icon-box icon-box-side text-dark icon-box-chat">
                            <span className="icon-box-icon icon-chat">
                                <i className="w-icon-chat"></i>
                            </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title font-weight-bolder ls-normal">Customer Support</h4>
                                    <p className="text-default">Call or email us 24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row category-wrapper cols-lg-3 cols-sm-2 mt-3 appear-animate mb-8">
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Clothings</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Knitwears</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Jumpers</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Trousers</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Dress &amp; Skirts</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Men's</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-1.jpg" alt="Category" width="190"
                                             height="215"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Office
                                        Electronics</a></h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Printers</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Store &amp; Business</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Scanners</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Projectors</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Phones</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-2.jpg" alt="Category" width="190"
                                             height="215"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Home &amp; Kitchen</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Furnitures &amp; Decor</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Cookwares</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Utensil &amp; Gadgets</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Garden Tools</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Livingroom</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Bedroom</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-3.jpg" alt="Category" width="190"
                                             height="215"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Television</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Smart TV</a></li>
                                        <li><a href="shop-fullwidth-banner.html">4K Ultra HD TVs</a></li>
                                        <li><a href="shop-fullwidth-banner.html">LED TVs</a></li>
                                        <li><a href="shop-fullwidth-banner.html">OLED TVs</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Camera</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-4.jpg" alt="Category" width="190"
                                             height="215"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Healthy &amp; Beauty</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Makeup</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Skin Care</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Hair Care</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Tools &amp; Equipments</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Perfumes</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-5.jpg" alt="Category" width="190"
                                             height="214"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Jewelry &amp; Watch</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Pendant</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Necklace</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Watch</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Bracelets</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Smart Watches</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Accessories</a></li>
                                    </ul>
                                </div>
                                <a href="shop-fullwidth-banner.html">
                                    <figure className="category-media">
                                        <img src="assets/images/demos/demo4/categories/1-6.jpg" alt="Category" width="190"
                                             height="214"/>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <Home1Card/>
                <section className="grey-section pt-10">
                    <div className="container mt-3 mb-1">
                        <h2 className="title text-left mb-5 appear-animate">Our Clients</h2>
                        <div className="swiper-container swiper-theme brands-wrapper mb-10 bg-white appear-animate"
                             data-swiper-options="{
                        'slidesPerView': 1,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 4
                            },
                            '992': {
                                'slidesPerView': 5
                            }
                        }
                    }">
                            <div className="swiper-wrapper row gutter-no cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                                <div className="swiper-slide brand-col">
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/1.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/2.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                </div>
                                <div className="swiper-slide brand-col">
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/3.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/4.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                </div>
                                <div className="swiper-slide brand-col">
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/5.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/6.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                </div>
                                <div className="swiper-slide brand-col">
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/7.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/8.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                </div>
                                <div className="swiper-slide brand-col">
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/9.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                    <figure className="brand-wrapper">
                                        <img src="assets/images/demos/demo3/brand/10.png" alt="Brand" width="247" height="94"/>
                                    </figure>
                                </div>
                            </div>
                        </div>

                        <h2 className="title text-left pt-1 mb-5 appear-animate">Our Instagram</h2>
                        <div className="swiper-container swiper-theme appear-animate" data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 2,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 4
                            },
                            '992': {
                                'slidesPerView': 5
                            },
                            '1200': {
                                'slidesPerView': 6
                            }
                        }
                    }">
                            <div className="swiper-wrapper row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                                <div className="swiper-slide">
                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/1.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#E6E4E5'}}/>
                                        </a>
                                    </figure>

                                </div>
                                <div className="swiper-slide">

                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/2.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#C6C7CB'}}/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="swiper-slide">

                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/3.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#E3E5E4'}}/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="swiper-slide">

                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/4.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#BDD1D0'}}/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="swiper-slide">

                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/5.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#CED3D9'}}/>
                                        </a>
                                    </figure>
                                </div>
                                <div className="swiper-slide">

                                    <figure className="instagram br-sm">
                                        <a href="#">
                                            <img src="assets/images/demos/demo4/instagrams/6.jpg" alt="Instagram" width="200"
                                                 height="200" style={{backgroundColor: '#B6CBCC'}}/>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )}