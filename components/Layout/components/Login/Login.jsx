import React from 'react'

export default function Login(){
    return (
        <div>
            <style jsx>{`
                .span-link:hover {
                   color: #1914fe;
                  }
            `}
            </style>
            <div>
                <div className="page-wrapper">
                    <main className="main login-page">
                        <div className="page-header">
                            <div className="container">
                                <h1 className="page-title mb-0">My Account</h1>
                            </div>
                        </div>
                        <nav className="breadcrumb-nav">
                            <div className="container">
                                <ul className="breadcrumb">
                                    <li><a href="demo1.html">Home</a></li>
                                    <li>My account</li>
                                </ul>
                            </div>
                        </nav>
                        <div className="page-content">
                            <div className="container">
                                <div className="login-popup">
                                    <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                        <ul className="nav nav-tabs text-uppercase" role="tablist">
                                            <li className="nav-item">
                                                <a href="#sign-in" className="nav-link active">Sign In</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#sign-up" className="nav-link">Sign Up</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div className="tab-pane active" id="sign-in">
                                                <div className="form-group">
                                                    <label>Username or email address *</label>
                                                    <input type="text" className="form-control" name="username"
                                                           id="username" required/>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label>Password *</label>
                                                    <input type="text" className="form-control" name="password"
                                                           id="password" required/>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">Remember me</label>
                                                    <a href="#">Last your password?</a>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">İstifadəçi</label>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">Satıcı</label>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">Mağaza</label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Sign In</a>
                                            </div>
                                            <div className="tab-pane" id="sign-up">
                                                <div className="form-group">
                                                    <label>Your email address *</label>
                                                    <input type="text" className="form-control" name="email_1" id="email_1"
                                                           required/>
                                                </div>
                                                <div className="form-group mb-5">
                                                    <label>Password *</label>
                                                    <input type="text" className="form-control" name="password_1"
                                                           id="password_1" required/>
                                                </div>
                                                <div className="checkbox-content login-vendor">
                                                    <div className="form-group mb-5">
                                                        <label>First Name *</label>
                                                        <input type="text" className="form-control" name="first-name"
                                                               id="first-name" required/>
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <label>Last Name *</label>
                                                        <input type="text" className="form-control" name="last-name"
                                                               id="last-name" required/>
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <label>Shop Name *</label>
                                                        <input type="text" className="form-control" name="shop-name"
                                                               id="shop-name" required/>
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <label>Shop URL *</label>
                                                        <input type="text" className="form-control" name="shop-url"
                                                               id="shop-url" required/>
                                                        <small>https://d-themes.com/wordpress/wolmart/demo-1/store/</small>
                                                    </div>
                                                    <div className="form-group mb-5">
                                                        <label>Phone Number *</label>
                                                        <input type="text" className="form-control" name="phone-number"
                                                               id="phone-number" required/>
                                                    </div>
                                                </div>
                                                <div className="form-checkbox user-checkbox mt-0">
                                                    <input type="checkbox" className="custom-checkbox checkbox-round active"
                                                           id="check-customer" name="check-customer" required=""/>
                                                    <label htmlFor="check-customer" className="check-customer mb-1">I am
                                                        a customer</label>
                                                    <br/>
                                                    <input type="checkbox"
                                                           className="custom-checkbox checkbox-round"
                                                           id="check-seller" name="check-seller" required=""/>
                                                    <label htmlFor="check-seller" className="check-seller">I am
                                                        a vendor</label>
                                                </div>
                                                <p>Your personal data will be used to support your experience
                                                    throughout this website, to manage access to your account,
                                                    and for other purposes described in our <a href="#"
                                                                                               className="text-primary">privacy
                                                        policy</a>.</p>
                                                <a href="#" className="d-block mb-5 text-primary">Signup as a vendor?</a>
                                                <div
                                                    className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                                                    <input type="checkbox" className="custom-checkbox" id="remember"
                                                           name="remember" required=""/>
                                                    <label htmlFor="remember" className="font-size-md">I agree to the <a
                                                        href="#" className="text-primary font-size-md">privacy
                                                        policy</a></label>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">İstifadəçi</label>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">Satıcı</label>
                                                </div>
                                                <div className="form-checkbox d-flex align-items-center justify-content-between">
                                                    <input type="checkbox" className="custom-checkbox" id="remember1"
                                                           name="remember1" required=""/>
                                                    <label htmlFor="remember1">Mağaza</label>
                                                </div>
                                                <a href="#" className="btn btn-primary">Sign Un</a>
                                            </div>
                                        </div>
                                        <p className="text-center">Sign in with social account</p>
                                        <div
                                            className="social-icons social-icon-border-color d-flex justify-content-center">
                                            <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                            <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                            <a href="#" className="social-icon social-google fab fa-google"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="sticky-footer sticky-content fix-bottom">
                    <a href="demo1.html" className="sticky-link active">
                        <i className="w-icon-home"></i>
                        <p>Home</p>
                    </a>
                    <a href="shop-banner-sidebar.html" className="sticky-link">
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
                                        <a href="#">
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
                                            <a href="product.html">Blue utility pina<br/>fore
                                                denim dress</a>
                                        </h3>
                                        <div className="price-box">
                                            <span className="product-quantity">1</span>
                                            <span className="product-price">$32.99</span>
                                        </div>
                                    </div>
                                    <figure className="product-media">
                                        <a href="#">
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
                                   placeholder="Search" required/>
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
                                   placeholder="Search" required/>
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
                                    <li><a href="demo1.html">Home</a></li>
                                    <li>
                                        <a href="shop-banner-sidebar.html">Shop</a>
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
                                                    <li><a href="shop-fullwidth-banner.html">Sale</a></li>
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
                                        <a href="shop-banner-sidebar.html"
                                           className="font-weight-bold text-primary text-uppercase ls-25">
                                            View All Categories<i className="w-icon-angle-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}