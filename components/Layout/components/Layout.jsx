import React from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

export default function Layout({children}){
    return (
        <>
          <div className="page-wrapper">
              <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
              <Header/>
              {children}
              <Main/>
              <Footer/>
          </div>



        </>
    )
}