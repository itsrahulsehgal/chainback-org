import { useState } from 'react'
import './Home.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const animationVariants2 = {
    hidden: { x: '100%' },
    visible: { x: '0%' },
  };

  return (
    <div className='home page-template-default page page-id-7 elementor-default elementor-kit-5 elementor-page elementor-page-7'>
      {/* Header */}
      <div className="navbar-area bg-color-140c2d   ">
        <div className="nata-responsive-nav">
          <div className="container">
            <div className="nata-responsive-menu">
              <div className="logo">
                <a href="https://chainback.org/" className="mobile-brand">
                  <img
                    src="https://chainback.org/wp-content/uploads/2023/01/Chanback-logo.png"
                    alt="Chainback"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="nata-nav navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="https://chainback.org/">
              <img
                src="https://chainback.org/wp-content/uploads/2023/01/Chanback-logo.png"
                alt="Chainback"
              />{" "}
            </a>
            <button
              className="navbar-toggler menu-icon"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul id="menu-mian-menu-custom-links" className="navbar-nav m-auto">
                <li
                  id="menu-item-1039"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1039 nav-item"
                >
                  <a title="STORAGE" href="#STORAGE" className="nav-link">
                    STORAGE
                  </a>
                </li>
                <li
                  id="menu-item-1041"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1041 nav-item"
                >
                  <a title="CLOUD" href="#CLOUD" className="nav-link">
                    CLOUD
                  </a>
                </li>
                <li
                  id="menu-item-2952"
                  className="staking menu-item menu-item-type-custom menu-item-object-custom menu-item-2952 nav-item"
                >
                  <a
                    title="STAKING"
                    href="https://chainback.org/staking/"
                    className="nav-link"
                  >
                    STAKING
                  </a>
                </li>
                <li
                  id="menu-item-1042"
                  className="default-btn menu-item menu-item-type-custom menu-item-object-custom menu-item-1042 nav-item"
                >
                  <a
                    title="BUY $ARCHIVE"
                    href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC7f950271d118A5bdF250dFfc39128DCCED8472C"
                    className="nav-link"
                  >
                    BUY $ARCHIVE
                  </a>
                </li>
                <li
                  id="menu-item-4670"
                  className="custom-button default-btn menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-4670 nav-item"
                >
                  <a
                    title="PRODUCTS"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-toggle nav-link"
                    id="menu-item-dropdown-4670"
                  >
                    PRODUCTS
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="menu-item-dropdown-4670"
                    role="menu"
                  >
                    <li
                      id="menu-item-4671"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4671 nav-item"
                    >
                      <a
                        title="Chainback File Manager"
                        href="https://app.chainback.org/"
                        className="dropdown-item"
                      >
                        Chainback File Manager
                      </a>
                    </li>
                    <li
                      id="menu-item-4672"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4672 nav-item"
                    >
                      <a title="Chainback Cloud" href="#" className="dropdown-item">
                        Chainback Cloud
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="others-option d-flex align-items-center"></div>
          </div>
        </nav>
        <div className="others-option-for-responsive">
          <div className="container">
            <div className="others-option"></div>
          </div>
        </div>
      </div>
      <div className="page-area mt-80">
        <div id="post-7" className="post-7 page type-page status-publish hentry">
          <div className="entry-content">
            <div
              data-elementor-type="wp-page"
              data-elementor-id={7}
              className="elementor elementor-7"
            >
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3bdaefc elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3bdaefc"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4b96343"
                    data-id="4b96343"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6eaf064 elementor-widget elementor-widget-text-editor"
                        data-id="6eaf064"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.19.0 - 29-01-2024 */\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: #69727d;\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 3px solid;\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: transparent\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-top: 8px\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 50px\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t"
                            }}
                          />
                          <h1>Ultimate Cloud Computing &amp; File Storage</h1>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-335beeb elementor-widget elementor-widget-text-editor"
                        data-id="335beeb"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Democratizing and scaling decentralized cloud computing
                            and file storage
                          </p>
                        </div>
                      </div>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-675f522 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="675f522"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e973cf0"
                            data-id="e973cf0"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-4c37f35 elementor-widget elementor-widget-html"
                                data-id="4c37f35"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="banner-btn">
                                    <a
                                      target="”_blank”"
                                      href="https://chainback.gitbook.io/chainback-whitepaper/getting-started/brief-overview/"
                                      className="default-btn btn-active customize-unpreviewable"
                                    >
                                      WHITEPAPER
                                    </a>
                                    <a
                                      target="”_blank”"
                                      href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0xC7f950271d118A5bdF250dFfc39128DCCED8472C"
                                      className="default-btn customize-unpreviewable"
                                    >
                                      UNISWAP
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f87eb5b"
                    data-id="f87eb5b"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-2435ae1 elementor-widget elementor-widget-html"
                        data-id="2435ae1"
                        data-element_type="widget"
                        data-widget_type="html.default"
                      >
                        <div className="elementor-widget-container">
                          <dotlottie-player
                            src="https://lottie.host/4db7f5de-5a0b-4158-ae40-7c0749dbe702/qdLKynf2kI.json"
                            background="transparent"
                            speed={1}
                            style={{ width: "100%", height: "" }}
                            loop=""
                            autoPlay=""
                          >
                            <div
                              id="animation-container"
                              lang="en"
                              role="img"
                              aria-label="lottie-animation-container"
                              className="main"
                            >
                              <div
                                id="animation"
                                className="animation"
                                style={{ background: "transparent" }}
                              >
                                {/*?lit$150009346$*/}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  viewBox="0 0 1200 1200"
                                  width={1200}
                                  height={1200}
                                  preserveAspectRatio="xMidYMid meet"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    transform: "translate3d(0px, 0px, 0px)",
                                    contentVisibility: "visible"
                                  }}
                                >
                                  <defs>
                                    <clipPath id="__lottie_element_2">
                                      <rect width={1200} height={1200} x={0} y={0} />
                                    </clipPath>
                                    <linearGradient
                                      id="__lottie_element_6"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="9.932670081980177e-7"
                                      y1="270.5559997558594"
                                      x2="533.2559814453125"
                                      y2="270.5559997558594"
                                    >
                                      <stop offset="0%" stopColor="rgb(70,255,122)" />
                                      <stop offset="51%" stopColor="rgb(82,203,231)" />
                                      <stop offset="99%" stopColor="rgb(118,80,220)" />
                                    </linearGradient>
                                    <clipPath id="__lottie_element_8">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <linearGradient
                                      id="__lottie_element_14"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-2.9540998980337463e-7"
                                      y1="126.80999755859375"
                                      x2="124.99800109863281"
                                      y2="126.80999755859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(250,38,202)" />
                                      <stop offset="100%" stopColor="rgb(139,85,255)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_18"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-1.3879299842756154e-7"
                                      y1="59.62350082397461"
                                      x2="58.72829818725586"
                                      y2="59.62350082397461"
                                    >
                                      <stop offset="0%" stopColor="rgb(250,38,202)" />
                                      <stop offset="100%" stopColor="rgb(139,85,255)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_22"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="2.328280004348926e-7"
                                      y1="126.80999755859375"
                                      x2="124.99800109863281"
                                      y2="126.80999755859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(70,255,122)" />
                                      <stop offset="51%" stopColor="rgb(82,203,231)" />
                                      <stop offset="99%" stopColor="rgb(118,80,220)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_26"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8.822709673950158e-8"
                                      y1="48.05699920654297"
                                      x2="47.36650085449219"
                                      y2="48.05699920654297"
                                    >
                                      <stop offset="0%" stopColor="rgb(70,255,122)" />
                                      <stop offset="51%" stopColor="rgb(82,203,231)" />
                                      <stop offset="99%" stopColor="rgb(118,80,220)" />
                                    </linearGradient>
                                    <clipPath id="__lottie_element_28">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_32">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_36">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_40">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_44">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_48">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_52">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <linearGradient
                                      id="__lottie_element_64"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.9850000143051147"
                                      y1="91.62531280517578"
                                      x2="217.09800720214844"
                                      y2="91.62529754638672"
                                    >
                                      <stop offset="0%" stopColor="rgb(93,227,132)" />
                                      <stop offset="51%" stopColor="rgb(96,185,231)" />
                                      <stop offset="100%" stopColor="rgb(121,81,224)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_68"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.9850000143051147"
                                      y1="196.3280029296875"
                                      x2="373.2489929199219"
                                      y2="196.3280029296875"
                                    >
                                      <stop offset="0%" stopColor="rgb(93,227,132)" />
                                      <stop offset="51%" stopColor="rgb(96,185,231)" />
                                      <stop offset="100%" stopColor="rgb(121,81,224)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_72"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.9850000143051147"
                                      y1="97.56439971923828"
                                      x2="377.78497314453125"
                                      y2="97.56438446044922"
                                    >
                                      <stop offset="0%" stopColor="rgb(93,227,132)" />
                                      <stop offset="51%" stopColor="rgb(96,185,231)" />
                                      <stop offset="100%" stopColor="rgb(121,81,224)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_76"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.9850000143051147"
                                      y1="107.60199737548828"
                                      x2="109.04199981689453"
                                      y2="107.60199737548828"
                                    >
                                      <stop offset="0%" stopColor="rgb(93,227,132)" />
                                      <stop offset="51%" stopColor="rgb(96,185,231)" />
                                      <stop offset="100%" stopColor="rgb(121,81,224)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_83"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13628.2001953125"
                                      y1="14859.900390625"
                                      x2="35987.30078125"
                                      y2="5895.7001953125"
                                    >
                                      <stop offset="0%" stopColor="rgb(36,8,72)" />
                                      <stop offset="42%" stopColor="rgb(59,8,114)" />
                                      <stop offset="51%" stopColor="rgb(65,8,125)" />
                                      <stop offset="68%" stopColor="rgb(63,13,128)" />
                                      <stop offset="88%" stopColor="rgb(59,28,137)" />
                                      <stop offset="100%" stopColor="rgb(57,41,144)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_87"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13629.400390625"
                                      y1={14860}
                                      x2="35987.69921875"
                                      y2="5895.5498046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(19,0,42)" />
                                      <stop offset="22%" stopColor="rgb(42,0,84)" />
                                      <stop offset="51%" stopColor="rgb(77,0,148)" />
                                      <stop offset="62%" stopColor="rgb(75,5,151)" />
                                      <stop offset="76%" stopColor="rgb(71,20,159)" />
                                      <stop offset="91%" stopColor="rgb(65,46,174)" />
                                      <stop offset="100%" stopColor="rgb(60,66,185)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_91"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-0.0000019819099179585464"
                                      y1="77.99600219726562"
                                      x2="247.5679931640625"
                                      y2="204.2989959716797"
                                    >
                                      <stop offset="0%" stopColor="rgb(40,46,92)" />
                                      <stop offset="100%" stopColor="rgb(2,6,39)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_98"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="5.474769864122209e-7"
                                      y1="95.97530364990234"
                                      x2="293.92401123046875"
                                      y2="95.97530364990234"
                                    >
                                      <stop offset="0%" stopColor="rgb(70,255,122)" />
                                      <stop offset="51%" stopColor="rgb(82,203,231)" />
                                      <stop offset="99%" stopColor="rgb(118,80,220)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_102"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-0.36427098512649536"
                                      y1="3669.699951171875"
                                      x2="11244.7998046875"
                                      y2="3669.699951171875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_106"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.00005080120172351599"
                                      y1="2898.080078125"
                                      x2="5120.47021484375"
                                      y2="8228.5595703125"
                                    >
                                      <stop offset="0%" stopColor="rgb(40,46,92)" />
                                      <stop offset="100%" stopColor="rgb(2,6,39)" />
                                    </linearGradient>
                                    <clipPath id="__lottie_element_108">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <linearGradient
                                      id="__lottie_element_117"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="30743.5"
                                      y1="5407.97998046875"
                                      x2="35257.30078125"
                                      y2="2039.6700439453125"
                                    >
                                      <stop offset="0%" stopColor="rgb(19,0,42)" />
                                      <stop offset="22%" stopColor="rgb(42,0,84)" />
                                      <stop offset="51%" stopColor="rgb(77,0,148)" />
                                      <stop offset="62%" stopColor="rgb(75,5,151)" />
                                      <stop offset="76%" stopColor="rgb(71,20,159)" />
                                      <stop offset="91%" stopColor="rgb(65,46,174)" />
                                      <stop offset="100%" stopColor="rgb(60,66,185)" />
                                    </linearGradient>
                                    <radialGradient
                                      id="__lottie_element_121"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      cx="-10246.099609375"
                                      cy="-671.4010009765625"
                                      r="13454.5"
                                      fx="-10246.099609375"
                                      fy="-671.4010009765625"
                                    >
                                      <stop offset="0%" stopColor="rgb(85,238,255)" stopOpacity={1} />
                                      <stop offset="5%" stopColor="rgb(85,227,250)" stopOpacity={1} />
                                      <stop offset="13%" stopColor="rgb(85,199,237)" stopOpacity={1} />
                                      <stop offset="24%" stopColor="rgb(86,153,216)" stopOpacity={1} />
                                      <stop offset="37%" stopColor="rgb(87,89,188)" stopOpacity={1} />
                                      <stop offset="52%" stopColor="rgb(88,8,152)" stopOpacity={1} />
                                      <stop offset="54%" stopColor="rgb(89,0,148)" stopOpacity={1} />
                                      <stop
                                        offset="59%"
                                        stopColor="rgb(84,0,139)"
                                        stopOpacity="0.9399999976158142"
                                      />
                                      <stop
                                        offset="69%"
                                        stopColor="rgb(70,0,117)"
                                        stopOpacity="0.7900000214576721"
                                      />
                                      <stop
                                        offset="80%"
                                        stopColor="rgb(48,0,81)"
                                        stopOpacity="0.550000011920929"
                                      />
                                      <stop
                                        offset="93%"
                                        stopColor="rgb(18,0,31)"
                                        stopOpacity="0.20999999344348907"
                                      />
                                      <stop offset="100%" stopColor="rgb(0,0,0)" stopOpacity={0} />
                                    </radialGradient>
                                    <radialGradient
                                      id="__lottie_element_125"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      cx="-9714.0302734375"
                                      cy="-276.05999755859375"
                                      r="12783.2998046875"
                                      fx="-9714.0302734375"
                                      fy="-276.05999755859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(85,238,255)" stopOpacity={1} />
                                      <stop offset="5%" stopColor="rgb(85,227,250)" stopOpacity={1} />
                                      <stop offset="13%" stopColor="rgb(85,199,237)" stopOpacity={1} />
                                      <stop offset="24%" stopColor="rgb(86,153,216)" stopOpacity={1} />
                                      <stop offset="37%" stopColor="rgb(87,89,188)" stopOpacity={1} />
                                      <stop offset="52%" stopColor="rgb(88,8,152)" stopOpacity={1} />
                                      <stop offset="54%" stopColor="rgb(89,0,148)" stopOpacity={1} />
                                      <stop
                                        offset="59%"
                                        stopColor="rgb(84,0,139)"
                                        stopOpacity="0.9399999976158142"
                                      />
                                      <stop
                                        offset="69%"
                                        stopColor="rgb(70,0,117)"
                                        stopOpacity="0.7900000214576721"
                                      />
                                      <stop
                                        offset="80%"
                                        stopColor="rgb(48,0,81)"
                                        stopOpacity="0.550000011920929"
                                      />
                                      <stop
                                        offset="93%"
                                        stopColor="rgb(18,0,31)"
                                        stopOpacity="0.20999999344348907"
                                      />
                                      <stop offset="100%" stopColor="rgb(0,0,0)" stopOpacity={0} />
                                    </radialGradient>
                                    <linearGradient
                                      id="__lottie_element_129"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="23621.599609375"
                                      y1="-2726.93994140625"
                                      x2="1952.3699951171875"
                                      y2="3578.429931640625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_133"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4541.93017578125"
                                      y1="839.3660278320312"
                                      x2="-17129.099609375"
                                      y2="7145.25"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_137"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="2875.35009765625"
                                      y1="831.7379760742188"
                                      x2="-18796.5"
                                      y2="7137.85986328125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_141"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="2917.72998046875"
                                      y1="1237.050048828125"
                                      x2="-18751.19921875"
                                      y2="7543.0498046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_145"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="2614.52001953125"
                                      y1="1558.530029296875"
                                      x2="-19056.599609375"
                                      y2="7864.52001953125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_149"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="22620.30078125"
                                      y1="-2300.1201171875"
                                      x2="951.739013671875"
                                      y2="4005.7900390625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_153"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="21635.400390625"
                                      y1="-2002.0799560546875"
                                      x2="-31.912799835205078"
                                      y2="4303.490234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_157"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="20638.80078125"
                                      y1="-1577.1099853515625"
                                      x2="-1029.260009765625"
                                      y2="4728.64990234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_161"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1={19715}
                                      y1="-1978.81005859375"
                                      x2="-1952.56005859375"
                                      y2="4326.7998046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_165"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13210.900390625"
                                      y1="1013.3200073242188"
                                      x2="-8460.23046875"
                                      y2="7319.240234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_169"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="24392.69921875"
                                      y1="-3068.22998046875"
                                      x2="2725.06005859375"
                                      y2="3237.389892578125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_173"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="23038.69921875"
                                      y1="-2853.409912109375"
                                      x2="1368.739990234375"
                                      y2="3452.169921875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_177"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="21748.30078125"
                                      y1="-2648.550048828125"
                                      x2="80.71520233154297"
                                      y2="3657.050048828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_181"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="20462.5"
                                      y1="-2445.300048828125"
                                      x2="-1207.56005859375"
                                      y2="3860.280029296875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_185"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="19171.900390625"
                                      y1="-2241.8701171875"
                                      x2="-2495.590087890625"
                                      y2="4063.659912109375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_189"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17883.900390625"
                                      y1="-2037.239990234375"
                                      x2="-3783.699951171875"
                                      y2="4268.2900390625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_193"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="16595.80078125"
                                      y1="-1833.68994140625"
                                      x2="-5074.259765625"
                                      y2="4471.89990234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_197"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="15305.2998046875"
                                      y1="-1628.9599609375"
                                      x2="-6362.22998046875"
                                      y2="4676.64013671875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_201"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14017.099609375"
                                      y1="-1424.47998046875"
                                      x2="-7650.490234375"
                                      y2="4881.0498046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_205"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1={12729}
                                      y1="-1221.97998046875"
                                      x2="-8940.83984375"
                                      y2="5083.58984375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_209"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="11438.5"
                                      y1="-1017.3800048828125"
                                      x2="-10228.900390625"
                                      y2="5288.22021484375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_213"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="10152.7998046875"
                                      y1="-812.7360229492188"
                                      x2="-11517.5"
                                      y2="5490.91015625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_217"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8862.3203125"
                                      y1="-609.2869873046875"
                                      x2="-12807.599609375"
                                      y2="5696.27978515625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_221"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="7466.02001953125"
                                      y1="-388.8290100097656"
                                      x2="-14201.400390625"
                                      y2="5916.77001953125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_225"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="6175.5498046875"
                                      y1="-184.22999572753906"
                                      x2={-15492}
                                      y2="6121.39013671875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_229"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4889.81982421875"
                                      y1="20.454500198364258"
                                      x2="-16780.099609375"
                                      y2="6326.009765625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_233"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="3599.35009765625"
                                      y1="223.8820037841797"
                                      x2="-18068.30078125"
                                      y2="6529.41015625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_237"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1={21955}
                                      y1="-2554.27001953125"
                                      x2="287.8890075683594"
                                      y2="3751.239990234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_241"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="19056.80078125"
                                      y1="-2095.3701171875"
                                      x2="-2613.14990234375"
                                      y2="4208.18017578125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_245"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="20507.099609375"
                                      y1="-2326.090087890625"
                                      x2="-1162.56005859375"
                                      y2="3979.39990234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_249"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17606.5"
                                      y1="-1866.3599853515625"
                                      x2="-4060.840087890625"
                                      y2="4439.10009765625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_253"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="16156.2001953125"
                                      y1="-1637.800048828125"
                                      x2="-5513.4501953125"
                                      y2="4667.68017578125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_257"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14705.900390625"
                                      y1="-1407.18994140625"
                                      x2="-6961.33984375"
                                      y2="4898.240234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_261"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13255.5"
                                      y1="-1178.0799560546875"
                                      x2="-8411.8701171875"
                                      y2="5127.3798828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_265"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="11807.599609375"
                                      y1="-949.6129760742188"
                                      x2="-9862.0595703125"
                                      y2="5355.8798828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_269"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="10354.900390625"
                                      y1="-719.156005859375"
                                      x2="-11312.2998046875"
                                      y2="5586.3701171875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_273"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8906.9501953125"
                                      y1="-490.8810119628906"
                                      x2="-12760.2998046875"
                                      y2="5814.64013671875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_277"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="7459.02978515625"
                                      y1="-261.43701171875"
                                      x2="-14210.7001953125"
                                      y2="6044.06005859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_281"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="6006.35009765625"
                                      y1="-30.966699600219727"
                                      x2={-15661}
                                      y2="6274.58984375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_285"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="20267.400390625"
                                      y1="-2287.75"
                                      x2="-1402.6199951171875"
                                      y2="4015.820068359375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_289"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="18817.099609375"
                                      y1="-2058.090087890625"
                                      x2="-2850.139892578125"
                                      y2="4247.33984375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_293"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17366.69921875"
                                      y1="-1828.81005859375"
                                      x2="-4300.509765625"
                                      y2="4476.7099609375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_297"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="15918.7998046875"
                                      y1="-1599.449951171875"
                                      x2="-5750.8798828125"
                                      y2="4706.0400390625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_301"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14466.2001953125"
                                      y1="-1370.06005859375"
                                      x2="-7201.14013671875"
                                      y2="4935.4599609375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_305"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13018.2001953125"
                                      y1="-1140.800048828125"
                                      x2="-8649.2197265625"
                                      y2="5164.75"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_309"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="11567.900390625"
                                      y1="-911.0809936523438"
                                      x2="-10101.7001953125"
                                      y2="5394.39013671875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_313"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="10117.599609375"
                                      y1="-681.8380126953125"
                                      x2="-11549.7998046875"
                                      y2="5623.60986328125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_317"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8667.23046875"
                                      y1="-452.4469909667969"
                                      x2="-13000.099609375"
                                      y2="5853.08984375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_321"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="7219.31982421875"
                                      y1="-222.93600463867188"
                                      x2="-14450.2998046875"
                                      y2="6082.52978515625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_325"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="5766.5498046875"
                                      y1="6.376589775085449"
                                      x2="-15900.7001953125"
                                      y2="6311.81005859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_329"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4318.6201171875"
                                      y1="235.802001953125"
                                      x2="-17348.69921875"
                                      y2="6541.330078125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_333"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="18953.5"
                                      y1="-2079.739990234375"
                                      x2="-2716.25"
                                      y2="4225.75"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_337"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17500.69921875"
                                      y1="-1850.27001953125"
                                      x2="-4166.5400390625"
                                      y2="4455.25"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_341"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="16052.7998046875"
                                      y1="-1620.97998046875"
                                      x2="-5614.52001953125"
                                      y2="4684.47021484375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_345"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14602.400390625"
                                      y1="-1391.530029296875"
                                      x2="-7067.27978515625"
                                      y2="4913.97021484375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_349"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="13152.2001953125"
                                      y1="-1160.81005859375"
                                      x2="-8515.330078125"
                                      y2="5142.68017578125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_353"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="11704.2001953125"
                                      y1="-932.593017578125"
                                      x2="-9963.0400390625"
                                      y2="5372.830078125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_357"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="10253.7998046875"
                                      y1="-703.27099609375"
                                      x2="-11415.7998046875"
                                      y2="5602.22021484375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_361"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8803.5302734375"
                                      y1="-473.9809875488281"
                                      x2="-12864.2001953125"
                                      y2="5829.56005859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_365"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="7353.25"
                                      y1="-244.49000549316406"
                                      x2="-14314.099609375"
                                      y2="6060.9501953125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_369"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="5905.22021484375"
                                      y1="-15.079899787902832"
                                      x2="-15764.5"
                                      y2="6290.39990234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_373"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4452.64990234375"
                                      y1="214.29200744628906"
                                      x2="-17214.599609375"
                                      y2="6519.81982421875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_377"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="15775.400390625"
                                      y1="-1578.199951171875"
                                      x2="-5891.93994140625"
                                      y2="4727.35009765625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_381"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14327.400390625"
                                      y1="-1347.6400146484375"
                                      x2="-7340.259765625"
                                      y2="4955.97998046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_385"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17756.900390625"
                                      y1="-1891.02001953125"
                                      x2="-3910.389892578125"
                                      y2="4414.419921875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_389"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1={16309}
                                      y1="-1661.47998046875"
                                      x2="-5360.6298828125"
                                      y2="4644.009765625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_393"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="14856.400390625"
                                      y1="-1432.1400146484375"
                                      x2="-6810.93994140625"
                                      y2="4873.2998046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_397"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="6105.1201171875"
                                      y1="-46.778900146484375"
                                      x2={-15565}
                                      y2="6256.81005859375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_401"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4654.75"
                                      y1="182.63499450683594"
                                      x2="-17012.599609375"
                                      y2="6488.18017578125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_405"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="3204.419921875"
                                      y1="412.05999755859375"
                                      x2="-18462.80078125"
                                      y2="6717.580078125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_409"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="379.04998779296875"
                                      y1="765.1680297851562"
                                      x2="-21288.5"
                                      y2="7070.669921875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_413"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-269.67498779296875"
                                      y1="868.1420288085938"
                                      x2="-21939.69921875"
                                      y2="7173.6298828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_417"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="1128.8499755859375"
                                      y1="646.5089721679688"
                                      x2={-20541}
                                      y2="6952.16015625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_421"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-1663.6500244140625"
                                      y1="1088.5"
                                      x2="-23331.19921875"
                                      y2="7394.08984375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_425"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="12877.099609375"
                                      y1="-1118.050048828125"
                                      x2="-8792.580078125"
                                      y2="5187.4501953125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_429"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="11426.7998046875"
                                      y1="-889.9190063476562"
                                      x2="-10240.5"
                                      y2="5415.64013671875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_433"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="9976.4501953125"
                                      y1="-659.197021484375"
                                      x2="-11690.7001953125"
                                      y2="5646.240234375"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_437"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="8528.51953125"
                                      y1="-429.83599853515625"
                                      x2="-13141.2001953125"
                                      y2="5875.66015625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_441"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="7078.22998046875"
                                      y1="-201.56100463867188"
                                      x2="-14589.099609375"
                                      y2="6103.8798828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_445"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="5627.85009765625"
                                      y1="28.988100051879883"
                                      x2="-16041.900390625"
                                      y2="6334.47998046875"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_449"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="4179.93017578125"
                                      y1="258.3789978027344"
                                      x2="-17489.80078125"
                                      y2="6563.8798828125"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_453"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="17228.099609375"
                                      y1="-1806.199951171875"
                                      x2="-4441.6298828125"
                                      y2="4499.2900390625"
                                    >
                                      <stop offset="0%" stopColor="rgb(0,0,0)" />
                                      <stop offset="13%" stopColor="rgb(4,2,7)" />
                                      <stop offset="32%" stopColor="rgb(18,8,26)" />
                                      <stop offset="54%" stopColor="rgb(41,18,58)" />
                                      <stop offset="79%" stopColor="rgb(72,31,102)" />
                                      <stop offset="100%" stopColor="rgb(102,45,145)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_646"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="0.00019079999765381217"
                                      y1="10109.2001953125"
                                      x2="18121.099609375"
                                      y2="28803.099609375"
                                    >
                                      <stop offset="0%" stopColor="rgb(40,46,92)" />
                                      <stop offset="100%" stopColor="rgb(2,6,39)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_650"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1={-8}
                                      y1="111.92900085449219"
                                      x2="334.8810119628906"
                                      y2="111.92900085449219"
                                    >
                                      <stop offset="0%" stopColor="rgb(70,255,122)" />
                                      <stop offset="51%" stopColor="rgb(82,203,231)" />
                                      <stop offset="99%" stopColor="rgb(118,80,220)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_654"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="5264.72021484375"
                                      y1="4460.080078125"
                                      x2="375.8680114746094"
                                      y2="9002.8603515625"
                                    >
                                      <stop offset="0%" stopColor="rgb(65,64,66)" />
                                      <stop offset="100%" stopColor="rgb(0,0,0)" />
                                    </linearGradient>
                                    <linearGradient
                                      id="__lottie_element_658"
                                      spreadMethod="pad"
                                      gradientUnits="userSpaceOnUse"
                                      x1="-1.8948800573070912e-7"
                                      y1="136.5469970703125"
                                      x2="80.17890167236328"
                                      y2="136.5469970703125"
                                    >
                                      <stop offset="0%" stopColor="rgb(250,38,202)" />
                                      <stop offset="100%" stopColor="rgb(139,85,255)" />
                                    </linearGradient>
                                    <clipPath id="__lottie_element_660">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_670">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_674">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                    <clipPath id="__lottie_element_678">
                                      <path d="M0,0 L1200,0 L1200,1200 L0,1200z" />
                                    </clipPath>
                                  </defs>
                                  <g clipPath="url(#__lottie_element_2)">
                                    <g
                                      transform="matrix(1,0,0,1,263.71002197265625,163.54000854492188)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <path
                                        fill="url(#__lottie_element_6)"
                                        fillOpacity={1}
                                        d=" M486.0299987792969,244.49000549316406 C479.42999267578125,253.25999450683594 463.1099853515625,266.239990234375 450.29998779296875,274.7699890136719 C450.29998779296875,274.7699890136719 53.45000076293945,533.9199829101562 53.45000076293945,533.9199829101562 C24.040000915527344,553.1199951171875 0,532.5399780273438 0,488.2200012207031 C0,443.8999938964844 24.040000915527344,391.8900146484375 53.45000076293945,372.69000244140625 C53.45000076293945,372.69000244140625 60.900001525878906,367.8299865722656 60.900001525878906,367.8299865722656 C63.27000045776367,366.2900085449219 64.87999725341797,363.5799865722656 65.27999877929688,360.5199890136719 C75.05999755859375,282.9599914550781 122.95999908447266,197.6699981689453 180.60000610351562,160.02000427246094 C195.63999938964844,150.2100067138672 210.00999450683594,144.47999572753906 223.24000549316406,142.57000732421875 C226.00999450683594,142.1699981689453 228.4499969482422,140.32000732421875 229.83999633789062,137.5800018310547 C254.5399932861328,88.7699966430664 288.9599914550781,46.0099983215332 327.0400085449219,21.149999618530273 C390.69000244140625,-20.40999984741211 444.1199951171875,1.3600000143051147 459.07000732421875,68.18000030517578 C459.3800048828125,69.51000213623047 460.1700134277344,70.62999725341797 461.2799987792969,71.19000244140625 C462.3800048828125,71.7699966430664 463.6600036621094,71.7699966430664 464.739990234375,71.19000244140625 C503.1199951171875,50.369998931884766 533.260009765625,72.43000030517578 533.260009765625,123.3499984741211 C533.260009765625,164.35000610351562 513.719970703125,212.1300048828125 486.0799865722656,244.50999450683594 C486.0799865722656,244.50999450683594 486.0299987792969,244.49000549316406 486.0299987792969,244.49000549316406 C486.0299987792969,244.49000549316406 486.0299987792969,244.49000549316406 486.0299987792969,244.49000549316406z"
                                      />
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_8)"
                                      transform="matrix(1,0,0,1,501.8399658203125,245.739990234375)"
                                      opacity={1}
                                      style={{ mixBlendMode: "lighten", display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,67.69000244140625,54.80000305175781)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity={1}
                                          d=" M57.95000076293945,29.68000030517578 C57.95000076293945,29.68000030517578 28.969999313354492,21.170000076293945 28.969999313354492,21.170000076293945 C28.969999313354492,21.170000076293945 0,56.689998626708984 0,56.689998626708984 C0,56.689998626708984 0,94.2699966430664 0,94.2699966430664 C0,94.2699966430664 28.969999313354492,96.33000183105469 28.969999313354492,96.33000183105469 C28.969999313354492,96.33000183105469 57.95000076293945,54.369998931884766 57.95000076293945,54.369998931884766 C57.95000076293945,54.369998931884766 109.3499984741211,24.690000534057617 109.3499984741211,24.690000534057617 C109.3499984741211,24.690000534057617 109.3499984741211,0 109.3499984741211,0 C109.3499984741211,0 57.95000076293945,29.68000030517578 57.95000076293945,29.68000030517578 C57.95000076293945,29.68000030517578 57.95000076293945,29.68000030517578 57.95000076293945,29.68000030517578z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fillRule="evenodd"
                                          fill="rgb(255,255,255)"
                                          fillOpacity={1}
                                          d=" M5.190000057220459,101.16999816894531 C59.13999938964844,33.88999938964844 125.70999908447266,-4.550000190734863 179.66000366210938,0.4300000071525574 C179.66000366210938,0.4300000071525574 169.2100067138672,27.270000457763672 169.2100067138672,27.270000457763672 C123.44000244140625,23.040000915527344 67.3499984741211,54.31999969482422 20.829999923706055,109.62000274658203 C20.829999923706055,109.62000274658203 20.829999923706055,205.30999755859375 20.829999923706055,205.30999755859375 C67.3499984741211,206.88999938964844 123.44000244140625,173.39999389648438 169.2100067138672,116.31999969482422 C169.2100067138672,116.31999969482422 179.66000366210938,131.08999633789062 179.66000366210938,131.08999633789062 C125.70999908447266,198.3699951171875 59.13999938964844,236.8000030517578 5.190000057220459,231.82000732421875 C1.9800000190734863,231.52000427246094 0,228.7100067138672 0,224.4199981689453 C0,224.4199981689453 0,114.55999755859375 0,114.55999755859375 C0,110.2699966430664 1.9800000190734863,105.18000030517578 5.190000057220459,101.16999816894531 C5.190000057220459,101.16999816894531 5.190000057220459,101.16999816894531 5.190000057220459,101.16999816894531z"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      transform="matrix(1,0,0,1,343.82000732421875,801.3050537109375)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <path
                                        fill="url(#__lottie_element_14)"
                                        fillOpacity={1}
                                        d=" M64.58999633789062,0 C69.93000030517578,0.1899999976158142 71.69999694824219,4.949999809265137 71.68000030517578,12.949999809265137 C71.55999755859375,74.26000213623047 71.61000061035156,135.49000549316406 71.61000061035156,196.75 C71.61000061035156,196.75 71.61000061035156,203.74000549316406 71.61000061035156,203.74000549316406 C73.2300033569336,200.75999450683594 74.2699966430664,198.92999267578125 75.2300033569336,197.0399932861328 C86.6500015258789,174.75999450683594 98.08000183105469,152.4600067138672 109.4800033569336,130.14999389648438 C112.30000305175781,124.62000274658203 115.5199966430664,121.23999786376953 119.4000015258789,121.16000366210938 C122.79000091552734,121.08000183105469 125.08999633789062,123.52999877929688 125,128.5500030517578 C124.93000030517578,132.35000610351562 124.0999984741211,137.50999450683594 122.36000061035156,140.94000244140625 C104.77999877929688,175.82000732421875 86.97000122070312,210.47000122070312 69.1500015258789,245.13999938964844 C67.9000015258789,247.55999755859375 66.12000274658203,249.44000244140625 64.58999633789062,251.57000732421875 C63.29999923706055,252.25999450683594 61.970001220703125,252.92999267578125 60.68000030517578,253.6199951171875 C58.41999816894531,252.39999389648438 55.939998626708984,251.64999389648438 53.939998626708984,249.8699951171875 C37.02000045776367,234.72000122070312 20.200000762939453,219.3800048828125 3.3499999046325684,204.13999938964844 C0.5299999713897705,201.61000061035156 -0.7900000214576721,197.75999450683594 0.47999998927116394,191.50999450683594 C1.6299999952316284,185.82000732421875 4.199999809265137,181.57000732421875 7.869999885559082,178.91000366210938 C11.4399995803833,176.30999755859375 14.069999694824219,177.4199981689453 16.469999313354492,179.6300048828125 C27.540000915527344,189.83999633789062 38.689998626708984,199.97000122070312 49.779998779296875,210.14999389648438 C50.790000915527344,211.0800018310547 51.630001068115234,212.3000030517578 52.54999923706055,213.38999938964844 C52.93000030517578,213.02000427246094 53.29999923706055,212.63999938964844 53.68000030517578,212.3000030517578 C53.68000030517578,212.3000030517578 53.68000030517578,206.72000122070312 53.68000030517578,206.72000122070312 C53.68000030517578,145.25 53.75,83.77999877929688 53.61000061035156,22.389999389648438 C53.61000061035156,14.3100004196167 55.4900016784668,7.809999942779541 60.72999954223633,2.069999933242798 C62.02000045776367,1.3799999952316284 63.34000015258789,0.7200000286102295 64.62999725341797,0.029999999329447746 C64.62999725341797,0.029999999329447746 64.58999633789062,0 64.58999633789062,0 C64.58999633789062,0 64.58999633789062,0 64.58999633789062,0z"
                                      />
                                    </g>
                                    <g
                                      transform="matrix(1,0,0,1,560.1300048828125,532.7951049804688)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <path
                                        fill="url(#__lottie_element_18)"
                                        fillOpacity={1}
                                        d=" M30.329999923706055,0 C32.849998474121094,0.07999999821186066 33.66999816894531,2.309999942779541 33.66999816894531,6.090000152587891 C33.619998931884766,34.90999984741211 33.650001525878906,63.68000030517578 33.650001525878906,92.47000122070312 C33.650001525878906,92.47000122070312 33.650001525878906,95.7699966430664 33.650001525878906,95.7699966430664 C34.400001525878906,94.36000061035156 34.88999938964844,93.51000213623047 35.34000015258789,92.62999725341797 C40.70000076293945,82.1500015258789 46.08000183105469,71.69000244140625 51.439998626708984,61.209999084472656 C52.7599983215332,58.61000061035156 54.279998779296875,57.029998779296875 56.09000015258789,56.97999954223633 C57.689998626708984,56.95000076293945 58.779998779296875,58.09000015258789 58.72999954223633,60.459999084472656 C58.709999084472656,62.2400016784668 58.29999923706055,64.66000366210938 57.5,66.27999877929688 C49.25,82.66000366210938 40.86000061035156,98.95999908447266 32.4900016784668,115.26000213623047 C31.899999618530273,116.4000015258789 31.049999237060547,117.27999877929688 30.350000381469727,118.29000091552734 C29.739999771118164,118.61000061035156 29.1299991607666,118.93000030517578 28.520000457763672,119.25 C27.459999084472656,118.66999816894531 26.290000915527344,118.30999755859375 25.350000381469727,117.48999786376953 C17.40999984741211,110.36000061035156 9.5,103.16000366210938 1.5800000429153442,96.01000213623047 C0.25999999046325684,94.80999755859375 -0.3700000047683716,93 0.2199999988079071,90.08000183105469 C0.7599999904632568,87.38999938964844 1.9600000381469727,85.4000015258789 3.680000066757202,84.1500015258789 C5.349999904632568,82.93000030517578 6.590000152587891,83.45999908447266 7.71999979019165,84.5 C12.9399995803833,89.30999755859375 18.149999618530273,94.04000091552734 23.3700008392334,98.83000183105469 C23.84000015258789,99.26000213623047 24.25,99.83000183105469 24.670000076293945,100.33999633789062 C24.829999923706055,100.18000030517578 25.010000228881836,100 25.18000030517578,99.83999633789062 C25.18000030517578,99.83999633789062 25.18000030517578,97.20999908447266 25.18000030517578,97.20999908447266 C25.18000030517578,68.33999633789062 25.209999084472656,39.43000030517578 25.139999389648438,10.579999923706055 C25.139999389648438,6.78000020980835 26.030000686645508,3.75 28.469999313354492,1.0399999618530273 C29.079999923706055,0.7200000286102295 29.700000762939453,0.4000000059604645 30.309999465942383,0.07999999821186066 C30.309999465942383,0.07999999821186066 30.329999923706055,0 30.329999923706055,0 C30.329999923706055,0 30.329999923706055,0 30.329999923706055,0z"
                                      />
                                    </g>
                                    <g
                                      transform="matrix(1,0,0,1,843.7100219726562,129.55508422851562)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <path
                                        fill="url(#__lottie_element_22)"
                                        fillOpacity={1}
                                        d=" M60.40999984741211,253.6199951171875 C55.06999969482422,253.42999267578125 53.290000915527344,248.6699981689453 53.310001373291016,240.6699981689453 C53.43000030517578,179.36000061035156 53.380001068115234,118.12999725341797 53.380001068115234,56.869998931884766 C53.380001068115234,56.869998931884766 53.380001068115234,49.880001068115234 53.380001068115234,49.880001068115234 C51.7599983215332,52.86000061035156 50.720001220703125,54.689998626708984 49.7599983215332,56.58000183105469 C38.34000015258789,78.86000061035156 26.920000076293945,101.16000366210938 15.520000457763672,123.47000122070312 C12.699999809265137,129 9.479999542236328,132.3800048828125 5.599999904632568,132.4600067138672 C2.2200000286102295,132.5399932861328 -0.09000000357627869,130.08999633789062 0,125.06999969482422 C0.07000000029802322,121.2699966430664 0.8999999761581421,116.11000061035156 2.640000104904175,112.68000030517578 C20.219999313354492,77.80000305175781 38.029998779296875,43.150001525878906 55.849998474121094,8.479999542236328 C57.099998474121094,6.059999942779541 58.880001068115234,4.179999828338623 60.40999984741211,2.049999952316284 C61.70000076293945,1.3600000143051147 63.02000045776367,0.6899999976158142 64.30999755859375,0 C66.56999969482422,1.2200000286102295 69.05999755859375,1.9700000286102295 71.05999755859375,3.75 C87.9800033569336,18.90999984741211 104.80000305175781,34.25 121.6500015258789,49.47999954223633 C124.47000122070312,52.0099983215332 125.77999877929688,55.86000061035156 124.51000213623047,62.11000061035156 C123.36000061035156,67.80000305175781 120.80000305175781,72.05000305175781 117.12999725341797,74.70999908447266 C113.55999755859375,77.30999755859375 110.93000030517578,76.19999694824219 108.52999877929688,73.98999786376953 C97.45999908447266,63.779998779296875 86.31999969482422,53.650001525878906 75.22000122070312,43.470001220703125 C74.20999908447266,42.540000915527344 73.37000274658203,41.31999969482422 72.44999694824219,40.22999954223633 C72.06999969482422,40.599998474121094 71.69999694824219,40.97999954223633 71.31999969482422,41.31999969482422 C71.31999969482422,41.31999969482422 71.31999969482422,46.900001525878906 71.31999969482422,46.900001525878906 C71.31999969482422,108.33999633789062 71.25,169.83999633789062 71.38999938964844,231.22999572753906 C71.38999938964844,239.30999755859375 69.51000213623047,245.80999755859375 64.2699966430664,251.5500030517578 C62.97999954223633,252.24000549316406 61.65999984741211,252.91000366210938 60.369998931884766,253.60000610351562 C60.369998931884766,253.60000610351562 60.40999984741211,253.6199951171875 60.40999984741211,253.6199951171875 C60.40999984741211,253.6199951171875 60.40999984741211,253.6199951171875 60.40999984741211,253.6199951171875z"
                                      />
                                    </g>
                                    <g
                                      transform="matrix(1,0,0,1,145,667.3651123046875)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <path
                                        fill="url(#__lottie_element_26)"
                                        fillOpacity={1}
                                        d=" M22.8700008392334,96.05999755859375 C20.850000381469727,95.9800033569336 20.170000076293945,94.19999694824219 20.190000534057617,91.16999816894531 C20.239999771118164,67.95999908447266 20.219999313354492,44.75 20.219999313354492,21.559999465942383 C20.219999313354492,21.559999465942383 20.219999313354492,18.899999618530273 20.219999313354492,18.899999618530273 C19.610000610351562,20.040000915527344 19.200000762939453,20.739999771118164 18.850000381469727,21.43000030517578 C14.520000457763672,29.889999389648438 10.210000038146973,38.31999969482422 5.880000114440918,46.77000045776367 C4.820000171661377,48.869998931884766 3.5999999046325684,50.13999938964844 2.119999885559082,50.16999816894531 C0.8299999833106995,50.20000076293945 -0.05000000074505806,49.27000045776367 0,47.380001068115234 C0.019999999552965164,45.939998626708984 0.33000001311302185,44 0.9900000095367432,42.66999816894531 C7.639999866485596,29.459999084472656 14.390000343322754,16.329999923706055 21.15999984741211,3.2200000286102295 C21.6299991607666,2.319999933242798 22.309999465942383,1.590000033378601 22.899999618530273,0.7699999809265137 C23.389999389648438,0.5 23.889999389648438,0.27000001072883606 24.3799991607666,0 C25.229999542236328,0.44999998807907104 26.190000534057617,0.75 26.940000534057617,1.409999966621399 C33.36000061035156,7.150000095367432 39.709999084472656,12.970000267028809 46.099998474121094,18.739999771118164 C47.15999984741211,19.700000762939453 47.66999816894531,21.15999984741211 47.18000030517578,23.530000686645508 C46.72999954223633,25.68000030517578 45.77000045776367,27.309999465942383 44.380001068115234,28.31999969482422 C43.040000915527344,29.299999237060547 42.029998779296875,28.8700008392334 41.11000061035156,28.049999237060547 C36.900001525878906,24.170000076293945 32.70000076293945,20.329999923706055 28.489999771118164,16.479999542236328 C28.110000610351562,16.1299991607666 27.780000686645508,15.65999984741211 27.43000030517578,15.260000228881836 C27.43000030517578,15.260000228881836 27.010000228881836,15.6899995803833 27.010000228881836,15.6899995803833 C27.010000228881836,15.6899995803833 27.010000228881836,17.809999465942383 27.010000228881836,17.809999465942383 C27.010000228881836,41.099998474121094 26.979999542236328,64.38999938964844 27.030000686645508,87.62999725341797 C27.030000686645508,90.69000244140625 26.329999923706055,93.12999725341797 24.329999923706055,95.33999633789062 C23.84000015258789,95.61000061035156 23.34000015258789,95.83999633789062 22.850000381469727,96.11000061035156 C22.850000381469727,96.11000061035156 22.8700008392334,96.05999755859375 22.8700008392334,96.05999755859375 C22.8700008392334,96.05999755859375 22.8700008392334,96.05999755859375 22.8700008392334,96.05999755859375z"
                                      />
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_28)"
                                      transform="matrix(1,0,0,1,257.02001953125,600.6600341796875)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,213.22999572753906)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          stroke="url(#__lottie_element_64)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fillOpacity={0}
                                          strokeOpacity={1}
                                          strokeWidth="2.0299999713897705"
                                          d=" M216.11000061035156,0 C216.11000061035156,0 216.11000061035156,40.970001220703125 216.11000061035156,40.970001220703125 C216.11000061035156,47.779998779296875 213.05999755859375,54.130001068115234 207.97999572753906,57.79999923706055 C207.97999572753906,57.79999923706055 39.959999084472656,180.0500030517578 39.959999084472656,180.0500030517578 C35.470001220703125,183.32000732421875 29.56999969482422,179.67999267578125 29.56999969482422,173.64999389648438 C29.56999969482422,173.64999389648438 29.56999969482422,128.2899932861328 29.56999969482422,128.2899932861328 C29.56999969482422,128.2899932861328 0,107.1500015258789 0,107.1500015258789 C0,107.1500015258789 0,70.37999725341797 0,70.37999725341797"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,161.489990234375,23.400009155273438)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          stroke="url(#__lottie_element_68)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fillOpacity={0}
                                          strokeOpacity={1}
                                          strokeWidth="2.0299999713897705"
                                          d=" M372.260009765625,313.4200134277344 C372.260009765625,313.4200134277344 372.260009765625,383.04998779296875 372.260009765625,383.04998779296875 C372.260009765625,389.0899963378906 366.3599853515625,392.7300109863281 361.8699951171875,389.4599914550781 C361.8699951171875,389.4599914550781 193.85000610351562,267.2099914550781 193.85000610351562,267.2099914550781 C188.8000030517578,263.510009765625 185.72000122070312,257.19000244140625 185.72000122070312,250.3800048828125 C185.72000122070312,250.3800048828125 185.72000122070312,209.41000366210938 185.72000122070312,209.41000366210938 C185.72000122070312,209.41000366210938 9.029999732971191,81.1500015258789 9.029999732971191,81.1500015258789 C3.390000104904175,77.05999755859375 0,70 0,62.45000076293945 C0,62.45000076293945 0,0 0,0"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,100.42001342773438,68.94000244140625)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          stroke="url(#__lottie_element_72)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fillOpacity={0}
                                          strokeOpacity={1}
                                          strokeWidth="2.0299999713897705"
                                          d=" M376.79998779296875,0.1899999976158142 C376.79998779296875,0.1899999976158142 374.45001220703125,58.95000076293945 374.45001220703125,58.95000076293945 C374.1199951171875,67.16000366210938 370.260009765625,74.66000366210938 364.1300048828125,79.05000305175781 C364.1300048828125,79.05000305175781 215.05999755859375,185.69000244140625 215.05999755859375,185.69000244140625 C200.64999389648438,196.00999450683594 182.1999969482422,195.61000061035156 168.13999938964844,184.67999267578125 C168.13999938964844,184.67999267578125 19.719999313354492,69.38999938964844 19.719999313354492,69.38999938964844 C7.380000114440918,59.790000915527344 0,43.95000076293945 0,27.040000915527344 C0,27.040000915527344 0,0 0,0"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,202.77999877929688,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          stroke="url(#__lottie_element_76)"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          fillOpacity={0}
                                          strokeOpacity={1}
                                          strokeWidth="2.0299999713897705"
                                          d=" M13.329999923706055,213.24000549316406 C13.329999923706055,213.24000549316406 102.91000366210938,155.13999938964844 102.91000366210938,155.13999938964844 C109.58999633789062,150.80999755859375 109.81999969482422,139.97999572753906 103.30999755859375,135.3300018310547 C103.30999755859375,135.3300018310547 13.260000228881836,70.63999938964844 13.260000228881836,70.63999938964844 C5.010000228881836,64.70999908447266 0,54.43000030517578 0,43.369998931884766 C0,43.369998931884766 0,0 0,0"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_32)"
                                      transform="matrix(1,0,0,1,649.2999877929688,310.6999816894531)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(52,15,102)"
                                          fillOpacity={1}
                                          d=" M0,162.6699981689453 C0,162.6699981689453 0,321.2300109863281 0,321.2300109863281 C0,325.9100036621094 3.390000104904175,327.510009765625 7.5,324.82000732421875 C7.5,324.82000732421875 84.5999984741211,274.4700012207031 84.5999984741211,274.4700012207031 C84.5999984741211,274.4700012207031 234.07000732421875,176.86000061035156 234.07000732421875,176.86000061035156 C238.2100067138672,174.14999389648438 241.57000732421875,168.13999938964844 241.57000732421875,163.4600067138672 C241.57000732421875,163.4600067138672 241.57000732421875,4.889999866485596 241.57000732421875,4.889999866485596 C241.57000732421875,0.20999999344348907 238.17999267578125,-1.3799999952316284 234.07000732421875,1.2999999523162842 C234.07000732421875,1.2999999523162842 126.52999877929688,71.55000305175781 126.52999877929688,71.55000305175781 C126.52999877929688,71.55000305175781 7.519999980926514,149.25999450683594 7.519999980926514,149.25999450683594 C3.380000114440918,151.9499969482422 0.019999999552965164,157.99000549316406 0.019999999552965164,162.6699981689453 C0.019999999552965164,162.6699981689453 0,162.6699981689453 0,162.6699981689453 C0,162.6699981689453 0,162.6699981689453 0,162.6699981689453z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,1.1699981689453125,1.07000732421875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_83)"
                                          fillOpacity={1}
                                          d=" M0,162.66000366210938 C0,162.66000366210938 0,321.2300109863281 0,321.2300109863281 C0,325.9100036621094 3.390000104904175,327.510009765625 7.5,324.82000732421875 C7.5,324.82000732421875 84.5999984741211,274.4700012207031 84.5999984741211,274.4700012207031 C84.5999984741211,274.4700012207031 234.07000732421875,176.86000061035156 234.07000732421875,176.86000061035156 C238.2100067138672,174.14999389648438 241.57000732421875,168.13999938964844 241.57000732421875,163.4600067138672 C241.57000732421875,163.4600067138672 241.57000732421875,4.889999866485596 241.57000732421875,4.889999866485596 C241.57000732421875,0.20999999344348907 238.17999267578125,-1.3899999856948853 234.07000732421875,1.2999999523162842 C234.07000732421875,1.2999999523162842 126.52999877929688,71.55000305175781 126.52999877929688,71.55000305175781 C126.52999877929688,71.55000305175781 7.519999980926514,149.25999450683594 7.519999980926514,149.25999450683594 C3.380000114440918,151.9499969482422 0.019999999552965164,157.97999572753906 0.019999999552965164,162.66000366210938 C0.019999999552965164,162.66000366210938 0,162.66000366210938 0,162.66000366210938 C0,162.66000366210938 0,162.66000366210938 0,162.66000366210938z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,2.3199996948242188,2.160003662109375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_87)"
                                          fillOpacity={1}
                                          d=" M0,162.6699981689453 C0,162.6699981689453 0,321.239990234375 0,321.239990234375 C0,325.9200134277344 3.390000104904175,327.510009765625 7.5,324.82000732421875 C7.5,324.82000732421875 84.5999984741211,274.4700012207031 84.5999984741211,274.4700012207031 C84.5999984741211,274.4700012207031 234.07000732421875,176.86000061035156 234.07000732421875,176.86000061035156 C238.2100067138672,174.14999389648438 241.57000732421875,168.13999938964844 241.57000732421875,163.4600067138672 C241.57000732421875,163.4600067138672 241.57000732421875,4.889999866485596 241.57000732421875,4.889999866485596 C241.57000732421875,0.20999999344348907 238.17999267578125,-1.3899999856948853 234.07000732421875,1.2999999523162842 C234.07000732421875,1.2999999523162842 126.52999877929688,71.55000305175781 126.52999877929688,71.55000305175781 C126.52999877929688,71.55000305175781 7.519999980926514,149.25999450683594 7.519999980926514,149.25999450683594 C3.380000114440918,151.9499969482422 0.019999999552965164,157.99000549316406 0.019999999552965164,162.6699981689453 C0.019999999552965164,162.6699981689453 0,162.6699981689453 0,162.6699981689453 C0,162.6699981689453 0,162.6699981689453 0,162.6699981689453z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,9.150001525878906,15.82000732421875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_91)"
                                          fillOpacity={1}
                                          d=" M0,149.89999389648438 C0,149.89999389648438 0,302.80999755859375 0,302.80999755859375 C0,302.80999755859375 229.17999267578125,152 229.17999267578125,152 C229.17999267578125,152 229.3000030517578,0 229.3000030517578,0 C229.3000030517578,0 0,149.89999389648438 0,149.89999389648438 C0,149.89999389648438 0,149.89999389648438 0,149.89999389648438z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,8.32000732421875,175.75001525878906)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(1,5,38)"
                                          fillOpacity={1}
                                          d=" M0,155.2899932861328 C0,155.2899932861328 0,155.75999450683594 0,155.75999450683594 C0.07000000029802322,157.75 1.2699999809265137,159.75 3.5999999046325684,161.27000427246094 C3.5999999046325684,161.27000427246094 143.36000061035156,252.5500030517578 143.36000061035156,252.5500030517578 C148.17999267578125,255.69000244140625 156.00999450683594,255.69000244140625 160.8300018310547,252.5500030517578 C160.8300018310547,252.5500030517578 386.70001220703125,105.04000091552734 386.70001220703125,105.04000091552734 C389.0299987792969,103.5199966430664 390.2200012207031,101.5199966430664 390.2900085449219,99.52999877929688 C390.2900085449219,99.52999877929688 390.2900085449219,99.08000183105469 390.2900085449219,99.08000183105469 C390.20001220703125,97.11000061035156 389,95.12000274658203 386.70001220703125,93.62999725341797 C386.70001220703125,93.62999725341797 246.92999267578125,2.3499999046325684 246.92999267578125,2.3499999046325684 C242.11000061035156,-0.7900000214576721 234.27999877929688,-0.7900000214576721 229.4600067138672,2.3499999046325684 C229.4600067138672,2.3499999046325684 3.5999999046325684,149.86000061035156 3.5999999046325684,149.86000061035156 C1.2999999523162842,151.3800048828125 0.09000000357627869,153.32000732421875 0,155.2899932861328 C0,155.2899932861328 0,155.2899932861328 0,155.2899932861328z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,38.55999755859375,193.33999633789062)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_98)"
                                          fillOpacity={1}
                                          d=" M0.05999999865889549,135.72000122070312 C0.25,136.72999572753906 0.9399999976158142,137.69000244140625 2.109999895095825,138.4600067138672 C2.109999895095825,138.4600067138672 81.91000366210938,190.5800018310547 81.91000366210938,190.5800018310547 C84.7300033569336,192.41000366210938 89.30999755859375,192.41000366210938 92.12999725341797,190.5800018310547 C92.12999725341797,190.5800018310547 291.82000732421875,60.15999984741211 291.82000732421875,60.15999984741211 C293,59.38999938964844 293.6700134277344,58.43000030517578 293.8599853515625,57.41999816894531 C294.1400146484375,56.0099983215332 293.4700012207031,54.54999923706055 291.82000732421875,53.4900016784668 C291.82000732421875,53.4900016784668 212.02000427246094,1.3799999952316284 212.02000427246094,1.3799999952316284 C209.1999969482422,-0.44999998807907104 204.61000061035156,-0.44999998807907104 201.7899932861328,1.3799999952316284 C201.7899932861328,1.3799999952316284 2.109999895095825,131.7899932861328 2.109999895095825,131.7899932861328 C0.46000000834465027,132.85000610351562 -0.2199999988079071,134.33999633789062 0.05999999865889549,135.72000122070312 C0.05999999865889549,135.72000122070312 0.05999999865889549,135.72000122070312 0.05999999865889549,135.72000122070312z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,198.47999572753906,298.3999938964844)"
                                        opacity={1}
                                        style={{ mixBlendMode: "multiply", display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_102)"
                                          fillOpacity={1}
                                          d=" M0.03999999910593033,45.290000915527344 C0.1599999964237213,45.720001220703125 0.4699999988079071,46.119998931884766 0.9599999785423279,46.459999084472656 C0.9599999785423279,46.459999084472656 41.29999923706055,72.80000305175781 41.29999923706055,72.80000305175781 C42.56999969482422,73.62000274658203 44.65999984741211,73.62000274658203 45.95000076293945,72.80000305175781 C45.95000076293945,72.80000305175781 111.51000213623047,30 111.51000213623047,30 C112,29.65999984741211 112.30999755859375,29.260000228881836 112.43000030517578,28.829999923706055 C112.62000274658203,28.170000076293945 112.29000091552734,27.469999313354492 111.51000213623047,26.969999313354492 C111.51000213623047,26.969999313354492 71.16999816894531,0.6200000047683716 71.16999816894531,0.6200000047683716 C69.87999725341797,-0.20000000298023224 67.80999755859375,-0.20000000298023224 66.5199966430664,0.6200000047683716 C66.5199966430664,0.6200000047683716 0.9599999785423279,43.41999816894531 0.9599999785423279,43.41999816894531 C0.18000000715255737,43.93000030517578 -0.11999999731779099,44.630001068115234 0.03999999910593033,45.290000915527344 C0.03999999910593033,45.290000915527344 0.03999999910593033,45.290000915527344 0.03999999910593033,45.290000915527344z"
                                          style={{ mixBlendMode: "multiply" }}
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,198.52000427246094,299.0899963378906)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_106)"
                                          fillOpacity={1}
                                          d=" M0,44.59000015258789 C0.11999999731779099,45.02000045776367 0.4300000071525574,45.40999984741211 0.9200000166893005,45.7599983215332 C0.9200000166893005,45.7599983215332 41.25,72.11000061035156 41.25,72.11000061035156 C42.52000045776367,72.93000030517578 44.619998931884766,72.93000030517578 45.90999984741211,72.11000061035156 C45.90999984741211,72.11000061035156 111.47000122070312,29.309999465942383 111.47000122070312,29.309999465942383 C111.95999908447266,28.959999084472656 112.26000213623047,28.56999969482422 112.37999725341797,28.139999389648438 C112.29000091552734,27.709999084472656 111.98999786376953,27.31999969482422 111.47000122070312,26.969999313354492 C111.47000122070312,26.969999313354492 71.12999725341797,0.6200000047683716 71.12999725341797,0.6200000047683716 C69.83999633789062,-0.20000000298023224 67.76000213623047,-0.20000000298023224 66.47000122070312,0.6200000047683716 C66.47000122070312,0.6200000047683716 0.9200000166893005,43.43000030517578 0.9200000166893005,43.43000030517578 C0.4300000071525574,43.779998779296875 0.09000000357627869,44.15999984741211 0,44.59000015258789 C0,44.59000015258789 0,44.59000015258789 0,44.59000015258789z"
                                        />
                                      </g>
                                      <g
                                        clipPath="url(#__lottie_element_108)"
                                        transform="matrix(1,0,0,1,43.71000671386719,197.0699920654297)"
                                        opacity={1}
                                        style={{ mixBlendMode: "multiply", display: "block" }}
                                      >
                                        <g
                                          transform="matrix(1,0,0,1,10.880000114440918,131.7100067138672)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_129)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,15.930000305175781 C11.850000381469727,16.329999923706055 10.819999694824219,16.329999923706055 10.210000038146973,15.930000305175781 C10.210000038146973,15.930000305175781 0.47999998927116394,9.579999923706055 0.47999998927116394,9.579999923706055 C-0.15000000596046448,9.180000305175781 -0.15000000596046448,8.489999771118164 0.47999998927116394,8.09000015258789 C0.47999998927116394,8.09000015258789 12.420000076293945,0.30000001192092896 12.420000076293945,0.30000001192092896 C13.0600004196167,-0.10000000149011612 14.09000015258789,-0.10000000149011612 14.699999809265137,0.30000001192092896 C14.699999809265137,0.30000001192092896 24.43000030517578,6.650000095367432 24.43000030517578,6.650000095367432 C25.059999465942383,7.050000190734863 25.059999465942383,7.739999771118164 24.43000030517578,8.140000343322754 C24.43000030517578,8.140000343322754 12.489999771118164,15.930000305175781 12.489999771118164,15.930000305175781 C12.489999771118164,15.930000305175781 12.489999771118164,15.930000305175781 12.489999771118164,15.930000305175781z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,188.1199951171875,7.130000114440918)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_133)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,24.790000915527344 C11.859999656677246,25.190000534057617 10.819999694824219,25.190000534057617 10.210000038146973,24.790000915527344 C10.210000038146973,24.790000915527344 0.47999998927116394,18.43000030517578 0.47999998927116394,18.43000030517578 C-0.15000000596046448,18.030000686645508 -0.15000000596046448,17.34000015258789 0.47999998927116394,16.940000534057617 C0.47999998927116394,16.940000534057617 25.959999084472656,0.30000001192092896 25.959999084472656,0.30000001192092896 C26.600000381469727,-0.10000000149011612 27.6299991607666,-0.10000000149011612 28.239999771118164,0.30000001192092896 C28.239999771118164,0.30000001192092896 37.970001220703125,6.650000095367432 37.970001220703125,6.650000095367432 C38.599998474121094,7.050000190734863 38.599998474121094,7.739999771118164 37.970001220703125,8.140000343322754 C37.970001220703125,8.140000343322754 12.489999771118164,24.790000915527344 12.489999771118164,24.790000915527344 C12.489999771118164,24.790000915527344 12.489999771118164,24.790000915527344 12.489999771118164,24.790000915527344z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,208.1300048828125,15.820000648498535)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_137)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,20.43000030517578 C11.850000381469727,20.829999923706055 10.819999694824219,20.829999923706055 10.210000038146973,20.43000030517578 C10.210000038146973,20.43000030517578 0.47999998927116394,14.069999694824219 0.47999998927116394,14.069999694824219 C-0.15000000596046448,13.670000076293945 -0.15000000596046448,12.979999542236328 0.47999998927116394,12.579999923706055 C0.47999998927116394,12.579999923706055 19.260000228881836,0.30000001192092896 19.260000228881836,0.30000001192092896 C19.899999618530273,-0.10000000149011612 20.93000030517578,-0.10000000149011612 21.540000915527344,0.30000001192092896 C21.540000915527344,0.30000001192092896 31.270000457763672,6.650000095367432 31.270000457763672,6.650000095367432 C31.90999984741211,7.050000190734863 31.90999984741211,7.739999771118164 31.270000457763672,8.140000343322754 C31.270000457763672,8.140000343322754 12.489999771118164,20.43000030517578 12.489999771118164,20.43000030517578 C12.489999771118164,20.43000030517578 12.489999771118164,20.43000030517578 12.489999771118164,20.43000030517578z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,211.77000427246094,24.809999465942383)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_141)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,27.049999237060547 C11.859999656677246,27.450000762939453 10.850000381469727,27.450000762939453 10.210000038146973,27.049999237060547 C10.210000038146973,27.049999237060547 0.47999998927116394,20.690000534057617 0.47999998927116394,20.690000534057617 C-0.15000000596046448,20.290000915527344 -0.15000000596046448,19.600000381469727 0.47999998927116394,19.200000762939453 C0.47999998927116394,19.200000762939453 29.40999984741211,0.30000001192092896 29.40999984741211,0.30000001192092896 C30.040000915527344,-0.10000000149011612 31.079999923706055,-0.10000000149011612 31.690000534057617,0.30000001192092896 C31.690000534057617,0.30000001192092896 41.41999816894531,6.650000095367432 41.41999816894531,6.650000095367432 C42.060001373291016,7.050000190734863 42.060001373291016,7.739999771118164 41.41999816894531,8.140000343322754 C41.41999816894531,8.140000343322754 12.489999771118164,27.049999237060547 12.489999771118164,27.049999237060547 C12.489999771118164,27.049999237060547 12.489999771118164,27.049999237060547 12.489999771118164,27.049999237060547z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,218.77000427246094,33.849998474121094)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_145)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,31.459999084472656 C11.850000381469727,31.860000610351562 10.819999694824219,31.860000610351562 10.210000038146973,31.459999084472656 C10.210000038146973,31.459999084472656 0.47999998927116394,25.110000610351562 0.47999998927116394,25.110000610351562 C-0.15000000596046448,24.709999084472656 -0.15000000596046448,24.020000457763672 0.47999998927116394,23.6200008392334 C0.47999998927116394,23.6200008392334 36.18000030517578,0.30000001192092896 36.18000030517578,0.30000001192092896 C36.810001373291016,-0.10000000149011612 37.83000183105469,-0.10000000149011612 38.459999084472656,0.30000001192092896 C38.459999084472656,0.30000001192092896 48.189998626708984,6.650000095367432 48.189998626708984,6.650000095367432 C48.83000183105469,7.050000190734863 48.83000183105469,7.739999771118164 48.189998626708984,8.140000343322754 C48.189998626708984,8.140000343322754 12.489999771118164,31.459999084472656 12.489999771118164,31.459999084472656 C12.489999771118164,31.459999084472656 12.489999771118164,31.459999084472656 12.489999771118164,31.459999084472656z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,24.220001220703125,135.9499969482422)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_149)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,20.399999618530273 C11.850000381469727,20.799999237060547 10.819999694824219,20.799999237060547 10.210000038146973,20.399999618530273 C10.210000038146973,20.399999618530273 0.47999998927116394,14.050000190734863 0.47999998927116394,14.050000190734863 C-0.15000000596046448,13.649999618530273 -0.15000000596046448,12.960000038146973 0.47999998927116394,12.5600004196167 C0.47999998927116394,12.5600004196167 19.229999542236328,0.30000001192092896 19.229999542236328,0.30000001192092896 C19.8700008392334,-0.10000000149011612 20.899999618530273,-0.10000000149011612 21.510000228881836,0.30000001192092896 C21.510000228881836,0.30000001192092896 31.25,6.650000095367432 31.25,6.650000095367432 C31.8799991607666,7.050000190734863 31.8799991607666,7.739999771118164 31.25,8.140000343322754 C31.25,8.140000343322754 12.489999771118164,20.399999618530273 12.489999771118164,20.399999618530273 C12.489999771118164,20.399999618530273 12.489999771118164,20.399999618530273 12.489999771118164,20.399999618530273z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,37.52000427246094,142.4300079345703)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_153)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,22.610000610351562 C11.859999656677246,23.010000228881836 10.819999694824219,23.010000228881836 10.210000038146973,22.610000610351562 C10.210000038146973,22.610000610351562 0.47999998927116394,16.25 0.47999998927116394,16.25 C-0.15000000596046448,15.850000381469727 -0.15000000596046448,15.15999984741211 0.47999998927116394,14.760000228881836 C0.47999998927116394,14.760000228881836 22.639999389648438,0.30000001192092896 22.639999389648438,0.30000001192092896 C23.280000686645508,-0.10000000149011612 24.309999465942383,-0.10000000149011612 24.920000076293945,0.30000001192092896 C24.920000076293945,0.30000001192092896 34.650001525878906,6.650000095367432 34.650001525878906,6.650000095367432 C35.279998779296875,7.050000190734863 35.279998779296875,7.739999771118164 34.650001525878906,8.140000343322754 C34.650001525878906,8.140000343322754 12.489999771118164,22.610000610351562 12.489999771118164,22.610000610351562 C12.489999771118164,22.610000610351562 12.489999771118164,22.610000610351562 12.489999771118164,22.610000610351562z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,50.81999969482422,146.79000854492188)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_157)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,26.940000534057617 C11.859999656677246,27.34000015258789 10.819999694824219,27.34000015258789 10.210000038146973,26.940000534057617 C10.210000038146973,26.940000534057617 0.47999998927116394,20.59000015258789 0.47999998927116394,20.59000015258789 C-0.15000000596046448,20.190000534057617 -0.15000000596046448,19.5 0.47999998927116394,19.100000381469727 C0.47999998927116394,19.100000381469727 29.270000457763672,0.30000001192092896 29.270000457763672,0.30000001192092896 C29.90999984741211,-0.10000000149011612 30.940000534057617,-0.10000000149011612 31.549999237060547,0.30000001192092896 C31.549999237060547,0.30000001192092896 41.279998779296875,6.650000095367432 41.279998779296875,6.650000095367432 C41.90999984741211,7.050000190734863 41.90999984741211,7.739999771118164 41.279998779296875,8.140000343322754 C41.279998779296875,8.140000343322754 12.489999771118164,26.940000534057617 12.489999771118164,26.940000534057617 C12.489999771118164,26.940000534057617 12.489999771118164,26.940000534057617 12.489999771118164,26.940000534057617z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,64.13999938964844,164.33999633789062)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_161)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,18.09000015258789 C11.859999656677246,18.489999771118164 10.819999694824219,18.489999771118164 10.210000038146973,18.09000015258789 C10.210000038146973,18.09000015258789 0.47999998927116394,11.729999542236328 0.47999998927116394,11.729999542236328 C-0.15000000596046448,11.329999923706055 -0.15000000596046448,10.640000343322754 0.47999998927116394,10.239999771118164 C0.47999998927116394,10.239999771118164 15.710000038146973,0.30000001192092896 15.710000038146973,0.30000001192092896 C16.34000015258789,-0.10000000149011612 17.3799991607666,-0.10000000149011612 17.989999771118164,0.30000001192092896 C17.989999771118164,0.30000001192092896 27.719999313354492,6.650000095367432 27.719999313354492,6.650000095367432 C28.350000381469727,7.050000190734863 28.350000381469727,7.739999771118164 27.719999313354492,8.140000343322754 C27.719999313354492,8.140000343322754 12.489999771118164,18.09000015258789 12.489999771118164,18.09000015258789 C12.489999771118164,18.09000015258789 12.489999771118164,18.09000015258789 12.489999771118164,18.09000015258789z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,123.07000732421875,94.2300033569336)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_165)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,49.70000076293945 C11.859999656677246,50.099998474121094 10.819999694824219,50.099998474121094 10.210000038146973,49.70000076293945 C10.210000038146973,49.70000076293945 0.47999998927116394,43.349998474121094 0.47999998927116394,43.349998474121094 C-0.15000000596046448,42.95000076293945 -0.15000000596046448,42.2599983215332 0.47999998927116394,41.86000061035156 C0.47999998927116394,41.86000061035156 64.12999725341797,0.30000001192092896 64.12999725341797,0.30000001192092896 C64.76000213623047,-0.10000000149011612 65.80000305175781,-0.10000000149011612 66.41000366210938,0.30000001192092896 C66.41000366210938,0.30000001192092896 76.13999938964844,6.650000095367432 76.13999938964844,6.650000095367432 C76.77999877929688,7.050000190734863 76.77999877929688,7.739999771118164 76.13999938964844,8.140000343322754 C76.13999938964844,8.140000343322754 12.489999771118164,49.70000076293945 12.489999771118164,49.70000076293945 C12.489999771118164,49.70000076293945 12.489999771118164,49.70000076293945 12.489999771118164,49.70000076293945z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,0,126.47999572753906)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_169)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,12.619999885559082,118.23999786376953)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_173)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,24.619998931884766,110.38999938964844)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_177)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.180000305175781,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.079999923706055 19.1200008392334,5.079999923706055 C19.75,5.480000019073486 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,36.619998931884766,102.55000305175781)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_181)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.079999923706055 19.1200008392334,5.079999923706055 C19.75,5.480000019073486 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,48.619998931884766,94.7300033569336)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_185)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.420000076293945,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,60.619998931884766,86.88999938964844)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_189)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,72.6199951171875,79.04000091552734)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_193)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.079999923706055 19.1200008392334,5.079999923706055 C19.75,5.480000019073486 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,84.62999725341797,71.19999694824219)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_197)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.760000228881836,5.489999771118164 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,96.6199951171875,63.36000061035156)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_201)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,108.63999938964844,55.540000915527344)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_205)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.760000228881836,5.489999771118164 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,120.63999938964844,47.69000244140625)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_209)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.760000228881836,5.489999771118164 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,132.63999938964844,39.85000228881836)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_213)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.760000228881836,5.489999771118164 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,144.64999389648438,32)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_217)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.430000305175781,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.079999923706055 19.1200008392334,5.079999923706055 C19.760000228881836,5.480000019073486 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,157.64999389648438,23.520000457763672)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_221)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.430000305175781,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.760000228881836,5.489999771118164 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,169.66000366210938,15.690000534057617)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_225)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,181.63999938964844,7.839999675750732)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_229)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.15999984741211,-0.10000000149011612 11.199999809265137,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.079999923706055 19.1200008392334,5.079999923706055 C19.760000228881836,5.480000019073486 19.760000228881836,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,193.66000366210938,0)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_233)"
                                            fillOpacity={1}
                                            d=" M10.069999694824219,12.479999542236328 C9.4399995803833,12.880000114440918 8.399999618530273,12.880000114440918 7.789999961853027,12.479999542236328 C7.789999961853027,12.479999542236328 0.47999998927116394,7.690000057220459 0.47999998927116394,7.690000057220459 C-0.15000000596046448,7.289999961853027 -0.15000000596046448,6.599999904632568 0.47999998927116394,6.199999809265137 C0.47999998927116394,6.199999809265137 9.529999732971191,0.30000001192092896 9.529999732971191,0.30000001192092896 C10.170000076293945,-0.10000000149011612 11.180000305175781,-0.10000000149011612 11.8100004196167,0.30000001192092896 C11.8100004196167,0.30000001192092896 19.1200008392334,5.090000152587891 19.1200008392334,5.090000152587891 C19.75,5.489999771118164 19.75,6.170000076293945 19.1200008392334,6.570000171661377 C19.1200008392334,6.570000171661377 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 C10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328 10.069999694824219,12.479999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,26.46000099182129,122.95999908447266)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_237)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,53.470001220703125,105.33000183105469)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_241)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,39.959999084472656,114.15999603271484)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_245)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,66.95999908447266,96.5199966430664)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_249)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,80.4800033569336,87.70999908447266)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_253)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.850000381469727,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,93.97000122070312,78.87999725341797)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_257)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,107.48999786376953,70.05999755859375)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_261)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,120.9800033569336,61.25)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_265)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,134.50999450683594,52.43000030517578)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_269)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,148,43.619998931884766)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_273)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,161.47999572753906,34.79999923706055)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_277)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,175,25.969999313354492)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_281)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,46.44000244140625,127.32999420166016)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_285)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,59.94000244140625,118.5)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_289)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,73.45000457763672,109.66999816894531)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_293)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,86.95000457763672,100.8699951171875)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_297)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,100.45999908447266,92.04000091552734)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_301)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.84000015258789,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,113.95000457763672,83.22000122070312)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_305)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,127.47000885009766,74.41999816894531)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_309)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,140.9499969482422,65.58999633789062)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_313)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,154.47999572753906,56.76000213623047)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_317)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,167.97000122070312,47.959999084472656)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_321)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.850000381469727,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,181.489990234375,39.13999938964844)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_325)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,194.97000122070312,30.309999465942383)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_329)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,63.08000183105469,134.4600067138672)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_333)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,76.61000061035156,125.62999725341797)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_337)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.850000381469727,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,90.09000396728516,116.81999969482422)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_341)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,103.61000061035156,108)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_345)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,117.09000396728516,99.16999816894531)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_349)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.850000381469727,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,130.58999633789062,90.3699951171875)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_353)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,144.11000061035156,81.54000091552734)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_357)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,157.61000061035156,72.73999786376953)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_361)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,171.1199951171875,63.909996032714844)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_365)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,184.61000061035156,55.09000015258789)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_369)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.850000381469727,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,198.1199951171875,46.28999710083008)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_373)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,96.77999877929688,129.24000549316406)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_377)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,110.27000427246094,120.40999603271484)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_381)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,82.56999969482422,155.8800048828125)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_385)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,96.06000518798828,147.0800018310547)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_389)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,109.58000183105469,138.25)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_393)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,191.09999084472656,85.02999877929688)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_397)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,204.58999633789062,76.18999481201172)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_401)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.850000381469727,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,218.09999084472656,67.37999725341797)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_405)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,244.1400146484375,50.380001068115234)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_409)"
                                            fillOpacity={1}
                                            d=" M10.15999984741211,12.979999542236328 C9.520000457763672,13.380000114440918 8.489999771118164,13.380000114440918 7.880000114440918,12.979999542236328 C7.880000114440918,12.979999542236328 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 19.889999389648438,5.139999866485596 19.889999389648438,5.139999866485596 C20.520000457763672,5.539999961853027 20.520000457763672,6.230000019073486 19.889999389648438,6.630000114440918 C19.889999389648438,6.630000114440918 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 C10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,253.02001953125,56.18000030517578)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_413)"
                                            fillOpacity={1}
                                            d=" M10.15999984741211,12.979999542236328 C9.529999732971191,13.380000114440918 8.489999771118164,13.380000114440918 7.880000114440918,12.979999542236328 C7.880000114440918,12.979999542236328 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 19.889999389648438,5.139999866485596 19.889999389648438,5.139999866485596 C20.530000686645508,5.539999961853027 20.530000686645508,6.230000019073486 19.889999389648438,6.630000114440918 C19.889999389648438,6.630000114440918 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 C10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,240,64.69000244140625)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_417)"
                                            fillOpacity={1}
                                            d=" M10.15999984741211,12.979999542236328 C9.529999732971191,13.380000114440918 8.489999771118164,13.380000114440918 7.880000114440918,12.979999542236328 C7.880000114440918,12.979999542236328 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 19.889999389648438,5.139999866485596 19.889999389648438,5.139999866485596 C20.520000457763672,5.539999961853027 20.520000457763672,6.230000019073486 19.889999389648438,6.630000114440918 C19.889999389648438,6.630000114440918 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 C10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,266,47.70000076293945)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_421)"
                                            fillOpacity={1}
                                            d=" M10.15999984741211,12.979999542236328 C9.520000457763672,13.380000114440918 8.489999771118164,13.380000114440918 7.880000114440918,12.979999542236328 C7.880000114440918,12.979999542236328 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 19.889999389648438,5.139999866485596 19.889999389648438,5.139999866485596 C20.520000457763672,5.539999961853027 20.520000457763672,6.230000019073486 19.889999389648438,6.630000114440918 C19.889999389648438,6.630000114440918 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 C10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328 10.15999984741211,12.979999542236328z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,123.7800064086914,111.58999633789062)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_425)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,137.26998901367188,102.79000091552734)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_429)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,150.7899932861328,93.95999908447266)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_433)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,164.27999877929688,85.12999725341797)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_437)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,177.76998901367188,76.33000183105469)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_441)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,191.2899932861328,67.51000213623047)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_445)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,204.76998901367188,58.68000030517578)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_449)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.859999656677246,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.850000381469727,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.850000381469727,7.050000190734863 22.850000381469727,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,83.26000213623047,138.04000854492188)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="url(#__lottie_element_453)"
                                            fillOpacity={1}
                                            d=" M12.489999771118164,14.5 C11.850000381469727,14.899999618530273 10.819999694824219,14.899999618530273 10.210000038146973,14.5 C10.210000038146973,14.5 0.47999998927116394,8.140000343322754 0.47999998927116394,8.140000343322754 C-0.15000000596046448,7.739999771118164 -0.15000000596046448,7.050000190734863 0.47999998927116394,6.650000095367432 C0.47999998927116394,6.650000095367432 10.210000038146973,0.30000001192092896 10.210000038146973,0.30000001192092896 C10.84000015258789,-0.10000000149011612 11.880000114440918,-0.10000000149011612 12.489999771118164,0.30000001192092896 C12.489999771118164,0.30000001192092896 22.219999313354492,6.650000095367432 22.219999313354492,6.650000095367432 C22.860000610351562,7.050000190734863 22.860000610351562,7.739999771118164 22.219999313354492,8.140000343322754 C22.219999313354492,8.140000343322754 12.489999771118164,14.5 12.489999771118164,14.5 C12.489999771118164,14.5 12.489999771118164,14.5 12.489999771118164,14.5z"
                                          />
                                        </g>
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,44.5,197.10000610351562)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fillRule="evenodd"
                                          fill="rgb(1,5,38)"
                                          fillOpacity={1}
                                          d=" M103.87999725341797,145.67999267578125 C104.51000213623047,145.27999877929688 104.51000213623047,144.58999633789062 103.87999725341797,144.19000244140625 C103.87999725341797,144.19000244140625 94.94999694824219,138.3699951171875 94.94999694824219,138.3699951171875 C94.33999633789062,137.97000122070312 93.30999755859375,137.97000122070312 92.66999816894531,138.3699951171875 C92.66999816894531,138.3699951171875 83.7300033569336,144.19000244140625 83.7300033569336,144.19000244140625 C83.08999633789062,144.58999633789062 83.08999633789062,145.27999877929688 83.7300033569336,145.67999267578125 C83.7300033569336,145.67999267578125 92.66999816894531,151.5 92.66999816894531,151.5 C93.27999877929688,151.89999389648438 94.31999969482422,151.89999389648438 94.94999694824219,151.5 C94.94999694824219,151.5 103.87999725341797,145.67999267578125 103.87999725341797,145.67999267578125 C103.87999725341797,145.67999267578125 103.87999725341797,145.67999267578125 103.87999725341797,145.67999267578125z M225.39999389648438,64.83000183105469 C226.0399932861328,65.2300033569336 226.0399932861328,65.91999816894531 225.39999389648438,66.31999969482422 C225.39999389648438,66.31999969482422 216.47000122070312,72.13999938964844 216.47000122070312,72.13999938964844 C215.83999633789062,72.54000091552734 214.8000030517578,72.54000091552734 214.19000244140625,72.13999938964844 C214.19000244140625,72.13999938964844 205.25,66.31999969482422 205.25,66.31999969482422 C204.6199951171875,65.91999816894531 204.6199951171875,65.2300033569336 205.25,64.83000183105469 C205.25,64.83000183105469 214.19000244140625,59.0099983215332 214.19000244140625,59.0099983215332 C214.82000732421875,58.61000061035156 215.86000061035156,58.61000061035156 216.47000122070312,59.0099983215332 C216.47000122070312,59.0099983215332 225.39999389648438,64.83000183105469 225.39999389648438,64.83000183105469 C225.39999389648438,64.83000183105469 225.39999389648438,64.83000183105469 225.39999389648438,64.83000183105469z M211.9199981689453,75.12000274658203 C212.5500030517578,74.72000122070312 212.5500030517578,74.02999877929688 211.9199981689453,73.62999725341797 C211.9199981689453,73.62999725341797 202.99000549316406,67.80999755859375 202.99000549316406,67.80999755859375 C202.3800048828125,67.41000366210938 201.3300018310547,67.41000366210938 200.6999969482422,67.80999755859375 C200.6999969482422,67.80999755859375 191.77000427246094,73.62999725341797 191.77000427246094,73.62999725341797 C191.13999938964844,74.02999877929688 191.13999938964844,74.72000122070312 191.77000427246094,75.12000274658203 C191.77000427246094,75.12000274658203 200.6999969482422,80.94000244140625 200.6999969482422,80.94000244140625 C201.30999755859375,81.33999633789062 202.36000061035156,81.33999633789062 202.99000549316406,80.94000244140625 C202.99000549316406,80.94000244140625 211.9199981689453,75.12000274658203 211.9199981689453,75.12000274658203 C211.9199981689453,75.12000274658203 211.9199981689453,75.12000274658203 211.9199981689453,75.12000274658203z M198.39999389648438,82.45999908447266 C199.0399932861328,82.86000061035156 199.0399932861328,83.55000305175781 198.39999389648438,83.94999694824219 C198.39999389648438,83.94999694824219 189.47000122070312,89.7699966430664 189.47000122070312,89.7699966430664 C188.83999633789062,90.16999816894531 187.8000030517578,90.16999816894531 187.19000244140625,89.7699966430664 C187.19000244140625,89.7699966430664 178.25,83.94999694824219 178.25,83.94999694824219 C177.6199951171875,83.55000305175781 177.6199951171875,82.86000061035156 178.25,82.45999908447266 C178.25,82.45999908447266 187.19000244140625,76.63999938964844 187.19000244140625,76.63999938964844 C187.82000732421875,76.23999786376953 188.86000061035156,76.23999786376953 189.47000122070312,76.63999938964844 C189.47000122070312,76.63999938964844 198.39999389648438,82.45999908447266 198.39999389648438,82.45999908447266 C198.39999389648438,82.45999908447266 198.39999389648438,82.45999908447266 198.39999389648438,82.45999908447266z M184.89999389648438,92.7699966430664 C185.5399932861328,92.37000274658203 185.5399932861328,91.68000030517578 184.89999389648438,91.27999877929688 C184.89999389648438,91.27999877929688 175.97000122070312,85.45999908447266 175.97000122070312,85.45999908447266 C175.36000061035156,85.05999755859375 174.32000732421875,85.05999755859375 173.69000244140625,85.45999908447266 C173.69000244140625,85.45999908447266 164.75999450683594,91.27999877929688 164.75999450683594,91.27999877929688 C164.1300048828125,91.68000030517578 164.1300048828125,92.37000274658203 164.75999450683594,92.7699966430664 C164.75999450683594,92.7699966430664 173.69000244140625,98.58999633789062 173.69000244140625,98.58999633789062 C174.3000030517578,98.98999786376953 175.33999633789062,98.98999786376953 175.97000122070312,98.58999633789062 C175.97000122070312,98.58999633789062 184.89999389648438,92.7699966430664 184.89999389648438,92.7699966430664 C184.89999389648438,92.7699966430664 184.89999389648438,92.7699966430664 184.89999389648438,92.7699966430664z M171.38999938964844,100.08999633789062 C172.02000427246094,100.48999786376953 172.02000427246094,101.16999816894531 171.38999938964844,101.56999969482422 C171.38999938964844,101.56999969482422 162.4499969482422,107.4000015258789 162.4499969482422,107.4000015258789 C161.82000732421875,107.80000305175781 160.77999877929688,107.80000305175781 160.1699981689453,107.4000015258789 C160.1699981689453,107.4000015258789 151.24000549316406,101.56999969482422 151.24000549316406,101.56999969482422 C150.60000610351562,101.16999816894531 150.60000610351562,100.48999786376953 151.24000549316406,100.08999633789062 C151.24000549316406,100.08999633789062 160.1699981689453,94.26000213623047 160.1699981689453,94.26000213623047 C160.8000030517578,93.86000061035156 161.83999633789062,93.86000061035156 162.4499969482422,94.26000213623047 C162.4499969482422,94.26000213623047 171.38999938964844,100.08999633789062 171.38999938964844,100.08999633789062 C171.38999938964844,100.08999633789062 171.38999938964844,100.08999633789062 171.38999938964844,100.08999633789062z M157.89999389648438,110.4000015258789 C158.5399932861328,110 158.5399932861328,109.30999755859375 157.89999389648438,108.91000366210938 C157.89999389648438,108.91000366210938 148.97000122070312,103.08999633789062 148.97000122070312,103.08999633789062 C148.36000061035156,102.69000244140625 147.32000732421875,102.69000244140625 146.69000244140625,103.08999633789062 C146.69000244140625,103.08999633789062 137.75,108.91000366210938 137.75,108.91000366210938 C137.1199951171875,109.30999755859375 137.1199951171875,110 137.75,110.4000015258789 C137.75,110.4000015258789 146.69000244140625,116.22000122070312 146.69000244140625,116.22000122070312 C147.3000030517578,116.62000274658203 148.33999633789062,116.62000274658203 148.97000122070312,116.22000122070312 C148.97000122070312,116.22000122070312 157.89999389648438,110.4000015258789 157.89999389648438,110.4000015258789 C157.89999389648438,110.4000015258789 157.89999389648438,110.4000015258789 157.89999389648438,110.4000015258789z M144.39999389648438,117.73999786376953 C145.0399932861328,118.13999938964844 145.0399932861328,118.83000183105469 144.39999389648438,119.2300033569336 C144.39999389648438,119.2300033569336 135.47000122070312,125.05000305175781 135.47000122070312,125.05000305175781 C134.83999633789062,125.44999694824219 133.8000030517578,125.44999694824219 133.19000244140625,125.05000305175781 C133.19000244140625,125.05000305175781 124.26000213623047,119.2300033569336 124.26000213623047,119.2300033569336 C123.62000274658203,118.83000183105469 123.62000274658203,118.13999938964844 124.26000213623047,117.73999786376953 C124.26000213623047,117.73999786376953 133.19000244140625,111.91000366210938 133.19000244140625,111.91000366210938 C133.82000732421875,111.51000213623047 134.86000061035156,111.51000213623047 135.47000122070312,111.91000366210938 C135.47000122070312,111.91000366210938 144.39999389648438,117.73999786376953 144.39999389648438,117.73999786376953 C144.39999389648438,117.73999786376953 144.39999389648438,117.73999786376953 144.39999389648438,117.73999786376953z M284.2900085449219,53.790000915527344 C284.9200134277344,53.38999938964844 284.9200134277344,52.70000076293945 284.2900085449219,52.29999923706055 C284.2900085449219,52.29999923706055 277.67999267578125,48 277.67999267578125,48 C277.07000732421875,47.599998474121094 276.0299987792969,47.599998474121094 275.3999938964844,48 C275.3999938964844,48 266.4700012207031,53.81999969482422 266.4700012207031,53.81999969482422 C265.8399963378906,54.220001220703125 265.8399963378906,54.90999984741211 266.4700012207031,55.310001373291016 C266.4700012207031,55.310001373291016 273.0799865722656,59.619998931884766 273.0799865722656,59.619998931884766 C273.69000244140625,60.02000045776367 274.7300109863281,60.02000045776367 275.3599853515625,59.619998931884766 C275.3599853515625,59.619998931884766 284.2900085449219,53.790000915527344 284.2900085449219,53.790000915527344 C284.2900085449219,53.790000915527344 284.2900085449219,53.790000915527344 284.2900085449219,53.790000915527344z M258.2900085449219,69.30000305175781 C258.9200134277344,69.69999694824219 258.9200134277344,70.38999938964844 258.2900085449219,70.79000091552734 C258.2900085449219,70.79000091552734 249.36000061035156,76.61000061035156 249.36000061035156,76.61000061035156 C248.72999572753906,77.01000213623047 247.69000244140625,77.01000213623047 247.0800018310547,76.61000061035156 C247.0800018310547,76.61000061035156 240.47999572753906,72.30000305175781 240.47999572753906,72.30000305175781 C239.85000610351562,71.9000015258789 239.85000610351562,71.20999908447266 240.47999572753906,70.80999755859375 C240.47999572753906,70.80999755859375 249.41000366210938,64.98999786376953 249.41000366210938,64.98999786376953 C250.0399932861328,64.58999633789062 251.0800018310547,64.58999633789062 251.69000244140625,64.98999786376953 C251.69000244140625,64.98999786376953 258.2900085449219,69.30000305175781 258.2900085449219,69.30000305175781 C258.2900085449219,69.30000305175781 258.2900085449219,69.30000305175781 258.2900085449219,69.30000305175781z M264.70001220703125,56.47999954223633 C264.0899963378906,56.08000183105469 263.04998779296875,56.08000183105469 262.4200134277344,56.47999954223633 C262.4200134277344,56.47999954223633 253.49000549316406,62.29999923706055 253.49000549316406,62.29999923706055 C252.86000061035156,62.70000076293945 252.86000061035156,63.38999938964844 253.49000549316406,63.790000915527344 C253.49000549316406,63.790000915527344 260.0899963378906,68.0999984741211 260.0899963378906,68.0999984741211 C260.70001220703125,68.5 261.739990234375,68.5 262.3699951171875,68.0999984741211 C262.3699951171875,68.0999984741211 271.30999755859375,62.279998779296875 271.30999755859375,62.279998779296875 C271.94000244140625,61.880001068115234 271.94000244140625,61.189998626708984 271.30999755859375,60.790000915527344 C271.30999755859375,60.790000915527344 264.70001220703125,56.47999954223633 264.70001220703125,56.47999954223633 C264.70001220703125,56.47999954223633 264.70001220703125,56.47999954223633 264.70001220703125,56.47999954223633z M253.5399932861328,50.68000030517578 C254.17999267578125,50.279998779296875 255.2100067138672,50.279998779296875 255.82000732421875,50.68000030517578 C255.82000732421875,50.68000030517578 262.42999267578125,54.9900016784668 262.42999267578125,54.9900016784668 C263.05999755859375,55.38999938964844 263.05999755859375,56.08000183105469 262.42999267578125,56.47999954223633 C262.42999267578125,56.47999954223633 253.49000549316406,62.29999923706055 253.49000549316406,62.29999923706055 C252.86000061035156,62.70000076293945 251.82000732421875,62.70000076293945 251.2100067138672,62.29999923706055 C251.2100067138672,62.29999923706055 244.61000061035156,57.9900016784668 244.61000061035156,57.9900016784668 C243.97999572753906,57.59000015258789 243.97999572753906,56.900001525878906 244.61000061035156,56.5 C244.61000061035156,56.5 253.5399932861328,50.68000030517578 253.5399932861328,50.68000030517578 C253.5399932861328,50.68000030517578 253.5399932861328,50.68000030517578 253.5399932861328,50.68000030517578z M238.72999572753906,75.01000213623047 C239.3699951171875,74.61000061035156 239.3699951171875,73.91999816894531 238.72999572753906,73.5199966430664 C238.72999572753906,73.5199966430664 229.7899932861328,67.69999694824219 229.7899932861328,67.69999694824219 C229.17999267578125,67.30000305175781 228.13999938964844,67.30000305175781 227.50999450683594,67.69999694824219 C227.50999450683594,67.69999694824219 218.5800018310547,73.5199966430664 218.5800018310547,73.5199966430664 C217.9499969482422,73.91999816894531 217.9499969482422,74.61000061035156 218.5800018310547,75.01000213623047 C218.5800018310547,75.01000213623047 227.50999450683594,80.83000183105469 227.50999450683594,80.83000183105469 C228.1199951171875,81.2300033569336 229.14999389648438,81.2300033569336 229.7899932861328,80.83000183105469 C229.7899932861328,80.83000183105469 238.72999572753906,75.01000213623047 238.72999572753906,75.01000213623047 C238.72999572753906,75.01000213623047 238.72999572753906,75.01000213623047 238.72999572753906,75.01000213623047z M225.2100067138672,82.31999969482422 C225.83999633789062,82.72000122070312 225.83999633789062,83.41000366210938 225.2100067138672,83.80999755859375 C225.2100067138672,83.80999755859375 216.27999877929688,89.62999725341797 216.27999877929688,89.62999725341797 C215.64999389648438,90.02999877929688 214.61000061035156,90.02999877929688 214,89.62999725341797 C214,89.62999725341797 205.07000732421875,83.80999755859375 205.07000732421875,83.80999755859375 C204.44000244140625,83.41000366210938 204.44000244140625,82.72000122070312 205.07000732421875,82.31999969482422 C205.07000732421875,82.31999969482422 214,76.5 214,76.5 C214.63999938964844,76.0999984741211 215.64999389648438,76.0999984741211 216.27999877929688,76.5 C216.27999877929688,76.5 225.2100067138672,82.31999969482422 225.2100067138672,82.31999969482422 C225.2100067138672,82.31999969482422 225.2100067138672,82.31999969482422 225.2100067138672,82.31999969482422z M211.72999572753906,92.63999938964844 C212.3699951171875,92.23999786376953 212.3699951171875,91.55000305175781 211.72999572753906,91.1500015258789 C211.72999572753906,91.1500015258789 202.7899932861328,85.33000183105469 202.7899932861328,85.33000183105469 C202.17999267578125,84.93000030517578 201.13999938964844,84.93000030517578 200.50999450683594,85.33000183105469 C200.50999450683594,85.33000183105469 191.5800018310547,91.1500015258789 191.5800018310547,91.1500015258789 C190.9499969482422,91.55000305175781 190.9499969482422,92.23999786376953 191.5800018310547,92.63999938964844 C191.5800018310547,92.63999938964844 200.50999450683594,98.45999908447266 200.50999450683594,98.45999908447266 C201.1199951171875,98.86000061035156 202.14999389648438,98.86000061035156 202.7899932861328,98.45999908447266 C202.7899932861328,98.45999908447266 211.72999572753906,92.63999938964844 211.72999572753906,92.63999938964844 C211.72999572753906,92.63999938964844 211.72999572753906,92.63999938964844 211.72999572753906,92.63999938964844z M130.2100067138672,144.3800048828125 C130.85000610351562,144.77999877929688 130.85000610351562,145.47000122070312 130.2100067138672,145.8699951171875 C130.2100067138672,145.8699951171875 121.27999877929688,151.69000244140625 121.27999877929688,151.69000244140625 C120.63999938964844,152.08999633789062 119.5999984741211,152.08999633789062 118.98999786376953,151.69000244140625 C118.98999786376953,151.69000244140625 110.05999755859375,145.8699951171875 110.05999755859375,145.8699951171875 C109.43000030517578,145.47000122070312 109.43000030517578,144.77999877929688 110.05999755859375,144.3800048828125 C110.05999755859375,144.3800048828125 118.98999786376953,138.55999755859375 118.98999786376953,138.55999755859375 C119.62000274658203,138.16000366210938 120.66999816894531,138.16000366210938 121.27999877929688,138.55999755859375 C121.27999877929688,138.55999755859375 130.2100067138672,144.3800048828125 130.2100067138672,144.3800048828125 C130.2100067138672,144.3800048828125 130.2100067138672,144.3800048828125 130.2100067138672,144.3800048828125z M116.68000030517578,154.6999969482422 C117.30999755859375,154.3000030517578 117.30999755859375,153.61000061035156 116.68000030517578,153.2100067138672 C116.68000030517578,153.2100067138672 107.75,147.3800048828125 107.75,147.3800048828125 C107.13999938964844,146.97999572753906 106.11000061035156,146.97999572753906 105.47000122070312,147.3800048828125 C105.47000122070312,147.3800048828125 96.54000091552734,153.2100067138672 96.54000091552734,153.2100067138672 C95.9000015258789,153.61000061035156 95.9000015258789,154.3000030517578 96.54000091552734,154.6999969482422 C96.54000091552734,154.6999969482422 105.47000122070312,160.52000427246094 105.47000122070312,160.52000427246094 C106.08000183105469,160.9199981689453 107.12000274658203,160.9199981689453 107.75,160.52000427246094 C107.75,160.52000427246094 116.68000030517578,154.6999969482422 116.68000030517578,154.6999969482422 C116.68000030517578,154.6999969482422 116.68000030517578,154.6999969482422 116.68000030517578,154.6999969482422z M103.19000244140625,162.02999877929688 C103.81999969482422,162.42999267578125 103.81999969482422,163.1199951171875 103.19000244140625,163.52000427246094 C103.19000244140625,163.52000427246094 94.26000213623047,169.35000610351562 94.26000213623047,169.35000610351562 C93.62999725341797,169.75 92.58999633789062,169.75 91.9800033569336,169.35000610351562 C91.9800033569336,169.35000610351562 83.05000305175781,163.52000427246094 83.05000305175781,163.52000427246094 C82.41999816894531,163.1199951171875 82.41999816894531,162.42999267578125 83.05000305175781,162.02999877929688 C83.05000305175781,162.02999877929688 91.9800033569336,156.2100067138672 91.9800033569336,156.2100067138672 C92.62000274658203,155.80999755859375 93.6500015258789,155.80999755859375 94.26000213623047,156.2100067138672 C94.26000213623047,156.2100067138672 103.19000244140625,162.02999877929688 103.19000244140625,162.02999877929688 C103.19000244140625,162.02999877929688 103.19000244140625,162.02999877929688 103.19000244140625,162.02999877929688z M130.89999389648438,128.02000427246094 C131.5399932861328,127.62000274658203 131.5399932861328,126.93000030517578 130.89999389648438,126.52999877929688 C130.89999389648438,126.52999877929688 121.97000122070312,120.70999908447266 121.97000122070312,120.70999908447266 C121.36000061035156,120.30999755859375 120.31999969482422,120.30999755859375 119.69000244140625,120.70999908447266 C119.69000244140625,120.70999908447266 110.75,126.52999877929688 110.75,126.52999877929688 C110.11000061035156,126.93000030517578 110.11000061035156,127.62000274658203 110.75,128.02000427246094 C110.75,128.02000427246094 119.69000244140625,133.83999633789062 119.69000244140625,133.83999633789062 C120.30000305175781,134.24000549316406 121.33000183105469,134.24000549316406 121.97000122070312,133.83999633789062 C121.97000122070312,133.83999633789062 130.89999389648438,128.02000427246094 130.89999389648438,128.02000427246094 C130.89999389648438,128.02000427246094 130.89999389648438,128.02000427246094 130.89999389648438,128.02000427246094z M117.38999938964844,135.36000061035156 C118.02999877929688,135.75999450683594 118.02999877929688,136.4499969482422 117.38999938964844,136.85000610351562 C117.38999938964844,136.85000610351562 108.45999908447266,142.6699981689453 108.45999908447266,142.6699981689453 C107.83000183105469,143.07000732421875 106.79000091552734,143.07000732421875 106.18000030517578,142.6699981689453 C106.18000030517578,142.6699981689453 97.25,136.85000610351562 97.25,136.85000610351562 C96.61000061035156,136.4499969482422 96.61000061035156,135.75999450683594 97.25,135.36000061035156 C97.25,135.36000061035156 106.18000030517578,129.5399932861328 106.18000030517578,129.5399932861328 C106.81999969482422,129.13999938964844 107.8499984741211,129.13999938964844 108.45999908447266,129.5399932861328 C108.45999908447266,129.5399932861328 117.38999938964844,135.36000061035156 117.38999938964844,135.36000061035156 C117.38999938964844,135.36000061035156 117.38999938964844,135.36000061035156 117.38999938964844,135.36000061035156z M218.74000549316406,53.900001525878906 C219.3699951171875,53.5 219.3699951171875,52.810001373291016 218.74000549316406,52.40999984741211 C218.74000549316406,52.40999984741211 209.80999755859375,46.59000015258789 209.80999755859375,46.59000015258789 C209.1999969482422,46.189998626708984 208.16000366210938,46.189998626708984 207.52999877929688,46.59000015258789 C207.52999877929688,46.59000015258789 198.60000610351562,52.40999984741211 198.60000610351562,52.40999984741211 C197.97000122070312,52.810001373291016 197.97000122070312,53.5 198.60000610351562,53.900001525878906 C198.60000610351562,53.900001525878906 207.52999877929688,59.720001220703125 207.52999877929688,59.720001220703125 C208.13999938964844,60.119998931884766 209.17999267578125,60.119998931884766 209.80999755859375,59.720001220703125 C209.80999755859375,59.720001220703125 218.74000549316406,53.900001525878906 218.74000549316406,53.900001525878906 C218.74000549316406,53.900001525878906 218.74000549316406,53.900001525878906 218.74000549316406,53.900001525878906z M205.24000549316406,61.2400016784668 C205.8699951171875,61.63999938964844 205.8699951171875,62.33000183105469 205.24000549316406,62.72999954223633 C205.24000549316406,62.72999954223633 196.30999755859375,68.55000305175781 196.30999755859375,68.55000305175781 C195.6699981689453,68.94999694824219 194.63999938964844,68.94999694824219 194.02999877929688,68.55000305175781 C194.02999877929688,68.55000305175781 185.08999633789062,62.72999954223633 185.08999633789062,62.72999954223633 C184.4600067138672,62.33000183105469 184.4600067138672,61.63999938964844 185.08999633789062,61.2400016784668 C185.08999633789062,61.2400016784668 194.02999877929688,55.41999816894531 194.02999877929688,55.41999816894531 C194.66000366210938,55.02000045776367 195.6699981689453,55.02000045776367 196.30999755859375,55.41999816894531 C196.30999755859375,55.41999816894531 205.24000549316406,61.2400016784668 205.24000549316406,61.2400016784668 C205.24000549316406,61.2400016784668 205.24000549316406,61.2400016784668 205.24000549316406,61.2400016784668z M191.75,71.52999877929688 C192.3800048828125,71.12999725341797 192.3800048828125,70.44000244140625 191.75,70.04000091552734 C191.75,70.04000091552734 182.80999755859375,64.22000122070312 182.80999755859375,64.22000122070312 C182.1999969482422,63.81999969482422 181.16000366210938,63.81999969482422 180.52999877929688,64.22000122070312 C180.52999877929688,64.22000122070312 171.60000610351562,70.04000091552734 171.60000610351562,70.04000091552734 C170.97000122070312,70.44000244140625 170.97000122070312,71.12999725341797 171.60000610351562,71.52999877929688 C171.60000610351562,71.52999877929688 180.52999877929688,77.3499984741211 180.52999877929688,77.3499984741211 C181.13999938964844,77.75 182.17999267578125,77.75 182.80999755859375,77.3499984741211 C182.80999755859375,77.3499984741211 191.75,71.52999877929688 191.75,71.52999877929688 C191.75,71.52999877929688 191.75,71.52999877929688 191.75,71.52999877929688z M178.22999572753906,78.86000061035156 C178.8699951171875,79.26000213623047 178.8699951171875,79.94999694824219 178.22999572753906,80.3499984741211 C178.22999572753906,80.3499984741211 169.3000030517578,86.16999816894531 169.3000030517578,86.16999816894531 C168.6699981689453,86.56999969482422 167.6300048828125,86.56999969482422 167.02000427246094,86.16999816894531 C167.02000427246094,86.16999816894531 158.08999633789062,80.3499984741211 158.08999633789062,80.3499984741211 C157.4499969482422,79.94999694824219 157.4499969482422,79.26000213623047 158.08999633789062,78.86000061035156 C158.08999633789062,78.86000061035156 167.02000427246094,73.04000091552734 167.02000427246094,73.04000091552734 C167.64999389648438,72.63999938964844 168.69000244140625,72.63999938964844 169.3000030517578,73.04000091552734 C169.3000030517578,73.04000091552734 178.22999572753906,78.86000061035156 178.22999572753906,78.86000061035156 C178.22999572753906,78.86000061035156 178.22999572753906,78.86000061035156 178.22999572753906,78.86000061035156z M164.72999572753906,89.18000030517578 C165.36000061035156,88.77999877929688 165.36000061035156,88.0999984741211 164.72999572753906,87.69999694824219 C164.72999572753906,87.69999694824219 155.8000030517578,81.87000274658203 155.8000030517578,81.87000274658203 C155.19000244140625,81.47000122070312 154.16000366210938,81.47000122070312 153.52000427246094,81.87000274658203 C153.52000427246094,81.87000274658203 144.58999633789062,87.69999694824219 144.58999633789062,87.69999694824219 C143.9600067138672,88.0999984741211 143.9600067138672,88.77999877929688 144.58999633789062,89.18000030517578 C144.58999633789062,89.18000030517578 153.52000427246094,95.01000213623047 153.52000427246094,95.01000213623047 C154.1300048828125,95.41000366210938 155.1699981689453,95.41000366210938 155.8000030517578,95.01000213623047 C155.8000030517578,95.01000213623047 164.72999572753906,89.18000030517578 164.72999572753906,89.18000030517578 C164.72999572753906,89.18000030517578 164.72999572753906,89.18000030517578 164.72999572753906,89.18000030517578z M151.22000122070312,96.5 C151.85000610351562,96.9000015258789 151.85000610351562,97.58999633789062 151.22000122070312,97.98999786376953 C151.22000122070312,97.98999786376953 142.2899932861328,103.80999755859375 142.2899932861328,103.80999755859375 C141.66000366210938,104.20999908447266 140.6199951171875,104.20999908447266 140.00999450683594,103.80999755859375 C140.00999450683594,103.80999755859375 131.07000732421875,97.98999786376953 131.07000732421875,97.98999786376953 C130.42999267578125,97.58999633789062 130.42999267578125,96.9000015258789 131.07000732421875,96.5 C131.07000732421875,96.5 140.00999450683594,90.66999816894531 140.00999450683594,90.66999816894531 C140.63999938964844,90.2699966430664 141.67999267578125,90.2699966430664 142.2899932861328,90.66999816894531 C142.2899932861328,90.66999816894531 151.22000122070312,96.5 151.22000122070312,96.5 C151.22000122070312,96.5 151.22000122070312,96.5 151.22000122070312,96.5z M137.72000122070312,106.80999755859375 C138.35000610351562,106.41000366210938 138.35000610351562,105.72000122070312 137.72000122070312,105.31999969482422 C137.72000122070312,105.31999969482422 128.7899932861328,99.5 128.7899932861328,99.5 C128.17999267578125,99.0999984741211 127.1500015258789,99.0999984741211 126.51000213623047,99.5 C126.51000213623047,99.5 117.56999969482422,105.31999969482422 117.56999969482422,105.31999969482422 C116.93000030517578,105.72000122070312 116.93000030517578,106.41000366210938 117.56999969482422,106.80999755859375 C117.56999969482422,106.80999755859375 126.51000213623047,112.62999725341797 126.51000213623047,112.62999725341797 C127.12000274658203,113.02999877929688 128.16000366210938,113.02999877929688 128.7899932861328,112.62999725341797 C128.7899932861328,112.62999725341797 137.72000122070312,106.80999755859375 137.72000122070312,106.80999755859375 C137.72000122070312,106.80999755859375 137.72000122070312,106.80999755859375 137.72000122070312,106.80999755859375z M124.22000122070312,114.1500015258789 C124.8499984741211,114.55000305175781 124.8499984741211,115.23999786376953 124.22000122070312,115.63999938964844 C124.22000122070312,115.63999938964844 115.29000091552734,121.47000122070312 115.29000091552734,121.47000122070312 C114.66000366210938,121.87000274658203 113.62000274658203,121.87000274658203 113.01000213623047,121.47000122070312 C113.01000213623047,121.47000122070312 104.06999969482422,115.63999938964844 104.06999969482422,115.63999938964844 C103.43000030517578,115.23999786376953 103.43000030517578,114.55000305175781 104.06999969482422,114.1500015258789 C104.06999969482422,114.1500015258789 113.01000213623047,108.33000183105469 113.01000213623047,108.33000183105469 C113.6500015258789,107.93000030517578 114.68000030517578,107.93000030517578 115.29000091552734,108.33000183105469 C115.29000091552734,108.33000183105469 124.22000122070312,114.1500015258789 124.22000122070312,114.1500015258789 C124.22000122070312,114.1500015258789 124.22000122070312,114.1500015258789 124.22000122070312,114.1500015258789z M110.72000122070312,124.44000244140625 C111.3499984741211,124.04000091552734 111.3499984741211,123.3499984741211 110.72000122070312,122.94999694824219 C110.72000122070312,122.94999694824219 101.79000091552734,117.12000274658203 101.79000091552734,117.12000274658203 C101.18000030517578,116.72000122070312 100.1500015258789,116.72000122070312 99.51000213623047,117.12000274658203 C99.51000213623047,117.12000274658203 90.56999969482422,122.94999694824219 90.56999969482422,122.94999694824219 C89.94000244140625,123.3499984741211 89.94000244140625,124.04000091552734 90.56999969482422,124.44000244140625 C90.56999969482422,124.44000244140625 99.51000213623047,130.25999450683594 99.51000213623047,130.25999450683594 C100.12000274658203,130.66000366210938 101.16000366210938,130.66000366210938 101.79000091552734,130.25999450683594 C101.79000091552734,130.25999450683594 110.72000122070312,124.44000244140625 110.72000122070312,124.44000244140625 C110.72000122070312,124.44000244140625 110.72000122070312,124.44000244140625 110.72000122070312,124.44000244140625z M97.2300033569336,131.77000427246094 C97.86000061035156,132.1699981689453 97.86000061035156,132.86000061035156 97.2300033569336,133.25999450683594 C97.2300033569336,133.25999450683594 88.30000305175781,139.0800018310547 88.30000305175781,139.0800018310547 C87.66000366210938,139.47999572753906 86.62999725341797,139.47999572753906 86.0199966430664,139.0800018310547 C86.0199966430664,139.0800018310547 77.08999633789062,133.25999450683594 77.08999633789062,133.25999450683594 C76.44999694824219,132.86000061035156 76.44999694824219,132.1699981689453 77.08999633789062,131.77000427246094 C77.08999633789062,131.77000427246094 86.0199966430664,125.94999694824219 86.0199966430664,125.94999694824219 C86.6500015258789,125.55000305175781 87.69000244140625,125.55000305175781 88.30000305175781,125.94999694824219 C88.30000305175781,125.94999694824219 97.2300033569336,131.77000427246094 97.2300033569336,131.77000427246094 C97.2300033569336,131.77000427246094 97.2300033569336,131.77000427246094 97.2300033569336,131.77000427246094z M83.70999908447266,142.08999633789062 C84.33999633789062,141.69000244140625 84.33999633789062,141 83.70999908447266,140.60000610351562 C83.70999908447266,140.60000610351562 74.77999877929688,134.77999877929688 74.77999877929688,134.77999877929688 C74.16999816894531,134.3800048828125 73.12999725341797,134.3800048828125 72.5,134.77999877929688 C72.5,134.77999877929688 63.56999969482422,140.60000610351562 63.56999969482422,140.60000610351562 C62.939998626708984,141 62.939998626708984,141.69000244140625 63.56999969482422,142.08999633789062 C63.56999969482422,142.08999633789062 72.5,147.9199981689453 72.5,147.9199981689453 C73.11000061035156,148.32000732421875 74.1500015258789,148.32000732421875 74.77999877929688,147.9199981689453 C74.77999877929688,147.9199981689453 83.70999908447266,142.08999633789062 83.70999908447266,142.08999633789062 C83.70999908447266,142.08999633789062 83.70999908447266,142.08999633789062 83.70999908447266,142.08999633789062z M215.60000610351562,36.459999084472656 C216.22999572753906,36.86000061035156 216.22999572753906,37.54999923706055 215.60000610351562,37.95000076293945 C215.60000610351562,37.95000076293945 206.6699981689453,43.77000045776367 206.6699981689453,43.77000045776367 C206.0399932861328,44.16999816894531 204.99000549316406,44.16999816894531 204.3800048828125,43.77000045776367 C204.3800048828125,43.77000045776367 195.4499969482422,37.95000076293945 195.4499969482422,37.95000076293945 C194.82000732421875,37.54999923706055 194.82000732421875,36.86000061035156 195.4499969482422,36.459999084472656 C195.4499969482422,36.459999084472656 204.3800048828125,30.639999389648438 204.3800048828125,30.639999389648438 C205.02000427246094,30.239999771118164 206.05999755859375,30.239999771118164 206.6699981689453,30.639999389648438 C206.6699981689453,30.639999389648438 215.60000610351562,36.459999084472656 215.60000610351562,36.459999084472656 C215.60000610351562,36.459999084472656 215.60000610351562,36.459999084472656 215.60000610351562,36.459999084472656z M202.08999633789062,46.75 C202.72000122070312,46.349998474121094 202.72000122070312,45.65999984741211 202.08999633789062,45.2599983215332 C202.08999633789062,45.2599983215332 193.16000366210938,39.439998626708984 193.16000366210938,39.439998626708984 C192.5500030517578,39.040000915527344 191.50999450683594,39.040000915527344 190.8800048828125,39.439998626708984 C190.8800048828125,39.439998626708984 181.94000244140625,45.2599983215332 181.94000244140625,45.2599983215332 C181.30999755859375,45.65999984741211 181.30999755859375,46.349998474121094 181.94000244140625,46.75 C181.94000244140625,46.75 190.8800048828125,52.56999969482422 190.8800048828125,52.56999969482422 C191.49000549316406,52.970001220703125 192.52999877929688,52.970001220703125 193.16000366210938,52.56999969482422 C193.16000366210938,52.56999969482422 202.08999633789062,46.75 202.08999633789062,46.75 C202.08999633789062,46.75 202.08999633789062,46.75 202.08999633789062,46.75z M188.60000610351562,54.09000015258789 C189.22999572753906,54.4900016784668 189.22999572753906,55.18000030517578 188.60000610351562,55.58000183105469 C188.60000610351562,55.58000183105469 179.6699981689453,61.400001525878906 179.6699981689453,61.400001525878906 C179.0399932861328,61.79999923706055 177.99000549316406,61.79999923706055 177.3800048828125,61.400001525878906 C177.3800048828125,61.400001525878906 168.4499969482422,55.58000183105469 168.4499969482422,55.58000183105469 C167.82000732421875,55.18000030517578 167.82000732421875,54.4900016784668 168.4499969482422,54.09000015258789 C168.4499969482422,54.09000015258789 177.3800048828125,48.27000045776367 177.3800048828125,48.27000045776367 C178.02000427246094,47.869998931884766 179.05999755859375,47.869998931884766 179.6699981689453,48.27000045776367 C179.6699981689453,48.27000045776367 188.60000610351562,54.09000015258789 188.60000610351562,54.09000015258789 C188.60000610351562,54.09000015258789 188.60000610351562,54.09000015258789 188.60000610351562,54.09000015258789z M175.11000061035156,64.4000015258789 C175.75,64 175.75,63.31999969482422 175.11000061035156,62.91999816894531 C175.11000061035156,62.91999816894531 166.1699981689453,57.09000015258789 166.1699981689453,57.09000015258789 C165.55999755859375,56.689998626708984 164.52000427246094,56.689998626708984 163.88999938964844,57.09000015258789 C163.88999938964844,57.09000015258789 154.9600067138672,62.91999816894531 154.9600067138672,62.91999816894531 C154.32000732421875,63.31999969482422 154.32000732421875,64 154.9600067138672,64.4000015258789 C154.9600067138672,64.4000015258789 163.88999938964844,70.2300033569336 163.88999938964844,70.2300033569336 C164.5,70.62999725341797 165.5399932861328,70.62999725341797 166.1699981689453,70.2300033569336 C166.1699981689453,70.2300033569336 175.11000061035156,64.4000015258789 175.11000061035156,64.4000015258789 C175.11000061035156,64.4000015258789 175.11000061035156,64.4000015258789 175.11000061035156,64.4000015258789z M161.5800018310547,71.72000122070312 C162.2100067138672,72.12000274658203 162.2100067138672,72.80999755859375 161.5800018310547,73.20999908447266 C161.5800018310547,73.20999908447266 152.64999389648438,79.02999877929688 152.64999389648438,79.02999877929688 C152.00999450683594,79.43000030517578 151,79.43000030517578 150.3699951171875,79.02999877929688 C150.3699951171875,79.02999877929688 141.42999267578125,73.20999908447266 141.42999267578125,73.20999908447266 C140.8000030517578,72.80999755859375 140.8000030517578,72.12000274658203 141.42999267578125,71.72000122070312 C141.42999267578125,71.72000122070312 150.3699951171875,65.88999938964844 150.3699951171875,65.88999938964844 C151,65.48999786376953 152.0399932861328,65.48999786376953 152.64999389648438,65.88999938964844 C152.64999389648438,65.88999938964844 161.5800018310547,71.72000122070312 161.5800018310547,71.72000122070312 C161.5800018310547,71.72000122070312 161.5800018310547,71.72000122070312 161.5800018310547,71.72000122070312z M148.08999633789062,82.02999877929688 C148.72000122070312,81.62999725341797 148.72000122070312,80.94999694824219 148.08999633789062,80.55000305175781 C148.08999633789062,80.55000305175781 139.16000366210938,74.72000122070312 139.16000366210938,74.72000122070312 C138.5500030517578,74.31999969482422 137.50999450683594,74.31999969482422 136.8800048828125,74.72000122070312 C136.8800048828125,74.72000122070312 127.94999694824219,80.55000305175781 127.94999694824219,80.55000305175781 C127.30999755859375,80.94999694824219 127.30999755859375,81.62999725341797 127.94999694824219,82.02999877929688 C127.94999694824219,82.02999877929688 136.8800048828125,87.86000061035156 136.8800048828125,87.86000061035156 C137.49000549316406,88.26000213623047 138.52999877929688,88.26000213623047 139.16000366210938,87.86000061035156 C139.16000366210938,87.86000061035156 148.08999633789062,82.02999877929688 148.08999633789062,82.02999877929688 C148.08999633789062,82.02999877929688 148.08999633789062,82.02999877929688 148.08999633789062,82.02999877929688z M134.5800018310547,89.37000274658203 C135.2100067138672,89.7699966430664 135.2100067138672,90.45999908447266 134.5800018310547,90.86000061035156 C134.5800018310547,90.86000061035156 125.6500015258789,96.68000030517578 125.6500015258789,96.68000030517578 C125.0199966430664,97.08000183105469 123.9800033569336,97.08000183105469 123.37000274658203,96.68000030517578 C123.37000274658203,96.68000030517578 114.43000030517578,90.86000061035156 114.43000030517578,90.86000061035156 C113.80000305175781,90.45999908447266 113.80000305175781,89.7699966430664 114.43000030517578,89.37000274658203 C114.43000030517578,89.37000274658203 123.37000274658203,83.55000305175781 123.37000274658203,83.55000305175781 C124,83.1500015258789 125.04000091552734,83.1500015258789 125.6500015258789,83.55000305175781 C125.6500015258789,83.55000305175781 134.5800018310547,89.37000274658203 134.5800018310547,89.37000274658203 C134.5800018310547,89.37000274658203 134.5800018310547,89.37000274658203 134.5800018310547,89.37000274658203z M121.08999633789062,99.66000366210938 C121.72000122070312,99.26000213623047 121.72000122070312,98.56999969482422 121.08999633789062,98.16999816894531 C121.08999633789062,98.16999816894531 112.1500015258789,92.33999633789062 112.1500015258789,92.33999633789062 C111.54000091552734,91.94000244140625 110.5,91.94000244140625 109.87000274658203,92.33999633789062 C109.87000274658203,92.33999633789062 100.94000244140625,98.16999816894531 100.94000244140625,98.16999816894531 C100.30999755859375,98.56999969482422 100.30999755859375,99.26000213623047 100.94000244140625,99.66000366210938 C100.94000244140625,99.66000366210938 109.87000274658203,105.4800033569336 109.87000274658203,105.4800033569336 C110.5,105.87999725341797 111.5199966430664,105.87999725341797 112.1500015258789,105.4800033569336 C112.1500015258789,105.4800033569336 121.08999633789062,99.66000366210938 121.08999633789062,99.66000366210938 C121.08999633789062,99.66000366210938 121.08999633789062,99.66000366210938 121.08999633789062,99.66000366210938z M107.58000183105469,107 C108.22000122070312,107.4000015258789 108.22000122070312,108.08999633789062 107.58000183105469,108.48999786376953 C107.58000183105469,108.48999786376953 98.6500015258789,114.30999755859375 98.6500015258789,114.30999755859375 C98.01000213623047,114.70999908447266 96.9800033569336,114.70999908447266 96.37000274658203,114.30999755859375 C96.37000274658203,114.30999755859375 87.43000030517578,108.48999786376953 87.43000030517578,108.48999786376953 C86.80000305175781,108.08999633789062 86.80000305175781,107.4000015258789 87.43000030517578,107 C87.43000030517578,107 96.37000274658203,101.18000030517578 96.37000274658203,101.18000030517578 C97,100.77999877929688 98.04000091552734,100.77999877929688 98.6500015258789,101.18000030517578 C98.6500015258789,101.18000030517578 107.58000183105469,107 107.58000183105469,107 C107.58000183105469,107 107.58000183105469,107 107.58000183105469,107z M94.08000183105469,117.30999755859375 C94.72000122070312,116.91000366210938 94.72000122070312,116.22000122070312 94.08000183105469,115.81999969482422 C94.08000183105469,115.81999969482422 85.1500015258789,110 85.1500015258789,110 C84.54000091552734,109.5999984741211 83.5,109.5999984741211 82.87000274658203,110 C82.87000274658203,110 73.93000030517578,115.81999969482422 73.93000030517578,115.81999969482422 C73.30000305175781,116.22000122070312 73.30000305175781,116.91000366210938 73.93000030517578,117.30999755859375 C73.93000030517578,117.30999755859375 82.87000274658203,123.12999725341797 82.87000274658203,123.12999725341797 C83.4800033569336,123.52999877929688 84.51000213623047,123.52999877929688 85.1500015258789,123.12999725341797 C85.1500015258789,123.12999725341797 94.08000183105469,117.30999755859375 94.08000183105469,117.30999755859375 C94.08000183105469,117.30999755859375 94.08000183105469,117.30999755859375 94.08000183105469,117.30999755859375z M80.55999755859375,124.62999725341797 C81.19000244140625,125.02999877929688 81.19000244140625,125.72000122070312 80.55999755859375,126.12000274658203 C80.55999755859375,126.12000274658203 71.62999725341797,131.94000244140625 71.62999725341797,131.94000244140625 C71,132.33999633789062 69.95999908447266,132.33999633789062 69.3499984741211,131.94000244140625 C69.3499984741211,131.94000244140625 60.40999984741211,126.12000274658203 60.40999984741211,126.12000274658203 C59.779998779296875,125.72000122070312 59.779998779296875,125.02999877929688 60.40999984741211,124.62999725341797 C60.40999984741211,124.62999725341797 69.3499984741211,118.80000305175781 69.3499984741211,118.80000305175781 C69.98999786376953,118.4000015258789 71.0199966430664,118.4000015258789 71.62999725341797,118.80000305175781 C71.62999725341797,118.80000305175781 80.55999755859375,124.62999725341797 80.55999755859375,124.62999725341797 C80.55999755859375,124.62999725341797 80.55999755859375,124.62999725341797 80.55999755859375,124.62999725341797z M67.05999755859375,134.94000244140625 C67.69000244140625,134.5399932861328 67.69000244140625,133.85000610351562 67.05999755859375,133.4499969482422 C67.05999755859375,133.4499969482422 58.130001068115234,127.62999725341797 58.130001068115234,127.62999725341797 C57.52000045776367,127.2300033569336 56.47999954223633,127.2300033569336 55.849998474121094,127.62999725341797 C55.849998474121094,127.62999725341797 46.90999984741211,133.4499969482422 46.90999984741211,133.4499969482422 C46.279998779296875,133.85000610351562 46.279998779296875,134.5399932861328 46.90999984741211,134.94000244140625 C46.90999984741211,134.94000244140625 55.849998474121094,140.75999450683594 55.849998474121094,140.75999450683594 C56.459999084472656,141.16000366210938 57.4900016784668,141.16000366210938 58.130001068115234,140.75999450683594 C58.130001068115234,140.75999450683594 67.05999755859375,134.94000244140625 67.05999755859375,134.94000244140625 C67.05999755859375,134.94000244140625 67.05999755859375,134.94000244140625 67.05999755859375,134.94000244140625z M195.6199951171875,32.119998931884766 C196.25,32.52000045776367 196.25,33.209999084472656 195.6199951171875,33.61000061035156 C195.6199951171875,33.61000061035156 186.69000244140625,39.43000030517578 186.69000244140625,39.43000030517578 C186.05999755859375,39.83000183105469 185.02000427246094,39.83000183105469 184.41000366210938,39.43000030517578 C184.41000366210938,39.43000030517578 175.47999572753906,33.61000061035156 175.47999572753906,33.61000061035156 C174.85000610351562,33.209999084472656 174.85000610351562,32.52000045776367 175.47999572753906,32.119998931884766 C175.47999572753906,32.119998931884766 184.41000366210938,26.299999237060547 184.41000366210938,26.299999237060547 C185.0399932861328,25.899999618530273 186.0800018310547,25.899999618530273 186.69000244140625,26.299999237060547 C186.69000244140625,26.299999237060547 195.6199951171875,32.119998931884766 195.6199951171875,32.119998931884766 C195.6199951171875,32.119998931884766 195.6199951171875,32.119998931884766 195.6199951171875,32.119998931884766z M182.11000061035156,42.40999984741211 C182.75,42.0099983215332 182.75,41.31999969482422 182.11000061035156,40.91999816894531 C182.11000061035156,40.91999816894531 173.1699981689453,35.099998474121094 173.1699981689453,35.099998474121094 C172.55999755859375,34.70000076293945 171.52000427246094,34.70000076293945 170.88999938964844,35.099998474121094 C170.88999938964844,35.099998474121094 161.9600067138672,40.91999816894531 161.9600067138672,40.91999816894531 C161.32000732421875,41.31999969482422 161.32000732421875,42.0099983215332 161.9600067138672,42.40999984741211 C161.9600067138672,42.40999984741211 170.88999938964844,48.2400016784668 170.88999938964844,48.2400016784668 C171.5,48.63999938964844 172.5399932861328,48.63999938964844 173.1699981689453,48.2400016784668 C173.1699981689453,48.2400016784668 182.11000061035156,42.40999984741211 182.11000061035156,42.40999984741211 C182.11000061035156,42.40999984741211 182.11000061035156,42.40999984741211 182.11000061035156,42.40999984741211z M168.6199951171875,49.75 C169.25,50.150001525878906 169.25,50.84000015258789 168.6199951171875,51.2400016784668 C168.6199951171875,51.2400016784668 159.69000244140625,57.060001373291016 159.69000244140625,57.060001373291016 C159.0500030517578,57.459999084472656 158.0399932861328,57.459999084472656 157.41000366210938,57.060001373291016 C157.41000366210938,57.060001373291016 148.47999572753906,51.2400016784668 148.47999572753906,51.2400016784668 C147.85000610351562,50.84000015258789 147.85000610351562,50.150001525878906 148.47999572753906,49.75 C148.47999572753906,49.75 157.41000366210938,43.93000030517578 157.41000366210938,43.93000030517578 C158.0399932861328,43.529998779296875 159.0800018310547,43.529998779296875 159.69000244140625,43.93000030517578 C159.69000244140625,43.93000030517578 168.6199951171875,49.75 168.6199951171875,49.75 C168.6199951171875,49.75 168.6199951171875,49.75 168.6199951171875,49.75z M155.1300048828125,60.06999969482422 C155.75999450683594,59.66999816894531 155.75999450683594,58.97999954223633 155.1300048828125,58.58000183105469 C155.1300048828125,58.58000183105469 146.1999969482422,52.7599983215332 146.1999969482422,52.7599983215332 C145.58999633789062,52.36000061035156 144.55999755859375,52.36000061035156 143.9199981689453,52.7599983215332 C143.9199981689453,52.7599983215332 134.97999572753906,58.58000183105469 134.97999572753906,58.58000183105469 C134.35000610351562,58.97999954223633 134.35000610351562,59.66999816894531 134.97999572753906,60.06999969482422 C134.97999572753906,60.06999969482422 143.9199981689453,65.88999938964844 143.9199981689453,65.88999938964844 C144.52999877929688,66.29000091552734 145.57000732421875,66.29000091552734 146.1999969482422,65.88999938964844 C146.1999969482422,65.88999938964844 155.1300048828125,60.06999969482422 155.1300048828125,60.06999969482422 C155.1300048828125,60.06999969482422 155.1300048828125,60.06999969482422 155.1300048828125,60.06999969482422z M141.60000610351562,67.37999725341797 C142.24000549316406,67.77999877929688 142.24000549316406,68.47000122070312 141.60000610351562,68.87000274658203 C141.60000610351562,68.87000274658203 132.6699981689453,74.69000244140625 132.6699981689453,74.69000244140625 C132.0399932861328,75.08999633789062 131,75.08999633789062 130.38999938964844,74.69000244140625 C130.38999938964844,74.69000244140625 121.45999908447266,68.87000274658203 121.45999908447266,68.87000274658203 C120.83000183105469,68.47000122070312 120.83000183105469,67.77999877929688 121.45999908447266,67.37999725341797 C121.45999908447266,67.37999725341797 130.38999938964844,61.54999923706055 130.38999938964844,61.54999923706055 C131.02000427246094,61.150001525878906 132.05999755859375,61.150001525878906 132.6699981689453,61.54999923706055 C132.6699981689453,61.54999923706055 141.60000610351562,67.37999725341797 141.60000610351562,67.37999725341797 C141.60000610351562,67.37999725341797 141.60000610351562,67.37999725341797 141.60000610351562,67.37999725341797z M128.11000061035156,77.69000244140625 C128.74000549316406,77.29000091552734 128.74000549316406,76.61000061035156 128.11000061035156,76.20999908447266 C128.11000061035156,76.20999908447266 119.18000030517578,70.37999725341797 119.18000030517578,70.37999725341797 C118.56999969482422,69.9800033569336 117.52999877929688,69.9800033569336 116.9000015258789,70.37999725341797 C116.9000015258789,70.37999725341797 107.97000122070312,76.20999908447266 107.97000122070312,76.20999908447266 C107.33000183105469,76.61000061035156 107.33000183105469,77.29000091552734 107.97000122070312,77.69000244140625 C107.97000122070312,77.69000244140625 116.9000015258789,83.5199966430664 116.9000015258789,83.5199966430664 C117.51000213623047,83.91999816894531 118.55000305175781,83.91999816894531 119.18000030517578,83.5199966430664 C119.18000030517578,83.5199966430664 128.11000061035156,77.69000244140625 128.11000061035156,77.69000244140625 C128.11000061035156,77.69000244140625 128.11000061035156,77.69000244140625 128.11000061035156,77.69000244140625z M114.5999984741211,85.02999877929688 C115.23999786376953,85.43000030517578 115.23999786376953,86.12000274658203 114.5999984741211,86.5199966430664 C114.5999984741211,86.5199966430664 105.66999816894531,92.33999633789062 105.66999816894531,92.33999633789062 C105.04000091552734,92.73999786376953 103.98999786376953,92.73999786376953 103.37999725341797,92.33999633789062 C103.37999725341797,92.33999633789062 94.44999694824219,86.5199966430664 94.44999694824219,86.5199966430664 C93.80999755859375,86.12000274658203 93.80999755859375,85.43000030517578 94.44999694824219,85.02999877929688 C94.44999694824219,85.02999877929688 103.37999725341797,79.20999908447266 103.37999725341797,79.20999908447266 C104.0199966430664,78.80999755859375 105.05999755859375,78.80999755859375 105.66999816894531,79.20999908447266 C105.66999816894531,79.20999908447266 114.5999984741211,85.02999877929688 114.5999984741211,85.02999877929688 C114.5999984741211,85.02999877929688 114.5999984741211,85.02999877929688 114.5999984741211,85.02999877929688z M101.11000061035156,95.31999969482422 C101.73999786376953,94.91999816894531 101.73999786376953,94.23999786376953 101.11000061035156,93.83999633789062 C101.11000061035156,93.83999633789062 92.16999816894531,88.01000213623047 92.16999816894531,88.01000213623047 C91.55999755859375,87.61000061035156 90.52999877929688,87.61000061035156 89.88999938964844,88.01000213623047 C89.88999938964844,88.01000213623047 80.95999908447266,93.83999633789062 80.95999908447266,93.83999633789062 C80.33000183105469,94.23999786376953 80.33000183105469,94.91999816894531 80.95999908447266,95.31999969482422 C80.95999908447266,95.31999969482422 89.88999938964844,101.1500015258789 89.88999938964844,101.1500015258789 C90.52999877929688,101.55000305175781 91.52999877929688,101.55000305175781 92.16999816894531,101.1500015258789 C92.16999816894531,101.1500015258789 101.11000061035156,95.31999969482422 101.11000061035156,95.31999969482422 C101.11000061035156,95.31999969482422 101.11000061035156,95.31999969482422 101.11000061035156,95.31999969482422z M87.58999633789062,102.66000366210938 C88.22000122070312,103.05999755859375 88.22000122070312,103.75 87.58999633789062,104.1500015258789 C87.58999633789062,104.1500015258789 78.66000366210938,109.9800033569336 78.66000366210938,109.9800033569336 C78.02999877929688,110.37999725341797 76.98999786376953,110.37999725341797 76.37999725341797,109.9800033569336 C76.37999725341797,109.9800033569336 67.44000244140625,104.1500015258789 67.44000244140625,104.1500015258789 C66.80000305175781,103.75 66.80000305175781,103.05999755859375 67.44000244140625,102.66000366210938 C67.44000244140625,102.66000366210938 76.37999725341797,96.83999633789062 76.37999725341797,96.83999633789062 C77.0199966430664,96.44000244140625 78.05000305175781,96.44000244140625 78.66000366210938,96.83999633789062 C78.66000366210938,96.83999633789062 87.58999633789062,102.66000366210938 87.58999633789062,102.66000366210938 C87.58999633789062,102.66000366210938 87.58999633789062,102.66000366210938 87.58999633789062,102.66000366210938z M60.59000015258789,121.77999877929688 C61.220001220703125,121.37999725341797 61.220001220703125,120.69000244140625 60.59000015258789,120.29000091552734 C60.59000015258789,120.29000091552734 51.650001525878906,114.47000122070312 51.650001525878906,114.47000122070312 C51.040000915527344,114.06999969482422 50,114.06999969482422 49.369998931884766,114.47000122070312 C49.369998931884766,114.47000122070312 40.439998626708984,120.29000091552734 40.439998626708984,120.29000091552734 C39.810001373291016,120.69000244140625 39.810001373291016,121.37999725341797 40.439998626708984,121.77999877929688 C40.439998626708984,121.77999877929688 49.369998931884766,127.5999984741211 49.369998931884766,127.5999984741211 C49.97999954223633,128 51.02000045776367,128 51.650001525878906,127.5999984741211 C51.650001525878906,127.5999984741211 60.59000015258789,121.77999877929688 60.59000015258789,121.77999877929688 C60.59000015258789,121.77999877929688 60.59000015258789,121.77999877929688 60.59000015258789,121.77999877929688z M74.08999633789062,111.5 C74.72000122070312,111.9000015258789 74.72000122070312,112.58999633789062 74.08999633789062,112.98999786376953 C74.08999633789062,112.98999786376953 65.16000366210938,118.80999755859375 65.16000366210938,118.80999755859375 C64.52999877929688,119.20999908447266 63.4900016784668,119.20999908447266 62.880001068115234,118.80999755859375 C62.880001068115234,118.80999755859375 53.95000076293945,112.98999786376953 53.95000076293945,112.98999786376953 C53.310001373291016,112.58999633789062 53.310001373291016,111.9000015258789 53.95000076293945,111.5 C53.95000076293945,111.5 62.880001068115234,105.66999816894531 62.880001068115234,105.66999816894531 C63.52000045776367,105.2699966430664 64.55000305175781,105.2699966430664 65.16000366210938,105.66999816894531 C65.16000366210938,105.66999816894531 74.08999633789062,111.5 74.08999633789062,111.5 C74.08999633789062,111.5 74.08999633789062,111.5 74.08999633789062,111.5z M47.09000015258789,130.61000061035156 C47.720001220703125,130.2100067138672 47.720001220703125,129.52000427246094 47.09000015258789,129.1199951171875 C47.09000015258789,129.1199951171875 38.150001525878906,123.30000305175781 38.150001525878906,123.30000305175781 C37.540000915527344,122.9000015258789 36.5,122.9000015258789 35.869998931884766,123.30000305175781 C35.869998931884766,123.30000305175781 26.940000534057617,129.1199951171875 26.940000534057617,129.1199951171875 C26.309999465942383,129.52000427246094 26.309999465942383,130.2100067138672 26.940000534057617,130.61000061035156 C26.940000534057617,130.61000061035156 35.869998931884766,136.42999267578125 35.869998931884766,136.42999267578125 C36.47999954223633,136.8300018310547 37.52000045776367,136.8300018310547 38.150001525878906,136.42999267578125 C38.150001525878906,136.42999267578125 47.09000015258789,130.61000061035156 47.09000015258789,130.61000061035156 C47.09000015258789,130.61000061035156 47.09000015258789,130.61000061035156 47.09000015258789,130.61000061035156z M199.1699981689453,13.890000343322754 C199.8000030517578,13.489999771118164 199.8000030517578,12.800000190734863 199.1699981689453,12.399999618530273 C199.1699981689453,12.399999618530273 192.66000366210938,8.140000343322754 192.66000366210938,8.140000343322754 C192.0500030517578,7.739999771118164 191,7.739999771118164 190.3699951171875,8.140000343322754 C190.3699951171875,8.140000343322754 182.1199951171875,13.539999961853027 182.1199951171875,13.539999961853027 C181.49000549316406,13.9399995803833 181.49000549316406,14.630000114440918 182.1199951171875,15.029999732971191 C182.1199951171875,15.029999732971191 188.63999938964844,19.280000686645508 188.63999938964844,19.280000686645508 C189.25,19.68000030517578 190.2899932861328,19.68000030517578 190.9199981689453,19.280000686645508 C190.9199981689453,19.280000686645508 199.1699981689453,13.890000343322754 199.1699981689453,13.890000343322754 C199.1699981689453,13.890000343322754 199.1699981689453,13.890000343322754 199.1699981689453,13.890000343322754z M187.19000244140625,20.25 C187.82000732421875,20.649999618530273 187.82000732421875,21.329999923706055 187.19000244140625,21.729999542236328 C187.19000244140625,21.729999542236328 178.94000244140625,27.1299991607666 178.94000244140625,27.1299991607666 C178.3000030517578,27.530000686645508 177.27000427246094,27.530000686645508 176.66000366210938,27.1299991607666 C176.66000366210938,27.1299991607666 170.13999938964844,22.8799991607666 170.13999938964844,22.8799991607666 C169.50999450683594,22.479999542236328 169.50999450683594,21.790000915527344 170.13999938964844,21.389999389648438 C170.13999938964844,21.389999389648438 178.39999389648438,15.989999771118164 178.39999389648438,15.989999771118164 C179.02999877929688,15.59000015258789 180.07000732421875,15.59000015258789 180.67999267578125,15.989999771118164 C180.67999267578125,15.989999771118164 187.19000244140625,20.25 187.19000244140625,20.25 C187.19000244140625,20.25 187.19000244140625,20.25 187.19000244140625,20.25z M175.1699981689453,29.56999969482422 C175.80999755859375,29.170000076293945 175.80999755859375,28.479999542236328 175.1699981689453,28.079999923706055 C175.1699981689453,28.079999923706055 168.66000366210938,23.829999923706055 168.66000366210938,23.829999923706055 C168.0500030517578,23.43000030517578 167.02000427246094,23.43000030517578 166.3800048828125,23.829999923706055 C166.3800048828125,23.829999923706055 158.1300048828125,29.219999313354492 158.1300048828125,29.219999313354492 C157.5,29.6200008392334 157.5,30.309999465942383 158.1300048828125,30.709999084472656 C158.1300048828125,30.709999084472656 164.63999938964844,34.970001220703125 164.63999938964844,34.970001220703125 C165.25,35.369998931884766 166.2899932861328,35.369998931884766 166.9199981689453,34.970001220703125 C166.9199981689453,34.970001220703125 175.1699981689453,29.56999969482422 175.1699981689453,29.56999969482422 C175.1699981689453,29.56999969482422 175.1699981689453,29.56999969482422 175.1699981689453,29.56999969482422z M162.1699981689453,36.560001373291016 C162.80999755859375,36.959999084472656 162.80999755859375,37.650001525878906 162.1699981689453,38.04999923706055 C162.1699981689453,38.04999923706055 153.9199981689453,43.439998626708984 153.9199981689453,43.439998626708984 C153.2899932861328,43.84000015258789 152.25,43.84000015258789 151.63999938964844,43.439998626708984 C151.63999938964844,43.439998626708984 145.1300048828125,39.189998626708984 145.1300048828125,39.189998626708984 C144.5,38.790000915527344 144.5,38.099998474121094 145.1300048828125,37.70000076293945 C145.1300048828125,37.70000076293945 153.3800048828125,32.29999923706055 153.3800048828125,32.29999923706055 C154.02000427246094,31.899999618530273 155.0500030517578,31.899999618530273 155.66000366210938,32.29999923706055 C155.66000366210938,32.29999923706055 162.1699981689453,36.560001373291016 162.1699981689453,36.560001373291016 C162.1699981689453,36.560001373291016 162.1699981689453,36.560001373291016 162.1699981689453,36.560001373291016z M150.16000366210938,45.900001525878906 C150.7899932861328,45.5 150.7899932861328,44.810001373291016 150.16000366210938,44.40999984741211 C150.16000366210938,44.40999984741211 143.64999389648438,40.15999984741211 143.64999389648438,40.15999984741211 C143.0399932861328,39.7599983215332 142,39.7599983215332 141.3699951171875,40.15999984741211 C141.3699951171875,40.15999984741211 133.1199951171875,45.54999923706055 133.1199951171875,45.54999923706055 C132.47999572753906,45.95000076293945 132.47999572753906,46.63999938964844 133.1199951171875,47.040000915527344 C133.1199951171875,47.040000915527344 139.6300048828125,51.29999923706055 139.6300048828125,51.29999923706055 C140.24000549316406,51.70000076293945 141.27999877929688,51.70000076293945 141.91000366210938,51.29999923706055 C141.91000366210938,51.29999923706055 150.16000366210938,45.900001525878906 150.16000366210938,45.900001525878906 C150.16000366210938,45.900001525878906 150.16000366210938,45.900001525878906 150.16000366210938,45.900001525878906z M138.1699981689453,52.25 C138.8000030517578,52.650001525878906 138.8000030517578,53.34000015258789 138.1699981689453,53.7400016784668 C138.1699981689453,53.7400016784668 129.9199981689453,59.13999938964844 129.9199981689453,59.13999938964844 C129.2899932861328,59.540000915527344 128.25,59.540000915527344 127.63999938964844,59.13999938964844 C127.63999938964844,59.13999938964844 121.12000274658203,54.880001068115234 121.12000274658203,54.880001068115234 C120.48999786376953,54.47999954223633 120.48999786376953,53.790000915527344 121.12000274658203,53.38999938964844 C121.12000274658203,53.38999938964844 129.3699951171875,48 129.3699951171875,48 C130,47.599998474121094 131.0500030517578,47.599998474121094 131.66000366210938,48 C131.66000366210938,48 138.1699981689453,52.25 138.1699981689453,52.25 C138.1699981689453,52.25 138.1699981689453,52.25 138.1699981689453,52.25z M126.16000366210938,61.58000183105469 C126.79000091552734,61.18000030517578 126.79000091552734,60.5 126.16000366210938,60.099998474121094 C126.16000366210938,60.099998474121094 119.6500015258789,55.84000015258789 119.6500015258789,55.84000015258789 C119.04000091552734,55.439998626708984 118,55.439998626708984 117.37000274658203,55.84000015258789 C117.37000274658203,55.84000015258789 109.12000274658203,61.2400016784668 109.12000274658203,61.2400016784668 C108.4800033569336,61.63999938964844 108.4800033569336,62.33000183105469 109.12000274658203,62.72999954223633 C109.12000274658203,62.72999954223633 115.62999725341797,66.9800033569336 115.62999725341797,66.9800033569336 C116.23999786376953,67.37999725341797 117.2699966430664,67.37999725341797 117.91000366210938,66.9800033569336 C117.91000366210938,66.9800033569336 126.16000366210938,61.58000183105469 126.16000366210938,61.58000183105469 C126.16000366210938,61.58000183105469 126.16000366210938,61.58000183105469 126.16000366210938,61.58000183105469z M114.1500015258789,67.91000366210938 C114.77999877929688,68.30999755859375 114.77999877929688,69 114.1500015258789,69.4000015258789 C114.1500015258789,69.4000015258789 105.9000015258789,74.80000305175781 105.9000015258789,74.80000305175781 C105.2699966430664,75.19999694824219 104.2300033569336,75.19999694824219 103.62000274658203,74.80000305175781 C103.62000274658203,74.80000305175781 97.0999984741211,70.55000305175781 97.0999984741211,70.55000305175781 C96.47000122070312,70.1500015258789 96.47000122070312,69.45999908447266 97.0999984741211,69.05999755859375 C97.0999984741211,69.05999755859375 105.36000061035156,63.65999984741211 105.36000061035156,63.65999984741211 C105.98999786376953,63.2599983215332 107.02999877929688,63.2599983215332 107.63999938964844,63.65999984741211 C107.63999938964844,63.65999984741211 114.1500015258789,67.91000366210938 114.1500015258789,67.91000366210938 C114.1500015258789,67.91000366210938 114.1500015258789,67.91000366210938 114.1500015258789,67.91000366210938z M102.16000366210938,77.23999786376953 C102.80000305175781,76.83999633789062 102.80000305175781,76.1500015258789 102.16000366210938,75.75 C102.16000366210938,75.75 95.63999938964844,71.5 95.63999938964844,71.5 C95.02999877929688,71.0999984741211 93.98999786376953,71.0999984741211 93.36000061035156,71.5 C93.36000061035156,71.5 85.11000061035156,76.9000015258789 85.11000061035156,76.9000015258789 C84.4800033569336,77.30000305175781 84.4800033569336,77.9800033569336 85.11000061035156,78.37999725341797 C85.11000061035156,78.37999725341797 91.62000274658203,82.63999938964844 91.62000274658203,82.63999938964844 C92.2300033569336,83.04000091552734 93.2699966430664,83.04000091552734 93.9000015258789,82.63999938964844 C93.9000015258789,82.63999938964844 102.16000366210938,77.23999786376953 102.16000366210938,77.23999786376953 C102.16000366210938,77.23999786376953 102.16000366210938,77.23999786376953 102.16000366210938,77.23999786376953z M90.1500015258789,83.5999984741211 C90.79000091552734,84 90.79000091552734,84.69000244140625 90.1500015258789,85.08999633789062 C90.1500015258789,85.08999633789062 81.9000015258789,90.4800033569336 81.9000015258789,90.4800033569336 C81.2699966430664,90.87999725341797 80.2300033569336,90.87999725341797 79.62000274658203,90.4800033569336 C79.62000274658203,90.4800033569336 73.11000061035156,86.2300033569336 73.11000061035156,86.2300033569336 C72.4800033569336,85.83000183105469 72.4800033569336,85.13999938964844 73.11000061035156,84.73999786376953 C73.11000061035156,84.73999786376953 81.36000061035156,79.33999633789062 81.36000061035156,79.33999633789062 C81.98999786376953,78.94000244140625 83.02999877929688,78.94000244140625 83.63999938964844,79.33999633789062 C83.63999938964844,79.33999633789062 90.1500015258789,83.5999984741211 90.1500015258789,83.5999984741211 C90.1500015258789,83.5999984741211 90.1500015258789,83.5999984741211 90.1500015258789,83.5999984741211z M78.13999938964844,92.93000030517578 C78.77999877929688,92.52999877929688 78.77999877929688,91.8499984741211 78.13999938964844,91.44999694824219 C78.13999938964844,91.44999694824219 71.62999725341797,87.19000244140625 71.62999725341797,87.19000244140625 C71.0199966430664,86.79000091552734 69.98999786376953,86.79000091552734 69.3499984741211,87.19000244140625 C69.3499984741211,87.19000244140625 61.099998474121094,92.58999633789062 61.099998474121094,92.58999633789062 C60.470001220703125,92.98999786376953 60.470001220703125,93.68000030517578 61.099998474121094,94.08000183105469 C61.099998474121094,94.08000183105469 67.61000061035156,98.33000183105469 67.61000061035156,98.33000183105469 C68.22000122070312,98.7300033569336 69.26000213623047,98.7300033569336 69.88999938964844,98.33000183105469 C69.88999938964844,98.33000183105469 78.13999938964844,92.93000030517578 78.13999938964844,92.93000030517578 C78.13999938964844,92.93000030517578 78.13999938964844,92.93000030517578 78.13999938964844,92.93000030517578z M66.16000366210938,99.29000091552734 C66.79000091552734,99.69000244140625 66.79000091552734,100.37999725341797 66.16000366210938,100.77999877929688 C66.16000366210938,100.77999877929688 57.90999984741211,106.18000030517578 57.90999984741211,106.18000030517578 C57.279998779296875,106.58000183105469 56.27000045776367,106.58000183105469 55.630001068115234,106.18000030517578 C55.630001068115234,106.18000030517578 49.119998931884766,101.91999816894531 49.119998931884766,101.91999816894531 C48.47999954223633,101.5199966430664 48.47999954223633,100.83000183105469 49.119998931884766,100.43000030517578 C49.119998931884766,100.43000030517578 57.369998931884766,95.04000091552734 57.369998931884766,95.04000091552734 C58,94.63999938964844 59.040000915527344,94.63999938964844 59.650001525878906,95.04000091552734 C59.650001525878906,95.04000091552734 66.16000366210938,99.29000091552734 66.16000366210938,99.29000091552734 C66.16000366210938,99.29000091552734 66.16000366210938,99.29000091552734 66.16000366210938,99.29000091552734z M54.13999938964844,108.58999633789062 C54.779998779296875,108.19000244140625 54.779998779296875,107.5 54.13999938964844,107.0999984741211 C54.13999938964844,107.0999984741211 47.630001068115234,102.8499984741211 47.630001068115234,102.8499984741211 C47.02000045776367,102.44999694824219 45.97999954223633,102.44999694824219 45.349998474121094,102.8499984741211 C45.349998474121094,102.8499984741211 37.099998474121094,108.25 37.099998474121094,108.25 C36.470001220703125,108.6500015258789 36.470001220703125,109.33999633789062 37.099998474121094,109.73999786376953 C37.099998474121094,109.73999786376953 43.61000061035156,113.98999786376953 43.61000061035156,113.98999786376953 C44.220001220703125,114.38999938964844 45.2599983215332,114.38999938964844 45.88999938964844,113.98999786376953 C45.88999938964844,113.98999786376953 54.13999938964844,108.58999633789062 54.13999938964844,108.58999633789062 C54.13999938964844,108.58999633789062 54.13999938964844,108.58999633789062 54.13999938964844,108.58999633789062z M42.150001525878906,114.94000244140625 C42.779998779296875,115.33999633789062 42.779998779296875,116.02999877929688 42.150001525878906,116.43000030517578 C42.150001525878906,116.43000030517578 33.900001525878906,121.83000183105469 33.900001525878906,121.83000183105469 C33.27000045776367,122.2300033569336 32.22999954223633,122.2300033569336 31.6200008392334,121.83000183105469 C31.6200008392334,121.83000183105469 25.110000610351562,117.56999969482422 25.110000610351562,117.56999969482422 C24.469999313354492,117.16999816894531 24.469999313354492,116.48999786376953 25.110000610351562,116.08999633789062 C25.110000610351562,116.08999633789062 33.36000061035156,110.69000244140625 33.36000061035156,110.69000244140625 C33.9900016784668,110.29000091552734 35,110.29000091552734 35.63999938964844,110.69000244140625 C35.63999938964844,110.69000244140625 42.150001525878906,114.94000244140625 42.150001525878906,114.94000244140625 C42.150001525878906,114.94000244140625 42.150001525878906,114.94000244140625 42.150001525878906,114.94000244140625z M30.139999389648438,124.27999877929688 C30.770000457763672,123.87999725341797 30.770000457763672,123.19000244140625 30.139999389648438,122.79000091552734 C30.139999389648438,122.79000091552734 23.6299991607666,118.54000091552734 23.6299991607666,118.54000091552734 C23.020000457763672,118.13999938964844 21.989999771118164,118.13999938964844 21.350000381469727,118.54000091552734 C21.350000381469727,118.54000091552734 13.100000381469727,123.94000244140625 13.100000381469727,123.94000244140625 C12.470000267028809,124.33999633789062 12.470000267028809,125.0199966430664 13.100000381469727,125.41999816894531 C13.100000381469727,125.41999816894531 19.610000610351562,129.67999267578125 19.610000610351562,129.67999267578125 C20.219999313354492,130.0800018310547 21.25,130.0800018310547 21.889999389648438,129.67999267578125 C21.889999389648438,129.67999267578125 30.139999389648438,124.27999877929688 30.139999389648438,124.27999877929688 C30.139999389648438,124.27999877929688 30.139999389648438,124.27999877929688 30.139999389648438,124.27999877929688z M17.520000457763672,131.0399932861328 C18.15999984741211,131.44000244140625 18.15999984741211,132.1199951171875 17.520000457763672,132.52000427246094 C17.520000457763672,132.52000427246094 9.270000457763672,137.9199981689453 9.270000457763672,137.9199981689453 C8.640000343322754,138.32000732421875 7.599999904632568,138.32000732421875 6.989999771118164,137.9199981689453 C6.989999771118164,137.9199981689453 0.47999998927116394,133.6699981689453 0.47999998927116394,133.6699981689453 C-0.15000000596046448,133.27000427246094 -0.15000000596046448,132.5800018310547 0.47999998927116394,132.17999267578125 C0.47999998927116394,132.17999267578125 8.729999542236328,126.77999877929688 8.729999542236328,126.77999877929688 C9.369999885559082,126.37999725341797 10.399999618530273,126.37999725341797 11.010000228881836,126.77999877929688 C11.010000228881836,126.77999877929688 17.520000457763672,131.0399932861328 17.520000457763672,131.0399932861328 C17.520000457763672,131.0399932861328 17.520000457763672,131.0399932861328 17.520000457763672,131.0399932861328z M197.6199951171875,101.83999633789062 C198.25,101.44000244140625 198.25,100.75 197.6199951171875,100.3499984741211 C197.6199951171875,100.3499984741211 188.67999267578125,94.52999877929688 188.67999267578125,94.52999877929688 C188.07000732421875,94.12999725341797 187.0399932861328,94.12999725341797 186.41000366210938,94.52999877929688 C186.41000366210938,94.52999877929688 123.55000305175781,135.5800018310547 123.55000305175781,135.5800018310547 C122.91000366210938,135.97999572753906 122.91000366210938,136.6699981689453 123.55000305175781,137.07000732421875 C123.55000305175781,137.07000732421875 132.47999572753906,142.88999938964844 132.47999572753906,142.88999938964844 C133.08999633789062,143.2899932861328 134.1300048828125,143.2899932861328 134.75999450683594,142.88999938964844 C134.75999450683594,142.88999938964844 197.6199951171875,101.83999633789062 197.6199951171875,101.83999633789062 C197.6199951171875,101.83999633789062 197.6199951171875,101.83999633789062 197.6199951171875,101.83999633789062z M90.2699966430664,170.4600067138672 C90.9000015258789,170.86000061035156 90.9000015258789,171.5500030517578 90.2699966430664,171.9499969482422 C90.2699966430664,171.9499969482422 75.83000183105469,181.38999938964844 75.83000183105469,181.38999938964844 C75.19999694824219,181.7899932861328 74.16000366210938,181.7899932861328 73.55000305175781,181.38999938964844 C73.55000305175781,181.38999938964844 64.62000274658203,175.57000732421875 64.62000274658203,175.57000732421875 C63.97999954223633,175.1699981689453 63.97999954223633,174.47999572753906 64.62000274658203,174.0800018310547 C64.62000274658203,174.0800018310547 79.05000305175781,164.63999938964844 79.05000305175781,164.63999938964844 C79.69000244140625,164.24000549316406 80.72000122070312,164.24000549316406 81.33000183105469,164.63999938964844 C81.33000183105469,164.63999938964844 90.2699966430664,170.4600067138672 90.2699966430664,170.4600067138672 C90.2699966430664,170.4600067138672 90.2699966430664,170.4600067138672 90.2699966430664,170.4600067138672z M90.5199966430664,154.41000366210938 C91.16000366210938,154.00999450683594 91.16000366210938,153.32000732421875 90.5199966430664,152.9199981689453 C90.5199966430664,152.9199981689453 81.58999633789062,147.08999633789062 81.58999633789062,147.08999633789062 C80.9800033569336,146.69000244140625 79.94000244140625,146.69000244140625 79.30999755859375,147.08999633789062 C79.30999755859375,147.08999633789062 51.31999969482422,165.38999938964844 51.31999969482422,165.38999938964844 C50.689998626708984,165.7899932861328 50.689998626708984,166.47999572753906 51.31999969482422,166.8800048828125 C51.31999969482422,166.8800048828125 60.25,172.6999969482422 60.25,172.6999969482422 C60.86000061035156,173.10000610351562 61.900001525878906,173.10000610351562 62.529998779296875,172.6999969482422 C62.529998779296875,172.6999969482422 90.5199966430664,154.41000366210938 90.5199966430664,154.41000366210938 C90.5199966430664,154.41000366210938 90.5199966430664,154.41000366210938 90.5199966430664,154.41000366210938z M70.56999969482422,148.5500030517578 C71.20999908447266,148.9499969482422 71.20999908447266,149.63999938964844 70.56999969482422,150.0399932861328 C70.56999969482422,150.0399932861328 49.209999084472656,164 49.209999084472656,164 C48.58000183105469,164.39999389648438 47.540000915527344,164.39999389648438 46.93000030517578,164 C46.93000030517578,164 38,158.17999267578125 38,158.17999267578125 C37.369998931884766,157.77999877929688 37.369998931884766,157.08999633789062 38,156.69000244140625 C38,156.69000244140625 59.36000061035156,142.72999572753906 59.36000061035156,142.72999572753906 C59.9900016784668,142.3300018310547 61.029998779296875,142.3300018310547 61.63999938964844,142.72999572753906 C61.63999938964844,142.72999572753906 70.56999969482422,148.5500030517578 70.56999969482422,148.5500030517578 C70.56999969482422,148.5500030517578 70.56999969482422,148.5500030517578 70.56999969482422,148.5500030517578z M53.86000061035156,143.57000732421875 C54.4900016784668,143.1699981689453 54.4900016784668,142.49000549316406 53.86000061035156,142.08999633789062 C53.86000061035156,142.08999633789062 44.93000030517578,136.25999450683594 44.93000030517578,136.25999450683594 C44.31999969482422,135.86000061035156 43.279998779296875,135.86000061035156 42.650001525878906,136.25999450683594 C42.650001525878906,136.25999450683594 24.690000534057617,147.99000549316406 24.690000534057617,147.99000549316406 C24.059999465942383,148.38999938964844 24.059999465942383,149.0800018310547 24.690000534057617,149.47999572753906 C24.690000534057617,149.47999572753906 33.619998931884766,155.3000030517578 33.619998931884766,155.3000030517578 C34.22999954223633,155.6999969482422 35.27000045776367,155.6999969482422 35.900001525878906,155.3000030517578 C35.900001525878906,155.3000030517578 53.86000061035156,143.57000732421875 53.86000061035156,143.57000732421875 C53.86000061035156,143.57000732421875 53.86000061035156,143.57000732421875 53.86000061035156,143.57000732421875z M265.3900146484375,39.970001220703125 C266.0199890136719,40.369998931884766 266.0199890136719,41.060001373291016 265.3900146484375,41.459999084472656 C265.3900146484375,41.459999084472656 230.49000549316406,64.2699966430664 230.49000549316406,64.2699966430664 C229.86000061035156,64.66999816894531 228.80999755859375,64.66999816894531 228.1999969482422,64.2699966430664 C228.1999969482422,64.2699966430664 219.27000427246094,58.45000076293945 219.27000427246094,58.45000076293945 C218.63999938964844,58.04999923706055 218.63999938964844,57.36000061035156 219.27000427246094,56.959999084472656 C219.27000427246094,56.959999084472656 254.17999267578125,34.150001525878906 254.17999267578125,34.150001525878906 C254.80999755859375,33.75 255.85000610351562,33.75 256.4599914550781,34.150001525878906 C256.4599914550781,34.150001525878906 265.3900146484375,39.970001220703125 265.3900146484375,39.970001220703125 C265.3900146484375,39.970001220703125 265.3900146484375,39.970001220703125 265.3900146484375,39.970001220703125z M251.60000610351562,32.439998626708984 C252.22999572753906,32.040000915527344 252.22999572753906,31.350000381469727 251.60000610351562,30.950000762939453 C251.60000610351562,30.950000762939453 242.66000366210938,25.1299991607666 242.66000366210938,25.1299991607666 C242.0500030517578,24.729999542236328 241.00999450683594,24.729999542236328 240.3800048828125,25.1299991607666 C240.3800048828125,25.1299991607666 212.25,43.5 212.25,43.5 C211.61000061035156,43.900001525878906 211.61000061035156,44.59000015258789 212.25,44.9900016784668 C212.25,44.9900016784668 221.17999267578125,50.81999969482422 221.17999267578125,50.81999969482422 C221.7899932861328,51.220001220703125 222.8300018310547,51.220001220703125 223.4600067138672,50.81999969482422 C223.4600067138672,50.81999969482422 251.60000610351562,32.439998626708984 251.60000610351562,32.439998626708984 C251.60000610351562,32.439998626708984 251.60000610351562,32.439998626708984 251.60000610351562,32.439998626708984z M237.80999755859375,21.940000534057617 C238.4499969482422,22.34000015258789 238.4499969482422,23.030000686645508 237.80999755859375,23.43000030517578 C237.80999755859375,23.43000030517578 219.8300018310547,35.18000030517578 219.8300018310547,35.18000030517578 C219.1999969482422,35.58000183105469 218.16000366210938,35.58000183105469 217.5500030517578,35.18000030517578 C217.5500030517578,35.18000030517578 208.6199951171875,29.360000610351562 208.6199951171875,29.360000610351562 C207.97999572753906,28.959999084472656 207.97999572753906,28.270000457763672 208.6199951171875,27.8700008392334 C208.6199951171875,27.8700008392334 226.60000610351562,16.110000610351562 226.60000610351562,16.110000610351562 C227.22999572753906,15.710000038146973 228.25,15.710000038146973 228.8800048828125,16.110000610351562 C228.8800048828125,16.110000610351562 237.80999755859375,21.940000534057617 237.80999755859375,21.940000534057617 C237.80999755859375,21.940000534057617 237.80999755859375,21.940000534057617 237.80999755859375,21.940000534057617z M33.709999084472656,139.32000732421875 C34.34000015258789,138.9199981689453 34.34000015258789,138.24000549316406 33.709999084472656,137.83999633789062 C33.709999084472656,137.83999633789062 24.780000686645508,132.00999450683594 24.780000686645508,132.00999450683594 C24.170000076293945,131.61000061035156 23.1299991607666,131.61000061035156 22.5,132.00999450683594 C22.5,132.00999450683594 11.350000381469727,139.3000030517578 11.350000381469727,139.3000030517578 C10.720000267028809,139.6999969482422 10.720000267028809,140.38999938964844 11.350000381469727,140.7899932861328 C11.350000381469727,140.7899932861328 20.290000915527344,146.61000061035156 20.290000915527344,146.61000061035156 C20.899999618530273,147.00999450683594 21.940000534057617,147.00999450683594 22.56999969482422,146.61000061035156 C22.56999969482422,146.61000061035156 33.709999084472656,139.32000732421875 33.709999084472656,139.32000732421875 C33.709999084472656,139.32000732421875 33.709999084472656,139.32000732421875 33.709999084472656,139.32000732421875z M224.47999572753906,14.739999771118164 C225.11000061035156,14.34000015258789 225.11000061035156,13.649999618530273 224.47999572753906,13.25 C224.47999572753906,13.25 215.5500030517578,7.420000076293945 215.5500030517578,7.420000076293945 C214.94000244140625,7.019999980926514 213.89999389648438,7.019999980926514 213.27000427246094,7.420000076293945 C213.27000427246094,7.420000076293945 188.58999633789062,23.540000915527344 188.58999633789062,23.540000915527344 C187.9600067138672,23.940000534057617 187.9600067138672,24.6200008392334 188.58999633789062,25.020000457763672 C188.58999633789062,25.020000457763672 197.52000427246094,30.850000381469727 197.52000427246094,30.850000381469727 C198.1300048828125,31.25 199.1699981689453,31.25 199.8000030517578,30.850000381469727 C199.8000030517578,30.850000381469727 224.47999572753906,14.739999771118164 224.47999572753906,14.739999771118164 C224.47999572753906,14.739999771118164 224.47999572753906,14.739999771118164 224.47999572753906,14.739999771118164z M211.17999267578125,4.550000190734863 C211.80999755859375,4.949999809265137 211.80999755859375,5.639999866485596 211.17999267578125,6.039999961853027 C211.17999267578125,6.039999961853027 202.92999267578125,11.4399995803833 202.92999267578125,11.4399995803833 C202.2899932861328,11.84000015258789 201.25999450683594,11.84000015258789 200.64999389648438,11.4399995803833 C200.64999389648438,11.4399995803833 194.13999938964844,7.190000057220459 194.13999938964844,7.190000057220459 C193.50999450683594,6.789999961853027 193.50999450683594,6.099999904632568 194.13999938964844,5.699999809265137 C194.13999938964844,5.699999809265137 202.38999938964844,0.30000001192092896 202.38999938964844,0.30000001192092896 C203.02999877929688,-0.10000000149011612 204.0399932861328,-0.10000000149011612 204.6699981689453,0.30000001192092896 C204.6699981689453,0.30000001192092896 211.17999267578125,4.550000190734863 211.17999267578125,4.550000190734863 C211.17999267578125,4.550000190734863 211.17999267578125,4.550000190734863 211.17999267578125,4.550000190734863z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,8.279998779296875,274.7900085449219)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_117)"
                                          fillOpacity={1}
                                          d=" M0.019999999552965164,56.18000030517578 C0.019999999552965164,56.18000030517578 0.019999999552965164,61.65999984741211 0.019999999552965164,61.65999984741211 C-0.10000000149011612,63.810001373291016 1.1299999952316284,65.98999786376953 3.619999885559082,67.63999938964844 C3.619999885559082,67.63999938964844 143.38999938964844,158.9199981689453 143.38999938964844,158.9199981689453 C148.2100067138672,162.05999755859375 156.02999877929688,162.05999755859375 160.85000610351562,158.9199981689453 C160.85000610351562,158.9199981689453 386.7200012207031,11.40999984741211 386.7200012207031,11.40999984741211 C388.1300048828125,10.479999542236328 389.1199951171875,9.380000114440918 389.7099914550781,8.239999771118164 C390.0199890136719,7.28000020980835 390.20001220703125,6.650000095367432 390.2699890136719,6.380000114440918 C390.2699890136719,6.380000114440918 390.2900085449219,6.25 390.2900085449219,6.25 C390.2900085449219,6.25 390.2900085449219,0 390.2900085449219,0 C390.2200012207031,1.9900000095367432 389.0299987792969,3.990000009536743 386.70001220703125,5.5 C386.70001220703125,5.5 160.8300018310547,153.00999450683594 160.8300018310547,153.00999450683594 C156.00999450683594,156.14999389648438 148.17999267578125,156.14999389648438 143.36000061035156,153.00999450683594 C143.36000061035156,153.00999450683594 3.5999999046325684,61.7400016784668 3.5999999046325684,61.7400016784668 C1.2699999809265137,60.20000076293945 0.07000000029802322,58.220001220703125 0,56.22999954223633 C0,56.22999954223633 0.019999999552965164,56.18000030517578 0.019999999552965164,56.18000030517578 C0.019999999552965164,56.18000030517578 0.019999999552965164,56.18000030517578 0.019999999552965164,56.18000030517578z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,164.4600067138672,276.57000732421875)"
                                        opacity="0.35000000000000003"
                                        style={{ mixBlendMode: "screen", display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_121)"
                                          fillOpacity={1}
                                          d=" M5.5,155.19000244140625 C5.5,155.19000244140625 238.77000427246094,6.059999942779541 238.77000427246094,6.059999942779541 C241.02999877929688,4.570000171661377 242.27000427246094,2.2799999713897705 241.58999633789062,0.949999988079071 C240.91000366210938,-0.4099999964237213 238.50999450683594,-0.30000001192092896 236.27999877929688,1.190000057220459 C236.27999877929688,1.190000057220459 3.009999990463257,150.32000732421875 3.009999990463257,150.32000732421875 C0.75,151.80999755859375 -0.49000000953674316,154.10000610351562 0.1899999976158142,155.42999267578125 C0.8700000047683716,156.7899932861328 3.2699999809265137,156.67999267578125 5.5,155.19000244140625 C5.5,155.19000244140625 5.5,155.19000244140625 5.5,155.19000244140625z"
                                          style={{ mixBlendMode: "screen" }}
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,20.12999725341797,172.0800018310547)"
                                        opacity="0.24"
                                        style={{ mixBlendMode: "screen", display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_125)"
                                          fillOpacity={1}
                                          d=" M5.309999942779541,148.5 C5.309999942779541,148.5 225.2100067138672,5.929999828338623 225.2100067138672,5.929999828338623 C227.3300018310547,4.519999980926514 228.47000122070312,2.2899999618530273 227.77000427246094,0.9599999785423279 C227.05999755859375,-0.3700000047683716 224.77999877929688,-0.3199999928474426 222.6699981689453,1.090000033378601 C222.6699981689453,1.090000033378601 2.7699999809265137,143.66000366210938 2.7699999809265137,143.66000366210938 C0.6499999761581421,145.07000732421875 -0.5,147.3000030517578 0.20999999344348907,148.6300048828125 C0.9200000166893005,149.9600067138672 3.190000057220459,149.91000366210938 5.309999942779541,148.5 C5.309999942779541,148.5 5.309999942779541,148.5 5.309999942779541,148.5z"
                                          style={{ mixBlendMode: "screen" }}
                                        />
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_36)"
                                      transform="matrix(1,0,0,1,715.5999755859375,369.05999755859375)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,161.5752410888672)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,62.104759216308594 0,62.104759216308594 C0,62.104759216308594 2.890000104904175,60.294761657714844 2.890000104904175,60.294761657714844 C2.890000104904175,60.294761657714844 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,5.200000286102295,157.66647338867188)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,62.7435302734375 0,62.7435302734375 C0,62.7435302734375 2.869999885559082,60.933528900146484 2.869999885559082,60.933528900146484 C2.869999885559082,60.933528900146484 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,10.360000610351562,153.7777099609375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,63.382301330566406 0,63.382301330566406 C0,63.382301330566406 2.890000104904175,61.57229995727539 2.890000104904175,61.57229995727539 C2.890000104904175,61.57229995727539 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,15.569999694824219,144.15000915527344)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,69.73999786376953 0,69.73999786376953 C0,69.73999786376953 2.869999885559082,67.93000030517578 2.869999885559082,67.93000030517578 C2.869999885559082,67.93000030517578 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,20.729999542236328,145.9901580810547)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 2.890000104904175,62.84983825683594 2.890000104904175,62.84983825683594 C2.890000104904175,62.84983825683594 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,25.92999839782715,142.75015258789062)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 2.890000104904175,62.84983825683594 2.890000104904175,62.84983825683594 C2.890000104904175,62.84983825683594 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,31.119998931884766,139.48016357421875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 2.869999885559082,62.84983825683594 2.869999885559082,62.84983825683594 C2.869999885559082,62.84983825683594 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,36.279998779296875,134.95260620117188)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,65.9373779296875 0,65.9373779296875 C0,65.9373779296875 2.890000104904175,64.12738037109375 2.890000104904175,64.12738037109375 C2.890000104904175,64.12738037109375 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,41.48999786376953,129.1475372314453)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,68.46246337890625 0,68.46246337890625 C0,68.46246337890625 2.869999885559082,66.65245819091797 2.869999885559082,66.65245819091797 C2.869999885559082,66.65245819091797 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,46.68000030517578,129.7101593017578)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 2.869999885559082,62.84983825683594 2.869999885559082,62.84983825683594 C2.869999885559082,62.84983825683594 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,51.86000061035156,125.19261932373047)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,65.9373779296875 0,65.9373779296875 C0,65.9373779296875 2.890000104904175,64.12738037109375 2.890000104904175,64.12738037109375 C2.890000104904175,64.12738037109375 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,57.04999923706055,120.64508056640625)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 2.869999885559082,65.40492248535156 2.869999885559082,65.40492248535156 C2.869999885559082,65.40492248535156 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,62.21999740600586,118.68262481689453)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,65.9373779296875 0,65.9373779296875 C0,65.9373779296875 2.890000104904175,64.12738037109375 2.890000104904175,64.12738037109375 C2.890000104904175,64.12738037109375 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,67.41000366210938,115.4326171875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,65.90737915039062 0,65.90737915039062 C0,65.90737915039062 2.890000104904175,64.09738159179688 2.890000104904175,64.09738159179688 C2.890000104904175,64.09738159179688 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,72.62000274658203,109.6075439453125)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,68.49246215820312 0,68.49246215820312 C0,68.49246215820312 2.869999885559082,66.68245697021484 2.869999885559082,66.68245697021484 C2.869999885559082,66.68245697021484 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,77.7800064086914,106.36753845214844)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,68.49246215820312 0,68.49246215820312 C0,68.49246215820312 2.890000104904175,66.68245697021484 2.890000104904175,66.68245697021484 C2.890000104904175,66.68245697021484 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,82.9800033569336,104.37507629394531)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 2.869999885559082,65.40492248535156 2.869999885559082,65.40492248535156 C2.869999885559082,65.40492248535156 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,88.13999938964844,101.13507080078125)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 2.890000104904175,65.40492248535156 2.890000104904175,65.40492248535156 C2.890000104904175,65.40492248535156 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,93.34000396728516,96.6075439453125)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,68.46246337890625 0,68.46246337890625 C0,68.46246337890625 2.890000104904175,66.65245819091797 2.890000104904175,66.65245819091797 C2.890000104904175,66.65245819091797 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,98.54000091552734,94.61508178710938)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 2.869999885559082,65.40492248535156 2.869999885559082,65.40492248535156 C2.869999885559082,65.40492248535156 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,103.70000457763672,90.0975341796875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,68.49246215820312 0,68.49246215820312 C0,68.49246215820312 2.890000104904175,66.68245697021484 2.890000104904175,66.68245697021484 C2.890000104904175,66.68245697021484 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,108.90999603271484,90.66015625)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.869999885559082,0 C2.869999885559082,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 2.869999885559082,62.84983825683594 2.869999885559082,62.84983825683594 C2.869999885559082,62.84983825683594 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,0 2.869999885559082,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,114.06999969482422,84.86508178710938)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 2.890000104904175,65.40492248535156 2.890000104904175,65.40492248535156 C2.890000104904175,65.40492248535156 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,238.52999877929688,10.577701568603516)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,61.57229995727539 2.890000104904175,61.57229995727539 C2.890000104904175,61.57229995727539 0,63.382301330566406 0,63.382301330566406 C0,63.382301330566406 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,233.3300018310547,13.847702026367188)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,61.57229995727539 2.890000104904175,61.57229995727539 C2.890000104904175,61.57229995727539 0,63.382301330566406 0,63.382301330566406 C0,63.382301330566406 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,228.1800079345703,17.08769989013672)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,61.57229995727539 2.869999885559082,61.57229995727539 C2.869999885559082,61.57229995727539 0,63.382301330566406 0,63.382301330566406 C0,63.382301330566406 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,222.97999572753906,17.78261947631836)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,64.12738037109375 2.890000104904175,64.12738037109375 C2.890000104904175,64.12738037109375 0,65.9373779296875 0,65.9373779296875 C0,65.9373779296875 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,217.8100128173828,19.775081634521484)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,65.40492248535156 2.869999885559082,65.40492248535156 C2.869999885559082,65.40492248535156 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,212.61000061035156,25.570159912109375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,62.84983825683594 2.869999885559082,62.84983825683594 C2.869999885559082,62.84983825683594 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,207.41000366210938,28.840160369873047)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,62.84983825683594 2.890000104904175,62.84983825683594 C2.890000104904175,62.84983825683594 0,64.65984344482422 0,64.65984344482422 C0,64.65984344482422 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,202.24000549316406,28.25754165649414)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,66.68245697021484 2.869999885559082,66.68245697021484 C2.869999885559082,66.68245697021484 0,68.49246215820312 0,68.49246215820312 C0,68.49246215820312 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,197.0500030517578,30.20999526977539)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,191.85000610351562,33.4900016784668)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,186.69000244140625,36.7400016784668)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,67.95999908447266 2.869999885559082,67.95999908447266 C2.869999885559082,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,181.49000549316406,40.0099983215332)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,176.32000732421875,43.249996185302734)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,67.95999908447266 2.869999885559082,67.95999908447266 C2.869999885559082,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,171.12001037597656,46.499996185302734)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,165.9199981689453,49.77000045776367)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,160.760009765625,52.999996185302734)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,67.95999908447266 2.869999885559082,67.95999908447266 C2.869999885559082,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,155.55999755859375,56.28000259399414)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,150.3900146484375,59.52000045776367)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,67.95999908447266 2.869999885559082,67.95999908447266 C2.869999885559082,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,145.1800079345703,62.79000473022461)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.93000030517578 2.890000104904175,67.93000030517578 C2.890000104904175,67.93000030517578 0,69.73999786376953 0,69.73999786376953 C0,69.73999786376953 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,140,66.02999877929688)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,67.95999908447266 2.890000104904175,67.95999908447266 C2.890000104904175,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,134.8400115966797,69.27999877929688)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,67.95999908447266 2.869999885559082,67.95999908447266 C2.869999885559082,67.95999908447266 0,69.7699966430664 0,69.7699966430664 C0,69.7699966430664 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,129.6300048828125,73.82754516601562)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,66.68245697021484 2.890000104904175,66.68245697021484 C2.890000104904175,66.68245697021484 0,68.49246215820312 0,68.49246215820312 C0,68.49246215820312 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,124.45999908447266,78.34507751464844)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,1.809999942779541 C0,1.809999942779541 2.869999885559082,0 2.869999885559082,0 C2.869999885559082,0 2.869999885559082,65.40492248535156 2.869999885559082,65.40492248535156 C2.869999885559082,65.40492248535156 0,67.21492004394531 0,67.21492004394531 C0,67.21492004394531 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,1.809999942779541 0,1.809999942779541z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,119.27000427246094,81.61508178710938)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.890000104904175,0 C2.890000104904175,0 0,1.809999942779541 0,1.809999942779541 C0,1.809999942779541 0,67.18492126464844 0,67.18492126464844 C0,67.18492126464844 2.890000104904175,65.37492370605469 2.890000104904175,65.37492370605469 C2.890000104904175,65.37492370605469 2.890000104904175,0 2.890000104904175,0 C2.890000104904175,0 2.890000104904175,0 2.890000104904175,0z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,14.55000114440918,124.96000671386719)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,3.0799999237060547 3.0299999713897705,3.0799999237060547 C3.0299999713897705,3.0799999237060547 1.5,8.300000190734863 1.5,8.300000190734863 C1.5,8.300000190734863 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891z M3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 0,10.6899995803833 0,10.6899995803833 C0,10.6899995803833 0,9.199999809265137 0,9.199999809265137 C0,9.199999809265137 2.609999895095825,1.3799999952316284 2.609999895095825,1.3799999952316284 C2.609999895095825,1.3799999952316284 4.820000171661377,0 4.820000171661377,0 C4.820000171661377,0 4.820000171661377,6.21999979019165 4.820000171661377,6.21999979019165 C4.820000171661377,6.21999979019165 5.809999942779541,5.610000133514404 5.809999942779541,5.610000133514404 C5.809999942779541,5.610000133514404 5.809999942779541,7.050000190734863 5.809999942779541,7.050000190734863 C5.809999942779541,7.050000190734863 4.820000171661377,7.659999847412109 4.820000171661377,7.659999847412109 C4.820000171661377,7.659999847412109 4.820000171661377,10 4.820000171661377,10 C4.820000171661377,10 3.0299999713897705,11.109999656677246 3.0299999713897705,11.109999656677246 C3.0299999713897705,11.109999656677246 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,21.049999237060547,121.52999877929688)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M3.4100000858306885,2.690000057220459 C3.4100000858306885,2.319999933242798 3.3399999141693115,2.0799999237060547 3.2200000286102295,1.9500000476837158 C3.0999999046325684,1.8200000524520874 2.9100000858306885,1.8200000524520874 2.700000047683716,1.9500000476837158 C2.4700000286102295,2.109999895095825 2.2799999713897705,2.319999933242798 2.1600000858306885,2.609999895095825 C2.0399999618530273,2.9000000953674316 1.9700000286102295,3.2300000190734863 1.9700000286102295,3.5999999046325684 C1.9700000286102295,4.639999866485596 2.2100000381469727,4.980000019073486 2.700000047683716,4.690000057220459 C3.1700000762939453,4.400000095367432 3.4100000858306885,3.7300000190734863 3.4100000858306885,2.690000057220459 C3.4100000858306885,2.690000057220459 3.4100000858306885,2.690000057220459 3.4100000858306885,2.690000057220459z M3.359999895095825,8.510000228881836 C3.450000047683716,8.140000343322754 3.5,7.71999979019165 3.5,7.210000038146973 C3.5,6.760000228881836 3.4600000381469727,6.440000057220459 3.3399999141693115,6.230000019073486 C3.2200000286102295,6.039999961853027 3.009999990463257,6.039999961853027 2.700000047683716,6.230000019073486 C2.369999885559082,6.440000057220459 2.1600000858306885,6.710000038146973 2.0399999618530273,7.079999923706055 C1.9199999570846558,7.449999809265137 1.8799999952316284,7.880000114440918 1.8799999952316284,8.359999656677246 C1.8799999952316284,8.8100004196167 1.9199999570846558,9.130000114440918 2.0399999618530273,9.369999885559082 C2.1600000858306885,9.579999923706055 2.369999885559082,9.600000381469727 2.700000047683716,9.390000343322754 C3.049999952316284,9.180000305175781 3.2699999809265137,8.880000114440918 3.359999895095825,8.510000228881836 C3.359999895095825,8.510000228881836 3.359999895095825,8.510000228881836 3.359999895095825,8.510000228881836z M0.019999999552965164,9.470000267028809 C0.019999999552965164,8.90999984741211 0.11999999731779099,8.350000381469727 0.33000001311302185,7.820000171661377 C0.5199999809265137,7.289999961853027 0.8199999928474426,6.789999961853027 1.2000000476837158,6.360000133514404 C0.8899999856948853,6.329999923706055 0.6600000262260437,6.179999828338623 0.44999998807907104,5.940000057220459 C0.25999999046325684,5.670000076293945 0.1599999964237213,5.269999980926514 0.1599999964237213,4.739999771118164 C0.1599999964237213,3.9200000762939453 0.3700000047683716,3.1500000953674316 0.8199999928474426,2.430000066757202 C1.2400000095367432,1.7100000381469727 1.8799999952316284,1.0800000429153442 2.700000047683716,0.5699999928474426 C3.5199999809265137,0.05999999865889549 4.139999866485596,-0.10000000149011612 4.559999942779541,0.05999999865889549 C4.980000019073486,0.25 5.190000057220459,0.7300000190734863 5.190000057220459,1.5499999523162842 C5.190000057220459,2.109999895095825 5.099999904632568,2.640000104904175 4.909999847412109,3.119999885559082 C4.71999979019165,3.5999999046325684 4.480000019073486,4.050000190734863 4.179999828338623,4.46999979019165 C4.559999942779541,4.420000076293945 4.860000133514404,4.550000190734863 5.050000190734863,4.869999885559082 C5.239999771118164,5.159999847412109 5.360000133514404,5.619999885559082 5.360000133514404,6.199999809265137 C5.360000133514404,7.130000114440918 5.139999866485596,7.980000019073486 4.71999979019165,8.779999732971191 C4.300000190734863,9.579999923706055 3.619999885559082,10.25 2.680000066757202,10.829999923706055 C0.8899999856948853,11.949999809265137 0,11.489999771118164 0,9.470000267028809 C0,9.470000267028809 0.019999999552965164,9.470000267028809 0.019999999552965164,9.470000267028809 C0.019999999552965164,9.470000267028809 0.019999999552965164,9.470000267028809 0.019999999552965164,9.470000267028809z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,27.060001373291016,117.25)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.7300000190734863,2.630000114440918 C2.7300000190734863,2.630000114440918 0,4.329999923706055 0,4.329999923706055 C0,4.329999923706055 0,2.869999885559082 0,2.869999885559082 C0,2.869999885559082 4.579999923706055,0 4.579999923706055,0 C4.579999923706055,0 4.579999923706055,1.25 4.579999923706055,1.25 C4.579999923706055,1.25 2.4700000286102295,11.329999923706055 2.4700000286102295,11.329999923706055 C2.4700000286102295,11.329999923706055 0.6100000143051147,12.5 0.6100000143051147,12.5 C0.6100000143051147,12.5 2.700000047683716,2.630000114440918 2.700000047683716,2.630000114440918 C2.700000047683716,2.630000114440918 2.7300000190734863,2.630000114440918 2.7300000190734863,2.630000114440918 C2.7300000190734863,2.630000114440918 2.7300000190734863,2.630000114440918 2.7300000190734863,2.630000114440918z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,85.94000244140625,66.02000427246094)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0.9900000095367432,12.199999809265137 C0.6100000143051147,12.199999809265137 0.3499999940395355,12.020000457763672 0.20999999344348907,11.670000076293945 C0.07000000029802322,11.319999694824219 0,10.789999961853027 0,10.130000114440918 C0,10.130000114440918 1.8600000143051147,8.960000038146973 1.8600000143051147,8.960000038146973 C1.8600000143051147,9.539999961853027 1.899999976158142,9.90999984741211 2.0199999809265137,10.100000381469727 C2.140000104904175,10.289999961853027 2.3499999046325684,10.289999961853027 2.6600000858306885,10.100000381469727 C2.9200000762939453,9.9399995803833 3.0799999237060547,9.760000228881836 3.200000047683716,9.520000457763672 C3.319999933242798,9.279999732971191 3.390000104904175,9.010000228881836 3.4100000858306885,8.6899995803833 C3.430000066757202,8.369999885559082 3.450000047683716,7.980000019073486 3.450000047683716,7.449999809265137 C3.450000047683716,6.840000152587891 3.4100000858306885,6.409999847412109 3.2899999618530273,6.199999809265137 C3.1700000762939453,5.960000038146973 2.940000057220459,5.960000038146973 2.609999895095825,6.199999809265137 C2.1600000858306885,6.489999771118164 1.8799999952316284,6.96999979019165 1.7599999904632568,7.630000114440918 C1.7599999904632568,7.630000114440918 0.11999999731779099,8.670000076293945 0.11999999731779099,8.670000076293945 C0.11999999731779099,8.670000076293945 0.25999999046325684,2.9000000953674316 0.25999999046325684,2.9000000953674316 C0.25999999046325684,2.9000000953674316 4.860000133514404,0 4.860000133514404,0 C4.860000133514404,0 4.860000133514404,1.649999976158142 4.860000133514404,1.649999976158142 C4.860000133514404,1.649999976158142 1.8300000429153442,3.559999942779541 1.8300000429153442,3.559999942779541 C1.8300000429153442,3.559999942779541 1.7400000095367432,5.849999904632568 1.7400000095367432,5.849999904632568 C1.8600000143051147,5.639999866485596 2.049999952316284,5.400000095367432 2.3299999237060547,5.130000114440918 C2.609999895095825,4.860000133514404 2.9100000858306885,4.630000114440918 3.2200000286102295,4.440000057220459 C3.9000000953674316,4.010000228881836 4.420000076293945,3.9700000286102295 4.769999980926514,4.309999942779541 C5.119999885559082,4.630000114440918 5.289999961853027,5.289999961853027 5.289999961853027,6.300000190734863 C5.289999961853027,7.099999904632568 5.21999979019165,7.789999961853027 5.079999923706055,8.399999618530273 C4.940000057220459,9.010000228881836 4.679999828338623,9.600000381469727 4.28000020980835,10.130000114440918 C3.880000114440918,10.65999984741211 3.3399999141693115,11.170000076293945 2.609999895095825,11.649999618530273 C1.9299999475479126,12.069999694824219 1.409999966621399,12.279999732971191 1.0299999713897705,12.279999732971191 C1.0299999713897705,12.279999732971191 0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137 C0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,91.95999908447266,62.22999954223633)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,3.0799999237060547 3.0299999713897705,3.0799999237060547 C3.0299999713897705,3.0799999237060547 1.5,8.289999961853027 1.5,8.289999961853027 C1.5,8.289999961853027 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891z M3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 0,10.6899995803833 0,10.6899995803833 C0,10.6899995803833 0,9.199999809265137 0,9.199999809265137 C0,9.199999809265137 2.609999895095825,1.3799999952316284 2.609999895095825,1.3799999952316284 C2.609999895095825,1.3799999952316284 4.820000171661377,0 4.820000171661377,0 C4.820000171661377,0 4.820000171661377,6.21999979019165 4.820000171661377,6.21999979019165 C4.820000171661377,6.21999979019165 5.809999942779541,5.610000133514404 5.809999942779541,5.610000133514404 C5.809999942779541,5.610000133514404 5.809999942779541,7.050000190734863 5.809999942779541,7.050000190734863 C5.809999942779541,7.050000190734863 4.820000171661377,7.659999847412109 4.820000171661377,7.659999847412109 C4.820000171661377,7.659999847412109 4.820000171661377,10 4.820000171661377,10 C4.820000171661377,10 3.0299999713897705,11.109999656677246 3.0299999713897705,11.109999656677246 C3.0299999713897705,11.109999656677246 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,98.45000457763672,58.749996185302734)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0.6399999856948853,11.40999984741211 C0.2199999988079071,11.140000343322754 0,10.529999732971191 0,9.569999694824219 C0,9.569999694824219 0,9.229999542236328 0,9.229999542236328 C0,9.229999542236328 1.899999976158142,8.029999732971191 1.899999976158142,8.029999732971191 C1.899999976158142,8.029999732971191 1.899999976158142,8.380000114440918 1.899999976158142,8.380000114440918 C1.899999976158142,8.880000114440918 1.9700000286102295,9.199999809265137 2.0899999141693115,9.359999656677246 C2.2100000381469727,9.520000457763672 2.4200000762939453,9.5 2.7300000190734863,9.3100004196167 C3.0399999618530273,9.119999885559082 3.25,8.880000114440918 3.3399999141693115,8.59000015258789 C3.4600000381469727,8.300000190734863 3.5,7.900000095367432 3.5,7.389999866485596 C3.5,6.889999866485596 3.430000066757202,6.519999980926514 3.2699999809265137,6.360000133514404 C3.109999895095825,6.199999809265137 2.819999933242798,6.25 2.4000000953674316,6.489999771118164 C2.4000000953674316,6.489999771118164 2.2799999713897705,6.570000171661377 2.069999933242798,6.679999828338623 C2.069999933242798,6.679999828338623 2.069999933242798,5.289999961853027 2.069999933242798,5.289999961853027 C2.069999933242798,5.289999961853027 2.369999885559082,5.110000133514404 2.369999885559082,5.110000133514404 C2.819999933242798,4.840000152587891 3.109999895095825,4.519999980926514 3.2699999809265137,4.199999809265137 C3.430000066757202,3.859999895095825 3.5299999713897705,3.430000066757202 3.5299999713897705,2.9000000953674316 C3.5299999713897705,2.4700000286102295 3.4600000381469727,2.180000066757202 3.3399999141693115,2.049999952316284 C3.2200000286102295,1.9199999570846558 3.009999990463257,1.940000057220459 2.700000047683716,2.130000114440918 C2.4000000953674316,2.319999933242798 2.2100000381469727,2.559999942779541 2.0899999141693115,2.8499999046325684 C1.9700000286102295,3.140000104904175 1.9299999475479126,3.509999990463257 1.9299999475479126,3.940000057220459 C1.9299999475479126,3.940000057220459 1.9299999475479126,4.389999866485596 1.9299999475479126,4.389999866485596 C1.9299999475479126,4.389999866485596 0.019999999552965164,5.590000152587891 0.019999999552965164,5.590000152587891 C0.019999999552965164,5.590000152587891 0.019999999552965164,5.050000190734863 0.019999999552965164,5.050000190734863 C0.019999999552965164,4.170000076293945 0.25999999046325684,3.3499999046325684 0.7300000190734863,2.5799999237060547 C1.2000000476837158,1.809999942779541 1.850000023841858,1.1399999856948853 2.700000047683716,0.6100000143051147 C3.549999952316284,0.07999999821186066 4.230000019073486,-0.10000000149011612 4.699999809265137,0.05999999865889549 C5.170000076293945,0.2199999988079071 5.409999847412109,0.75 5.409999847412109,1.600000023841858 C5.409999847412109,2.1600000858306885 5.28000020980835,2.7100000381469727 5.050000190734863,3.2699999809265137 C4.809999942779541,3.799999952316284 4.519999980926514,4.260000228881836 4.139999866485596,4.579999923706055 C4.989999771118164,4.369999885559082 5.409999847412109,4.860000133514404 5.409999847412109,6.139999866485596 C5.409999847412109,7.099999904632568 5.190000057220459,8 4.769999980926514,8.800000190734863 C4.349999904632568,9.619999885559082 3.6700000762939453,10.319999694824219 2.7300000190734863,10.899999618530273 C1.7699999809265137,11.510000228881836 1.0800000429153442,11.680000305175781 0.6600000262260437,11.40999984741211 C0.6600000262260437,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 C0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,149.41000366210938,52.5)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0.6399999856948853,11.40999984741211 C0.2199999988079071,11.140000343322754 0,10.529999732971191 0,9.569999694824219 C0,9.569999694824219 0,9.229999542236328 0,9.229999542236328 C0,9.229999542236328 1.899999976158142,8.029999732971191 1.899999976158142,8.029999732971191 C1.899999976158142,8.029999732971191 1.899999976158142,8.380000114440918 1.899999976158142,8.380000114440918 C1.899999976158142,8.880000114440918 1.9700000286102295,9.199999809265137 2.0899999141693115,9.359999656677246 C2.2100000381469727,9.520000457763672 2.4200000762939453,9.5 2.7300000190734863,9.3100004196167 C3.0399999618530273,9.119999885559082 3.25,8.880000114440918 3.3399999141693115,8.59000015258789 C3.4600000381469727,8.300000190734863 3.5,7.900000095367432 3.5,7.389999866485596 C3.5,6.889999866485596 3.430000066757202,6.519999980926514 3.2699999809265137,6.360000133514404 C3.109999895095825,6.199999809265137 2.819999933242798,6.25 2.4000000953674316,6.489999771118164 C2.4000000953674316,6.489999771118164 2.2799999713897705,6.550000190734863 2.069999933242798,6.679999828338623 C2.069999933242798,6.679999828338623 2.069999933242798,5.289999961853027 2.069999933242798,5.289999961853027 C2.069999933242798,5.289999961853027 2.369999885559082,5.110000133514404 2.369999885559082,5.110000133514404 C2.819999933242798,4.849999904632568 3.109999895095825,4.519999980926514 3.2699999809265137,4.199999809265137 C3.430000066757202,3.859999895095825 3.5299999713897705,3.430000066757202 3.5299999713897705,2.9000000953674316 C3.5299999713897705,2.4700000286102295 3.4600000381469727,2.180000066757202 3.3399999141693115,2.049999952316284 C3.2200000286102295,1.9199999570846558 3.009999990463257,1.940000057220459 2.700000047683716,2.130000114440918 C2.4000000953674316,2.319999933242798 2.2100000381469727,2.559999942779541 2.0899999141693115,2.8499999046325684 C1.9700000286102295,3.140000104904175 1.9299999475479126,3.509999990463257 1.9299999475479126,3.940000057220459 C1.9299999475479126,3.940000057220459 1.9299999475479126,4.389999866485596 1.9299999475479126,4.389999866485596 C1.9299999475479126,4.389999866485596 0.019999999552965164,5.590000152587891 0.019999999552965164,5.590000152587891 C0.019999999552965164,5.590000152587891 0.019999999552965164,5.050000190734863 0.019999999552965164,5.050000190734863 C0.019999999552965164,4.170000076293945 0.25999999046325684,3.3499999046325684 0.7300000190734863,2.5799999237060547 C1.2000000476837158,1.809999942779541 1.850000023841858,1.1399999856948853 2.700000047683716,0.6100000143051147 C3.569999933242798,0.07999999821186066 4.230000019073486,-0.10000000149011612 4.699999809265137,0.05999999865889549 C5.170000076293945,0.2199999988079071 5.409999847412109,0.75 5.409999847412109,1.600000023841858 C5.409999847412109,2.1600000858306885 5.28000020980835,2.7100000381469727 5.050000190734863,3.2699999809265137 C4.809999942779541,3.799999952316284 4.519999980926514,4.260000228881836 4.139999866485596,4.579999923706055 C4.989999771118164,4.369999885559082 5.409999847412109,4.860000133514404 5.409999847412109,6.139999866485596 C5.409999847412109,7.099999904632568 5.190000057220459,8 4.769999980926514,8.800000190734863 C4.349999904632568,9.619999885559082 3.6700000762939453,10.319999694824219 2.7300000190734863,10.899999618530273 C1.7699999809265137,11.510000228881836 1.0800000429153442,11.680000305175781 0.6600000262260437,11.40999984741211 C0.6600000262260437,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 C0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,155.6999969482422,48.51000213623047)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,11.119999885559082 C0,11.119999885559082 2.450000047683716,5.849999904632568 2.450000047683716,5.849999904632568 C2.450000047683716,5.849999904632568 2.630000114440918,5.449999809265137 2.630000114440918,5.449999809265137 C2.940000057220459,4.809999942779541 3.1500000953674316,4.28000020980835 3.2899999618530273,3.880000114440918 C3.430000066757202,3.4800000190734863 3.5,3.109999895095825 3.5,2.740000009536743 C3.5,2.4200000762939453 3.440000057220459,2.2100000381469727 3.319999933242798,2.130000114440918 C3.200000047683716,2.049999952316284 3.009999990463257,2.0799999237060547 2.7699999809265137,2.2100000381469727 C2.440000057220459,2.4200000762939453 2.2100000381469727,2.690000057220459 2.069999933242798,3.0299999713897705 C1.9299999475479126,3.380000114440918 1.8799999952316284,3.7799999713897705 1.8799999952316284,4.260000228881836 C1.8799999952316284,4.260000228881836 1.8799999952316284,4.710000038146973 1.8799999952316284,4.710000038146973 C1.8799999952316284,4.710000038146973 0.019999999552965164,5.880000114440918 0.019999999552965164,5.880000114440918 C0.019999999552965164,5.880000114440918 0.019999999552965164,5.369999885559082 0.019999999552965164,5.369999885559082 C0.019999999552965164,4.440000057220459 0.23000000417232513,3.559999942779541 0.6800000071525574,2.740000009536743 C1.1299999952316284,1.9199999570846558 1.809999942779541,1.2000000476837158 2.75,0.6100000143051147 C3.619999885559082,0.07999999821186066 4.28000020980835,-0.10999999940395355 4.730000019073486,0.05000000074505806 C5.179999828338623,0.23999999463558197 5.409999847412109,0.75 5.409999847412109,1.5700000524520874 C5.409999847412109,2.0799999237060547 5.309999942779541,2.609999895095825 5.119999885559082,3.140000104904175 C4.929999828338623,3.6700000762939453 4.630000114440918,4.360000133514404 4.230000019073486,5.210000038146973 C4.230000019073486,5.210000038146973 4.090000152587891,5.510000228881836 4.090000152587891,5.510000228881836 C4.090000152587891,5.510000228881836 2.1600000858306885,9.600000381469727 2.1600000858306885,9.600000381469727 C2.1600000858306885,9.600000381469727 5.119999885559082,7.739999771118164 5.119999885559082,7.739999771118164 C5.119999885559082,7.739999771118164 5.119999885559082,9.25 5.119999885559082,9.25 C5.119999885559082,9.25 0,12.470000267028809 0,12.470000267028809 C0,12.470000267028809 0,11.119999885559082 0,11.119999885559082 C0,11.119999885559082 0,11.119999885559082 0,11.119999885559082z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,161.9600067138672,44.66999816894531)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M3.380000114440918,2.700000047683716 C3.380000114440918,2.3299999237060547 3.319999933242798,2.0899999141693115 3.200000047683716,1.9600000381469727 C3.0799999237060547,1.8300000429153442 2.890000104904175,1.8300000429153442 2.680000066757202,1.9600000381469727 C2.450000047683716,2.119999885559082 2.259999990463257,2.3299999237060547 2.140000104904175,2.619999885559082 C2.0199999809265137,2.9100000858306885 1.9500000476837158,3.240000009536743 1.9500000476837158,3.609999895095825 C1.9500000476837158,4.650000095367432 2.190000057220459,4.989999771118164 2.680000066757202,4.699999809265137 C3.1500000953674316,4.409999847412109 3.380000114440918,3.740000009536743 3.380000114440918,2.700000047683716 C3.380000114440918,2.700000047683716 3.380000114440918,2.700000047683716 3.380000114440918,2.700000047683716z M3.3399999141693115,8.529999732971191 C3.430000066757202,8.15999984741211 3.4800000190734863,7.730000019073486 3.4800000190734863,7.21999979019165 C3.4800000190734863,6.769999980926514 3.430000066757202,6.449999809265137 3.309999942779541,6.239999771118164 C3.190000057220459,6.050000190734863 2.9800000190734863,6.050000190734863 2.680000066757202,6.239999771118164 C2.3499999046325684,6.449999809265137 2.140000104904175,6.71999979019165 2.0199999809265137,7.090000152587891 C1.899999976158142,7.460000038146973 1.8600000143051147,7.889999866485596 1.8600000143051147,8.369999885559082 C1.8600000143051147,8.819999694824219 1.899999976158142,9.140000343322754 2.0199999809265137,9.380000114440918 C2.140000104904175,9.59000015258789 2.3499999046325684,9.609999656677246 2.680000066757202,9.399999618530273 C3.0299999713897705,9.1899995803833 3.25,8.899999618530273 3.3399999141693115,8.529999732971191 C3.3399999141693115,8.529999732971191 3.3399999141693115,8.529999732971191 3.3399999141693115,8.529999732971191z M0,9.479999542236328 C0,8.920000076293945 0.10000000149011612,8.359999656677246 0.3100000023841858,7.829999923706055 C0.5,7.300000190734863 0.7900000214576721,6.800000190734863 1.1699999570846558,6.369999885559082 C0.8600000143051147,6.340000152587891 0.6299999952316284,6.190000057220459 0.41999998688697815,5.949999809265137 C0.23000000417232513,5.679999828338623 0.14000000059604645,5.28000020980835 0.14000000059604645,4.75 C0.14000000059604645,3.930000066757202 0.3499999940395355,3.1600000858306885 0.800000011920929,2.440000057220459 C1.2200000286102295,1.7200000286102295 1.8600000143051147,1.090000033378601 2.680000066757202,0.5799999833106995 C3.5,0.07999999821186066 4.110000133514404,-0.11999999731779099 4.559999942779541,0.07000000029802322 C4.980000019073486,0.25999999046325684 5.190000057220459,0.7400000095367432 5.190000057220459,1.559999942779541 C5.190000057220459,2.119999885559082 5.099999904632568,2.6500000953674316 4.909999847412109,3.130000114440918 C4.71999979019165,3.609999895095825 4.489999771118164,4.050000190734863 4.179999828338623,4.480000019073486 C4.559999942779541,4.429999828338623 4.860000133514404,4.559999942779541 5.050000190734863,4.880000114440918 C5.239999771118164,5.170000076293945 5.360000133514404,5.630000114440918 5.360000133514404,6.210000038146973 C5.360000133514404,7.139999866485596 5.139999866485596,7.989999771118164 4.71999979019165,8.789999961853027 C4.300000190734863,9.59000015258789 3.619999885559082,10.260000228881836 2.680000066757202,10.84000015258789 C0.8899999856948853,11.960000038146973 0,11.5 0,9.479999542236328 C0,9.479999542236328 0,9.479999542236328 0,9.479999542236328z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,209.0900115966797,8.030000686645508)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,3.0799999237060547 3.0299999713897705,3.0799999237060547 C3.0299999713897705,3.0799999237060547 1.5,8.300000190734863 1.5,8.300000190734863 C1.5,8.300000190734863 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 C3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891 3.0299999713897705,7.340000152587891z M3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 0,10.6899995803833 0,10.6899995803833 C0,10.6899995803833 0,9.199999809265137 0,9.199999809265137 C0,9.199999809265137 2.609999895095825,1.3799999952316284 2.609999895095825,1.3799999952316284 C2.609999895095825,1.3799999952316284 4.820000171661377,0 4.820000171661377,0 C4.820000171661377,0 4.820000171661377,6.21999979019165 4.820000171661377,6.21999979019165 C4.820000171661377,6.21999979019165 5.809999942779541,5.610000133514404 5.809999942779541,5.610000133514404 C5.809999942779541,5.610000133514404 5.809999942779541,7.050000190734863 5.809999942779541,7.050000190734863 C5.809999942779541,7.050000190734863 4.820000171661377,7.659999847412109 4.820000171661377,7.659999847412109 C4.820000171661377,7.659999847412109 4.820000171661377,10 4.820000171661377,10 C4.820000171661377,10 3.0299999713897705,11.109999656677246 3.0299999713897705,11.109999656677246 C3.0299999713897705,11.109999656677246 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 C3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672 3.0299999713897705,8.770000457763672z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,215.5800018310547,4.570000171661377)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0.6399999856948853,11.40999984741211 C0.2199999988079071,11.140000343322754 0,10.529999732971191 0,9.569999694824219 C0,9.569999694824219 0,9.229999542236328 0,9.229999542236328 C0,9.229999542236328 1.899999976158142,8.029999732971191 1.899999976158142,8.029999732971191 C1.899999976158142,8.029999732971191 1.899999976158142,8.380000114440918 1.899999976158142,8.380000114440918 C1.899999976158142,8.890000343322754 1.9700000286102295,9.199999809265137 2.0899999141693115,9.359999656677246 C2.2100000381469727,9.520000457763672 2.4200000762939453,9.5 2.7300000190734863,9.3100004196167 C3.0299999713897705,9.119999885559082 3.25,8.880000114440918 3.3399999141693115,8.59000015258789 C3.4600000381469727,8.300000190734863 3.5,7.900000095367432 3.5,7.389999866485596 C3.5,6.880000114440918 3.440000057220459,6.519999980926514 3.2699999809265137,6.360000133514404 C3.109999895095825,6.199999809265137 2.819999933242798,6.25 2.4000000953674316,6.489999771118164 C2.4000000953674316,6.489999771118164 2.2799999713897705,6.559999942779541 2.069999933242798,6.670000076293945 C2.069999933242798,6.670000076293945 2.069999933242798,5.289999961853027 2.069999933242798,5.289999961853027 C2.069999933242798,5.289999961853027 2.369999885559082,5.110000133514404 2.369999885559082,5.110000133514404 C2.819999933242798,4.840000152587891 3.109999895095825,4.519999980926514 3.2699999809265137,4.199999809265137 C3.440000057220459,3.8499999046325684 3.5299999713897705,3.430000066757202 3.5299999713897705,2.9000000953674316 C3.5299999713897705,2.4700000286102295 3.4600000381469727,2.180000066757202 3.3399999141693115,2.049999952316284 C3.2200000286102295,1.9199999570846558 3.009999990463257,1.940000057220459 2.700000047683716,2.130000114440918 C2.4000000953674316,2.319999933242798 2.2100000381469727,2.559999942779541 2.0899999141693115,2.8499999046325684 C1.9700000286102295,3.140000104904175 1.9299999475479126,3.5199999809265137 1.9299999475479126,3.940000057220459 C1.9299999475479126,3.940000057220459 1.9299999475479126,4.389999866485596 1.9299999475479126,4.389999866485596 C1.9299999475479126,4.389999866485596 0.019999999552965164,5.579999923706055 0.019999999552965164,5.579999923706055 C0.019999999552965164,5.579999923706055 0.019999999552965164,5.050000190734863 0.019999999552965164,5.050000190734863 C0.019999999552965164,4.170000076293945 0.25999999046325684,3.3499999046325684 0.7300000190734863,2.5799999237060547 C1.2000000476837158,1.809999942779541 1.850000023841858,1.1399999856948853 2.700000047683716,0.6100000143051147 C3.569999933242798,0.07999999821186066 4.230000019073486,-0.10999999940395355 4.699999809265137,0.05000000074505806 C5.170000076293945,0.20999999344348907 5.409999847412109,0.75 5.409999847412109,1.600000023841858 C5.409999847412109,2.1600000858306885 5.28000020980835,2.7100000381469727 5.050000190734863,3.2699999809265137 C4.809999942779541,3.799999952316284 4.519999980926514,4.25 4.139999866485596,4.570000171661377 C4.989999771118164,4.360000133514404 5.409999847412109,4.860000133514404 5.409999847412109,6.139999866485596 C5.409999847412109,7.099999904632568 5.190000057220459,8 4.769999980926514,8.800000190734863 C4.349999904632568,9.619999885559082 3.6700000762939453,10.3100004196167 2.7300000190734863,10.899999618530273 C1.7699999809265137,11.510000228881836 1.0800000429153442,11.680000305175781 0.6600000262260437,11.40999984741211 C0.6600000262260437,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 C0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211 0.6399999856948853,11.40999984741211z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,221.9300079345703,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0.9900000095367432,12.199999809265137 C0.6100000143051147,12.199999809265137 0.3499999940395355,12.010000228881836 0.20999999344348907,11.670000076293945 C0.07000000029802322,11.319999694824219 0,10.789999961853027 0,10.130000114440918 C0,10.130000114440918 1.8600000143051147,8.960000038146973 1.8600000143051147,8.960000038146973 C1.8600000143051147,9.539999961853027 1.899999976158142,9.90999984741211 2.0199999809265137,10.100000381469727 C2.140000104904175,10.289999961853027 2.3499999046325684,10.289999961853027 2.6600000858306885,10.100000381469727 C2.9200000762939453,9.9399995803833 3.0799999237060547,9.760000228881836 3.200000047683716,9.520000457763672 C3.319999933242798,9.279999732971191 3.390000104904175,9.010000228881836 3.4100000858306885,8.6899995803833 C3.430000066757202,8.369999885559082 3.4600000381469727,7.96999979019165 3.4600000381469727,7.440000057220459 C3.4600000381469727,6.829999923706055 3.4100000858306885,6.409999847412109 3.2899999618530273,6.199999809265137 C3.1700000762939453,5.960000038146973 2.940000057220459,5.960000038146973 2.609999895095825,6.199999809265137 C2.1600000858306885,6.489999771118164 1.8799999952316284,6.96999979019165 1.7599999904632568,7.630000114440918 C1.7599999904632568,7.630000114440918 0.11999999731779099,8.670000076293945 0.11999999731779099,8.670000076293945 C0.11999999731779099,8.670000076293945 0.25999999046325684,2.9000000953674316 0.25999999046325684,2.9000000953674316 C0.25999999046325684,2.9000000953674316 4.860000133514404,0 4.860000133514404,0 C4.860000133514404,0 4.860000133514404,1.649999976158142 4.860000133514404,1.649999976158142 C4.860000133514404,1.649999976158142 1.8300000429153442,3.559999942779541 1.8300000429153442,3.559999942779541 C1.8300000429153442,3.559999942779541 1.7400000095367432,5.820000171661377 1.7400000095367432,5.820000171661377 C1.8600000143051147,5.610000133514404 2.049999952316284,5.369999885559082 2.3299999237060547,5.099999904632568 C2.609999895095825,4.840000152587891 2.9200000762939453,4.599999904632568 3.2200000286102295,4.409999847412109 C3.9000000953674316,3.990000009536743 4.420000076293945,3.940000057220459 4.769999980926514,4.28000020980835 C5.119999885559082,4.599999904632568 5.289999961853027,5.260000228881836 5.289999961853027,6.269999980926514 C5.289999961853027,7.070000171661377 5.21999979019165,7.769999980926514 5.079999923706055,8.380000114440918 C4.940000057220459,8.989999771118164 4.679999828338623,9.569999694824219 4.28000020980835,10.100000381469727 C3.880000114440918,10.65999984741211 3.3399999141693115,11.140000343322754 2.609999895095825,11.59000015258789 C1.9299999475479126,12.010000228881836 1.409999966621399,12.229999542236328 1.0299999713897705,12.229999542236328 C1.0299999713897705,12.229999542236328 0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137 C0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137 0.9900000095367432,12.199999809265137z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,39.39586639404297,135.577392578125)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.0199999809265137,0.550000011920929 C2.0199999809265137,-0.009999999776482582 1.5700000524520874,-0.17000000178813934 1.0099999904632568,0.18000000715255737 C0.44127753376960754,0.5299999713897705 0,1.2699999809265137 0,1.8300000429153442 C0,2.390000104904175 0.44127753376960754,2.549999952316284 1.0099999904632568,2.200000047683716 C1.5700000524520874,1.850000023841858 2.0199999809265137,1.1100000143051147 2.0199999809265137,0.550000011920929 C2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,93.87999725341797,85.37999725341797)"
                                        opacity="0.8722460014938225"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.0199999809265137,0.550000011920929 C2.0199999809265137,-0.009999999776482582 1.5700000524520874,-0.1599999964237213 1.0099999904632568,0.18000000715255737 C0.4399999976158142,0.5299999713897705 0,1.2699999809265137 0,1.8300000429153442 C0,2.390000104904175 0.4399999976158142,2.549999952316284 1.0099999904632568,2.200000047683716 C1.5700000524520874,1.850000023841858 2.0199999809265137,1.1100000143051147 2.0199999809265137,0.550000011920929 C2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,158.44000244140625,70.22000122070312)"
                                        opacity="0.8722460014938225"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.0199999809265137,0.550000011920929 C2.0199999809265137,-0.009999999776482582 1.5700000524520874,-0.17000000178813934 1.0099999904632568,0.18000000715255737 C0.44999998807907104,0.5299999713897705 0,1.2699999809265137 0,1.8300000429153442 C0,2.390000104904175 0.44999998807907104,2.549999952316284 1.0099999904632568,2.200000047683716 C1.5700000524520874,1.850000023841858 2.0199999809265137,1.1100000143051147 2.0199999809265137,0.550000011920929 C2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,218.23001098632812,25.479999542236328)"
                                        opacity="0.8722460014938225"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M2.0199999809265137,0.550000011920929 C2.0199999809265137,-0.009999999776482582 1.5700000524520874,-0.17000000178813934 1.0099999904632568,0.18000000715255737 C0.44999998807907104,0.5299999713897705 0,1.2699999809265137 0,1.8300000429153442 C0,2.390000104904175 0.44999998807907104,2.549999952316284 1.0099999904632568,2.200000047683716 C1.5700000524520874,1.850000023841858 2.0199999809265137,1.1100000143051147 2.0199999809265137,0.550000011920929 C2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929 2.0199999809265137,0.550000011920929z"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_40)"
                                      transform="matrix(1,0,0,1,541.780029296875,791.3099975585938)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_646)"
                                          fillOpacity={1}
                                          d=" M0,155.2899932861328 C0,155.2899932861328 0,155.75999450683594 0,155.75999450683594 C0.07000000029802322,157.75 1.2699999809265137,159.75 3.5999999046325684,161.27000427246094 C3.5999999046325684,161.27000427246094 143.36000061035156,252.5399932861328 143.36000061035156,252.5399932861328 C148.17999267578125,255.67999267578125 156.00999450683594,255.67999267578125 160.8300018310547,252.5399932861328 C160.8300018310547,252.5399932861328 386.70001220703125,105.04000091552734 386.70001220703125,105.04000091552734 C389.0299987792969,103.5199966430664 390.2200012207031,101.5199966430664 390.2900085449219,99.52999877929688 C390.2900085449219,99.52999877929688 390.2900085449219,99.08000183105469 390.2900085449219,99.08000183105469 C390.20001220703125,97.11000061035156 389,95.12000274658203 386.70001220703125,93.62999725341797 C386.70001220703125,93.62999725341797 246.92999267578125,2.3499999046325684 246.92999267578125,2.3499999046325684 C242.11000061035156,-0.7900000214576721 234.27999877929688,-0.7900000214576721 229.4600067138672,2.3499999046325684 C229.4600067138672,2.3499999046325684 3.5999999046325684,149.86000061035156 3.5999999046325684,149.86000061035156 C1.2999999523162842,151.3800048828125 0.09000000357627869,153.32000732421875 0,155.2899932861328 C0,155.2899932861328 0,155.2899932861328 0,155.2899932861328z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,20.30999755859375,11.69000244140625)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_650)"
                                          fillOpacity={1}
                                          d=" M138.25999450683594,224.1999969482422 C134.88999938964844,226.4199981689453 130.50999450683594,226.38999938964844 127.16999816894531,224.1300048828125 C127.16999816894531,224.1300048828125 12.430000305175781,146.60000610351562 12.430000305175781,146.60000610351562 C6.519999980926514,142.60000610351562 6.570000171661377,133.8800048828125 12.529999732971191,129.9600067138672 C12.529999732971191,129.9600067138672 204.60000610351562,3.6600000858306885 204.60000610351562,3.6600000858306885 C207.97000122070312,1.440000057220459 212.35000610351562,1.4700000286102295 215.69000244140625,3.7300000190734863 C215.69000244140625,3.7300000190734863 330.45001220703125,81.26000213623047 330.45001220703125,81.26000213623047 C336.3599853515625,85.26000213623047 336.29998779296875,93.9800033569336 330.3399963378906,97.9000015258789 C330.3399963378906,97.9000015258789 138.25999450683594,224.1999969482422 138.25999450683594,224.1999969482422 C138.25999450683594,224.1999969482422 138.25999450683594,224.1999969482422 138.25999450683594,224.1999969482422z"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_44)"
                                      transform="matrix(1,0,0,1,208.59999084472656,657)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_654)"
                                          fillOpacity={1}
                                          d=" M10.619999885559082,290.1400146484375 C10.619999885559082,290.1400146484375 78.69999694824219,245.14999389648438 78.69999694824219,245.14999389648438 C84.58000183105469,241.27000427246094 89.31999969482422,231.72999572753906 89.31999969482422,223.8300018310547 C89.31999969482422,223.8300018310547 89.31999969482422,8.920000076293945 89.31999969482422,8.920000076293945 C89.31999969482422,1.0199999809265137 84.58000183105469,-2.25 78.69999694824219,1.6299999952316284 C78.69999694824219,1.6299999952316284 10.619999885559082,46.619998931884766 10.619999885559082,46.619998931884766 C4.739999771118164,50.5 0,60.040000915527344 0,67.94000244140625 C0,67.94000244140625 0,282.8500061035156 0,282.8500061035156 C0,290.75 4.739999771118164,294.0199890136719 10.619999885559082,290.1400146484375 C10.619999885559082,290.1400146484375 10.619999885559082,290.1400146484375 10.619999885559082,290.1400146484375z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,6.209999084472656,5.899993896484375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="url(#__lottie_element_658)"
                                          fillOpacity={1}
                                          d=" M9.239999771118164,41.709999084472656 C9.239999771118164,41.709999084472656 16.200000762939453,37.15999984741211 16.200000762939453,37.15999984741211 C17.15999984741211,36.52000045776367 17.93000030517578,37.04999923706055 17.93000030517578,38.33000183105469 C17.93000030517578,41.54999923706055 19.889999389648438,42.880001068115234 22.309999465942383,41.279998779296875 C22.309999465942383,41.279998779296875 57.88999938964844,18.06999969482422 57.88999938964844,18.06999969482422 C60.310001373291016,16.5 62.27000045776367,12.619999885559082 62.27000045776367,9.399999618530273 C62.27000045776367,8.119999885559082 63.04999923706055,6.559999942779541 64.01000213623047,5.949999809265137 C64.01000213623047,5.949999809265137 70.95999908447266,1.399999976158142 70.95999908447266,1.399999976158142 C76.05999755859375,-1.9199999570846558 80.18000030517578,0.8700000047683716 80.18000030517578,7.619999885559082 C80.18000030517578,7.619999885559082 80.18000030517578,213.1999969482422 80.18000030517578,213.1999969482422 C80.18000030517578,219.9499969482422 76.04000091552734,228.1199951171875 70.95999908447266,231.44000244140625 C70.95999908447266,231.44000244140625 9.210000038146973,271.69000244140625 9.210000038146973,271.69000244140625 C4.110000133514404,275.010009765625 0,272.2200012207031 0,265.4700012207031 C0,265.4700012207031 0,59.88999938964844 0,59.88999938964844 C0,53.13999938964844 4.130000114440918,44.97999954223633 9.210000038146973,41.65999984741211 C9.210000038146973,41.65999984741211 9.239999771118164,41.709999084472656 9.239999771118164,41.709999084472656 C9.239999771118164,41.709999084472656 9.239999771118164,41.709999084472656 9.239999771118164,41.709999084472656z"
                                        />
                                      </g>
                                      <g
                                        clipPath="url(#__lottie_element_660)"
                                        transform="matrix(1,0,0,1,29.89000129699707,112.26000213623047)"
                                        opacity={1}
                                        style={{ mixBlendMode: "lighten", display: "block" }}
                                      >
                                        <g
                                          transform="matrix(1,0,0,1,14.499999046325684,11.729999542236328)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fill="rgb(255,255,255)"
                                            fillOpacity={1}
                                            d=" M12.40999984741211,6.360000133514404 C12.40999984741211,6.360000133514404 6.210000038146973,4.53000020980835 6.210000038146973,4.53000020980835 C6.210000038146973,4.53000020980835 0,12.140000343322754 0,12.140000343322754 C0,12.140000343322754 0,20.190000534057617 0,20.190000534057617 C0,20.190000534057617 6.210000038146973,20.6299991607666 6.210000038146973,20.6299991607666 C6.210000038146973,20.6299991607666 12.40999984741211,11.649999618530273 12.40999984741211,11.649999618530273 C12.40999984741211,11.649999618530273 23.420000076293945,5.289999961853027 23.420000076293945,5.289999961853027 C23.420000076293945,5.289999961853027 23.420000076293945,0 23.420000076293945,0 C23.420000076293945,0 12.40999984741211,6.360000133514404 12.40999984741211,6.360000133514404 C12.40999984741211,6.360000133514404 12.40999984741211,6.360000133514404 12.40999984741211,6.360000133514404z"
                                          />
                                        </g>
                                        <g
                                          transform="matrix(1,0,0,1,0,0)"
                                          opacity={1}
                                          style={{ display: "block" }}
                                        >
                                          <path
                                            fillRule="evenodd"
                                            fill="rgb(255,255,255)"
                                            fillOpacity={1}
                                            d=" M1.1100000143051147,21.670000076293945 C12.670000076293945,7.260000228881836 26.920000076293945,-0.9800000190734863 38.47999954223633,0.09000000357627869 C38.47999954223633,0.09000000357627869 36.2400016784668,5.840000152587891 36.2400016784668,5.840000152587891 C26.440000534057617,4.929999828338623 14.420000076293945,11.640000343322754 4.460000038146973,23.479999542236328 C4.460000038146973,23.479999542236328 4.460000038146973,43.970001220703125 4.460000038146973,43.970001220703125 C14.420000076293945,44.310001373291016 26.440000534057617,37.13999938964844 36.2400016784668,24.90999984741211 C36.2400016784668,24.90999984741211 38.47999954223633,28.079999923706055 38.47999954223633,28.079999923706055 C26.920000076293945,42.4900016784668 12.670000076293945,50.720001220703125 1.1100000143051147,49.650001525878906 C0.41999998688697815,49.59000015258789 0,48.9900016784668 0,48.06999969482422 C0,48.06999969482422 0,24.540000915527344 0,24.540000915527344 C0,23.6200008392334 0.41999998688697815,22.530000686645508 1.1100000143051147,21.670000076293945 C1.1100000143051147,21.670000076293945 1.1100000143051147,21.670000076293945 1.1100000143051147,21.670000076293945z"
                                          />
                                        </g>
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_48)"
                                      transform="matrix(1,0,0,1,171.6221923828125,681.502685546875)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        clipPath="url(#__lottie_element_670)"
                                        transform="matrix(1,0,0,1,0,0)"
                                        opacity="0.34"
                                        style={{ display: "block" }}
                                      >
                                        <g
                                          clipPath="url(#__lottie_element_674)"
                                          transform="matrix(1,0,0,1,0,0)"
                                          opacity={1}
                                          style={{ mixBlendMode: "overlay", display: "block" }}
                                        >
                                          <g
                                            clipPath="url(#__lottie_element_678)"
                                            transform="matrix(1,0,0,1,0,0)"
                                            opacity={1}
                                            style={{ display: "block" }}
                                          >
                                            <g
                                              transform="matrix(1,0,0,1,0,0)"
                                              opacity={1}
                                              style={{ display: "block" }}
                                            >
                                              <path
                                                fill="rgb(255,255,255)"
                                                fillOpacity={1}
                                                d=" M86.6344223022461,18.88097381591797 C41.277366638183594,47.907981872558594 4.162247657775879,113.38328552246094 3.9133048057556152,164.85052490234375 C3.6730844974517822,216.3177490234375 40.39287185668945,234.58189392089844 85.74993133544922,205.5548858642578 C131.10699462890625,176.5278778076172 168.22210693359375,111.05258178710938 168.47105407714844,59.58534240722656 C168.71127319335938,8.118107795715332 131.99148559570312,-10.146037101745605 86.6344223022461,18.88097381591797 C86.6344223022461,18.88097381591797 86.6344223022461,18.88097381591797 86.6344223022461,18.88097381591797z M85.72865295410156,210.0186309814453 C38.19599914550781,240.43057250976562 -0.2702203094959259,221.27066040039062 0,167.368896484375 C0.2489427775144577,113.43583679199219 39.123046875,44.83661651611328 86.65570068359375,14.455949783325195 C134.1883544921875,-15.955994606018066 172.65457153320312,3.1939213275909424 172.3843536376953,57.09697341918945 C172.13540649414062,111.03002166748047 133.2613067626953,179.62796020507812 85.72865295410156,210.0399169921875 C85.72865295410156,210.0399169921875 85.72865295410156,210.0186309814453 85.72865295410156,210.0186309814453 C85.72865295410156,210.0186309814453 85.72865295410156,210.0186309814453 85.72865295410156,210.0186309814453z"
                                              />
                                            </g>
                                            <g
                                              transform="matrix(1,0,0,1,9.793266296386719,12.769523620605469)"
                                              opacity={1}
                                              style={{ display: "block" }}
                                            >
                                              <path
                                                fill="rgb(255,255,255)"
                                                fillOpacity={1}
                                                d=" M76.76860809326172,17.23581886291504 C36.79234313964844,42.807411193847656 4.1109700202941895,100.47737884521484 3.9133048057556152,145.83444213867188 C3.715639591217041,191.19149780273438 36.032958984375,207.27005004882812 76.00922393798828,181.69845581054688 C115.98548889160156,156.12686157226562 148.6755828857422,98.45816802978516 148.8732452392578,53.101112365722656 C149.09219360351562,7.775331974029541 116.744873046875,-8.335772514343262 76.76860809326172,17.23581886291504 C76.76860809326172,17.23581886291504 76.76860809326172,17.23581886291504 76.76860809326172,17.23581886291504z M75.98794555664062,186.15347290039062 C33.857364654541016,213.1087188720703 -0.2189427763223648,196.1444091796875 0,148.35281372070312 C0.2189427763223648,100.56121063232422 34.69802474975586,39.7673225402832 76.7986068725586,12.81207275390625 C118.92919158935547,-14.14317512512207 153.0054931640625,2.821146011352539 152.7865447998047,50.61274337768555 C152.56761169433594,98.40433502197266 118.0885238647461,159.19822692871094 75.98794555664062,186.15347290039062 C75.98794555664062,186.15347290039062 75.98794555664062,186.15347290039062 75.98794555664062,186.15347290039062z"
                                              />
                                            </g>
                                            <g
                                              transform="matrix(1,0,0,1,19.587799072265625,25.509033203125)"
                                              opacity={1}
                                              style={{ display: "block" }}
                                            >
                                              <path
                                                fill="rgb(255,255,255)"
                                                fillOpacity={1}
                                                d=" M66.93279266357422,15.62321949005127 C32.3673210144043,37.729393005371094 4.1109700202941895,87.62403106689453 3.9133048057556152,126.83963012695312 C3.715639591217041,166.0465087890625 31.71304702758789,179.97201538085938 66.2559585571289,157.8645782470703 C100.8214340209961,135.7571258544922 129.07777404785156,85.853759765625 129.27545166015625,46.646881103515625 C129.47311401367188,7.440001487731934 101.47698211669922,-6.4842305183410645 66.93279266357422,15.62321949005127 C66.93279266357422,15.62321949005127 66.93279266357422,15.62321949005127 66.93279266357422,15.62321949005127z M66.2559585571289,162.28831481933594 C29.537450790405273,185.7794189453125 -0.1976652443408966,171.00070190429688 0,129.3280029296875 C0.1976652443408966,87.65530395507812 30.24300193786621,34.6593017578125 66.9627914428711,11.168196678161621 C103.6812973022461,-12.32291030883789 133.40769958496094,2.455815553665161 133.21002197265625,44.12851333618164 C133.01235961914062,85.80120849609375 102.97574615478516,138.79721069335938 66.2559585571289,162.28831481933594 C66.2559585571289,162.28831481933594 66.2559585571289,162.28831481933594 66.2559585571289,162.28831481933594z"
                                              />
                                            </g>
                                            <g
                                              transform="matrix(1,0,0,1,29.402339935302734,38.248558044433594)"
                                              opacity={1}
                                              style={{ display: "block" }}
                                            >
                                              <path
                                                fill="rgb(255,255,255)"
                                                fillOpacity={1}
                                                d=" M57.07697296142578,13.97806453704834 C27.914852142333984,32.62881851196289 4.0596923828125,74.71812438964844 3.9133048057556152,107.7835464477539 C3.7669169902801514,140.84896850585938 27.351856231689453,152.61016845703125 56.51397705078125,133.95941162109375 C85.67609405517578,115.30866241455078 109.53125762939453,73.21935272216797 109.67764282226562,40.1539306640625 C109.82403564453125,7.087226390838623 86.23908996582031,-4.672688007354736 57.07697296142578,13.97806453704834 C57.07697296142578,13.97806453704834 57.07697296142578,13.97806453704834 57.07697296142578,13.97806453704834z M56.492698669433594,138.42315673828125 C25.176259994506836,158.4575653076172 -0.1676652431488037,145.83444213867188 0,110.30191802978516 C0.1763876974582672,74.76940155029297 25.781810760498047,29.557451248168945 57.09825134277344,9.523041725158691 C88.41468811035156,-10.511367797851562 113.75861358642578,2.1030399799346924 113.59095001220703,37.63555908203125 C113.41455841064453,73.16807556152344 87.80913543701172,118.38874816894531 56.492698669433594,138.42315673828125 C56.492698669433594,138.42315673828125 56.492698669433594,138.42315673828125 56.492698669433594,138.42315673828125z"
                                              />
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                    <g
                                      clipPath="url(#__lottie_element_52)"
                                      transform="matrix(1,0,0,1,658,733)"
                                      opacity={1}
                                      style={{ display: "block" }}
                                    >
                                      <g
                                        transform="matrix(1,0,0,1,0,174.85000610351562)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.229999542236328 12.579999923706055,14.229999542236328 C12.579999923706055,14.229999542236328 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,125.06999206542969)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.130000114440918 25.149999618530273,7.130000114440918 C25.149999618530273,7.130000114440918 12.579999923706055,14.220000267028809 12.579999923706055,14.220000267028809 C12.579999923706055,14.220000267028809 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 0,7.130000114440918 0,7.130000114440918z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,32.65999984741211)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.220000267028809 12.579999923706055,14.220000267028809 C12.579999923706055,14.220000267028809 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,132.19000244140625)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,49.75 C0,49.75 0,0 0,0 C0,0 12.579999923706055,7.099999904632568 12.579999923706055,7.099999904632568 C12.579999923706055,7.099999904632568 12.579999923706055,56.869998931884766 12.579999923706055,56.869998931884766 C12.579999923706055,56.869998931884766 0,49.75 0,49.75 C0,49.75 0,49.75 0,49.75z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,12.570000648498535,132.19000244140625)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,56.869998931884766 C0,56.869998931884766 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,49.75 12.579999923706055,49.75 C12.579999923706055,49.75 0,56.869998931884766 0,56.869998931884766 C0,56.869998931884766 0,56.869998931884766 0,56.869998931884766z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,224.6199951171875)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.220000267028809 12.579999923706055,14.220000267028809 C12.579999923706055,14.220000267028809 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,181.9499969482422)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,49.77000045776367 C0,49.77000045776367 0,0 0,0 C0,0 12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918 C12.579999923706055,7.130000114440918 12.579999923706055,56.900001525878906 12.579999923706055,56.900001525878906 C12.579999923706055,56.900001525878906 0,49.77000045776367 0,49.77000045776367 C0,49.77000045776367 0,49.77000045776367 0,49.77000045776367z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,12.570000648498535,181.9499969482422)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,56.900001525878906 C0,56.900001525878906 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,49.77000045776367 12.579999923706055,49.77000045776367 C12.579999923706055,49.77000045776367 0,56.900001525878906 0,56.900001525878906 C0,56.900001525878906 0,56.900001525878906 0,56.900001525878906z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,0,39.7599983215332)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M12.579999923706055,7.130000114440918 C12.579999923706055,7.130000114440918 12.579999923706055,99.54000091552734 12.579999923706055,99.54000091552734 C12.579999923706055,99.54000091552734 0,92.44999694824219 0,92.44999694824219 C0,92.44999694824219 0,0 0,0 C0,0 12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918 C12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,12.570000648498535,39.7599983215332)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,92.44999694824219 12.579999923706055,92.44999694824219 C12.579999923706055,92.44999694824219 0,99.54000091552734 0,99.54000091552734 C0,99.54000091552734 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 0,7.130000114440918 0,7.130000114440918z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,163.77999877929688)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,12.579999923706055 C0,12.579999923706055 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 44.56999969482422,12.579999923706055 44.56999969482422,12.579999923706055 C44.56999969482422,12.579999923706055 22.280000686645508,25.18000030517578 22.280000686645508,25.18000030517578 C22.280000686645508,25.18000030517578 0,12.579999923706055 0,12.579999923706055 C0,12.579999923706055 0,12.579999923706055 0,12.579999923706055z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,100.78999328613281)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,12.579999923706055 C0,12.579999923706055 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 44.56999969482422,12.579999923706055 44.56999969482422,12.579999923706055 C44.56999969482422,12.579999923706055 22.280000686645508,25.18000030517578 22.280000686645508,25.18000030517578 C22.280000686645508,25.18000030517578 0,12.579999923706055 0,12.579999923706055 C0,12.579999923706055 0,12.579999923706055 0,12.579999923706055z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,0)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,12.600000381469727 C0,12.600000381469727 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 44.56999969482422,12.600000381469727 44.56999969482422,12.600000381469727 C44.56999969482422,12.600000381469727 22.280000686645508,25.209999084472656 22.280000686645508,25.209999084472656 C22.280000686645508,25.209999084472656 0,12.600000381469727 0,12.600000381469727 C0,12.600000381469727 0,12.600000381469727 0,12.600000381469727z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,113.37999725341797)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,62.9900016784668 C0,62.9900016784668 0,0 0,0 C0,0 22.280000686645508,12.600000381469727 22.280000686645508,12.600000381469727 C22.280000686645508,12.600000381469727 22.280000686645508,75.58999633789062 22.280000686645508,75.58999633789062 C22.280000686645508,75.58999633789062 0,62.9900016784668 0,62.9900016784668 C0,62.9900016784668 0,62.9900016784668 0,62.9900016784668z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,83.4000015258789,113.37999725341797)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,75.58999633789062 C0,75.58999633789062 0,12.600000381469727 0,12.600000381469727 C0,12.600000381469727 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 22.280000686645508,62.9900016784668 22.280000686645508,62.9900016784668 C22.280000686645508,62.9900016784668 0,75.58999633789062 0,75.58999633789062 C0,75.58999633789062 0,75.58999633789062 0,75.58999633789062z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,201.55999755859375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,12.600000381469727 C0,12.600000381469727 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 44.56999969482422,12.600000381469727 44.56999969482422,12.600000381469727 C44.56999969482422,12.600000381469727 22.280000686645508,25.209999084472656 22.280000686645508,25.209999084472656 C22.280000686645508,25.209999084472656 0,12.600000381469727 0,12.600000381469727 C0,12.600000381469727 0,12.600000381469727 0,12.600000381469727z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,176.35000610351562)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,37.810001373291016 C0,37.810001373291016 0,0 0,0 C0,0 22.280000686645508,12.600000381469727 22.280000686645508,12.600000381469727 C22.280000686645508,12.600000381469727 22.280000686645508,50.40999984741211 22.280000686645508,50.40999984741211 C22.280000686645508,50.40999984741211 0,37.810001373291016 0,37.810001373291016 C0,37.810001373291016 0,37.810001373291016 0,37.810001373291016z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,83.4000015258789,176.35000610351562)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,50.40999984741211 C0,50.40999984741211 0,12.600000381469727 0,12.600000381469727 C0,12.600000381469727 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 22.280000686645508,37.810001373291016 22.280000686645508,37.810001373291016 C22.280000686645508,37.810001373291016 0,50.40999984741211 0,50.40999984741211 C0,50.40999984741211 0,50.40999984741211 0,50.40999984741211z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,61.12000274658203,12.60000228881836)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M22.280000686645508,12.600000381469727 C22.280000686645508,12.600000381469727 22.280000686645508,113.37000274658203 22.280000686645508,113.37000274658203 C22.280000686645508,113.37000274658203 0,100.7699966430664 0,100.7699966430664 C0,100.7699966430664 0,0 0,0 C0,0 22.280000686645508,12.600000381469727 22.280000686645508,12.600000381469727 C22.280000686645508,12.600000381469727 22.280000686645508,12.600000381469727 22.280000686645508,12.600000381469727z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,83.4000015258789,12.60000228881836)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,12.600000381469727 C0,12.600000381469727 22.280000686645508,0 22.280000686645508,0 C22.280000686645508,0 22.280000686645508,100.7699966430664 22.280000686645508,100.7699966430664 C22.280000686645508,100.7699966430664 0,113.37000274658203 0,113.37000274658203 C0,113.37000274658203 0,12.600000381469727 0,12.600000381469727 C0,12.600000381469727 0,12.600000381469727 0,12.600000381469727z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.70999145507812,139.3000030517578)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.220000267028809 12.579999923706055,14.220000267028809 C12.579999923706055,14.220000267028809 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.70999145507812,117.97999572753906)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.229999542236328 12.579999923706055,14.229999542236328 C12.579999923706055,14.229999542236328 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.70999145507812,75.30000305175781)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.130000114440918 25.149999618530273,7.130000114440918 C25.149999618530273,7.130000114440918 12.579999923706055,14.220000267028809 12.579999923706055,14.220000267028809 C12.579999923706055,14.220000267028809 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 0,7.130000114440918 0,7.130000114440918z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.7199935913086,125.06999206542969)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,21.31999969482422 C0,21.31999969482422 0,0 0,0 C0,0 12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918 C12.579999923706055,7.130000114440918 12.579999923706055,28.450000762939453 12.579999923706055,28.450000762939453 C12.579999923706055,28.450000762939453 0,21.31999969482422 0,21.31999969482422 C0,21.31999969482422 0,21.31999969482422 0,21.31999969482422z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,138.29000854492188,125.06999206542969)"
                                        opacity="0.9"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(255,255,255)"
                                          fillOpacity="0.5"
                                          d=" M0,28.450000762939453 C0,28.450000762939453 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,21.31999969482422 12.579999923706055,21.31999969482422 C12.579999923706055,21.31999969482422 0,28.450000762939453 0,28.450000762939453 C0,28.450000762939453 0,28.450000762939453 0,28.450000762939453z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.70999145507812,153.52000427246094)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 25.149999618530273,7.099999904632568 25.149999618530273,7.099999904632568 C25.149999618530273,7.099999904632568 12.579999923706055,14.229999542236328 12.579999923706055,14.229999542236328 C12.579999923706055,14.229999542236328 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.7199935913086,146.3900146484375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,14.229999542236328 C0,14.229999542236328 0,0 0,0 C0,0 12.579999923706055,7.130000114440918 12.579999923706055,7.130000114440918 C12.579999923706055,7.130000114440918 12.579999923706055,21.350000381469727 12.579999923706055,21.350000381469727 C12.579999923706055,21.350000381469727 0,14.229999542236328 0,14.229999542236328 C0,14.229999542236328 0,14.229999542236328 0,14.229999542236328z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,138.29000854492188,146.3900146484375)"
                                        opacity={1}
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,21.350000381469727 C0,21.350000381469727 0,7.130000114440918 0,7.130000114440918 C0,7.130000114440918 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,14.229999542236328 12.579999923706055,14.229999542236328 C12.579999923706055,14.229999542236328 0,21.350000381469727 0,21.350000381469727 C0,21.350000381469727 0,21.350000381469727 0,21.350000381469727z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,125.7199935913086,82.41999816894531)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M12.579999923706055,7.099999904632568 C12.579999923706055,7.099999904632568 12.579999923706055,49.77000045776367 12.579999923706055,49.77000045776367 C12.579999923706055,49.77000045776367 0,42.650001525878906 0,42.650001525878906 C0,42.650001525878906 0,0 0,0 C0,0 12.579999923706055,7.099999904632568 12.579999923706055,7.099999904632568 C12.579999923706055,7.099999904632568 12.579999923706055,7.099999904632568 12.579999923706055,7.099999904632568z"
                                        />
                                      </g>
                                      <g
                                        transform="matrix(1,0,0,1,138.29000854492188,82.41999816894531)"
                                        opacity="0.7000000000000001"
                                        style={{ display: "block" }}
                                      >
                                        <path
                                          fill="rgb(134,63,254)"
                                          fillOpacity={1}
                                          d=" M0,7.099999904632568 C0,7.099999904632568 12.579999923706055,0 12.579999923706055,0 C12.579999923706055,0 12.579999923706055,42.650001525878906 12.579999923706055,42.650001525878906 C12.579999923706055,42.650001525878906 0,49.77000045776367 0,49.77000045776367 C0,49.77000045776367 0,7.099999904632568 0,7.099999904632568 C0,7.099999904632568 0,7.099999904632568 0,7.099999904632568z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                              {/*?lit$150009346$*/}
                            </div>

                          </dotlottie-player>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={ref}
                animate={controls}
                variants={animationVariants2}
                initial="hidden"
                transition={{ duration: 1, ease: 'easeInOut' }} // Adjust duration and ease
                onAnimationStart={() => controls.start('visible')}
                className="elementor-section elementor-top-section elementor-element elementor-element-091569f elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
                data-id="091569f"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-242ce59"
                    data-id="242ce59"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-fcee3bc elementor-widget elementor-widget-spacer"
                        data-id="fcee3bc"
                        data-element_type="widget"
                        data-widget_type="spacer.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.19.0 - 29-01-2024 */\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-column .elementor-spacer-inner {\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: var(--spacer-size)\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con {\n\t\t\t\t\t\t\t\t\t\t\t\t\t--container-widget-width: 100%\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer {\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: var(--container-widget-width, var(--spacer-size));\n\t\t\t\t\t\t\t\t\t\t\t\t\t--align-self: var(--container-widget-align-self, initial);\n\t\t\t\t\t\t\t\t\t\t\t\t\t--flex-shrink: 0\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer>.elementor-widget-container,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer>.elementor-widget-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer {\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: 100%\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer>.elementor-widget-container>.elementor-spacer>.elementor-spacer-inner {\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: var(--container-widget-height, var(--spacer-size))\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer.elementor-widget-empty,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer.elementor-widget-empty {\n\t\t\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\t\t\tmin-height: 22px;\n\t\t\t\t\t\t\t\t\t\t\t\t\tmin-width: 22px\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con-inner>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon,\n\t\t\t\t\t\t\t\t\t\t\t\t.e-con>.elementor-widget-spacer.elementor-widget-empty .elementor-widget-empty-icon {\n\t\t\t\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 22px;\n\t\t\t\t\t\t\t\t\t\t\t\t\theight: 22px\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t"
                            }}
                          />
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-5e98036 elementor-widget elementor-widget-image-carousel"
                        data-id="5e98036"
                        data-element_type="widget"
                        data-settings='{"slides_to_show":"6","slides_to_show_mobile":"4","navigation":"none","image_spacing_custom":{"unit":"px","size":70,"sizes":[]},"image_spacing_custom_mobile":{"unit":"px","size":16,"sizes":[]},"autoplay":"yes","pause_on_hover":"yes","pause_on_interaction":"yes","autoplay_speed":5000,"infinite":"yes","speed":500,"image_spacing_custom_tablet":{"unit":"px","size":"","sizes":[]}}'
                        data-widget_type="image-carousel.default"
                      >
                        <div className="elementor-widget-container">
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.19.0 - 29-01-2024 */\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-carousel .swiper,\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-carousel .swiper-container {\n\t\t\t\t\t\t\t\t\t\t\t\t\tposition: static\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-carousel .swiper-container .swiper-slide figure,\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-carousel .swiper .swiper-slide figure {\n\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image-carousel .swiper-slide {\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.elementor-image-carousel-wrapper:not(.swiper-container-initialized):not(.swiper-initialized) .swiper-slide {\n\t\t\t\t\t\t\t\t\t\t\t\t\tmax-width: calc(100% / var(--e-image-carousel-slides-to-show, 3))\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t"
                            }}
                          />
                          <div
                            className="elementor-image-carousel-wrapper swiper-container"
                            dir="ltr"
                          >
                            <div
                              className="elementor-image-carousel swiper-wrapper"
                              aria-live="off"
                            >
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="1 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2023/07/CoinMarketCap.svg"
                                    alt="CoinMarketCap"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="2 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2023/07/CoinGecko-1.svg"
                                    alt="CoinGecko"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="3 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://i0.wp.com/chainback.org/wp-content/uploads/elementor/thumbs/Dextools-q8x08f2pfhsiqnqppmoj5pxjit94xyv4bahy2zocg0.png?w=640&ssl=1"
                                    alt="Dextools"
                                    data-recalc-dims={1}
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="4 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2023/07/Etherscan.svg"
                                    alt="Etherscan"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="5 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2023/07/Team-Finance.svg"
                                    alt="Team Finance"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="6 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2023/07/Uniswap-1.svg"
                                    alt="Uniswap"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="7 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2024/01/SUMMUS-CAPITAL.svg"
                                    alt="SUMMUS CAPITAL"
                                  />
                                </figure>
                              </div>
                              <div
                                className="swiper-slide"
                                role="group"
                                aria-roledescription="slide"
                                aria-label="8 of 8"
                              >
                                <figure className="swiper-slide-inner">
                                  <img
                                    decoding="async"
                                    className="swiper-slide-image"
                                    src="https://chainback.org/wp-content/uploads/2024/01/Forcefi_logo.svg"
                                    alt="Forcefi_logo"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3e70e3b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="3e70e3b"
                data-element_type="section"
                id="Chainback"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ace832"
                    data-id="4ace832"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-e4893e5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="e4893e5"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e4f5da5"
                            data-id="e4f5da5"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-9edb813 elementor-widget elementor-widget-text-editor"
                                data-id="9edb813"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    <span
                                      className="top-title"
                                      style={{ textAlign: "center !important" }}
                                    >
                                      {" "}
                                      CHAINBACK MISSION
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-eef7900 elementor-widget elementor-widget-text-editor"
                                data-id="eef7900"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <h1>Chainback Vision</h1>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4c613fa elementor-widget elementor-widget-text-editor"
                                data-id="4c613fa"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    Chainback is a movement to democratize and
                                    reshape the decentralized file storage and cloud
                                    computing landscape.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-43fd592 elementor-section-full_width elementor-section-content-top elementor-section-height-default elementor-section-height-default"
                        data-id="43fd592"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7c5dfc7 single-team"
                            data-id="7c5dfc7"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-764d5e3 elementor-widget elementor-widget-image"
                                data-id="764d5e3"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.19.0 - 29-01-2024 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image a img[src$=".svg"] {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\twidth: 48px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-image img {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                    }}
                                  />{" "}
                                  <img
                                    decoding="async"
                                    src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_bytedance-mini-app.svg"
                                    title="icon-park-twotone_bytedance-mini-app"
                                    alt="icon-park-twotone_bytedance-mini-app"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-c90edb8 elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                data-id="c90edb8"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <style
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t/*! elementor - v3.19.0 - 29-01-2024 */\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"
                                    }}
                                  />
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Decentralized File Storage
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4f7771c elementor-widget elementor-widget-text-editor"
                                data-id="4f7771c"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    Experience the power of decentralization with
                                    Chainback’s secure file storage and sharing,
                                    powered by IPFS. Empower your digital content by
                                    providing exclusive access to selected wallet
                                    addresses, NFT or ERC20 token holders.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0931c0b single-team"
                            data-id="0931c0b"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-fa2c233 elementor-widget elementor-widget-image"
                                data-id="fa2c233"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    decoding="async"
                                    src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_branch-one.svg"
                                    title="icon-park-twotone_branch-one"
                                    alt="icon-park-twotone_branch-one"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-a22752a elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                data-id="a22752a"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Democratizing GPU Cloud
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-6901bc6 elementor-widget elementor-widget-text-editor"
                                data-id="6901bc6"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    Use on-demand GPU rentals for convenience and
                                    consistent pricing. Chainback GPU cloud
                                    computing democratizes the process by allowing
                                    various entities, from individuals to large data
                                    centres, to contribute their unused GPU
                                    resources.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b5b0122 single-team"
                            data-id="b5b0122"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-72e6196 elementor-widget elementor-widget-image"
                                data-id="72e6196"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    decoding="async"
                                    src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_bank-card-two.svg"
                                    title="icon-park-twotone_bank-card-two"
                                    alt="icon-park-twotone_bank-card-two"
                                    loading="lazy"
                                  />
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-3545f1e elementor-widget__width-initial elementor-widget elementor-widget-heading"
                                data-id="3545f1e"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Scaling Decentralized Cloud
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-faafc17 elementor-widget elementor-widget-text-editor"
                                data-id="faafc17"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    Chainback’s cloud infrastructure is designed to
                                    grow alongside demands. We are distributing
                                    computational power in a way that resonates with
                                    the distributed nature of blockchain technology.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="elementor-section elementor-top-section elementor-element elementor-element-218f288 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="218f288"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b8ff8f9"
                    data-id="b8ff8f9"
                    data-element_type="column"
                    id="STORAGE"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-e14b981 imgscalehero elementor-widget elementor-widget-Nata_Banner_Sec"
                        data-id="e14b981"
                        data-element_type="widget"
                        id="imgscalehero"
                        data-widget_type="Nata_Banner_Sec.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="banner-area bg-1"
                            style={{ backgroundImage: "url( )" }}
                          >
                            <div className="container-fluid">
                              <div className="row align-items-center">
                                <div className="col-lg-6">
                                  <div className="banner-content style-one">
                                    <h1 className="title">
                                      Free Decentralized File Storage{" "}
                                    </h1>
                                    <p>
                                      {" "}
                                      Share your files for free using decentralized
                                      Chainback File Storage Platform based on IPFS
                                      technology.
                                      <br />
                                      <br />
                                      Use advanced file sharing by leveraging the
                                      decentralized and secure nature of Ethereum
                                      blockchain to ensure that only individuals
                                      holding specific ERC20 tokens or NFTs can
                                      unlock exclusive content, fostering heightened
                                      security and exclusivity.
                                    </p>
                                    <div className="banner-btn">
                                      <a
                                        href="https://app.chainback.org/"
                                        className="default-btn btn-active"
                                      >
                                        APP
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="banner-img-1">
                                    <img
                                      decoding="async"
                                      src="https://chainback.org/wp-content/uploads/2023/12/Download.svg"
                                      alt="Free Decentralized  File Storage"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-3.png?w=640&ssl=1"
                              className="shape shape-1"
                              alt="Free Decentralized  File Storage"
                              data-recalc-dims={1}
                            />
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-1.png?w=640&ssl=1"
                              className="shape shape-2"
                              alt="Free Decentralized  File Storage"
                              data-recalc-dims={1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                ref={ref}
                animate={controls}
                variants={animationVariants}
                initial="hidden"
                transition={{ duration: 0.8, ease: 'easeOut' }} // Adjust duration and ease
                onAnimationStart={() => controls.start('visible')}
                className="elementor-section elementor-top-section elementor-element elementor-element-ef52bba stakes-area elementor-section-boxed elementor-section-height-default elementor-section-height-default "
                data-id="ef52bba"
                data-element_type="section"
                data-settings='{"animation":"fadeInUp"}'
              >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6780783 stake-bg"
                    data-id={6780783}
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-86292e1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="86292e1"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-af814e9 join"
                            data-id="af814e9"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-e95bc38 elementor-widget elementor-widget-html"
                                data-id="e95bc38"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <span className="top-title">
                                    START USING CHAINBACK
                                  </span>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-d4d11b2 elementor-widget elementor-widget-heading"
                                data-id="d4d11b2"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h1 className="elementor-heading-title elementor-size-default">
                                    Want to share exclusive content to owners of
                                    specific ERC20 tokens or NFT's?
                                  </h1>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-5968f2c elementor-widget elementor-widget-html"
                                data-id="5968f2c"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <a
                                    href="https://app.chainback.org"
                                    className="default-btn btn-active"
                                  >
                                    SHARE NOW
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-203e395 joinicon"
                            data-id="203e395"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-d75a51a elementor-widget elementor-widget-image"
                                data-id="d75a51a"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    fetchpriority="high"
                                    decoding="async"
                                    width={640}
                                    height={640}
                                    src="https://chainback.org/wp-content/uploads/2023/12/img2.svg"
                                    className="attachment-large size-large wp-image-4599"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <div
                className="elementor-section elementor-top-section elementor-element elementor-element-6d5d9a4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="6d5d9a4"
                data-element_type="section"
                id="CLOUD"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-77dbc38"
                    data-id="77dbc38"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-f7d3c43 elementor-widget elementor-widget-Nata_Banner_Sec"
                        data-id="f7d3c43"
                        data-element_type="widget"
                        id="chainbacksignform"
                        data-widget_type="Nata_Banner_Sec.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="banner-area bg-1"
                            style={{ backgroundImage: "url( )" }}
                          >
                            <div className="container-fluid">
                              <div className="row align-items-center">
                                <div className="col-lg-6">
                                  <div className="banner-content style-one">
                                    <h1 className="title">
                                      Cloud GPU and Cloud Computing
                                      <br />
                                    </h1>
                                    <p>
                                      {" "}
                                      Chainback Cloud Computing platform not only
                                      provides computational resources but also does
                                      so in a manner that aligns with the principles
                                      of decentralization.
                                      <br />
                                      <br />
                                      Chainback Cloud Computing democratizing GPU
                                      Cloud by transforming anyone into a potential
                                      cloud compute provider and using underutilized
                                      GPU capacity from data centers worldwide, thus
                                      ushering in a new era of unlimited scalability
                                      for compute-intensive workloads and $ARCHIVE
                                      utility adoption.
                                      <br />
                                      <br />
                                      Chainback GPU cloud computing delivering a
                                      enterprise level scale of GPUs on top of the
                                      industry’s fastest and most flexible
                                      infrastructure.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="banner-img-1">
                                    <img
                                      decoding="async"
                                      src="https://chainback.org/wp-content/uploads/2023/12/native-cloud-2.svg"
                                      alt="Cloud GPU and Cloud Computing
<br>
"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org/wp-content/uploads/2023/01/BLUR-1.png?w=640&ssl=1"
                              className="shape shape-1"
                              alt="Cloud GPU and Cloud Computing
<br>
"
                              data-recalc-dims={1}
                            />
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-1.png?w=640&ssl=1"
                              className="shape shape-2"
                              alt="Cloud GPU and Cloud Computing
<br>
"
                              data-recalc-dims={1}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-b09601d imgscalehero elementor-widget elementor-widget-Nata_Banner_Sec"
                        data-id="b09601d"
                        data-element_type="widget"
                        id="imgscalehero"
                        data-widget_type="Nata_Banner_Sec.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="banner-area bg-1"
                            style={{ backgroundImage: "url( )" }}
                          >
                            <div className="container-fluid">
                              <div className="row align-items-center">
                                <div className="col-lg-6">
                                  <div className="banner-content style-one">
                                    <h2 className="title">
                                      Decentralization Meets Computational Power
                                      <br />
                                    </h2>
                                    <p>
                                      {" "}
                                      GPUs are revolutionizing the landscape of
                                      artificial intelligence, pushing the
                                      boundaries of what’s possible. They are the
                                      powerhouse behind major advancements in
                                      diverse fields, from cinematic production to
                                      synthetic biolog. Chainback is tapping into
                                      this transformational potential by offering a
                                      specialized cloud designed for GPU-accelerated
                                      workloads.
                                      <br />
                                      <br />
                                      Our aim is to democratize access to
                                      large-scale CPU and GPU resources.
                                      <br />
                                      <br />
                                      This platform isn’t just a cluster of powerful
                                      GPUs; it’s a sophisticated ecosystem designed
                                      to provide scalable, efficient, and accessible
                                      computing power for AI and ML workloads.
                                    </p>
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="banner-img-1">
                                    <img
                                      decoding="async"
                                      src="https://chainback.org/wp-content/uploads/2023/12/Storage-25.svg"
                                      alt="Decentralization Meets Computational Power
<br>
"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org/wp-content/uploads/2023/01/BLUR-1.png?w=640&ssl=1"
                              className="shape shape-1"
                              alt="Decentralization Meets Computational Power
<br>
"
                              data-recalc-dims={1}
                            />
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-1.png?w=640&ssl=1"
                              className="shape shape-2"
                              alt="Decentralization Meets Computational Power
<br>
"
                              data-recalc-dims={1}
                            />
                          </div>
                        </div>
                      </div>
                      <motion.section
                        ref={ref}
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationVariants}
                        initial="hidden"
                        transition={{ duration: 0.8, ease: 'easeOut' }} // Adjust duration and ease
                        onAnimationStart={() => controls.start('visible')}

                        className="elementor-section elementor-inner-section elementor-element elementor-element-e211e99 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="e211e99"
                        data-element_type="section"
                        data-settings='{"background_background":"gradient"}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7f7a9d7 join"
                            data-id="7f7a9d7"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-53d8f2e elementor-widget elementor-widget-html"
                                data-id="53d8f2e"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <span className="top-title">
                                    START USING CHAINBACK
                                  </span>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-3de4262 elementor-widget elementor-widget-heading"
                                data-id="3de4262"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h1 className="elementor-heading-title elementor-size-default">
                                    Need GPUs on-demand at scale? Have a
                                    general-purpose compute project?
                                    <br />
                                    <br />
                                    <span style={{ fontSize: 24 }}>
                                      Get GPU Cloud Alpha access.
                                    </span>
                                  </h1>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-4c0c0c4 elementor-widget elementor-widget-html"
                                data-id="4c0c0c4"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <a
                                    href="mailto:partners@chainback.org"
                                    className="default-btn btn-active"
                                  >
                                    CONTACT US
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a189865 joinicon"
                            data-id="a189865"
                            data-element_type="column"
                            data-settings='{"background_background":"classic"}'
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-a0b8b1d elementor-widget elementor-widget-image"
                                data-id="a0b8b1d"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    decoding="async"
                                    width={640}
                                    height={478}
                                    src="https://chainback.org/wp-content/uploads/2023/12/cloud.svg"
                                    className="attachment-large size-large wp-image-4593"
                                    alt=""
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.section>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-section elementor-top-section elementor-element elementor-element-ddd1237 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                data-id="ddd1237"
                data-element_type="section"
                data-settings='{"background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-no">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f516aa8"
                    data-id="f516aa8"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-aa7f950 elementor-widget elementor-widget-Nata_Banner_Sec"
                        data-id="aa7f950"
                        data-element_type="widget"
                        data-widget_type="Nata_Banner_Sec.default"
                      >
                        <div className="elementor-widget-container">
                          <div
                            className="banner-area bg-1"
                            style={{ backgroundImage: "url( )" }}
                          >
                            <div className="container-fluid">
                              <div className="row align-items-center">
                                <div className="col-lg-6">
                                  <div className="banner-content style-one">
                                    <h1 className="title">
                                      <div className="elementor-widget-container">
                                        <img
                                          loading="lazy"
                                          decoding="async"
                                          width={640}
                                          height={116}
                                          src="https://chainback.org/wp-content/uploads/2023/01/Chainback-logo-2.svg"
                                          className="attachment-large size-large wp-image-2377"
                                          alt=""
                                        />
                                      </div>
                                      <br />
                                    </h1>
                                    <p></p>
                                    <h3>
                                      $ARCHIVE - The Backbone of Chainback Ecosystem{" "}
                                    </h3>
                                    <br />
                                    <br />
                                    <p>
                                      $ARCHIVE plays a pivotal role within the
                                      Chainback ecosystem, serving as its
                                      cornerstone. As you explore the world of
                                      decentralized file sharing, cloud computing,
                                      and the AI revolution, $ARCHIVE stands at the
                                      forefront of this transformative journey.
                                    </p>
                                    <p />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="banner-img-1">
                                    <img
                                      decoding="async"
                                      src="https://chainback.org/wp-content/uploads/2023/12/circles-3.svg"
                                      alt='<div class="elementor-widget-container">
															<img decoding="async" width="640" height="116" src="https://chainback.org/wp-content/uploads/2023/01/Chainback-logo-2.svg" class="attachment-large size-large wp-image-2377" alt="" loading="lazy">															</div>
<br>
'
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-3.png?fit=640%2C640&ssl=1"
                              className="shape shape-1"
                              alt='<div class="elementor-widget-container">
															<img decoding="async" width="640" height="116" src="https://chainback.org/wp-content/uploads/2023/01/Chainback-logo-2.svg" class="attachment-large size-large wp-image-2377" alt="" loading="lazy">															</div>
<br>
'
                              data-recalc-dims={1}
                            />
                            <img
                              decoding="async"
                              src="https://i0.wp.com/chainback.org//wp-content/uploads/2023/01/BLUR-1.png?fit=640%2C640&ssl=1"
                              className="shape shape-2"
                              alt='<div class="elementor-widget-container">
															<img decoding="async" width="640" height="116" src="https://chainback.org/wp-content/uploads/2023/01/Chainback-logo-2.svg" class="attachment-large size-large wp-image-2377" alt="" loading="lazy">															</div>
<br>
'
                              data-recalc-dims={1}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-a4d71ae elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="a4d71ae"
                data-element_type="section"
                data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
              >
                <div className="elementor-container elementor-column-gap-extended">
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1ef711d single-features"
                    data-id="1ef711d"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-45eacc6 elementor-widget elementor-widget-image"
                        data-id="45eacc6"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <figure className="wp-caption">
                            <img
                              decoding="async"
                              width={640}
                              height={640}
                              src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_collection-files.svg"
                              className="attachment-large size-large wp-image-2053"
                              alt=""
                            />
                            <figcaption className="widget-image-caption wp-caption-text" />
                          </figure>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-192b13d elementor-widget elementor-widget-heading"
                        data-id="192b13d"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Decentralized File Storage
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-6d335e8 elementor-widget elementor-widget-text-editor"
                        data-id="6d335e8"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Use $ARCHIVE to&nbsp;
                            <span
                              style={{
                                backgroundColor: "#13173f",
                                fontSize: "22.4px",
                                textAlign: "center",
                                color: "var(--bodycolor)"
                              }}
                            >
                              empower your digital content using&nbsp;
                            </span>
                            <span
                              style={{
                                backgroundColor: "#13173f",
                                fontSize: "22.4px",
                                textAlign: "center",
                                color: "var(--bodycolor)"
                              }}
                            >
                              secure decentralized file sharing&nbsp;
                            </span>
                            <span
                              style={{
                                backgroundColor: "#13173f",
                                color: "var(--bodycolor)",
                                fontSize: "22.4px",
                                textAlign: "center"
                              }}
                            >
                              and providing exclusive access to limited wallet
                              addresses, NFT or ERC20 token owners.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-0b1ad42 single-features"
                    data-id="0b1ad42"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-28d4fd1 elementor-widget elementor-widget-image"
                        data-id="28d4fd1"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <figure className="wp-caption">
                            <img
                              loading="lazy"
                              decoding="async"
                              width={640}
                              height={640}
                              src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_add-web.svg"
                              className="attachment-large size-large wp-image-2087"
                              alt=""
                            />
                            <figcaption className="widget-image-caption wp-caption-text" />
                          </figure>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-cac92ef elementor-widget elementor-widget-heading"
                        data-id="cac92ef"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Paid Content
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-53092d0 elementor-widget elementor-widget-text-editor"
                        data-id="53092d0"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Use $ARCHIVE to start selling your exclusive content for
                            ETH, USDT or any other crypto on decentralized secure
                            file sharing platform and get 90% of revenue.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6aaa330 single-features"
                    data-id="6aaa330"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-8be955f elementor-widget elementor-widget-image"
                        data-id="8be955f"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <figure className="wp-caption">
                            <img
                              loading="lazy"
                              decoding="async"
                              width={640}
                              height={640}
                              src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_transaction.svg"
                              className="attachment-large size-large wp-image-2085"
                              alt=""
                            />
                            <figcaption className="widget-image-caption wp-caption-text" />
                          </figure>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-2e78e01 elementor-widget elementor-widget-heading"
                        data-id="2e78e01"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Cloud Computing
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-1188f6c elementor-widget elementor-widget-text-editor"
                        data-id="1188f6c"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Use $ARCHIVE to pay for on-demand Cloud GPU, Chainback
                            Cloud Computing credits billed by the hours. Get the
                            latest NVIDIA GPUs at the best prices on the market
                            using $ARCHIVE.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-a705c38 single-features"
                    data-id="a705c38"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-eb61548 elementor-widget elementor-widget-image"
                        data-id="eb61548"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div className="elementor-widget-container">
                          <figure className="wp-caption">
                            <img
                              loading="lazy"
                              decoding="async"
                              width={640}
                              height={640}
                              src="https://chainback.org/wp-content/uploads/2023/01/icon-park-twotone_bank-transfer.svg"
                              className="attachment-large size-large wp-image-2086"
                              alt=""
                            />
                            <figcaption className="widget-image-caption wp-caption-text" />
                          </figure>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-c8413a3 elementor-widget elementor-widget-heading"
                        data-id="c8413a3"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Ecosystem Transactions
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-9fef3cd elementor-widget elementor-widget-text-editor"
                        data-id="9fef3cd"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            $ARCHIVE used as a means of payment within Chainback
                            Ecosystem between Publishers, GPU Cloud Miners,
                            Chainback File Storage, YANA AI, Chainback Cloud
                            Platform.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-409b3fe elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="409b3fe"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f3141f"
                    data-id="4f3141f"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap"></div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-712d989 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="712d989"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7d28996"
                    data-id="7d28996"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-82538fb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="82538fb"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-70d9f39"
                            data-id="70d9f39"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-4193ad6 elementor-widget elementor-widget-text-editor"
                                data-id="4193ad6"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <p>
                                    <span
                                      className="top-title"
                                      style={{ textAlign: "center !important" }}
                                    >
                                      ROADMAP
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-b64c8b0 elementor-widget elementor-widget-text-editor"
                                data-id="b64c8b0"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <h1>Roadmap</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-3726319 owl-stage elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id={3726319}
                data-element_type="section"
                id="owl-stage"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7f6ee0a single-road-map"
                    data-id="7f6ee0a"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-6907a3d date elementor-widget elementor-widget-heading"
                        data-id="6907a3d"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            2022 Q2
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-81143f2 elementor-widget elementor-widget-heading"
                        data-id="81143f2"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Project Concept
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-046cd1e elementor-widget elementor-widget-text-editor"
                        data-id="046cd1e"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            Project concept and idea. Research and and team setup.
                            Crowdsourcing and verifying our idea with industry
                            experts and professionals.&nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-1ec005a single-road-map"
                    data-id="1ec005a"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-05b42f3 date elementor-widget elementor-widget-heading"
                        data-id="05b42f3"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            2022 Q4
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-77ad4ed elementor-widget elementor-widget-heading"
                        data-id="77ad4ed"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            Community Driven Launch
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-78dce01 elementor-widget elementor-widget-text-editor"
                        data-id="78dce01"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <p>
                            As we decided to launch our project community focused so
                            we choosed the most community driven approach possible
                            to launch it and launched $ARCHIVE.&nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-3c90015 single-road-map"
                    data-id="3c90015"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-b79a000 date elementor-widget elementor-widget-heading"
                        data-id="b79a000"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            2023
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-a06f5a5 elementor-widget elementor-widget-heading"
                        data-id="a06f5a5"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            File Sharing Platform, Yana AI &amp; Cloud Development
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-552d223 elementor-widget elementor-widget-text-editor"
                        data-id="552d223"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <ul>
                            <li>$ARCHIVE staking launch</li>
                            <li>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)",
                                  fontFamily: "var(--headingFontfamily)"
                                }}
                              >
                                YANA AI Product release
                              </span>
                            </li>
                            <li>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)"
                                }}
                              >
                                Decetralized file sharing App launch
                              </span>
                            </li>
                            <li>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)"
                                }}
                              >
                                API for enterprises for filesharing App
                              </span>
                            </li>
                            <li>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)"
                                }}
                              >
                                Cloud&nbsp;GPU and Cloud Computing Platform
                                development&nbsp;
                              </span>
                            </li>
                            <li>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)"
                                }}
                              >
                                Chainback Cloud Computing platform Closed Alpha
                                launch
                              </span>
                            </li>
                            <li style={{ fontFamily: "var(--headingFontfamily)" }}>
                              <span
                                style={{
                                  color: "var(--bodycolor)",
                                  textAlign: "var(--bs-body-text-align)"
                                }}
                              >
                                Chainback Cloud Computing platform early adopter
                                launch
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-18da52c single-road-map"
                    data-id="18da52c"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-06949e8 date elementor-widget elementor-widget-heading"
                        data-id="06949e8"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            2024
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-fc6475c elementor-widget elementor-widget-heading"
                        data-id="fc6475c"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div className="elementor-widget-container">
                          <h4 className="elementor-heading-title elementor-size-default">
                            GPU Cloud, Cloud Computing, Scaling $ARCHIVE
                          </h4>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-db74420 elementor-widget elementor-widget-text-editor"
                        data-id="db74420"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div className="elementor-widget-container">
                          <ul>
                            <li>
                              GPU Cloud and Cloud Computing platform Open Beta
                              launch
                            </li>
                            <li>
                              GPU Cloud and Cloud Computing platform Public launch
                            </li>
                            <li>
                              &nbsp;Cloud Computing platform allowing compute
                              providers of all sizes to monetize their spare GPU
                              capacity effortlessly
                            </li>
                            <li>YANA AI integration to Cloud Computing Platform</li>
                            <li>
                              Chainback Cloud fastest and most flexible
                              infrastructure for high-performance computing
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-624a5b5 stakes-area elementor-section-boxed elementor-section-height-default elementor-section-height-default "
                data-id="624a5b5"
                data-element_type="section"
                data-settings='{"animation":"fadeInUp"}'
              >
                <div className="elementor-background-overlay" />
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ac27175 stake-bg"
                    data-id="ac27175"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-83d77a3 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="83d77a3"
                        data-element_type="section"
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-e10720e"
                            data-id="e10720e"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-6bd8632 elementor-widget elementor-widget-html"
                                data-id="6bd8632"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <span className="top-title">
                                    CHAINBACK ECOSYSTEM
                                  </span>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-215ddf9 elementor-widget elementor-widget-heading"
                                data-id="215ddf9"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h1 className="elementor-heading-title elementor-size-default">
                                    Get $ARCHIVE early and join CHAINBACK Ecosystem
                                  </h1>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-bd75edb elementor-widget elementor-widget-html"
                                data-id="bd75edb"
                                data-element_type="widget"
                                data-widget_type="html.default"
                              >
                                <div className="elementor-widget-container">
                                  <a
                                    href="https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0xC7f950271d118A5bdF250dFfc39128DCCED8472C"
                                    className="default-btn btn-active"
                                  >
                                    BUY $ARCHIVE
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4554bff ctaicon"
                            data-id="4554bff"
                            data-element_type="column"
                            id="ctaicon"
                            data-settings='{"background_background":"classic"}'
                          >
                            <div className="elementor-widget-wrap"></div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-c8a0e61 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="c8a0e61"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cbf933e"
                    data-id="cbf933e"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-e4426ae elementor-widget elementor-widget-spacer"
                        data-id="e4426ae"
                        data-element_type="widget"
                        data-widget_type="spacer.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-3ca653e elementor-widget elementor-widget-html"
                        data-id="3ca653e"
                        data-element_type="widget"
                        data-widget_type="html.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="single-team soc social" id="steams">
                            <h2 className="steamsheading">Follow Us</h2>
                            <ul>
                              <li>
                                <a
                                  href="https://medium.com/@chainback.archive"
                                  target="_blank"
                                >
                                  <i className="medium" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://twitter.com/ChainbackWeb3"
                                  target="_blank"
                                >
                                  <i className="twitter" />
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://t.me/chainback_archive"
                                  target="_blank"
                                >
                                  <i className="telegram" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area bg-color-100a24 pt-150 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="widget single-footer-widget widget_nata_footer_menu_link">
                <ul id="menu-footer-menu" className="single-footer-wid">
                  <li
                    id="menu-item-1816"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1816"
                  >
                    <a href="https://app.chainback.org/">Chainback APP</a>
                  </li>
                  <li
                    id="menu-item-1818"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1818"
                  >
                    <a href="https://chainback.gitbook.io/chainback-whitepaper/getting-started/brief-overview">
                      Whitepaper
                    </a>
                  </li>
                  <li
                    id="menu-item-2981"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2981"
                  >
                    <a href="https://chainback.org/staking/">Staking</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="single-footer-widget logo">
                <a href="https://chainback.org/">
                  <img
                    src="https://chainback.org/wp-content/uploads/2023/01/Chainback-logo.svg"
                    alt="Chainback"
                  />{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="widget single-footer-widget widget_text">
                <div className="textwidget">
                  <p style={{ textAlign: "center" }}>
                    <span style={{ opacity: "0.5", marginRight: 16 }}>
                      Contact Us:
                    </span>{" "}
                    <a href="https://chainback.org/#">
                      <span className="type--fine-print">
                        partners@chainback.org
                      </span>
                    </a>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://chainback.org/wp-content/themes/nata/assets/img/footer-shape.png"
          className="footer-shape"
          alt="Shape Image"
        />
      </div>
      <div className="copy-right-area">
        <div className="contaienr">
          <p>
            <span>© 2024 Chainback Web3 Archive</span>
          </p>
        </div>
      </div>
      <div className="go-top">
        <i className="ri-arrow-up-s-fill" />
        <i className="ri-arrow-up-s-fill" />
      </div>
      <link
        rel="stylesheet"
        id="e-animations-css"
        href="https://chainback.org/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.19.0"
        type="text/css"
        media="all"
      />
    </div>

  )
}

export default Home
