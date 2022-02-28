import React, {useEffect, useState} from "react";
import {vendors} from "../../../../services/vendors/vendors";
import {categories} from "../../../../services/categories";
import {subCategories} from "../../../../services/subCategories";
import {subSubCategories} from "../../../../services/subSubCategories";
import {allProducts} from "../../../../services/products/allProducts";
import {filtersBySubsub} from "../../../../services/filtersBySubsub";
import {productFilter} from "../../../../services/productFilter";
import {subBySubsub} from "../../../../services/subBySubsub";
import {subByCategory} from "../../../../services/subByCategory";
import {productsPost} from "../../../../services/productsPost";

export default function Vendor() {
    const [orderbyTitle, setOrderby] = useState([]);

    const [vendorsTitle, vendorsData] = useState([]);
    useEffect(() => {
        vendors()
                .then(items => {
                    vendorsData(items.data.results)
                })
                .catch((e)=>{
                    console.log(e)
                })
    }, [])





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
                    vendorsData(items.data.results)
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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                vendorsData(e.data.results)
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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                vendorsData(e.data.results)
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
        productsPost(data)
            .then((e)=>{
                let sizeData =[]
                for (let i=0;i<= e.data.count;i++){
                    if (i%12==0){
                        sizeData.push({size:12})
                    }
                }
                setSizeAllData(sizeData)
                setCount(e.data.count)
                vendorsData(e.data.results)
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
                vendorsData(e.data.results)
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
                vendorsData(e.data.results)
            })
    }
    const setPageFunc = (p,s) =>{
        allProducts(p,s)
            .then(items => {
                vendorsData(items.data.results)
            })
    }
    const setPartnersPost = (sortByArray) =>{
        let data = {[sortByArray] : [sortByArray]}
        productsPost(data)
            .then(items => {
                vendorsData(items.data.results)
            })
    }
    return (
        <div>
            <main className="main">
                <nav className="breadcrumb-nav">
                    <div className="container">
                        <ul className="breadcrumb bb-no">
                            <li><a href="/">Ana Səhifə</a></li>
                            <li><a href="/vendor">Saticilar</a></li>
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
                                                        <button className="btn btn-search"><i className="w-icon-search"></i></button>
                                                </form>
                                            </div>
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
                                    </div>
                                </div>
                            </aside>
                            <div className="main-content">
                                <div className="toolbox wcfm-toolbox">
                                    <div className="toolbox-left">
                                        <form className="select-box toolbox-item">
                                            <select name="orderby" className="form-control" onClick={(e)=> setPartnersPost(e.target.value)}>
                                                <option value="low-high">Orta reytinqə görə çeşidləyin: aşağıdan yuxarıya</option>
                                                <option value="high-low">Orta reytinqə görə çeşidləyin: yüksəkdən aşağıya</option>
                                                <option value="old-new">Əlifba sırası ilə sırala: A-dan Z-yə</option>
                                                <option value="old-new">Əlifba sırası ilə sıralayın: Z-dən A</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className="toolbox-right">
                                        <div className="toolbox-item">
                                            {/*<label className="showing-info">Showing 1-2 of 2 result</label>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="row cols-sm-2">
                                    {vendorsTitle.map(e=>(
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
                                                        <a href="vendor-dokan-store.html">{e.name}</a>
                                                    </h4>
                                                    <span style={{color:"white"}}>categories</span>
                                                    <ul className="seller-info-list list-style-none">
                                                        <li className="store-phone">
                                                            <a href="tel:123456789">
                                                                <i className="w-icon-phone"></i>
                                                                {e.number}
                                                            </a>
                                                        </li>
                                                        <li className="store-address">
                                                            <i className="w-icon-map-marker"></i>
                                                            {e.address + " " + e.address_addtional}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="store-footer">
                                                    <figure className="seller-brand">
                                                        <img src={e.logo} alt="Brand" width="80"
                                                             height="80"/>
                                                    </figure>
                                                    <a href={`/vendorStore/${e.id}`} className="btn btn-rounded btn-visit">Ziyarət Edin</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}