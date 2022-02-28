import React from 'react'

export default function Card(){
    return (
        <div>
            <main className="main cart">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb shop-breadcrumb bb-no">
                            <li className="active"><a href="/cart">Shopping Cart</a></li>
                            <li><a href="/checkout">Checkout</a></li>
                            <li><a href="/order">Order Complete</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="page-content">
                    <div className="container">
                        <div className="row gutter-lg mb-10">
                            <div className="col-lg-8 pr-lg-4 mb-6">
                                <table className="shop-table cart-table">
                                    <thead>
                                    <tr>
                                        <th className="product-name"><span>Product</span></th>
                                        <th></th>
                                        <th className="product-price"><span>Price</span></th>
                                        <th className="product-quantity"><span>Quantity</span></th>
                                        <th className="product-subtotal"><span>Subtotal</span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <div className="p-relative">
                                                <a href="product-default.html">
                                                    <figure>
                                                        <img src="assets/images/shop/12.jpg" alt="product"
                                                             width="300" height="338"/>
                                                    </figure>
                                                </a>
                                                <button type="submit" className="btn btn-close"><i
                                                    className="fas fa-times"></i></button>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <a href="product-default.html">
                                                Classic Simple Backpack
                                            </a>
                                        </td>
                                        <td className="product-price"><span className="amount">$40.00</span></td>
                                        <td className="product-quantity">
                                            <div className="input-group">
                                                <input className="quantity form-control" type="number" min="1"
                                                       max="100000"/>
                                                    <button className="quantity-plus w-icon-plus"></button>
                                                    <button className="quantity-minus w-icon-minus"></button>
                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="amount">$40.00</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <div className="p-relative">
                                                <a href="product-default.html">
                                                    <figure>
                                                        <img src="assets/images/shop/13.jpg" alt="product"
                                                             width="300" height="338"/>
                                                    </figure>
                                                </a>
                                                <button className="btn btn-close"><i className="fas fa-times"></i>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="product-name">
                                            <a href="product-default.html">
                                                Smart Watch
                                            </a>
                                        </td>
                                        <td className="product-price"><span className="amount">$60.00</span></td>
                                        <td className="product-quantity">
                                            <div className="input-group">
                                                <input className="quantity form-control" type="number" min="1"
                                                       max="100000"/>
                                                    <button className="quantity-plus w-icon-plus"></button>
                                                    <button className="quantity-minus w-icon-minus"></button>
                                            </div>
                                        </td>
                                        <td className="product-subtotal">
                                            <span className="amount">$60.00</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="cart-action mb-6">
                                    <a href="#" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i
                                        className="w-icon-long-arrow-left"></i>Continue Shopping</a>
                                    <button type="submit" className="btn btn-rounded btn-default btn-clear"
                                            name="clear_cart" value="Clear Cart">Clear Cart
                                    </button>
                                    <button type="submit" className="btn btn-rounded btn-update disabled"
                                            name="update_cart" value="Update Cart">Update Cart
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )}