import React from 'react'
import Footer from "./components/Footer/Footer";
import Mobile from "./components/Mobile/Mobile";
import HeaderTop from "./components/Header/HeaderTop";

export default function Layout({children}){
    return (
        <>
          <div className="page-wrapper">
              <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
              <HeaderTop/>
              {children}
              <Mobile/>
              <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up"></i>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                      <circle id="progress-indicator" fill="transparent" stroke="#000000" strokeMiterlimit="10" cx="35" cy="35"
                              r="34" style={{strokeDasharray: '16.4198, 400'}}></circle>
                  </svg>
              </a>
              <Footer/>
          </div>



        </>
    )
}