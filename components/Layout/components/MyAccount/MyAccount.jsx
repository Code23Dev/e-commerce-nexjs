import React from 'react'
import Link from 'next/link'
export default function MyAccount(){
    return (
        <div>
            <style jsx>{`
                .span-link:hover {
                   color: #1914fe !important;
                   cursor: pointer;
                  }
            `}
            </style>
            <main className="main">
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
                <div className="page-content pt-2">
                    <div className="container">
                        <div className="tab tab-vertical row gutter-lg">
                            <ul className="nav nav-tabs mb-6" role="tablist">
                                <li className="nav-item">
                                    <a href="#account-dashboard" className="nav-link active">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#account-details" className="nav-link">Account details</a>
                                </li>
                                <li className="link-item">
                                    <Link href="/wishlist">
                                        <span  className="nav-link span-link">Wishlist</span>
                                    </Link>

                                </li>
                                <li className="link-item">
                                    <Link href="/login">
                                        <span  className="nav-link span-link">Logout</span>
                                    </Link>
                                </li>
                            </ul>

                            <div className="tab-content mb-6">
                                <div className="tab-pane active in" id="account-dashboard">
                                    <p className="greeting">
                                        Hello
                                        <span className="text-dark font-weight-bold">John Doe</span>
                                        (not
                                        <span className="text-dark font-weight-bold">John Doe</span>?
                                        <a href="#" className="text-primary">Log out</a>)
                                    </p>

                                    <p className="mb-4">
                                        From your account dashboard you can view your <a href="#account-orders"
                                                                                         className="text-primary link-to-tab">recent
                                        orders</a>,
                                        manage your <a href="#account-addresses" className="text-primary link-to-tab">shipping
                                        and billing
                                        addresses</a>, and
                                        <a href="#account-details" className="text-primary link-to-tab">edit your
                                            password and
                                            account details.</a>
                                    </p>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                            <a href="#account-details" className="link-to-tab">
                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-account">
                                                    <i className="w-icon-user"></i>
                                                </span>
                                                    <div className="icon-box-content">
                                                        <p className="text-uppercase mb-0">Account Details</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                            <a href="#account-details" className="link-to-tab">
                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-account">
                                                    <i className="w-icon-user"></i>
                                                </span>
                                                    <div className="icon-box-content">
                                                        <p className="text-uppercase mb-0">Account Details</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                            <Link href="/wishlist">
                                                <a className="link-to-tab">
                                                    <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-wishlist">
                                                    <i className="w-icon-heart"></i>
                                                </span>
                                                        <div className="icon-box-content">
                                                            <p className="text-uppercase mb-0">Wishlist</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                                            <a href="#">
                                                <div className="icon-box text-center">
                                                <span className="icon-box-icon icon-logout">
                                                    <i className="w-icon-logout"></i>
                                                </span>
                                                    <div className="icon-box-content">
                                                        <p className="text-uppercase mb-0">Logout</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane" id="account-details">
                                    <div className="icon-box icon-box-side icon-box-light">
                                    <span className="icon-box-icon icon-account mr-2">
                                        <i className="w-icon-user"></i>
                                    </span>
                                        <div className="icon-box-content">
                                            <h4 className="icon-box-title mb-0 ls-normal">Account Details</h4>
                                        </div>
                                    </div>
                                    <form className="form account-details-form" action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="firstname">First name *</label>
                                                    <input type="text" id="firstname" name="firstname"
                                                           placeholder="John"
                                                           className="form-control form-control-md"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="lastname">Last name *</label>
                                                    <input type="text" id="lastname" name="lastname" placeholder="Doe"
                                                           className="form-control form-control-md"/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Phone number *</label>
                                            <input type="tel" id="display-name" name="phone"
                                                   placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                   className="form-control form-control-md mb-0"/>
                                        </div>

                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Şəhər *</label>
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
                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Rayon *</label>
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
                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Qəsəbə *</label>
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
                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Küçə *</label>
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
                                        <div className="form-group mb-3">
                                            <label htmlFor="display-name">Digər *</label>
                                            <input type="text" id="lastname" name="lastname" placeholder="Digər"
                                                   className="form-control form-control-md"/>
                                        </div>
                                        <div className="form-group mb-6">
                                            <label htmlFor="email_1">Email address *</label>
                                            <input type="email" id="email_1" name="email_1"
                                                   className="form-control form-control-md"/>
                                        </div>

                                        <h4 className="title title-password ls-25 font-weight-bold">Password change</h4>
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="cur-password">Current Password leave
                                                blank to leave unchanged</label>
                                            <input type="password" className="form-control form-control-md"
                                                   id="cur-password" name="cur_password"/>
                                        </div>
                                        <div className="form-group">
                                            <label className="text-dark" htmlFor="new-password">New Password leave blank
                                                to leave unchanged</label>
                                            <input type="password" className="form-control form-control-md"
                                                   id="new-password" name="new_password"/>
                                        </div>
                                        <div className="form-group mb-10">
                                            <label className="text-dark" htmlFor="conf-password">Confirm
                                                Password</label>
                                            <input type="password" className="form-control form-control-md"
                                                   id="conf-password" name="conf_password"/>
                                        </div>
                                        <button type="submit" className="btn btn-dark btn-rounded btn-sm mb-4">Save
                                            Changes
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        )}