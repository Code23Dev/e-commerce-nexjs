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
                         style={{padding:'11px'}}
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
                    <div className="row category-wrapper cols-lg-3 cols-sm-2 mt-3 appear-animate ">
                        <div className="category-wrap mb-4">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Clothings</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Knitwears</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Jumpers</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Trousers</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Dress  Skirts</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Mens</a></li>
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
                                        <li><a href="shop-fullwidth-banner.html">Store Business</a></li>
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
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">HomeKitchen</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">FurnituresDecor</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Cookwares</a></li>
                                        <li><a href="shop-fullwidth-banner.html">UtensilGadgets</a></li>
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
                        <div className="category-wrap">
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
                        <div className="category-wrap">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Healthy  Beauty</a>
                                    </h4>
                                    <ul className="category-list">
                                        <li><a href="shop-fullwidth-banner.html">Makeup</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Skin Care</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Hair Care</a></li>
                                        <li><a href="shop-fullwidth-banner.html">Tool Equipments</a></li>
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
                        <div className="category-wrap">
                            <div className="category category-group-image br-sm">
                                <div className="category-content">
                                    <h4 className="category-name"><a href="shop-fullwidth-banner.html">Jewelry  Watch</a>
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
                <div className="container mt-1 pt-2">
                    <h2 className="title title-underline mb-4 appear-animate">Ən yeni Mağazalar</h2>
                    <div className="swiper-container swiper-theme mb-10 pb-2 appear-animate" data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 1,
                    'breakpoints': {
                        '576': {
                            'slidesPerView': 2
                        },
                        '768': {
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }">
                        <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                            <div className="swiper-slide vendor-widget mb-0">
                                <div className="vendor-widget-2">
                                    <div className="vendor-details">
                                        <figure className="vendor-logo">
                                            <a href="vendor-dokan-store.html">
                                                <img src="assets/images/demos/demo9/vendor-logo/1.jpg" alt="Vendor Logo"
                                                     width="70" height="70"/>
                                            </a>
                                        </figure>
                                        <div className="vendor-personal">
                                            <h4 className="vendor-name">
                                                <a href="vendor-dokan-store.html">Vendor 1</a>
                                            </h4>
                                            <span className="vendor-product-count">(27 Products)</span>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width: '100%'}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <span className="vendor-product-count">category</span>
                                        </div>
                                    </div>
                                    <div className="vendor-products row cols-3 gutter-sm">
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-1.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-2.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-3.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide vendor-widget mb-0">
                                <div className="vendor-widget-2">
                                    <div className="vendor-details">
                                        <figure className="vendor-logo">
                                            <a href="vendor-dokan-store.html">
                                                <img src="assets/images/demos/demo9/vendor-logo/2.jpg" alt="Vendor Logo"
                                                     width="70" height="70"/>
                                            </a>
                                        </figure>
                                        <div className="vendor-personal">
                                            <h4 className="vendor-name">
                                                <a href="vendor-dokan-store.html">Vendor 2</a>
                                            </h4>
                                            <span className="vendor-product-count">(20 Products)</span>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width: '100%'}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <span className="vendor-product-count">category</span>
                                        </div>
                                    </div>
                                    <div className="vendor-products row cols-3 gutter-sm">
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-4.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-5.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-6.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide vendor-widget mb-0">
                                <div className="vendor-widget-2">
                                    <div className="vendor-details">
                                        <figure className="vendor-logo">
                                            <a href="vendor-dokan-store.html">
                                                <img src="assets/images/demos/demo9/vendor-logo/3.jpg" alt="Vendor Logo"
                                                     width="70" height="70"/>
                                            </a>
                                        </figure>
                                        <div className="vendor-personal">
                                            <h4 className="vendor-name">
                                                <a href="vendor-dokan-store.html">Vendor 3</a>
                                            </h4>
                                            <span className="vendor-product-count">(30 Products)</span>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width: '100%'}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <span className="vendor-product-count">category</span>
                                        </div>
                                    </div>
                                    <div className="vendor-products row cols-3 gutter-sm">
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-7.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-8.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-9.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide vendor-widget mb-0">
                                <div className="vendor-widget-2">
                                    <div className="vendor-details">
                                        <figure className="vendor-logo">
                                            <a href="vendor-dokan-store.html">
                                                <img src="assets/images/demos/demo9/vendor-logo/4.jpg" alt="Vendor Logo"
                                                     width="70" height="70"/>
                                            </a>
                                        </figure>
                                        <div className="vendor-personal">
                                            <h4 className="vendor-name">
                                                <a href="vendor-dokan-store.html">Vendor 4</a>
                                            </h4>
                                            <span className="vendor-product-count">(17 Products)</span>
                                            <div className="ratings-container">
                                                <div className="ratings-full">
                                                    <span className="ratings" style={{width: '100%'}}></span>
                                                    <span className="tooltiptext tooltip-top"></span>
                                                </div>
                                            </div>
                                            <span className="vendor-product-count">category</span>
                                        </div>
                                    </div>
                                    <div className="vendor-products row cols-3 gutter-sm">
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-10.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-11.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                        <div className="vendor-product">
                                            <figure className="product-media">
                                                <a href="product-default.html">
                                                    <img src="assets/images/demos/demo9/product/4-12.jpg"
                                                         alt="Vendor Product" width="100" height="113"/>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <Home1Card/>
                <div className="container mt-1 pt-2">
                    <div className="filter-with-title appear-animate">
                        <h2 className="title">Bütün məhsullar</h2>
                        <ul className="nav-filters filter-boxed" data-target="#products-1">
                            <li><a href="#" className="nav-filter active" data-filter=".1-1">New Arrivals</a></li>
                            <li><a href="#" className="nav-filter" data-filter=".1-2">Best Seller</a></li>
                            <li><a href="#" className="nav-filter" data-filter=".1-3">Most Popular</a></li>
                            <li><a href="#" className="nav-filter" data-filter="*">View All</a></li>
                        </ul>
                    </div>
                    <div className="product-wrapper row cols-lg-5 cols-md-4 cols-sm-2 cols-2">
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/1.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">3D Television</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '100%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(3
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $220.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/2-1.jpg" alt="Product" width="300"
                                             height="338"/>
                                        <img src="assets/images/shop/2-2.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-countdown-container" style={{height: '35px'}}>
                                        <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                             data-format="DHMS" data-compact="false"
                                             style={{fontSize: '20px'}}
                                             data-labels-short="Days, Hours, Mins, Secs">
                                            00:00:00:00
                                        </div>
                                    </div>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Alarm Clock With Lamp</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '100%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(10
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            <ins className="new-price">$30.00</ins>
                                            <del
                                                className="old-price">$60.00
                                            </del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/3.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Apple Laptop</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '80%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(5
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $1,000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/4.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Attachable Charge Alarm</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '60%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(7
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $15.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/1.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">3D Television</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '100%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(3
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $220.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/2-1.jpg" alt="Product" width="300"
                                             height="338"/>
                                        <img src="assets/images/shop/2-2.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-countdown-container" style={{height: '35px'}}>
                                        <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                             data-format="DHMS" data-compact="false"
                                             style={{fontSize: '20px'}}
                                             data-labels-short="Days, Hours, Mins, Secs">
                                            00:00:00:00
                                        </div>
                                    </div>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Alarm Clock With Lamp</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '100%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(10
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            <ins className="new-price">$30.00</ins>
                                            <del
                                                className="old-price">$60.00
                                            </del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/3.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Apple Laptop</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '80%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(5
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $1,000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/4.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Attachable Charge Alarm</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '60%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(7
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $15.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/3.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Apple Laptop</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '80%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(5
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $1,000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-wrap">
                            <div className="product text-center">
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/shop/4.jpg" alt="Product" width="300"
                                             height="338"/>
                                    </a>
                                    <div className="product-action-horizontal">
                                        <a href="#" className="btn-product-icon btn-cart w-icon-cart"
                                           title="Add to cart"></a>
                                        <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                           title="Wishlist"></a>
                                        <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                           title="Compare"></a>
                                        <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                           title="CƏLD BAXIŞ"></a>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <div className="product-cat">
                                        <a href="shop-banner-sidebar.html">Electronics</a>
                                    </div>
                                    <h3 className="product-name">
                                        <a href="product-default.html">Attachable Charge Alarm</a>
                                    </h3>
                                    <div className="ratings-container">
                                        <div className="ratings-full">
                                            <span className="ratings" style={{width: '60%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                        <a href="product-default.html" className="rating-reviews">(7
                                            reviews)</a>
                                    </div>
                                    <div className="product-pa-wrapper">
                                        <div className="product-price">
                                            $15.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<div className="toolbox toolbox-pagination justify-content-between">*/}
                    {/*    <p className="showing-info mb-2 mb-sm-0">*/}
                    {/*        Showing<span>1-12 of 60</span>Products*/}
                    {/*    </p>*/}
                    {/*    <ul className="pagination">*/}
                    {/*        <li className="prev disabled">*/}
                    {/*            <a href="#" aria-label="Previous" tabIndex="-1" aria-disabled="true">*/}
                    {/*                <i className="w-icon-long-arrow-left"></i>Prev*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item active">*/}
                    {/*            <a className="page-link" href="#">1</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="page-item">*/}
                    {/*            <a className="page-link" href="#">2</a>*/}
                    {/*        </li>*/}
                    {/*        <li className="next">*/}
                    {/*            <a href="#" aria-label="Next">*/}
                    {/*                Next<i className="w-icon-long-arrow-right"></i>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <section className="grey-section pt-10">
                    <div className="container mt-3 mb-1">
                        <h2 className="title text-left mb-5 appear-animate">Bizim Partnyorlar</h2>
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


                    </div>
                </section>
                <div className="container pt-10">
                    <div className="title-link-wrapper title-recent mb-6 after-none appear-animate">
                        <h2 className="title mb-0 ls-normal appear-animate pb-1">Ən son baxdığınız məhsullar</h2>
                    </div>
                    <div className="swiper-container swiper-theme recent-view shadow-swiper appear-animate mb-8 pb-2"
                         data-swiper-options="{
                        'spaceBetween': 20,
                        'slidesPerView': 2,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 5
                            },
                            '992': {
                                'slidesPerView': 6
                            },
                            '1200': {
                                'slidesPerView': 8,
                                'dots': false
                            }
                        }
                    }">
                        <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/1-1-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Headkerchief</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/1-1-2.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Leather Stripe Watch</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/4-1-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Red Cap Sound Marker</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/2-3-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Smartphone Electronic Charger</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/2-4-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Blue Ski Boots</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/2-2-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Soft Sound Marker</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/3-1-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Multi function Watch</a>
                                    </h4>
                                </div>
                            </div>
                            <div className="swiper-slide product-wrap">
                                <div className="product text-center product-absolute">
                                    <figure className="product-media">
                                        <a href="product-defaproduct-default.html">
                                            <img src="assets/images/demos/demo11/products/4-2-1.jpg"
                                                 alt="Category image"
                                                 width="130" height="146"/>
                                        </a>
                                    </figure>
                                    <h4 className="product-name">
                                        <a href="product-default.html">Running Machine</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                <section className="grey-section pt-10">
                    <div className="container mt-3 mb-1">
                        <h2 className="title text-left pt-1 mb-5 appear-animate">İnstagramda Biz</h2>
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