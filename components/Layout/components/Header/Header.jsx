import React from 'react'

export default function Header(){
    return (
        <div>
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="welcome-msg">Welcome to Wolmart Store message or remove it!</p>
                        </div>
                        <div className="header-right">
                            <span className="divider d-lg-show"></span>
                            <a href="blog.html" className="d-lg-show">Blog</a>
                            <a href="contact-us.html" className="d-lg-show">Contact Us</a>
                            <a href="my-account.html" className="d-lg-show">My Account</a>
                            <a href="assets/ajax/login.html" className="d-lg-show login sign-in"><i
                                className="w-icon-account"></i>Sign In</a>
                            <span className="delimiter d-lg-show">/</span>
                            <a href="assets/ajax/login.html" className="ml-0 d-lg-show login register">Register</a>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <div className="container">
                        <div className="header-left mr-md-4">
                            <a href="#" className="mobile-menu-toggle text-white w-icon-hamburger" aria-label="menu-toggle">
                            </a>
                            <a href="home.html" className="logo ml-lg-0">
                                <img src="assets/images/demos/demo8/header-logo.png" alt="lo\go" width="144" height="45"/>
                            </a>
                            <form method="get" action="#"
                                  className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                                <div className="select-box bg-white">
                                    <select id="category" name="category">
                                        <option value="">All Categories</option>
                                        <option value="4">Fashion</option>
                                        <option value="5">Furniture</option>
                                        <option value="6">Shoes</option>
                                        <option value="7">Sports</option>
                                        <option value="8">Games</option>
                                        <option value="9">Computers</option>
                                        <option value="10">Electronics</option>
                                        <option value="11">Kitchen</option>
                                        <option value="12">Clothing</option>
                                    </select>
                                </div>
                                <input type="text" className="form-control bg-white" name="search" id="search"
                                       placeholder="Search in..." required/>
                                <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="header-right ml-4">
                            <div className="header-call d-xs-show d-lg-flex align-items-center">
                                <a href="tel:#" className="w-icon-call text-white"></a>
                                <div className="call-info d-lg-show">
                                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-white mb-0">
                                        <a href="mailto:#" className="text-capitalize text-white">Live Chat</a> or :</h4>
                                    <a href="tel:#" className="phone-number font-weight-bolder text-white ls-50">0(800)123-456</a>
                                </div>
                            </div>
                            <a className="wishlist label-down link d-xs-show" href="wishlist.html">
                                <i className="w-icon-heart"></i>
                                <span className="wishlist-label d-lg-show">Wishlist</span>
                            </a>
                            <a className="compare label-down link d-xs-show" href="compare.html">
                                <i className="w-icon-compare"></i>
                                <span className="compare-label d-lg-show">Compare</span>
                            </a>
                            <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                                <div className="cart-overlay"></div>
                                <a href="#" className="cart-toggle label-down link text-white">
                                    <i className="w-icon-cart">
                                        <span className="cart-count">2</span>
                                    </i>
                                    <span className="cart-label">Cart</span>
                                </a>
                                <div className="dropdown-box">
                                    <div className="cart-header">
                                        <span>Shopping Cart</span>
                                        <a href="#" className="btn-close">Close<i className="w-icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="products">
                                        <div className="product product-cart">
                                            <div className="product-detail">
                                                <a href="product-default.html" className="product-name">Beige knitted
                                                    elas<br/>tic
                                                    runner shoes</a>
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
                                                <a href="product-default.html" className="product-name">Blue utility
                                                    pina<br/>fore
                                                    denim dress</a>
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
                        </div>
                    </div>
                </div>
                <div className="container d-lg-show mb-1">
                    <div className="inner-wrap">
                        <ul className="menu horizontal-menu category-menu">
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-electronics"></i>Computers
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-tshirt"></i>Clothings
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-sofa"></i>Furniture
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-bridge-lamp"></i>Electrolier
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-headphone"></i>Headphone
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-bag"></i>Office
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-camera"></i>Electronics
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-android"></i>Smartphone
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-rice-cooker"></i>Cooker
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-return"></i>Accessories
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-furniture"></i>Freezer
                                </a>
                            </li>
                            <li>
                                <a href="demo9-shop.html">
                                    <i className="w-icon-dots-circle"></i>All Categories
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
                    <div className="container">
                        <div className="inner-wrap">
                            <div className="header-left">
                                <div className="dropdown category-dropdown has-border show-dropdown" data-visible="true">
                                    <a href="#" className="category-toggle text-dark bg-white text-capitalize" role="button"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"
                                       data-display="static" title="Browse Categories">
                                        <i className="w-icon-category"></i>
                                        <span>Browse Categories</span>
                                    </a>

                                    <div className="dropdown-box text-default">
                                        <ul className="menu vertical-menu category-menu">
                                            <li>
                                                <a href="shop-fullwidth-banner.html">
                                                    <i className="w-icon-tshirt2"></i>Fashion
                                                </a>
                                                <ul className="megamenu">
                                                    <li>
                                                        <h4 className="menu-title">Women</h4>
                                                        <hr className="divider"/>
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
                                                        <h4 className="menu-title">Men</h4>
                                                        <hr className="divider"/>
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
                                                        <div className="banner-fixed menu-banner menu-banner2">
                                                            <figure>
                                                                <img src="assets/images/menu/banner-2.jpg" alt="Menu Banner"
                                                                     width="235" height="347"/>
                                                            </figure>
                                                            <div className="banner-content">
                                                                <div className="banner-price-info mb-1 ls-normal">Get up to
                                                                    <strong
                                                                        className="text-primary text-uppercase">20%Off</strong>
                                                                </div>
                                                                <h3 className="banner-title ls-normal">Hot Sales</h3>
                                                                <a href="demo8-shop.html"
                                                                   className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right">
                                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth-banner.html">
                                                    <i className="w-icon-home"></i>Home & Garden
                                                </a>
                                                <ul className="megamenu">
                                                    <li>
                                                        <h4 className="menu-title">Bedroom</h4>
                                                        <hr className="divider"/>
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

                                                        <h4 className="menu-title mt-1">Living Room</h4>
                                                        <hr className="divider"/>
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
                                                        <h4 className="menu-title">Office</h4>
                                                        <hr className="divider"/>
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

                                                        <h4 className="menu-title mt-1">Kitchen & Dining</h4>
                                                        <hr className="divider"/>
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
                                                    <li>
                                                        <div className="menu-banner banner-fixed menu-banner3">
                                                            <figure>
                                                                <img src="assets/images/menu/banner-3.jpg" alt="Menu Banner"
                                                                     width="235" height="461"/>
                                                            </figure>
                                                            <div className="banner-content">
                                                                <h4
                                                                    className="banner-subtitle font-weight-normal text-white mb-1">
                                                                    Restroom</h4>
                                                                <h3
                                                                    className="banner-title font-weight-bolder text-white ls-normal">
                                                                    Furniture Sale</h3>
                                                                <div
                                                                    className="banner-price-info text-white font-weight-normal ls-25">
                                                                    Up to <span
                                                                    className="text-secondary text-uppercase font-weight-bold">25%
                                                                    Off</span></div>
                                                                <a href="demo8-shop.html"
                                                                   className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right">
                                                                    Shop Now<i className="w-icon-long-arrow-right"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth-banner.html">
                                                    <i className="w-icon-electronics"></i>Electronics
                                                </a>
                                                <ul className="megamenu">
                                                    <li>
                                                        <h4 className="menu-title">Laptops &amp; Computers</h4>
                                                        <hr className="divider"/>
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

                                                        <h4 className="menu-title mt-1">TV &amp; Video</h4>
                                                        <hr className="divider"/>
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
                                                        <h4 className="menu-title">Digital Cameras</h4>
                                                        <hr className="divider"/>
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

                                                        <h4 className="menu-title mt-1">Cell Phones</h4>
                                                        <hr className="divider"/>
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
                                                    <li>
                                                        <div className="menu-banner banner-fixed menu-banner4">
                                                            <figure>
                                                                <img src="assets/images/menu/banner-4.jpg" alt="Menu Banner"
                                                                     width="235" height="433"/>
                                                            </figure>
                                                            <div className="banner-content">
                                                                <h4 className="banner-subtitle font-weight-normal">Deals Of The
                                                                    Week</h4>
                                                                <h3 className="banner-title text-white">Save On Smart EarPhone
                                                                </h3>
                                                                <div
                                                                    className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                                                    20% Off
                                                                </div>
                                                                <a href="demo8-shop.html"
                                                                   className="btn btn-white btn-outline btn-sm btn-rounded">Shop
                                                                    Now</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="shop-fullwidth-banner.html">
                                                    <i className="w-icon-furniture"></i>Furniture
                                                </a>
                                                <ul className="megamenu type2">
                                                    <li className="row">
                                                        <div className="col-md-3 col-lg-3 col-6">
                                                            <h4 className="menu-title">Furniture</h4>
                                                            <hr className="divider"/>
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
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-6">
                                                            <h4 className="menu-title">Lighting</h4>
                                                            <hr className="divider"/>
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
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-6">
                                                            <h4 className="menu-title">Home Accessories</h4>
                                                            <hr className="divider"/>
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
                                                        </div>
                                                        <div className="col-md-3 col-lg-3 col-6">
                                                            <h4 className="menu-title">Garden & Outdoors</h4>
                                                            <hr className="divider"/>
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
                                                        </div>
                                                    </li>
                                                    <li className="row">
                                                        <div className="col-6">
                                                            <div className="banner banner-fixed menu-banner5 br-xs">
                                                                <figure>
                                                                    <img src="assets/images/menu/banner-5.jpg" alt="Banner"
                                                                         width="410" height="123"
                                                                         style={{backgroundColor: '#D2D2D2'}}/>
                                                                </figure>
                                                                <div className="banner-content text-right y-50">
                                                                    <h4
                                                                        className="banner-subtitle font-weight-normal text-default text-capitalize">
                                                                        New Arrivals</h4>
                                                                    <h3
                                                                        className="banner-title font-weight-bolder text-capitalize ls-normal">
                                                                        Amazing Sofa</h3>
                                                                    <div
                                                                        className="banner-price-info font-weight-normal ls-normal">
                                                                        Starting at <strong>$125.00</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="banner banner-fixed menu-banner5 br-xs">
                                                                <figure>
                                                                    <img src="assets/images/menu/banner-6.jpg" alt="Banner"
                                                                         width="410" height="123"
                                                                         style={{backgroundColor: '#9F9888'}}/>
                                                                </figure>
                                                                <div className="banner-content y-50">
                                                                    <h4
                                                                        className="banner-subtitle font-weight-normal text-white text-capitalize">
                                                                        Best Seller</h4>
                                                                    <h3
                                                                        className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                                                        Chair &amp; Lamp</h3>
                                                                    <div
                                                                        className="banner-price-info font-weight-normal ls-normal text-white">
                                                                        From <strong>$165.00</strong></div>
                                                                </div>
                                                            </div>
                                                        </div>
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
                                                <a href="demo8-shop.html" className="font-weight-bold text-uppercase ls-25">
                                                    View All Categories<i className="w-icon-angle-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <nav className="main-nav">
                                    <ul className="menu">
                                        <li className="active">
                                            <a href="home.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="demo8-shop.html">Shop</a>
                                            <ul className="megamenu">
                                                <li>
                                                    <h4 className="menu-title">Shop Pages</h4>
                                                    <ul>
                                                        <li><a href="shop-banner-sidebar.html">Banner With Sidebar</a></li>
                                                        <li><a href="shop-boxed-banner.html">Boxed Banner</a></li>
                                                        <li><a href="shop-fullwidth-banner.html">Full Width Banner</a></li>
                                                        <li><a href="shop-horizontal-filter.html">Horizontal Filter<span
                                                            className="tip tip-hot">Hot</span></a></li>
                                                        <li><a href="shop-off-canvas.html">Off Canvas Sidebar<span
                                                            className="tip tip-new">New</span></a></li>
                                                        <li><a href="shop-infinite-scroll.html">Infinite Ajax Scroll</a>
                                                        </li>
                                                        <li><a href="shop-right-sidebar.html">Right Sidebar</a></li>
                                                        <li><a href="shop-both-sidebar.html">Both Sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <h4 className="menu-title">Shop Layouts</h4>
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
                                                    <h4 className="menu-title">Product Pages</h4>
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
                                                    <h4 className="menu-title">Product Layouts</h4>
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
                                                    <a href="vendor-dokan-store-list.html">Store Listing</a>
                                                    <ul>
                                                        <li><a href="vendor-dokan-store-list.html">Store listing 1</a></li>
                                                        <li><a href="vendor-wcfm-store-list.html">Store listing 2</a></li>
                                                        <li><a href="vendor-wcmp-store-list.html">Store listing 3</a></li>
                                                        <li><a href="vendor-wc-store-list.html">Store listing 4</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="vendor-dokan-store.html">Vendor Store</a>
                                                    <ul>
                                                        <li><a href="vendor-dokan-store.html">Vendor Store 1</a></li>
                                                        <li><a href="vendor-wcfm-store-product-grid.html">Vendor Store 2</a>
                                                        </li>
                                                        <li><a href="vendor-wcmp-store-product-grid.html">Vendor Store 3</a>
                                                        </li>
                                                        <li><a href="vendor-wc-store-product-grid.html">Vendor Store 4</a>
                                                        </li>
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
                                                    <a href="blog-grid-3cols.html">Grid</a>
                                                    <ul>
                                                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog-masonry-3cols.html">Masonry</a>
                                                    <ul>
                                                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="blog-mask-grid.html">Mask</a>
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
                                                <li><a href="faq.html">FAQs</a></li>
                                                <li><a href="error-404.html">Error 404</a></li>
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="checkout.html">Checkout</a></li>
                                                <li><a href="my-account.html">My Account</a></li>
                                                <li><a href="compare.html">Compare</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="elements.html">Elements</a>
                                            <ul>
                                                <li><a href="element-accordions.html">Accordions</a></li>
                                                <li><a href="element-alerts.html">Alert &amp; Notification</a></li>
                                                <li><a href="element-blog-posts.html">Blog Posts</a></li>
                                                <li><a href="element-buttons.html">Buttons</a></li>
                                                <li><a href="element-cta.html">Call to Action</a></li>
                                                <li><a href="element-icons.html">Icons</a></li>
                                                <li><a href="element-icon-boxes.html">Icon Boxes</a></li>
                                                <li><a href="element-instagrams.html">Instagrams</a></li>
                                                <li><a href="element-categories.html">Product Category</a></li>
                                                <li><a href="element-products.html">Products</a></li>
                                                <li><a href="element-tabs.html">Tabs</a></li>
                                                <li><a href="element-testimonials.html">Testimonials</a></li>
                                                <li><a href="element-titles.html">Titles</a></li>
                                                <li><a href="element-typography.html">Typography</a></li>

                                                <li><a href="element-vendors.html">Vendors</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}