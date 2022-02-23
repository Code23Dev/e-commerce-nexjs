import React, {useEffect, useState} from "react";
import Home1Card from "../Home1Card/Home1Card";
import {sliders} from "../../../../services/sliders";
import {displayedCategories} from "../../../../services/displayedCategories";
import {benefits} from "../../../../services/benefits";

export default function Main(){
    const [optionsTitle, optionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        sliders()
            .then(items => {
                if(mounted) {
                    optionsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    const [displayedCategoriesTitle, displayedCategoriesData] = useState([]);
    useEffect(() => {
        let mounted = true;
        displayedCategories()
            .then(items => {
                if(mounted) {
                    displayedCategoriesData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    const [displayedBenefits, displayedBenefitsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        benefits()
            .then(items => {
                if(mounted) {
                    displayedBenefitsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
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
                                {optionsTitle.map(e=>(
                                    <div className="swiper-slide banner banner-fixed intro-slide intro-slide2 br-sm"
                                         style={{backgroundImage:"url(" + e.image + ")",
                                             backgroundColor: '#2e3233'}}>
                                        <div className="banner-content y-50">
                                            <div className="slide-animate" data-animation-options="{
                                        'name': 'flipInY', 'duration': '1s'
                                    }">
                                                <h3 className="banner-subtitle text-white text-uppercase font-weight-bold">{e.title}
                                                </h3>

                                                <p className="text-white">{e.description} </p>
                                                <a href="demo8-shop.html"
                                                   className="btn btn-white btn-outline btn-rounded btn-icon-right">
                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}


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
                            'slidesPerView': 3
                        },
                        '1200': {
                            'slidesPerView': 4
                        }
                    }
                }">
                        <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                            {displayedBenefits.map(e=>(<div className="swiper-slide icon-box icon-box-side text-dark">
                            <span className="icon-box-icon icon-shipping">
                                <img src={e.icon} style={{width:"30px"}}/>
                            </span>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">{e.title}</h4>
                                    <p className="text-default">{e.description}</p>
                                </div>
                            </div>))}

                        </div>
                    </div>
                    <div className="row category-wrapper cols-lg-3 cols-sm-2 mt-3 appear-animate ">
                        {displayedCategoriesTitle.map(e=>(
                            <div className="category-wrap mb-4">
                                <div className="category category-group-image br-sm">
                                    <div className="category-content">
                                        <h4 className="category-name"><a href="shop-fullwidth-banner.html">{e.category.title}</a>
                                        </h4>
                                        <ul className="category-list">
                                            {e.category.sub_categories.map(item=>(
                                                <li><a href="shop-fullwidth-banner.html">{item.title}</a></li>
                                            ))}

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
                        ))}
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
                            <li><a href="#" className="nav-filter active" data-filter=".1-1">YENİ MƏHSULLAR</a></li>
                            <li><a href="#" className="nav-filter" data-filter=".1-2">ÇOX SATILAN</a></li>
                            <li><a href="#" className="nav-filter" data-filter=".1-3">ƏN POPULYAR</a></li>
                            <li><a href="#" className="nav-filter" data-filter="*">HAMISINA BAX</a></li>
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
                                        <img src="assets/images/shop/4.jpg" alt="Product" width="300" height="338"/>
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
            <div className="sticky-footer sticky-content fix-bottom">
                <a href="demo8.html" className="sticky-link active">
                    <i className="w-icon-home"></i>
                    <p>Home</p>
                </a>
                <a href="demo8-shop.html" className="sticky-link">
                    <i className="w-icon-category"></i>
                    <p>Shop</p>
                </a>
                <a href="my-account.html" className="sticky-link">
                    <i className="w-icon-account"></i>
                    <p>Account</p>
                </a>
                <div className="cart-dropdown dir-up">
                    <a href="cart.html" className="sticky-link">
                        <i className="w-icon-cart"></i>
                        <p>Cart</p>
                    </a>
                    <div className="dropdown-box">
                        <div className="products">
                            <div className="product product-cart">
                                <div className="product-detail">
                                    <h3 className="product-name">
                                        <a href="product-default.html">Beige knitted elas<br/>tic
                                            runner shoes</a>
                                    </h3>
                                    <div className="price-box">
                                        <span className="product-quantity">1</span>
                                        <span className="product-price">$25.68</span>
                                    </div>
                                </div>
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/cart/product-1.jpg" alt="product" height="84"
                                             width="94"/>
                                    </a>
                                </figure>
                                <button className="btn btn-link btn-close" aria-label="button">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            <div className="product product-cart">
                                <div className="product-detail">
                                    <h3 className="product-name">
                                        <a href="product-default.html">Blue utility pina<br/>fore
                                            denim dress</a>
                                    </h3>
                                    <div className="price-box">
                                        <span className="product-quantity">1</span>
                                        <span className="product-price">$32.99</span>
                                    </div>
                                </div>
                                <figure className="product-media">
                                    <a href="product-default.html">
                                        <img src="assets/images/cart/product-2.jpg" alt="product" width="84"
                                             height="94"/>
                                    </a>
                                </figure>
                                <button className="btn btn-link btn-close" aria-label="button">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>

                        <div className="cart-total">
                            <label>Subtotal:</label>
                            <span className="price">$58.67</span>
                        </div>

                        <div className="cart-action">
                            <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">View Cart</a>
                            <a href="checkout.html" className="btn btn-primary  btn-rounded">Checkout</a>
                        </div>
                    </div>
                </div>

                <div className="header-search hs-toggle dir-up">
                    <a href="#" className="search-toggle sticky-link">
                        <i className="w-icon-search"></i>
                        <p>Search</p>
                    </a>
                    <form action="#" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                               placeholder="Search"
                               required/>
                        <button className="btn btn-search" type="submit">
                            <i className="w-icon-search"></i>
                        </button>
                    </form>
                </div>
            </div>

            <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i
                className="w-icon-angle-up"></i>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                    <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35"
                            cy="35" r="34" ></circle>
                </svg>
            </a>

            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-overlay"></div>

                <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>

                <div className="mobile-menu-container scrollable">
                    <form action="#" method="get" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                               placeholder="Search"
                               required/>
                        <button className="btn btn-search" type="submit">
                            <i className="w-icon-search"></i>
                        </button>
                    </form>
                    <div className="tab">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a href="#main-menu" className="nav-link active">Main Menu</a>
                            </li>
                            <li className="nav-item">
                                <a href="#categories" className="nav-link">Categories</a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active" id="main-menu">
                            <ul className="mobile-menu">
                                <li><a href="demo8.html">Home</a></li>
                                <li>
                                    <a href="demo8-shop.html">Shop</a>
                                    <ul>
                                        <li>
                                            <a href="#">Shop Pages</a>
                                            <ul>
                                                <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                                                <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                                                <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                                    className="tip tip-hot">Hot</span></a></li>
                                                <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                                    className="tip tip-new">New</span></a></li>
                                                <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a></li>
                                                <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Shop Layouts</a>
                                            <ul>
                                                <li><a href="shop-grid-3cols.html">3 Columns Mode</a></li>
                                                <li><a href="shop-grid-4cols.html">4 Columns Mode</a></li>
                                                <li><a href="shop-grid-5cols.html">5 Columns Mode</a></li>
                                                <li><a href="shop-grid-6cols.html">6 Columns Mode</a></li>
                                                <li><a href="shop-grid-7cols.html">7 Columns Mode</a></li>
                                                <li><a href="shop-grid-8cols.html">8 Columns Mode</a></li>
                                                <li><a href="shop-list.html">List Mode</a></li>
                                                <li><a href="shop-list-sidebar.html">List Mode With Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Product Pages</a>
                                            <ul>
                                                <li><a href="product-variable.html">Variable Product</a></li>
                                                <li><a href="product-featured.html">Featured &amp; Sale</a></li>
                                                <li><a href="product-accordion.html">Data In Accordion</a></li>
                                                <li><a href="product-section.html">Data In Sections</a></li>
                                                <li><a href="product-swatch.html">Image Swatch</a></li>
                                                <li><a href="product-extended.html">Extended Info</a>
                                                </li>
                                                <li><a href="product-without-sidebar.html">Without Sidebar</a></li>
                                                <li><a href="product-video.html">360<sup>o</sup> &amp; Video<span
                                                    className="tip tip-new">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Product Layouts</a>
                                            <ul>
                                                <li><a href="product-default.html">Default<span
                                                    className="tip tip-hot">Hot</span></a></li>
                                                <li><a href="product-vertical.html">Vertical Thumbs</a></li>
                                                <li><a href="product-grid.html">Grid Images</a></li>
                                                <li><a href="product-masonry.html">Masonry</a></li>
                                                <li><a href="product-gallery.html">Gallery</a></li>
                                                <li><a href="product-sticky-info.html">Sticky Info</a></li>
                                                <li><a href="product-sticky-thumb.html">Sticky Thumbs</a></li>
                                                <li><a href="product-sticky-both.html">Sticky Both</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="vendor-dokan-store.html">Vendor</a>
                                    <ul>
                                        <li>
                                            <a href="#">Store Listing</a>
                                            <ul>
                                                <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                                <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                                <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                                                <li><a href="vendor-wc-store-list.html">Store listing 4</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Vendor Store</a>
                                            <ul>
                                                <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                                <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                                                </li>
                                                <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                                                </li>
                                                <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                    <ul>
                                        <li><a href="blog.html">Classic</a></li>
                                        <li><a href="blog-listing.html">Listing</a></li>
                                        <li>
                                            <a href="blog-grid.html">Grid</a>
                                            <ul>
                                                <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Masonry</a>
                                            <ul>
                                                <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Mask</a>
                                            <ul>
                                                <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="post-single.html">Single Post</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="about-us.html">Pages</a>
                                    <ul>

                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="become-a-vendor.html">Become A Vendor</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="faq.html">FAQs</a></li>
                                        <li><a href="error-404.html">Error 404</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="elements.html">Elements</a>
                                    <ul>
                                        <li><a href="element-products.html">Products</a></li>
                                        <li><a href="element-titles.html">Titles</a></li>
                                        <li><a href="element-typography.html">Typography</a></li>
                                        <li><a href="element-categories.html">Product Category</a></li>
                                        <li><a href="element-buttons.html">Buttons</a></li>
                                        <li><a href="element-accordions.html">Accordions</a></li>
                                        <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                                        <li><a href="element-tabs.html">Tabs</a></li>
                                        <li><a href="element-testimonials.html">Testimonials</a></li>
                                        <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                        <li><a href="element-instagrams.html">Instagrams</a></li>
                                        <li><a href="element-cta.html">Call to Action</a></li>
                                        <li><a href="element-vendors.html">Vendors</a></li>
                                        <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                        <li><a href="element-icons.html">Icons</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-pane" id="categories">
                            <ul className="mobile-menu">
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-tshirt2"></i>Fashion
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Women</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                    Watches</a></li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Men</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">New Arrivals</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Best Sellers</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Trending</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Clothing</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Shoes</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bags</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Accessories</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Jewlery &
                                                    Watches</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-home"></i>Home & Garden
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Bedroom</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Beds, Frames &
                                                    Bases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Dressers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Nightstands</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Kid's Beds &
                                                    Headboards</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Armoires</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Living Room</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Coffee Tables</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Chairs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Tables</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Futons & Sofa
                                                    Beds</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Cabinets &
                                                    Chests</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Office</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Office Chairs</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Desks</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bookcases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">File Cabinets</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Breakroom
                                                    Tables</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Kitchen & Dining</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Dining Sets</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Kitchen Storage
                                                    Cabinets</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bashers Racks</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Dining Chairs</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Dining Room
                                                    Tables</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bar Stools</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-electronics"></i>Electronics
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Laptops &amp; Computers</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Desktop
                                                    Computers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Monitors</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Laptops</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Hard Drives &amp;
                                                    Storage</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Computer
                                                    Accessories</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">TV &amp; Video</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">TVs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Home Audio
                                                    Speakers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Projectors</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Media Streaming
                                                    Devices</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Digital Cameras</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Digital SLR
                                                    Cameras</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Sports & Action
                                                    Cameras</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Camera Lenses</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Photo Printer</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Digital Memory
                                                    Cards</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Cell Phones</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Carrier Phones</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Unlocked Phones</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Phone & Cellphone
                                                    Cases</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Cellphone
                                                    Chargers</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-furniture"></i>Furniture
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Furniture</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Sofas & Couches</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Armchairs</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Bed Frames</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Beside Tables</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Dressing Tables</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Lighting</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Light Bulbs</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Lamps</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Celling Lights</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Wall Lights</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Bathroom
                                                    Lighting</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Home Accessories</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Decorative
                                                    Accessories</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Candals &
                                                    Holders</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Home Fragrance</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Mirrors</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Clocks</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Garden & Outdoors</a>
                                            <ul>
                                                <li><a href="shop-fullwidth-banner.html">Garden
                                                    Furniture</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                                                </li>
                                                <li><a href="shop-fullwidth-banner.html">Pressure
                                                    Washers</a></li>
                                                <li><a href="shop-fullwidth-banner.html">All Garden
                                                    Tools</a></li>
                                                <li><a href="shop-fullwidth-banner.html">Outdoor Dining</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-heartbeat"></i>Healthy & Beauty
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-gift"></i>Gift Ideas
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-gamepad"></i>Toy & Games
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-ice-cream"></i>Cooking
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-ios"></i>Smart Phones
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-camera"></i>Cameras & Photo
                                    </a>
                                </li>
                                <li>
                                    <a href="shop-fullwidth-banner.html">
                                        <i className="w-icon-ruby"></i>Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href="demo8-shop.html"
                                       className="font-weight-bold text-primary text-uppercase ls-25">
                                        View All Categories<i className="w-icon-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newsletter-popup mfp-hide">
                <div className="newsletter-content">
                    <h4 className="text-uppercase font-weight-normal ls-25">Get Up to<span className="text-primary">25% Off</span>
                    </h4>
                    <h2 className="ls-25">Sign up to Wolmart</h2>
                    <p className="text-light ls-10">Subscribe to the Wolmart market newsletter to
                        receive updates on special offers.</p>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round">
                        <input type="email" className="form-control email font-size-md" name="email" id="email2"
                               placeholder="Your email address" required=""/>
                            <button className="btn btn-dark" type="submit">SUBMIT</button>
                    </form>
                    <div className="form-checkbox d-flex align-items-center">
                        <input type="checkbox" className="custom-checkbox" id="hide-newsletter-popup"
                               name="hide-newsletter-popup"
                               required=""/>
                            <label htmlFor="hide-newsletter-popup" className="font-size-sm text-light">Don't show this
                                popup again.</label>
                    </div>
                </div>
            </div>

            <div className="product product-single product-popup">
                <div className="row gutter-lg">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="product-gallery product-gallery-sticky">
                            <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                                <div className="swiper-wrapper row cols-1 gutter-no">
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/1-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/2-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/3-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                    <div className="swiper-slide">
                                        <figure className="product-image">
                                            <img src="assets/images/products/popup/4-440x494.jpg"
                                                 data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                                                 alt="Water Boil Black Utensil" width="800" height="900"/>
                                        </figure>
                                    </div>
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                            </div>
                            <div className="product-thumbs-wrap swiper-container" data-swiper-options="{
                        'navigation': {
                            'nextEl': '.swiper-button-next',
                            'prevEl': '.swiper-button-prev'
                        }
                    }">
                                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/1-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/2-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/3-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                        <img src="assets/images/products/popup/4-103x116.jpg" alt="Product Thumb"
                                             width="103"
                                             height="116"/>
                                    </div>
                                </div>
                                <button className="swiper-button-next"></button>
                                <button className="swiper-button-prev"></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 overflow-hidden p-relative">
                        <div className="product-details scrollable pl-0">
                            <h2 className="product-title">Electronics Black Wrist Watch</h2>
                            <div className="product-bm-wrapper">
                                <figure className="brand">
                                    <img src="assets/images/products/brand/brand-1.jpg" alt="Brand" width="102"
                                         height="48"/>
                                </figure>
                                <div className="product-meta">
                                    <div className="product-categories">
                                        Category:
                                        <span className="product-category"><a href="#">Electronics</a></span>
                                    </div>
                                    <div className="product-sku">
                                        SKU: <span>MS46891340</span>
                                    </div>
                                </div>
                            </div>

                            <hr className="product-divider"/>

                                <div className="product-price">$40.00</div>

                                <div className="ratings-container">
                                    <div className="ratings-full">
                                        <span className="ratings" style={{width: '80%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                    <a href="#" className="rating-reviews">(3 Reviews)</a>
                                </div>

                                <div className="product-short-desc">
                                    <ul className="list-type-check list-style-none">
                                        <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                                        <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                                        <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                                    </ul>
                                </div>

                                <hr className="product-divider"/>

                                    <div className="product-form product-variation-form product-color-swatch">
                                        <label>Color:</label>
                                        <div className="d-flex align-items-center product-variations">
                                            <a href="#" className="color" style={{backgroundColor: '#ffcc01'}}></a>
                                            <a href="#" className="color" style={{backgroundColor: '#ca6d00'}}></a>
                                            <a href="#" className="color" style={{backgroundColor: '#1c93cb'}}></a>
                                            <a href="#" className="color" style={{backgroundColor: '#ccc'}}></a>
                                            <a href="#" className="color" style={{backgroundColor: '#333'}}></a>
                                        </div>
                                    </div>
                                    <div className="product-form product-variation-form product-size-swatch">
                                        <label className="mb-1">Size:</label>
                                        <div className="flex-wrap d-flex align-items-center product-variations">
                                            <a href="#" className="size">Small</a>
                                            <a href="#" className="size">Medium</a>
                                            <a href="#" className="size">Large</a>
                                            <a href="#" className="size">Extra Large</a>
                                        </div>
                                        <a href="#" className="product-variation-clean">Clean All</a>
                                    </div>

                                    <div className="product-variation-price">
                                        <span></span>
                                    </div>

                                    <div className="product-form">
                                        <div className="product-qty-form">
                                            <div className="input-group">
                                                <input className="quantity form-control" type="number" min="1"
                                                       max="10000000"/>
                                                    <button className="quantity-plus w-icon-plus"></button>
                                                    <button className="quantity-minus w-icon-minus"></button>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-cart">
                                            <i className="w-icon-cart"></i>
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>

                                    <div className="social-links-wrapper">
                                        <div className="social-links">
                                            <div className="social-icons social-no-color border-thin">
                                                <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                                <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                                <a href="#"
                                                   className="social-icon social-pinterest fab fa-pinterest-p"></a>
                                                <a href="#" className="social-icon social-whatsapp fab fa-whatsapp"></a>
                                                <a href="#"
                                                   className="social-icon social-youtube fab fa-linkedin-in"></a>
                                            </div>
                                        </div>
                                        <span className="divider d-xs-show"></span>
                                        <div className="product-link-wrapper d-flex">
                                            <a href="#"
                                               className="btn-product-icon btn-wishlist w-icon-heart"><span></span></a>
                                            <a href="#"
                                               className="btn-product-icon btn-compare btn-icon-left w-icon-compare"><span></span></a>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}