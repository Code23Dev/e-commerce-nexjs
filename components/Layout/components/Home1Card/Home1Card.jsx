import React, {useEffect, useState} from "react";
import {allDiscount} from "../../../../services/discount/allDiscount";
export default function Home1Card(){
    const [allDiscountTitle, allDiscountData] = useState([]);
    useEffect(() => {
        if(localStorage.getItem('allDiscountTitle')){
            allDiscountData(JSON.parse(localStorage.getItem('allDiscountTitle')))
        }else{
            allDiscount()
                .then(items => {
                    localStorage.setItem('allDiscountTitle',  JSON.stringify(items.data));
                    JSON.parse(localStorage.getItem('allDiscountTitle')) ? allDiscountData(JSON.parse(localStorage.getItem('allDiscountTitle'))) : []
                })
        }
    }, [])
    return (
          <div>
              <div className="page-wrapper mt-5">
                  <div className="container pb-5">
                      <style jsx>{`
                        @media only screen and (min-width: 769px) {
                                                    .product-list {
                        
                                                width:700px!important;
                                             } }
                        .icon-box-wrapper {
                            border: 1px solid white; 
                            padding: 0px;
                        }
                      .product-list {
                          padding: 0.8rem;
                          border: 1px solid #ed711b;
                        }

                        .btn-product:hover {
                          background-color: #ed711b !important;
                          color: #fff !important;
                          border-color: #ed711b !important;
                          letter-spacing: 0 !important;
                        }

                        .product-name a:hover {
                          color: #ed711b;
                        }

                        .ratings-full {
                          cursor: pointer;
                          margin-right: 0.5rem;
                        }

                        .ratings:before {
                          content: "" "" "" "" "";
                          color: #666;
                        }

                        .ratings, .ratings-full {
                          position: relative;
                          font-family: "wolmart";
                          letter-spacing: 0.2em;
                        }

                        .ratings {
                          position: absolute;
                          top: 0;
                          left: 0;
                          white-space: nowrap;
                          overflow: hidden;
                        }

                        .product:not(.product-single):hover .product-countdown-container {
                          opacity: 0;
                          visibility: hidden;
                        }

                        .product.product-list .product-countdown-container {
                          background-color: #444;
                        }

                        .product:not(.product-single) .product-countdown-container {
                          position: absolute;
                          left: 10px;
                          right: 10px;
                          bottom: 10px;
                          white-space: nowrap;
                          overflow-x: auto;
                          background-color: rgba(34, 34, 34, 0.8);
                          color: #fff;
                          letter-spacing: -0.025em;
                          text-align: center;
                          border-radius: 0.3rem;
                          padding-left: 0;
                          padding-right: 0;
                          opacity: 1;
                          visibility: visible;
                          transition: opacity 0.3s, visibility 0.3s;
                        }
                        .product-list {
                          padding: 0.8rem;
                          border: 1px solid #ed711b;
                        }

                        .btn-product:hover {
                          background-color: #ed711b !important;
                          color: #fff !important;
                          border-color: #ed711b !important;
                          letter-spacing: 0 !important;
                        }

                        .product-name a:hover {
                          color: #ed711b;
                        }

                        .ratings-full {
                          cursor: pointer;
                          margin-right: 0.5rem;
                        }

                        .ratings:before {
                          content: "" "" "" "" "";
                          color: #666;
                        }

                        .ratings, .ratings-full {
                          position: relative;
                          font-family: "wolmart";
                          letter-spacing: 0.2em;
                        }

                        .ratings {
                          position: absolute;
                          top: 0;
                          left: 0;
                          white-space: nowrap;
                          overflow: hidden;
                        }

                        .product:not(.product-single):hover .product-countdown-container {
                          opacity: 0;
                          visibility: hidden;
                        }

                        .product.product-list .product-countdown-container {
                          background-color: #444;
                        }

                        .product:not(.product-single) .product-countdown-container {
                          position: absolute;
                          left: 10px;
                          right: 10px;
                          bottom: 10px;
                          white-space: nowrap;
                          overflow-x: auto;
                          background-color: rgba(34, 34, 34, 0.8);
                          color: #fff;
                          letter-spacing: -0.025em;
                          text-align: center;
                          border-radius: 0.3rem;
                          padding-left: 0;
                          padding-right: 0;
                          opacity: 1;
                          visibility: visible;
                          transition: opacity 0.3s, visibility 0.3s;
                        }
                      `}
                      </style>
                      <div className="title-link-wrapper title-deals appear-animate">
                          <h2 className="title">Günün endirimləri</h2>
                          <a href="/more-products"
                             className="font-weight-bold ls-25">
                              Daha çox məhsul
                              <i className="w-icon-long-arrow-right"></i></a>
                      </div>
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
                            'slidesPerView': 2
                        },
                        '992': {
                            'slidesPerView':2,
                            'spaceBetween': 20
                        },
                        '1200': {
                            'slidesPerView': 2,
                            'spaceBetween': 20
                        }
                    }
                }">
                          <div className="swiper-wrapper row cols-md-1 cols-sm-1 mt-3 cols-1">
                              {allDiscountTitle.map(e=>(
                                  <div className="swiper-slide icon-box icon-box-side text-dark">
                                      <div className="product product-list br-xs mb-0">
                                          <figure className="product-media">
                                              <a href={`/moreProducts/${e.product.id}`}>
                                                  <img src={e.product.main_image} alt="Product"
                                                       width="315"
                                                       height="355"/>
                                              </a>
                                              <div className="product-action-vertical">
                                                  <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                     title="Quick View"></a>
                                              </div>
                                              <div className="product-countdown-container" style={{height: '35px'}}>
                                                  <div className="product-countdown countdown-compact" data-until="2021, 9, 9"
                                                       data-format="DHMS" data-compact="false"
                                                       style={{fontSize: '20px'}}
                                                       data-labels-short="Days, Hours, Mins, Secs">
                                                      00:00:00:00
                                                  </div>
                                              </div>
                                          </figure>
                                          <div className="product-details">
                                              <h4 className="product-name">
                                                  <a href={`/moreProducts/${e.product.id}`}>{e.product.title}</a>
                                              </h4>
                                              <div className="ratings-container">
                                                  <div className="ratings-full">
                                                      <span className="ratings"  style={{width: `${(18 * e.product.rating)+'%'}` }}></span>
                                                      <span className="tooltiptext tooltip-top"></span>
                                                  </div>
                                                  <a href={`/${e.product.id}`} className="rating-reviews">({e.product.rating}
                                                      reviews)</a>
                                              </div>
                                              <div className="product-price">$235.35 </div>
                                              <ul className="product-desc">
                                                  <li>{e.product.short_desc1}</li>
                                                  <li>{e.product.short_desc2}</li>
                                                  <li>{e.product.short_desc3}</li>
                                              </ul>
                                              <div className="product-action">
                                                  <a href="#" className="btn-product btn-cart" title="Səbətə əlavə et"><i
                                                      className="w-icon-cart"></i> Səbətə əlavə et</a>
                                                  <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                                     title="Add to wishlist"></a>
                                                  <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                                     title="Compare"></a>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
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

              <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
                  <div className="pswp__bg"></div>
                  <div className="pswp__scroll-wrap">
                      <div className="pswp__container">
                          <div className="pswp__item"></div>
                          <div className="pswp__item"></div>
                          <div className="pswp__item"></div>
                      </div>
                      <div className="pswp__ui pswp__ui--hidden">
                          <div className="pswp__top-bar">
                              <div className="pswp__counter"></div>
                              <button className="pswp__button pswp__button--close" aria-label="Close (Esc)"></button>
                              <button className="pswp__button pswp__button--zoom" aria-label="Zoom in/out"></button>
                              <div className="pswp__preloader">
                                  <div className="loading-spin"></div>
                              </div>
                          </div>

                          <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                              <div className="pswp__share-tooltip"></div>
                          </div>

                          <button className="pswp__button--arrow--left" aria-label="Previous (arrow left)"></button>
                          <button className="pswp__button--arrow--right" aria-label="Next (arrow right)"></button>

                          <div className="pswp__caption">
                              <div className="pswp__caption__center"></div>
                          </div>
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
                                      <span className="ratings" style={{width:'80%'}}></span>
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
                                  <div>
                                      <div>
                                          <div  id="product-tab-specification">
                                              <ul className="list-none">
                                                  <li>
                                                      <label>Model</label>
                                                      <p>Skysuite 320</p>
                                                  </li>
                                                  <li>
                                                      <label>Color</label>
                                                      <p>Black</p>
                                                  </li>
                                                  <li>
                                                      <label>Size</label>
                                                      <p>Large, Small</p>
                                                  </li>
                                                  <li>
                                                      <label>Guarantee Time</label>
                                                      <p>3 Months</p>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
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
                                      <span>Səbətə əlavə et</span>
                                  </button>
                              </div>

                              <div className="social-links-wrapper">
                                  <div className="social-links">
                                      <div
                                          className="social-icons social-no-color border-thin">
                                          <a href="#"
                                             className="social-icon social-facebook w-icon-facebook"></a>
                                          <a href="#"
                                             className="social-icon social-instagram fab fa-instagram"></a>
                                          <a href="#"
                                             className="social-icon social-twitter fab fa-telegram"></a>
                                          <a href="#"
                                             className="social-icon social-whatsapp fab fa-whatsapp"></a>
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