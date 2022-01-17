import React from "react";

export default function VendorStoreProduct() {
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="demo1.html">Home</a></li>
                            <li><a href="#">Vendor</a></li>
                            <li><a href="#">WCFM</a></li>
                            <li>Store</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content mb-8">
                    <div className="container">
                        <div className="store store-wcfm-banner">
                            <figure className="store-media">
                                <img src="assets/images/vendor/wcfm/1.jpg" alt="Vendor" width="1240" height="460"
                                     style={{backgroundColor: '#40475e'}}/>
                            </figure>
                            <div className="store-content">
                                <div className="store-content-left mr-auto">
                                    <div className="personal-info">
                                        <figure className="seller-brand">
                                            <img src="assets/images/vendor/brand/2-100x100.png" alt="Brand" width="100"
                                                 height="100"/>
                                        </figure>
                                        <div className="ratings-container">
                                            <div className="ratings-full">
                                                <span className="ratings" style={{width: '100%'}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="address-info">
                                        <h4 className="store-title">Vendor 1</h4>
                                        <ul className="seller-info-list list-style-none">
                                            <li className="store-address">
                                                <i className="w-icon-map-marker"></i>
                                                Street1, Street2, Great Area, California, United States (US), 92090El
                                                Carjon,
                                            </li>
                                            <li className="store-phone">
                                                <a href="tel:123456789">
                                                    <i className="w-icon-phone"></i>
                                                    0(800)123-456
                                                </a>
                                            </li>
                                            <li className="store-email">
                                                <a href="email:#">
                                                    <i className="far fa-envelope"></i>
                                                    wc@vendor.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="store-content-right">
                                    <div className="btn btn-white btn-rounded btn-icon-left btn-inquiry"><i
                                        className="far fa-question-circle"></i>Inquiry
                                    </div>
                                    <div className="social-icons social-icons-colored border-thin">
                                        <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                        <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                        <a href="#" className="social-icon social-linkedin fab fa-linkedin"></a>
                                        <a href="#" className="social-icon social-youtube w-icon-youtube"></a>
                                        <a href="#" className="social-icon social-instagram w-icon-instagram"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gutter-lg">
                            <aside className="sidebar left-sidebar vendor-sidebar sticky-sidebar-wrapper sidebar-fixed">
                                <div className="sidebar-overlay"></div>
                                <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                <a href="#" className="sidebar-toggle"><i className="w-icon-angle-right"></i></a>
                                <div className="sidebar-content">
                                    <div className="sticky-sidebar">
                                        <div className="widget widget-collapsible widget-categories">
                                            <h3 className="widget-title"><span>All Categories</span></h3>
                                            <ul className="widget-body filter-items search-ul">
                                                <li>
                                                    <a href="#">Clothing</a>
                                                    <ul>
                                                        <li><a href="#">Men's</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Fashion</a></li>
                                                <li><a href="#">Healthy &amp; Beauty</a></li>
                                                <li><a href="#">Home &amp; Kitchen</a></li>
                                                <li>
                                                    <a href="#">Jewelry &amp; Watch</a>
                                                    <ul>
                                                        <li><a href="#">Smart Watch</a></li>
                                                        <li><a href="#">Watch</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Office Electronics</a>
                                                    <ul>
                                                        <li><a href="#">Accessories</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-collapsible widget-coupons">
                                            <h3 className="widget-title"><span>Store Coupons</span></h3>
                                            <div className="widget-body">
                                                <div className="coupon">
                                                    First Shopping Coupon
                                                    <div className="coupon-tip">
                                                        <div className="coupon-info-title">FREE Shipping Coupon</div>
                                                        <div className="coupon-info-date">April 30, 2021</div>
                                                        <div>Test coupon for vendor page</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget widget-collapsible widget-time">
                                            <h3 className="widget-title"><span><i className="far fa-clock"></i>Store Time</span>
                                            </h3>
                                            <ul className="widget-body">
                                                <li>
                                                    <span>Monday:</span>9:00 - 10:00 pm
                                                </li>
                                                <li>
                                                    <span>Tuesday:</span>9:00 - 10:00 pm
                                                </li>
                                                <li>
                                                    <span>Wednesday:</span>9:00 - 10:00 pm
                                                </li>
                                                <li>
                                                    <span>Thursday:</span>9:00 - 2:00 pm
                                                </li>
                                                <li>
                                                    <span>Friday:</span>9:00 - 10:00 pm
                                                </li>
                                                <li>
                                                    <span>Saturday:</span>9:00 - 10:00 pm
                                                </li>
                                                <li>
                                                    <span>Sunday:</span>9:00 - 10:00 pm
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span><i className="w-icon-truck"></i>Shipping Rules</span>
                                            </h3>
                                            <div className="widget-body">
                                                <p className="mb-0">Delivery Time: 1-2 business days</p>
                                            </div>
                                        </div>
                                        <div className="widget widget-collapsible widget-location">
                                            <h3 className="widget-title"><span>Store Location</span></h3>
                                            <div className="widget-body">
                                                <div className="google-map" id="googlemaps"></div>
                                            </div>
                                        </div>
                                        <div className="widget widget-collapsible widget-products">
                                            <h3 className="widget-title"><span>Best Selling</span></h3>
                                            <div className="widget-body">
                                                <div className="product product-widget">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/shop/1.jpg" alt="Product"
                                                                 width="100"
                                                                 height="106"/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h4 className="product-name">
                                                            <a href="product-default.html">3D Television</a>
                                                        </h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings-full">
                                                                <span className="ratings" style={{width: '100%'}}></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                        </div>
                                                        <div className="product-price">$220.00</div>
                                                    </div>
                                                </div>
                                                <div className="product product-widget">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/shop/2-1.jpg" alt="Product"
                                                                 width="100"
                                                                 height="106"/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h4 className="product-name">
                                                            <a href="product-default.html">Alarm Clock With Lamp</a>
                                                        </h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings-full">
                                                                <span className="ratings" style={{width: '100%'}}></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                        </div>
                                                        <div className="product-price">
                                                            <ins className="new-price">$30.00</ins>
                                                            <del
                                                                className="old-price">$60.00
                                                            </del>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="product product-widget">
                                                    <figure className="product-media">
                                                        <a href="product-default.html">
                                                            <img src="assets/images/shop/3.jpg" alt="Product"
                                                                 width="100"
                                                                 height="106"/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h4 className="product-name">
                                                            <a href="product-default.html">Apple Laptop</a>
                                                        </h4>
                                                        <div className="ratings-container">
                                                            <div className="ratings-full">
                                                                <span className="ratings" style={{width: '100%'}}></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                        </div>
                                                        <div className="product-price">$1,000.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
jj
                            <div className="main-content">
                                <div className="tab tab-nav-underline tab-nav-boxed tab-vendor-wcfm">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a href="#tab-1" className="nav-link active">Products</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="tab-1">
                                            <nav className="toolbox sticky-toolbox sticky-content fix-top">
                                                <div className="toolbox-left">
                                                    <div className="toolbox-item toolbox-sort select-box text-dark">
                                                        <label>Sort By :</label>
                                                        <select name="orderby" className="form-control">
                                                            <option value="default" selected="selected">Default sorting
                                                            </option>
                                                            <option value="popularity">Sort by popularity</option>
                                                            <option value="rating">Sort by average rating</option>
                                                            <option value="date">Sort by latest</option>
                                                            <option value="price-low">Sort by pric: low to high</option>
                                                            <option value="price-high">Sort by price: high to low
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="toolbox-right">
                                                    <div className="toolbox-item toolbox-show select-box">
                                                        <select name="count" className="form-control">
                                                            <option value="9">Show 9</option>
                                                            <option value="12" selected="selected">Show 12</option>
                                                            <option value="24">Show 24</option>
                                                            <option value="36">Show 36</option>
                                                        </select>
                                                    </div>
                                                    <div className="toolbox-item toolbox-layout">
                                                        <a href="vendor-wcfm-store-product-grid.html"
                                                           className="icon-mode-grid btn-layout active">
                                                            <i className="w-icon-grid"></i>
                                                        </a>
                                                        <a href="vendor-wcfm-store-product-list.html"
                                                           className="icon-mode-list btn-layout">
                                                            <i className="w-icon-list"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </nav>
                                            <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2">
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
                                                                   title="Quick View"></a>
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
                                                                    $220.00 - $230.00
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
                                                                   title="Quick View"></a>
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
                                                                   title="Quick View"></a>
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
                                                                   title="Quick View"></a>
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
                                                                   title="Quick View"></a>
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
                                                                    $220.00 - $230.00
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
                                                                   title="Quick View"></a>
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
                                                                   title="Quick View"></a>
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
                                                                   title="Quick View"></a>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}