import React from "react";

export default function Vendor() {
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="demo1.html">Home</a></li>
                            <li><a href="#">Vendor</a></li>
                            <li>Store List</li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content mb-8">
                    <div className="container">
                        <div className="row gutter-lg">
                            <aside className="sidebar vendor-sidebar sticky-sidebar-wrapper left-sidebar sidebar-fixed">
                                <div className="sidebar-overlay"></div>
                                <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                <a href="#" className="sidebar-toggle"><i className="fas fa-chevron-right"></i></a>
                                <div className="sidebar-content">
                                    <div className="sticky-sidebar">
                                        <div className="widget widget-search-form">
                                            <div className="widget-body">
                                                <form action="#" method="GET"
                                                      className="input-wrapper input-wrapper-inline">
                                                    <input type="text" className="form-control" placeholder="Search ..."
                                                           autoComplete="off" required=""/>
                                                        <button className="btn btn-search"><i
                                                            className="w-icon-search"></i></button>
                                                </form>
                                            </div>
                                        </div>

                                        <div className="widget widget-filter">
                                            <h4 className="widget-title">Filter By Category</h4>
                                            <div className="widget-body">
                                                <form className="select-box">
                                                    <select name="orderby" className="form-control">
                                                        <option value="choose" selected="selected">Choose Category ...
                                                        </option>
                                                        <option value="clothing">Clothings</option>
                                                        <option value="men">Men's</option>
                                                        <option value="electronics">Office Electronics</option>
                                                        <option value="accessories">Accessories</option>
                                                        <option value="home-kitchen">Home &amp; Kitchen</option>
                                                        <option value="healthy-beauty">Healthy &amp; Beauty</option>
                                                        <option value="jewelry-watch">Jewelry &amp; Watch</option>
                                                        <option value="smart-watch">Smart Watches</option>
                                                    </select>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="widget widget-filter">
                                            <h4 className="widget-title">Filter By Location</h4>
                                            <div className="widget-body">
                                                <form className="select-box">
                                                    <select name="orderby" className="form-control">
                                                        <option value="choose" selected="selected">Choose Location ...
                                                        </option>
                                                        <option value="afghanistan">Afghanistan</option>
                                                        <option value="aland">Aland Islands</option>
                                                        <option value="albania">Albania</option>
                                                        <option value="algeria">Algeria</option>
                                                        <option value="bahamas">Bahamas</option>
                                                        <option value="cuba">Cuba</option>
                                                        <option value="greece">Greece</option>
                                                    </select>
                                                </form>
                                                <form className="select-box">
                                                    <select name="orderby" className="form-control">
                                                        <option value="choose" selected="selected">Choose State</option>
                                                    </select>
                                                </form>
                                                <form>
                                                    <input type="search" id="city" name="city" className="form-control"
                                                           placeholder="Search by City" required/>
                                                    <input type="search" id="zip" name="zip" className="form-control"
                                                           placeholder="Search by Zip" required/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <div className="main-content">
                                <div className="toolbox wcfm-toolbox">
                                    <div className="toolbox-left">
                                        <form className="select-box toolbox-item">
                                            <select name="orderby" className="form-control">
                                                <option value="old-new" selected="selected">Sort by newness: old to
                                                    new
                                                </option>
                                                <option value="new-old">Sort by newness: new to old</option>
                                                <option value="low-high">Sort by average rating: low to high</option>
                                                <option value="high-low">Sort by average rating: high to low</option>
                                                <option value="old-new">Sort Alphabetical: A to Z</option>
                                                <option value="old-new">Sort Alphabetical: Z to A</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="toolbox-right">
                                        <div className="toolbox-item">
                                            <label className="showing-info">Showing 1-2 of 2 result</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row cols-sm-2">
                                    <div className="store-wrap mb-4">
                                        <div className="store store-grid store-wcfm">
                                            <div className="store-header">
                                                <figure className="store-banner">
                                                    <img src="assets/images/vendor/dokan/1.jpg" alt="Vendor" width="400"
                                                         height="194" style={{backgroundColor: '#40475E'}}/>
                                                </figure>
                                            </div>
                                            <div className="store-content">
                                                <h4 className="store-title" style={{marginBottom: '0.9rem',marginTop:'2.9rem'}}>
                                                    <a href="vendor-dokan-store.html">Vendor 1</a>
                                                </h4>
                                                <span style={{color:"white"}}>Electronics</span>
                                                <ul className="seller-info-list list-style-none">
                                                    <li className="store-phone">
                                                        <a href="tel:123456789">
                                                            <i className="w-icon-phone"></i>
                                                            123456789
                                                        </a>
                                                    </li>
                                                    <li className="store-address">
                                                        <i className="w-icon-map-marker"></i>
                                                        Street1, Street2, Great Area, California, United States (US), 92090El
                                                        Carjon,
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="store-footer">
                                                <figure className="seller-brand">
                                                    <img src="assets/images/vendor/brand/1.jpg" alt="Brand" width="80"
                                                         height="80"/>
                                                </figure>
                                                <a href="/vendorStoreProduct" className="btn btn-rounded btn-visit">Visit</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-wrap mb-4">
                                        <div className="store store-grid store-wcfm">
                                            <div className="store-header">
                                                <figure className="store-banner">
                                                    <img src="assets/images/vendor/dokan/2.jpg" alt="Vendor" width="400"
                                                         height="194" style={{backgroundColor: '#40475E'}}/>
                                                </figure>
                                            </div>
                                            <div className="store-content">
                                                <h4 className="store-title" style={{marginBottom: '0.9rem',marginTop:'2.9rem'}}>
                                                    <a href="vendor-dokan-store.html">Vendor 1</a>
                                                </h4>
                                                <span style={{color:"white"}}>Electronics</span>
                                                <ul className="seller-info-list list-style-none">
                                                    <li className="store-phone">
                                                        <a href="tel:123456789">
                                                            <i className="w-icon-phone"></i>
                                                            123456789
                                                        </a>
                                                    </li>
                                                    <li className="store-address">
                                                        <i className="w-icon-map-marker"></i>
                                                        Street1, Street2, Great Area, California, United States (US), 92090El
                                                        Carjon,
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="store-footer">
                                                <figure className="seller-brand">
                                                    <img src="assets/images/vendor/brand/2.jpg" alt="Brand" width="80"
                                                         height="80"/>
                                                </figure>
                                                <a href="/vendorStoreProduct" className="btn btn-rounded btn-visit">Visit</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-wrap mb-4">
                                        <div className="store store-grid store-wcfm">
                                            <div className="store-header">
                                                <figure className="store-banner">
                                                    <img src="assets/images/vendor/dokan/3.jpg" alt="Vendor" width="400"
                                                         height="194" style={{backgroundColor: '#40475E'}}/>
                                                </figure>
                                            </div>
                                            <div className="store-content">
                                                <h4 className="store-title" style={{marginBottom: '0.9rem',marginTop:'2.9rem'}}>
                                                    <a href="vendor-dokan-store.html">Vendor 1</a>
                                                </h4>
                                                <span style={{color:"white"}}>Electronics</span>
                                                <ul className="seller-info-list list-style-none">
                                                    <li className="store-phone">
                                                        <a href="tel:123456789">
                                                            <i className="w-icon-phone"></i>
                                                            123456789
                                                        </a>
                                                    </li>
                                                    <li className="store-address">
                                                        <i className="w-icon-map-marker"></i>
                                                        Street1, Street2, Great Area, California, United States (US), 92090El
                                                        Carjon,
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="store-footer">
                                                <figure className="seller-brand">
                                                    <img src="assets/images/vendor/brand/3.jpg" alt="Brand" width="80"
                                                         height="80"/>
                                                </figure>
                                                <a href="/vendorStoreProduct" className="btn btn-rounded btn-visit">Visit</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="store-wrap mb-4">
                                        <div className="store store-grid store-wcfm">
                                            <div className="store-header">
                                                <figure className="store-banner">
                                                    <img src="assets/images/vendor/dokan/4.jpg" alt="Vendor" width="400"
                                                         height="194" style={{backgroundColor: '#40475E'}}/>
                                                </figure>
                                            </div>
                                            <div className="store-content">
                                                <h4 className="store-title" style={{marginBottom: '0.9rem',marginTop:'2.9rem'}}>
                                                    <a href="vendor-dokan-store.html">Vendor 1</a>
                                                </h4>
                                                <span style={{color:"white"}}>Electronics</span>
                                                <ul className="seller-info-list list-style-none">
                                                    <li className="store-phone">
                                                        <a href="tel:123456789">
                                                            <i className="w-icon-phone"></i>
                                                            123456789
                                                        </a>
                                                    </li>
                                                    <li className="store-address">
                                                        <i className="w-icon-map-marker"></i>
                                                        Street1, Street2, Great Area, California, United States (US), 92090El
                                                        Carjon,
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="store-footer">
                                                <figure className="seller-brand">
                                                    <img src="assets/images/vendor/brand/4.jpg" alt="Brand" width="80"
                                                         height="80"/>
                                                </figure>
                                                <a href="/vendorStoreProduct" className="btn btn-rounded btn-visit">Visit</a>
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
    )
}