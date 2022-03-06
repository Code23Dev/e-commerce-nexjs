import React, {useEffect, useState} from "react";
import {categories} from "../../../../services/categories";
import {subCategories} from "../../../../services/subCategories";
import {subSubCategories} from "../../../../services/subSubCategories";
import {filtersBySubsub} from "../../../../services/filtersBySubsub";
import {allProducts} from "../../../../services/products/allProducts";
import {subByCategory} from "../../../../services/subByCategory";
import {subBySubsub} from "../../../../services/subBySubsub";
import {productFilter} from "../../../../services/productFilter";
import {productsPost} from "../../../../services/productsPost";
import {productById} from "../../../../services/products/productById";
import {useForm} from "react-final-form";

export default function ShopPageMain(){
    let text = 'ttttttttttt'
    const [optionsTitle, optionsData] = useState([]);
    const [displayedBenefits, displayedBenefitsData] = useState([]);
    const [subSubCategoriesTitle, subSubCategoriesData] = useState([]);
    const [subCategoriesTitle, subCategoriesData] = useState([]);
    const [filtersBySubsubTitle, filtersBySubsubData] = useState([]);
    let dataClass = "null"
    useEffect(() => {
        let mounted = true;
        categories()
            .then(items => {
                if(mounted) {
                    optionsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subCategories()
            .then(items => {
                if(mounted) {
                    displayedBenefitsData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subSubCategories()
            .then(items => {
                if(mounted) {
                    subSubCategoriesData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    useEffect(() => {
        let mounted = true;
        subCategories()
            .then(items => {
                if(mounted) {
                    subCategoriesData(items.data)
                }
            })
        return () => mounted = false;
    }, [])
    const [allProductsTitle, allProductsData] = useState([]);
    const [paginationPrev, paginationPrevData] = useState([]);
    const [paginationNext, paginationNextData] = useState([]);



    const [page, setPage] = useState(null);
    const [sizeForPage, setsizeForPage] = useState(null);
    const [count, setCount] = useState([]);

    const [sizeAllData, setSizeAllData] = useState([]);
    useEffect(() => {
        let mounted = true;
        allProducts(page,sizeForPage)
            .then(items => {
                if(mounted) {
                    let sizeData =[]
                    for (let i=0;i<= items.data.count;i++){
                        if (i%12==0){
                            sizeData.push({size:12})
                        }
                    }
                    setSizeAllData(sizeData)
                    setCount(items.data.count)
                    allProductsData(items.data.results)
                }
            })
        return () => mounted = false;
    }, [])


    const [showMe, setShowMe] = useState(true);
    function toggle(e){
        if (e==='grid'){
            setShowMe(true);
        }else{
            setShowMe(false);
        }

    }
    function testTitle(e){
        if (dataClass){
            console.log(e)
            dataClass = "dd"
        }else {
            console.log(e)
            dataClass = "dd"
        }

    }
    function subId(e){
        filtersBySubsub(e.id)
            .then(items => {
                filtersBySubsubData(items.data)
            })
    }

    let endData = []
    let price = []
        const defaultData = [
            { id: 1, name: "apple", isChecked: false },
            { id: 2, name: "banana", isChecked: false },
            { id: 3, name: "mango", isChecked: false },
            { id: 4, name: "grape", isChecked: false },
            { id: 5, name: "carrot", isChecked: false }
        ];
        // const [data, setData] = useState(defaultData);
        //
        // function handleChange(e) {
        //     const value = e.target.value;
        //     const modifiedData = [...filtersBySubsubTitle];
        //     modifiedData.map((item) => {
        //         item.isChecked = item.id === +value;
        //         return item;
        //     });
        //     filtersBySubsubData(modifiedData);
        // }

        const handleChangeSubCategories = (e,id,title) =>{
            let data = {'sub_category': title}
            productFilter(data)
                .then((e)=>{
                    let sizeData =[]
                    for (let i=0;i<= e.data.count;i++){
                        if (i%12==0){
                            sizeData.push({size:12})
                        }
                    }
                    setSizeAllData(sizeData)
                    setCount(e.data.count)
                    allProductsData(e.data.results)
                })
            subBySubsub(id)
                .then((item)=>{
                    subSubCategoriesData(item.data)
                })
            let value = null
            if( e == "CleanAll" ){
                value = null
            } else {
                value = e.target.value;
            }
            const modifiedData = [...subCategoriesTitle];
            modifiedData.map((item) => {
                item.isChecked = item.id === +value;
                return item;
            });
            subCategoriesData(modifiedData);
        }

        const handleChangeAllCategories = (e,id,title) => {
            let data = {'category': title}
            productFilter(data)
                .then((e)=>{
                    let sizeData =[]
                    for (let i=0;i<= e.data.count;i++){
                        if (i%12==0){
                            sizeData.push({size:12})
                        }
                    }
                    setSizeAllData(sizeData)
                    setCount(e.data.count)
                    allProductsData(e.data.results)
                })
            subByCategory(id)
                .then((item)=>{
                    subCategoriesData(item.data)
                })
            let value = null
            if( e == "CleanAll" ){
                value = null
            } else {
                value = e.target.value;
            }
            const modifiedData = [...optionsTitle];
            modifiedData.map((item) => {
                item.isChecked = item.id === +value;
                return item;
            });
            optionsData(modifiedData);
        }

        function handleChangeSubSubCategories(e,id,title) {
            let data = {'sub_sub_category': title}
            productFilter(data)
                .then((e)=>{
                    let sizeData =[]
                    for (let i=0;i<= e.data.count;i++){
                        if (i%12==0){
                            sizeData.push({size:12})
                        }
                    }
                    setSizeAllData(sizeData)
                    setCount(e.data.count)
                    allProductsData(e.data.results)
                })
            // const value = e.target.value;
            // const modifiedData = [...optionsTitle];
            // modifiedData.map((item) => {
            //     item.isChecked = item.id === +value;
            //     return item;
            // });
            // optionsData(modifiedData);
        }
        const handleChangeCleanAll = () =>{
            handleChangeAllCategories("CleanAll",null,null)
            handleChangeSubCategories("CleanAll",null,null)
        }


    const [minPrice, setMinPrice] = useState([]);
    const [maxPrice, setMaxPrice] = useState([]);
    const sentPrice = (e) => {
        price.push(e)
        let data = {'price': price}
        productFilter(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
    }
    const setAllPriceData = () =>{
        price.push([ Number(minPrice),Number(maxPrice)])
        let data = {'price': price}
        productFilter(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                allProductsData(e.data.results)
            })
    }
    const setPageFunc = (p,s) =>{
        allProducts(p,s)
            .then(items => {
                    allProductsData(items.data.results)
            })
    }
    const [productByIdItem, productByIdData] = useState([])
    const [productByIdImages, productByIdImagesData] =  useState([])
    let test = 'product product-single product-popup'
    const setProductByIdFunc = (id) =>{
        productById(id)
            .then(items => {
                console.log(items)
                productByIdData([items.data])
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    const setPartnersPost = (sortByArray) =>{
        let data = {[sortByArray] : [sortByArray]}
        productsPost(data)
            .then(items => {
                allProductsData(items.data.results)
            })
    }
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <style jsx>{`

                        .product-action .btn-product:hover {
                                         background-color: #ed711b !important;
                                         color: #fff !important;
                                         border-color: #ed711b !important;
                                    }`

                    }

                    </style>
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="/home">Ana Səhifə</a></li>
                            <li><a href="#">Mağaza</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="container">
                        <div className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
                             style={{backgroundImage: 'url(assets/images/shopShop/banner1.jpg)', backgroundColor: '#FFC74E'}}>
                            <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-bold">Accessories Collection</h4>
                                <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">Smart
                                    Wrist
                                    Watches</h3>
                                <a href="shop-banner-sidebar.html" className="btn btn-dark btn-rounded btn-icon-right">Discover
                                    Now<i className="w-icon-long-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="shop-content row gutter-lg mb-10">
                            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
                                <div className="sidebar-overlay"></div>
                                <a className="sidebar-close" href="#"><i className="close-icon"></i></a>
                                <div className="sidebar-content scrollable">
                                    <div className="sticky-sidebar">
                                        <div className="filter-actions">
                                            <label>Filter :</label>
                                            <a href="#" className="btn btn-dark btn-link filter-clean" onClick={() => handleChangeCleanAll()}>Hamısını təmizləyin</a>
                                        </div>
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span>Bütün Kateqoriyalar</span></h3>
                                            <ul className="widget-body filter-items item-check mt-1">
                                                {optionsTitle.map((item, index) => (
                                                    <div  onChange={(e) => handleChangeAllCategories(e,item.id,item.title)}>
                                                        <div key={item.id} className="mt-2">
                                                            <input
                                                                type="checkbox"
                                                                value={item.id}
                                                                style={{width:' 20px', height: '24px'}}
                                                                checked={item.isChecked}
                                                                id={`options` + item.id}
                                                            />
                                                            <label htmlFor={`options` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                            <br />
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span>Alt Kateqoriyalar</span></h3>
                                            <ul className="widget-body filter-items item-check mt-1">
                                                {subCategoriesTitle.map((item, index) => (
                                                    <div  onChange={(e) => handleChangeSubCategories(e,item.id,item.title)}>
                                                        <div key={item.id} className="mt-2">
                                                            <input
                                                                type="checkbox"
                                                                value={item.id}
                                                                style={{width:' 20px', height: '24px'}}
                                                                checked={item.isChecked}
                                                                id={`sub` + item.id}
                                                            />
                                                            <label htmlFor={`sub` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                            <br />
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span>Sub Kateqoriyalar</span></h3>
                                            <ul className="widget-body filter-items item-check mt-1">
                                                {subSubCategoriesTitle.map((item, index) => (
                                                    <div  onChange={(e) => handleChangeSubSubCategories(e,item.id,item.title)}>
                                                        <div key={item.id} className="mt-2">
                                                            <input
                                                                type="checkbox"
                                                                value={item.id}
                                                                style={{width:' 20px', height: '24px'}}
                                                                checked={item.isChecked}
                                                                id={`subSub` + item.id}
                                                            />
                                                            <label htmlFor={`subSub` + item.id} className="ml-2" style={{position:"relative", top:'-5px',cursor:"pointer"}}>{item.title}</label>
                                                            <br />
                                                        </div>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                        {filtersBySubsubTitle.map(e=>(
                                            <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span>{e.title}</span></h3>
                                            <ul className="widget-body filter-items item-check mt-1">

                                            </ul>
                                            </div>
                                           ))}
                                        <div className="widget widget-collapsible">
                                            <h3 className="widget-title"><span>Qiymət</span></h3>
                                            <div className="widget-body">
                                                <ul className="filter-items search-ul">
                                                    <li><a href="javascript:void(0)" onClick={() =>sentPrice([0, 5])}>₼0.00 - ₼5.00</a></li>
                                                    <li><a href="javascript:void(0)" onClick={() =>sentPrice([5, 10])}>₼5.00 - ₼10.00</a></li>
                                                    <li><a href="javascript:void(0)" onClick={() =>sentPrice([15, 20])}>₼15.00 - ₼20.00</a></li>
                                                    <li><a href="javascript:void(0)" onClick={() =>sentPrice([20, 100000])}>₼20.00+</a></li>
                                                </ul>
                                                <form className="price-range">
                                                    <input type="number" name="min_price" onChange={e=>setMinPrice(e.target.value)}  className="min_price text-center" placeholder="₼min"/>
                                                    <span className="delimiter">-</span>
                                                    <input type="number" name="max_price" onChange={e=>setMaxPrice(e.target.value)}  className="max_price text-center" placeholder="₼max"/>
                                                    <a href="javascript:void(0)" className="btn btn-primary btn-rounded" onClick={()=>setAllPriceData()}>Göndər</a>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                            <div className="main-content">
                                <nav className="toolbox sticky-toolbox sticky-content fix-top">
                                    <div className="toolbox-left">
                                        <a href="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle
                                        btn-icon-left d-block d-lg-none"><i
                                            className="w-icon-category"></i><span>Filters</span></a>
                                        <div className="toolbox-item toolbox-sort select-box text-dark">
                                            <label>Sırala :</label>
                                            <select name="orderby" className="form-control"  onClick={(e)=> setPartnersPost(e.target.value)}>
                                                <option value="az">A-Z</option>
                                                <option value="za">Z-A</option>
                                                <option value="cheap">Ucuz-Baha</option>
                                                <option value="expensive">Baha-Ucuz</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="toolbox-right">
                                        <div className="toolbox-item toolbox-show select-box">
                                            <select name="count" className="form-control" onClick={(e)=> setPageFunc(1,e.target.value)}>
                                                <option value="9">Show 9</option>
                                                <option value="12" selected="selected">Show 12</option>
                                                <option value="24">Show 24</option>
                                                <option value="36">Show 36</option>
                                            </select>
                                        </div>
                                        <div className="toolbox-item toolbox-layout">
                                            <a onClick={() => toggle('grid')}
                                               className={`icon-mode-grid btn-layout  ${showMe  ? "active" : ""}`} >
                                                <i className="w-icon-grid"></i>
                                            </a>
                                            <a onClick={() => toggle('list')}
                                               className={`icon-mode-list btn-layout  ${showMe ? "" : "active"}`}
                                               >
                                                <i className="w-icon-list"></i>
                                            </a>
                                        </div>
                                    </div>
                                </nav>

                                <div className="product-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-2" style={{display: showMe?" ":"none"}}>
                                    {allProductsTitle.map(e=>(
                                        <div className="product-wrap">
                                            <div className="product text-center">
                                                <figure className="product-media">
                                                    <a href={`/${e.id}`}>
                                                        <img src={e.images[0]} alt="Product" width="300"
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
                                                           onClick={()=>{setProductByIdFunc(e.id)}}
                                                           title="Quick View"
                                                        ></a>
                                                    </div>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="product-cat">
                                                        <a href="shop-banner-sidebar.html">sub_sub_category</a>
                                                    </div>
                                                    <h3 className="product-name">
                                                        <a href="product-default.html">{e.title}</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="ratings-full">
                                                            <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                        <a href="product-default.html" className="rating-reviews">({e.rating}
                                                            reviews)</a>
                                                    </div>
                                                    <div className="product-pa-wrapper">
                                                        <div className="product-price">
                                                            {e.price}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div >


                                <div className="product-wrapper row cols-xl-1 cols-sm-1 cols-xs-1 cols-1" style={{display: showMe?"none":" "}}>
                                    {allProductsTitle.map(e=>(
                                        <div className="product product-list">
                                            <figure className="product-media">
                                                <a href={`/${e.id}`}>
                                                    <img src={e.images[0]} alt="Product" width="300"
                                                         height="338"/>
                                                </a>
                                                <div className="product-action-vertical">
                                                    <a href="#" className="btn-product-icon btn-quickview w-icon-search"
                                                       title="Quick View"></a>
                                                </div>
                                                {/*<div className="product-countdown-container" style={{height: '35px'}}>*/}
                                                {/*    <div className="product-countdown countdown-compact" data-until="2021, 9, 9"*/}
                                                {/*         data-format="DHMS" data-compact="false"*/}
                                                {/*         style={{fontSize: '20px'}}*/}
                                                {/*         data-labels-short="Days, Hours, Mins, Secs">*/}
                                                {/*        00:00:00:00*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </figure>
                                            <div className="product-details">
                                                <div className="product-cat">
                                                    <a href="shop-banner-sidebar.html">sub_sub_category</a>
                                                </div>
                                                <h4 className="product-name">
                                                    <a href="product-default.html">{e.title}</a>
                                                </h4>
                                                <div className="ratings-container">
                                                    <div className="ratings-full">
                                                        <span className="ratings"  style={{width: `${(18 * e.rating)+'%'}` }}></span>
                                                        <span className="tooltiptext tooltip-top"></span>
                                                    </div>
                                                    <a href="product-default.html" className="rating-reviews">({e.rating}
                                                        Reviews)</a>
                                                </div>
                                                <div className="product-price">
                                                    <ins className="new-price">{e.price}</ins>
                                                    {/*<del className="old-price">$60.00</del>*/}
                                                </div>
                                                <div className="product-desc">
                                                    <div className="product-short-desc">
                                                        <ul className="list-type-check list-style-none">
                                                            <li>{e.short_desc1}</li>
                                                            <li>{e.short_desc2}</li>
                                                            <li>{e.short_desc3}</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                    ))}
                                </div>





                                <div className="toolbox toolbox-pagination justify-content-between">
                                    {/*<p className="showing-info mb-2 mb-sm-0">*/}
                                    {/*    Showing<span>1-12 of 60</span>Products*/}
                                    {/*</p>*/}
                                    <ul className="pagination">
                                        <li className="prev disabled">
                                            <a href={paginationPrev} aria-label="Previous" tabIndex="-1" aria-disabled="true">
                                                <i className="w-icon-long-arrow-left"></i>Əvvəlki
                                            </a>
                                        </li>
                                            {sizeAllData.map((e,i)=>(
                                                <li className="page-item active">
                                                <a className="page-link" href="#" onClick={()=>setPageFunc(i+1,e.size)}>{i+1}</a>
                                                </li>
                                            ))}
                                        <li className="next">
                                            <a href={paginationNext} aria-label="Next">
                                                Sonrakı<i className="w-icon-long-arrow-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="sticky-footer sticky-content fix-bottom">
                <a href="demo7.html" className="sticky-link active">
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
                                    <h3 className="product-name">
                                        <a href="product-default.html">Blue utility pina<br/>fore
                                            denim dress</a>
                                    </h3>
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
            <div className="mobile-menu-wrapper">
                <div className="mobile-menu-overlay"></div>
                <a href="#" className="mobile-menu-close"><i className="close-icon"></i></a>
                <div className="mobile-menu-container scrollable">
                    <form action="#" method="get" className="input-wrapper">
                        <input type="text" className="form-control" name="search" autoComplete="off"
                               placeholder="Search"
                               required/>
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
                                <li><a href="demo7.html">Home</a></li>
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
            <div className="newsletter-popup mfp-hide">
                <div className="newsletter-content">
                    <h4 className="text-uppercase font-weight-normal ls-25">Get Up to<span className="text-primary">25% Off</span>
                    </h4>
                    <h2 className="ls-25">Sign up to Wolmart</h2>
                    <p className="text-light ls-10">Subscribe to the Wolmart market newsletter to
                        receive updates on special offers.</p>
                    <form action="#" method="get" className="input-wrapper input-wrapper-inline input-wrapper-round">
                        <input type="email" className="form-control email font-size-md" name="email" id="email2"
                               placeholder="Your email address" required=""/>
                        <button className="btn btn-dark" type="submit">SUBMIT</button>
                    </form>
                    <div className="form-checkbox d-flex align-items-center">
                        <input type="checkbox" className="custom-checkbox" id="hide-newsletter-popup"
                               name="hide-newsletter-popup"
                               required=""/>
                        <label htmlFor="hide-newsletter-popup" className="font-size-sm text-light">Don't show this
                            popup again.</label>
                    </div>
                </div>
            </div>
            <div className={test}>

            </div>
        </div>
    )}