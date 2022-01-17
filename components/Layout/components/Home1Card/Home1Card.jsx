import React from "react";
import styles from './styles/Home1card.module.css'
export default function Home1Card(){
    return (
          <div>
              <div className="page-wrapper">
                  <div className="container">
                      <style jsx>{`
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
                          <h2 className="title">Deals Hot Of The Day</h2>
                          <a href="shop-boxed-banner.html" className="font-weight-bold ls-25">More Products<i
                              className="w-icon-long-arrow-right"></i></a>
                      </div>
                      <div className="row appear-animate">
                          <div className="col-lg-6 mb-4">
                              <div className="product product-list br-xs mb-0">
                                  <figure className="product-media">
                                      <a href="product-default.html">
                                          <img src="assets/images/demos/demo7/products/1-1.jpg" alt="Product"
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
                                          <a href="product-default.html">Lorem ipsum dolor sit amet</a>
                                      </h4>
                                      <div className="ratings-container">
                                          <div className="ratings-full">
                                              <span className="ratings" style={{width: '100%'}}></span>
                                              <span className="tooltiptext tooltip-top"></span>
                                          </div>
                                          <a href="#" className="rating-reviews">(3 Reviews)</a>
                                      </div>
                                      <div className="product-price">$235.35 - $85.05</div>
                                      <ul className="product-desc">
                                          <li>Aliquam id diam maecenas ultricies miile.</li>
                                          <li>Volutpat ac tincidunt vitae semper quis le.</li>
                                          <li>Ultrices eros in cursus turpis massa.</li>
                                      </ul>
                                      <div className="product-action">
                                          <a href="#" className="btn-product btn-cart" title="Add to Cart"><i
                                              className="w-icon-cart"></i> Add To Cart</a>
                                          <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                             title="Add to wishlist"></a>
                                          <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                             title="Compare"></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 mb-4">
                              <div className="product product-list br-xs mb-0">
                                  <figure className="product-media">
                                      <a href="product-default.html">
                                          <img src="assets/images/demos/demo7/products/1-2.jpg" alt="Product"
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
                                          <a href="product-default.html">Lorem ipsum dolor sit amet</a>
                                      </h4>
                                      <div className="ratings-container">
                                          <div className="ratings-full">
                                              <span className="ratings" style={{width: '100%'}}></span>
                                              <span className="tooltiptext tooltip-top"></span>
                                          </div>
                                          <a href="#" className="rating-reviews">(3 Reviews)</a>
                                      </div>
                                      <div className="product-price">$235.35 - $85.05</div>
                                      <ul className="product-desc">
                                          <li>Aliquam id diam maecenas ultricies miile.</li>
                                          <li>Volutpat ac tincidunt vitae semper quis le.</li>
                                          <li>Ultrices eros in cursus turpis massa.</li>
                                      </ul>
                                      <div className="product-action">
                                          <a href="#" className="btn-product btn-cart" title="Add to Cart"><i
                                              className="w-icon-cart"></i> Add To Cart</a>
                                          <a href="#" className="btn-product-icon btn-wishlist w-icon-heart"
                                             title="Add to wishlist"></a>
                                          <a href="#" className="btn-product-icon btn-compare w-icon-compare"
                                             title="Compare"></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            )}