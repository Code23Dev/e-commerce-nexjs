import React, {useEffect, useState} from 'react'
import axios from "axios";
import {register} from "../../../../services/auth/register";
import {login} from "../../../../services/auth/login";
const logoURL = "http://34.125.190.3/api/logo/";
const headerTextURL = "http://34.125.190.3/api/header-text/";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from "react-select";
import {categories} from "../../../../services/categories";
import {phoneNumber} from "../../../../services/phoneNumber";
import {cartByUserID} from "../../../../services/card/cartByUserID";
import {getUserDataByToken} from "../../../../services/auth/getUserDataByToken";
export default function HeaderTop(){
    const style = {
        control: base => ({
            ...base,
            border: 0,
            boxShadow: 'none',
            backgroundColor: 'white'
        })
    };
    function phoneInputData(e){
        console.log(e)
    }
    const [number, setNumber] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [isVendor, setIsVendor] = React.useState(false);
    const [isStore, setIsStore] = React.useState(false);
    const [registerPost, setRegisterPost] = React.useState([]);
    const [optionsTitle, optionsData] = useState([]);
    useEffect(() => {
        let mounted = true;
        let options = [{value:-1, label:"Bütün Kateqoriyalar"}]
        categories()
            .then(items => {
                if(mounted) {
                    const data = items.data.map(e=>{
                        options.push({value:e['id'], label:e['title']})
                    })
                    optionsData(options)
                }
            })
        return () => mounted = false;
    }, [])
    let handleChange = (selectedOptions) => {
        console.log(selectedOptions)
    }
    const [numberLogin, setNumberLogin] = React.useState("");
    const [passwordLogin, setPasswordLogin] = React.useState("");
    const [loginPost, setLoginPost] = React.useState([]);

    const [loginPhoneInput, setPhoneInput] = React.useState("");
    const handleLoginInput = () =>{
        let data = {number:loginPhoneInput,
                    password:passwordLogin}
        login(data)
            .then(items => {
                    console.log(items)
                    localStorage.setItem('username', items.data.access);
                    localStorage.setItem('token', items.data.refresh)
                    setLoginPost(items.data)
                getUserDataByToken()
                    .then(e=>{
                        console.log(e)
                        localStorage.setItem('userId', e.data.id);
                    })
            })
            .catch(e=>console.log(e))
        console.log(data)
    }


    //logo
    const [logoPost, setLogoPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${logoURL}`).then((response) => {
            setLogoPost(response.data.image);
        });
    }, []);
    //number
    const [phoneNumberItem, setPhoneNumberItem] = React.useState(null);
    useEffect(() => {
        phoneNumber()
            .then(items => {
                setPhoneNumberItem(items.data.number)
            })
    }, [])

    //card
    const [cartByUserIDItem, setCartByUserIDItem] = React.useState([]);
    const [cartCount, setCartCountItem] = React.useState(0);
    useEffect(() => {
        let  userId = localStorage.getItem('userId')
        cartByUserID(userId)
            .then(items => {
                setCartByUserIDItem(items.data.product_version)
            })
    }, [])
    //header-text
    const [headerText, setHeaderTextURL] = React.useState(null);
    React.useEffect(() => {
        axios.get(`${headerTextURL}`).then((response) => {
            setHeaderTextURL(response.data.content);
        });
    }, []);
    const [showMe, setShowMe] = useState("none");
    function showMeFunc(){
        if (showMe== 'none'){
            setShowMe("block");
        }else{
            setShowMe("none");
        }
    }

    const [showMeNumber, setShowMeNumber] = useState("none");
    function showMeNumberFunc(){
        if (showMeNumber== 'none'){
            setShowMeNumber("block");
        }else{
            setShowMeNumber("none");
        }


    }
    const handleRegisterInput = () =>{
        let data = {number:number,
            password:password,
            password2:password2,
            is_vendor:isVendor,
            is_store:isStore,
        }
        register(data)
            .then(items => {
                showMeFunc()
                showMeNumberFunc()
            }).catch(e =>{
            console.log(e)
        })
        console.log(data)
    }

    const [phone, setState] = useState("");
  const handleOnChange = (value) => {
      setPhoneInput(`+${value}`)
    };





    return (
        <div>
            <style jsx>{`
                    .react-tel-input .form-control {
                        position: relative;
                        font-size: 14px;
                        letter-spacing: .01rem;
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-left: 48px;
                        margin-left: 0;
                        background: #FFFFFF;
                        border: 1px solid #CACACA;
                        border-radius: 5px;
                        line-height: 25px;
                        height: 35px;
                        width: 100% !important;
                        outline: none;
                    }
                .header-top {
                    background: #0088dd;
                    font-size: 1.1rem;
                    letter-spacing: -0.027em;
                    text-transform: capitalize;
                    color: #fff;
                    border-bottom: 1px solid;
                    border-color: rgba(238, 238, 238, 0.2);
                }
                .header-middle {
                    padding-top: 3.2rem;
                    padding-bottom: 3.2rem;
                    color: #fff;
                    background: #0088dd;
                    font-size: 1.2rem;
                    border-bottom: 0;
                }
                .modal {
                  display: block; 
                  position: fixed; 
                  z-index: 9999; 
                  padding-top: 30px;
                  left: 0;
                  top: 0;
                  min-width: 100%;
                  height: 100%; 
                  overflow: auto;
                  background-color: rgb(0,0,0);
                  background-color: rgba(0,0,0,0.4);
                }
                .modal-content {
                  background-color: #fefefe;
                  margin: auto;
                  padding: 10px;
                  border: 1px solid #888;
                  width: 30%;
                }

                .close {
                  color: #aaaaaa;
                  float: right;
                  font-size: 28px;
                  font-weight: bold;
                   padding-left: 20px;
                }
                
                .close:hover,
                .close:focus {
                  color: #000;
                  text-decoration: none;
                  cursor: pointer;
                  padding-left: 20px;
                }
                @media only screen and (max-width: 1000px) {
                  .modal-content {
                    background-color: #fefefe;
                    margin: auto;
                    padding: 10px;
                    border: 1px solid #888;
                    width: 85%;
                  }
                }
            `}
            </style>
            <header className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <p className="welcome-msg">{headerText}</p>
                        </div>
                        <div className="header-right">
                            <span className="divider d-lg-show"></span>
                            <a href="/contact-us" style={{color:"white", cursor:"pointer"}} className="d-lg-show" >Bizimlə Əlaqə</a>
                            <a href="/my-account-for-user" style={{color:"white", cursor:"pointer"}} className="d-lg-show">Hesabım</a>
                            <a onClick={showMeFunc} style={{color:"white", cursor:"pointer"}}>
                                <i className="w-icon-account"></i>Daxil ol</a>
                            <span className="delimiter d-lg-show">/</span>
                            <a  onClick={showMeFunc} className="delimiter" style={{color:"white", cursor:"pointer"}}>Qeydiyyat</a>
                        </div>
                    </div>
                </div>

                <div id="myModal" className="modal" style={{display:showMe}}>
                    <div className="modal-content">
                        <span className="close" onClick={showMeFunc}>&times;</span>
                        <div className="login-popup">
                            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                <ul className="nav nav-tabs text-uppercase" role="tablist">
                                    <li className="nav-item">
                                        <a href="#sign-in" className="nav-link active">Daxil ol</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#sign-up" className="nav-link">Qeydiyyat</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="sign-in">
                                        <div className="form-group">
                                            <label>Nömrənizi daxil edin *</label>
                                            <PhoneInput
                                                country="az"
                                                inputStyle={{width:"100%"}}
                                                value={phone}
                                                onChange={handleOnChange}/>

                                            {/*<input type="text" onChange={e=>setNumberLogin(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                                            {/*       required/>*/}
                                        </div>
                                        <div className="form-group mb-5">
                                            <label>Şifrənizi daxil edin *</label>
                                            <input type="text" onChange={e=>setPasswordLogin(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input type="checkbox" className="custom-checkbox" id="remember" name="remember"
                                                   required=""/>
                                            <label htmlFor="remember">Məni xatırla</label>
                                            <a href="#">Parolu unutdunuz?</a>
                                        </div>


                                        <a href="#" className="btn btn-primary" onClick={()=> handleLoginInput()}>Daxil ol</a>
                                    </div>

                                    <div className="tab-pane" id="sign-up">
                                        <div className="form-group">
                                            <label>Nömrənizi daxil edin *</label>
                                            <input type="text" onChange={e=>setNumber(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label>Şifrənizi daxil edin *</label>
                                            <input type="text" onChange={e=>setPassword(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label>Şifrəni təkrar daxil edin *</label>
                                            <input type="text" onChange={e=>setPassword2(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <p>Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək, hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</p>

                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input type="checkbox" className="custom-checkbox" id="remember2" name="remember" onChange={e=>setIsStore(e.target.checked)}
                                                   required=""/>
                                            <label htmlFor="remember">Mağaza</label>
                                        </div>
                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"
                                                   required=""/>
                                            <label htmlFor="remember">Satıcı</label>
                                        </div>
                                        <a href="#" className="btn btn-primary" onClick={handleRegisterInput}>Qeydiyyatdan keç</a>
                                    </div>
                                </div>
                                <p className="text-center">Sosial hesabla qeydiyyatdan keçin</p>
                                <div className="social-icons social-icon-border-color d-flex justify-content-center">
                                    <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                    <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                    <a href="#" className="social-icon social-google fab fa-google"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="myModal" className="modal" style={{display:showMeNumber}}>
                    <div className="modal-content">
                        <span className="close" onClick={showMeFunc}>&times;</span>
                        <div className="login-popup">
                            <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="sign-in">
                                        <div className="form-group mb-5">
                                            <label>Codu daxil edin *</label>
                                            <input type="text" onChange={e=>setNumberLogin(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <a href="#" className="btn btn-primary" onClick={()=> handleLoginInput()}>Codu daxil edin</a>
                                    </div>

                                    <div className="tab-pane" id="sign-up">
                                        <div className="form-group">
                                            <label>Nömrənizi daxil edin *</label>
                                            <PhoneInput
                                                country="az"
                                                inputStyle={{width:"100%"}}
                                                value={phone}
                                                onChange={handleOnChange}/>
                                            {/*<input type="text" onChange={e=>setNumber(e.target.value)} className="form-control" name="password_1" id="password_1"*/}
                                            {/*       required/>*/}
                                        </div>
                                        <div className="form-group mb-5">
                                            <label>Şifrənizi daxil edin *</label>
                                            <input type="text" onChange={e=>setPassword(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label>Şifrəni təkrar daxil edin *</label>
                                            <input type="text" onChange={e=>setPassword2(e.target.value)} className="form-control" name="password_1" id="password_1"
                                                   required/>
                                        </div>
                                        <p>Şəxsi məlumatlarınız bu veb-saytda təcrübənizi dəstəkləmək, hesabınıza girişi idarə etmək və məxfilik siyasətimizdə təsvir olunan digər məqsədlər üçün istifadə olunacaq.</p>

                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input type="checkbox" className="custom-checkbox" id="remember2" name="remember" onChange={e=>setIsStore(e.target.checked)}
                                                   required=""/>
                                            <label htmlFor="remember">Mağaza</label>
                                        </div>
                                        <div className="form-checkbox d-flex align-items-center justify-content-between">
                                            <input type="checkbox" className="custom-checkbox" id="remember3" onChange={e=>setIsVendor(e.target.checked)} name="remember"
                                                   required=""/>
                                            <label htmlFor="remember">Satıcı</label>
                                        </div>
                                        <a href="#" className="btn btn-primary" onClick={handleRegisterInput}>Qeydiyyatdan keç</a>
                                    </div>
                                </div>
                                <p className="text-center">Sosial hesabla qeydiyyatdan keçin</p>
                                <div className="social-icons social-icon-border-color d-flex justify-content-center">
                                    <a href="#" className="social-icon social-facebook w-icon-facebook"></a>
                                    <a href="#" className="social-icon social-twitter w-icon-twitter"></a>
                                    <a href="#" className="social-icon social-google fab fa-google"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="header-middle">
                    <div className="container">
                        <div className="header-left mr-md-4">
                            <a href="#" className="mobile-menu-toggle text-white w-icon-hamburger" aria-label="menu-toggle">
                            </a>
                            <a href="/home" className="logo ml-lg-0">
                                <img src={'http://34.125.190.3'+logoPost} alt="logo" width="144" height="45"/>
                            </a>
                            <form method="get" action="#"
                                  className="input-wrapper header-search hs-expanded hs-round d-none d-md-flex">
                                <div className="select-box bg-white">
                                    <Select
                                        name="colors"
                                        styles={style}
                                        options={optionsTitle}
                                        placeholder={"kateqoriya seç"}
                                        classNamePrefix="select"
                                        components={{
                                            IndicatorSeparator: () => null
                                        }}
                                        onChange={handleChange}
                                    />
                                </div>
                                <input type="text" className="form-control bg-white" name="search" id="search"
                                       placeholder="Axtarın..." required/>
                                <button className="btn btn-search" type="submit"><i className="w-icon-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="header-right ml-4">
                            <div className="header-call d-xs-show d-lg-flex align-items-center">
                                <a href="tel:#" className="w-icon-call text-white"></a>
                                <div className="call-info d-lg-show">
                                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-white mb-0">
                                        <a href="mailto:#" className="text-capitalize text-white">Bizə zəng</a> </h4>
                                    <a href="tel:#" className="phone-number font-weight-bolder text-white ls-50">{phoneNumberItem}</a>
                                </div>
                            </div>
                            <a className="wishlist label-down link d-xs-show" href="/wishlist">
                                <i className="w-icon-heart"></i>
                                <span className="wishlist-label d-lg-show">Bəyəndiklərim</span>
                            </a>
                            <a className="compare label-down link d-xs-show" href="/compare">
                                <i className="w-icon-compare"></i>
                                <span className="compare-label d-lg-show">Müqayisə</span>
                            </a>
                            <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                                <div className="cart-overlay"></div>
                                <a href="#" className="cart-toggle label-down link text-white">
                                    <i className="w-icon-cart">
                                        <span className="cart-count">{cartCount}</span>
                                    </i>
                                    <span className="cart-label">Səbət</span>
                                </a>
                                <div className="dropdown-box">
                                    <div className="cart-header">
                                        <span>Alış-veriş səbəti</span>
                                        <a href="#" className="btn-close">Close<i className="w-icon-long-arrow-right"></i></a>
                                    </div>

                                    <div className="products">
                                        {cartByUserIDItem.map(e=>(
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
                                        ))}

                                    </div>

                                    {/*<div className="cart-total">*/}
                                    {/*    <label>Subtotal:</label>*/}
                                    {/*    <span className="price">$58.67</span>*/}
                                    {/*</div>*/}

                                    <div className="cart-action">
                                        <a href="/cart" className="btn btn-dark btn-outline btn-rounded">SƏBƏBƏTƏ BAXIN</a>
                                        <a href="/checkout" className="btn btn-primary  btn-rounded">Yoxla</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}