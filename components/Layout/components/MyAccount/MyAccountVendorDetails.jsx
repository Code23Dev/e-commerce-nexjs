import React, {useState} from "react";
import login from "../../../../pages/login";

export default function MyAccountVendorDetails(){
    const [name, setName] = useState("");
    let imgUrl = 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);
    const [selectedFile5, setSelectedFile5] = useState(null);
    const [selectedFile6, setSelectedFile6] = useState(null);
    return (
        <div>
            <style jsx>{`
              .inputFile {
                width: 0.1px !important;
                height: 0.1px !important;
                opacity: 0 !important;
                overflow: hidden !important;
                position: absolute !important;
                z-index: -1 !important;
              }

              .inputFile + label {
                background-color: #989494;
                display: inline-block;
              }

            `}
            </style>
            <div>
                <div className="page-wrapper">
                    <main className="main mb-10 pb-1">
                        <div className="page-content">
                            <div className="container">
                                <div className="row gutter-lg">
                                    <div>
                                        <div className="product product-single row mb-2">
                                            <div className="col-md-6 mb-4 mb-md-8">
                                                <div className="product-gallery product-gallery-sticky">
                                                    <div
                                                        className="swiper-container product-single-swiper swiper-theme nav-inner"
                                                        data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }">
                                                        <div className="swiper-wrapper row cols-1 gutter-no">
                                                            <div className="swiper-slide">
                                                                <figure className="product-image">
                                                                    <div>
                                                                        <form>
                                                                            <input type="file"
                                                                                   accept=".jpg, .jpeg, .png"
                                                                                   name="file1" id="file1"
                                                                                   className="inputFile"
                                                                                   onChange={(event) => console.log(setSelectedFile1(window.URL.createObjectURL(event.target.files[0])))}/>
                                                                            <label htmlFor="file1" style={{width:'800px', height:'490px'}}>
                                                                                <img src={selectedFile1 } id="file1" data-zoom-image={selectedFile1}/>
                                                                            </label>
                                                                        </form>
                                                                    </div>
                                                                </figure>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <figure className="product-image">
                                                                    <form>
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="file2" id="file2"
                                                                               className="inputFile"
                                                                               onChange={(event) => setSelectedFile2(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                        <label htmlFor="file2" style={{width:"800px", height:"490px"}}>
                                                                            <img src={selectedFile2}  data-zoom-image={selectedFile2}/>
                                                                        </label>
                                                                    </form>
                                                                </figure>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                    <figure className="product-image">
                                                                        <form>
                                                                            <input type="file"
                                                                                   accept=".jpg, .jpeg, .png"
                                                                                   name="file4" id="file4"
                                                                                   className="inputFile"
                                                                                   onChange={(event) => setSelectedFile3(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                            <label htmlFor="file4" style={{width:"800px", height:"490px"}}>
                                                                                <img src={selectedFile3}  data-zoom-image={selectedFile3}/>
                                                                            </label>
                                                                        </form>
                                                                    </figure>
                                                            </div>
                                                            <div className="swiper-slide">
                                                                <figure className="product-image">
                                                                    <form>
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="file3" id="file3"
                                                                               className="inputFile"
                                                                               onChange={(event) => setSelectedFile4(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                        <label htmlFor="file3" style={{width:"800px", height:"490px"}}>
                                                                            <img src={selectedFile4}  data-zoom-image={selectedFile4}/>
                                                                        </label>
                                                                    </form>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                        <button className="swiper-button-next"></button>
                                                        <button className="swiper-button-prev"></button>
                                                        <a href="#" className="product-gallery-btn product-image-full"><i
                                                            className="w-icon-zoom"></i></a>
                                                    </div>
                                                    <div className="product-thumbs-wrap swiper-container"
                                                         data-swiper-options="{
                                            'navigation': {
                                                'nextEl': '.swiper-button-next',
                                                'prevEl': '.swiper-button-prev'
                                            }
                                        }">
                                                        <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                                                            <div className="product-thumb swiper-slide">
                                                                <figure className="product-image" style={{backgroundColor: '#989494'}}>
                                                                   <img src={selectedFile1}   data-zoom-image={selectedFile1}/>
                                                                </figure>
                                                            </div>
                                                            <div className="product-thumb swiper-slide" style={{backgroundColor: '#989494'}}>
                                                                <img src={selectedFile2}  data-zoom-image={selectedFile2}/>
                                                            </div>
                                                            <div className="product-thumb swiper-slide" style={{backgroundColor: '#989494'}}>
                                                                <img src={selectedFile3}  data-zoom-image={selectedFile3}/>
                                                            </div>
                                                            <div className="product-thumb swiper-slide" style={{backgroundColor: '#989494'}}>
                                                                <img src={selectedFile4}  data-zoom-image={selectedFile4}/>
                                                            </div>
                                                        </div>
                                                        <button className="swiper-button-next"></button>
                                                        <button className="swiper-button-prev"></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-6 mb-md-8">
                                                <div className="product-details" data-sticky-options="{'minWidth': 767}">
                                                    <div className="form-group mb-3">
                                                        <h4 className="product-title">Shop name</h4>
                                                        <input type="text" id="display-name"
                                                               placeholder="Shop name"
                                                               className="form-control form-control-md mb-0"/>
                                                    </div>

                                                    <div className="product-price">
                                                        <ins className="new-price">$25.00</ins>
                                                    </div>


                                                    <div className="product-short-desc">
                                                        <ul className="list-type-check list-style-none">
                                                            <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                                                            <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                                                            <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                                                        </ul>
                                                    </div>

                                                    <h4 className="product-title">Description</h4>
                                                    <textarea className="form-control form-control-md mb-4"
                                                              name="w3review" rows="4" cols="50">
                                                    </textarea>
                                                    <div className="row">
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="display-name">Title</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="email_1">Title</label>
                                                            <input type="text" id="email_1" name="email_1"
                                                                   className="form-control form-control-md"/>
                                                        </div>
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="display-name">Title</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="email_1">Title</label>
                                                            <input type="text" id="email_1" name="email_1"
                                                                   className="form-control form-control-md"/>
                                                        </div>
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="display-name">Title</label>
                                                            <select className="form-control form-control-md mb-0">
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Åland Islands">Åland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia">Bolivia</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group col-md-6 mb-3">
                                                            <label htmlFor="display-name">Title</label>
                                                            <input type="text" id="email_1" name="email_1"
                                                                   className="form-control form-control-md"/>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <figure className="product-image">
                                                                <div>
                                                                    <form>
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="file09" id="file09"
                                                                               className="inputFile"
                                                                               onChange={(event) => setSelectedFile5(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                        <label htmlFor="file09" style={{width:"200px", height:"100px"}}>
                                                                            <img src={selectedFile5}  data-zoom-image={selectedFile5}/>
                                                                        </label>
                                                                    </form>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <figure className="product-image">
                                                                <div>
                                                                    <form>
                                                                        <input type="file"
                                                                               accept=".jpg, .jpeg, .png"
                                                                               name="file05" id="file05"
                                                                               className="inputFile"
                                                                               onChange={(event) => setSelectedFile6(window.URL.createObjectURL(event.target.files[0]))}/>
                                                                        <label htmlFor="file05" style={{width:"200px", height:"100px"}}>
                                                                            <img src={selectedFile6}  data-zoom-image={selectedFile6}/>
                                                                        </label>
                                                                    </form>
                                                                </div>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="fix-bottom product-sticky-content sticky-content">
                                                        <div className="product-form container">
                                                            <button className="btn btn-primary btn-cart">
                                                                <i className="w-icon-cart"></i>
                                                                <span>Add to Shop</span>
                                                            </button>
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
        </div>
    )}