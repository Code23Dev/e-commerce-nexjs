import Document, { Html, Head, Main, NextScript } from 'next/document'
import {Component} from "react";
import Mobile from "../components/Layout/components/Mobile/Mobile";



class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                 <meta charSet="UTF-8"/>
                 <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
                 <title>Wolmart - Marketplace</title>
                 <meta name="keywords" content="Marketplace ecommerce responsive HTML5 Template"/>
                 <meta name="description" content="Wolmart is powerful marketplace &amp; ecommerce responsive Html5 Template."/>
                 <meta name="author" content="D-THEMES"/>
                 <link rel="icon" type="image/png" href="assets/images/icons/favicon.png"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
                 <link rel="preload" href="assets/fonts/wolmart.woff?png09e" as="font" type="font/woff" crossOrigin="anonymous"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/fontawesome-free/css/all.min.css"/>
                 <link rel="stylesheet" href="assets/vendor/swiper/swiper-bundle.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/animate/animate.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/vendor/magnific-popup/magnific-popup.min.css"/>
                 <link rel="stylesheet" type="text/css" href="assets/css/demo8.min.css"/>
                </Head>
                <body>
                <Main />
                <Mobile/>
                <a id="scroll-top" className="scroll-top" href="#top" title="Top" role="button"> <i className="w-icon-angle-up"></i>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
                      <circle id="progress-indicator" fill="transparent" stroke="#000000" stroke-miterlimit="10" cx="35" cy="35"
                              r="34" style={{strokeDasharray: '16.4198, 400'}}></circle>
                    </svg>
                </a>
                <NextScript />
                <script src="assets/vendor/jquery/jquery.min.js"></script>
                <script src="assets/vendor/parallax/parallax.min.js"></script>
                <script src="assets/vendor/jquery.plugin/jquery.plugin.min.js"></script>
                <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
                <script src="assets/vendor/skrollr/skrollr.min.js"></script>
                <script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></script>
                <script src="assets/vendor/zoom/jquery.zoom.js"></script>
                <script src="assets/vendor/jquery.countdown/jquery.countdown.min.js"></script>
                <script src="assets/mainJs/index.js"></script>
                <script src="assets/mainJs/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument