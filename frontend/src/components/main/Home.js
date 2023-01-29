import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <>
        {/* Background image */}
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              'url("https://usv.edu/wp-content/uploads/2021/06/virtual-reality-vr-e1624313135975.jpg")',
            height: 620,
            marginTop: 58
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
            <div className="d-flex justify-content-center  align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">VR-ART EXHIBITION</h1>
                <h4 className="mb-3 ">VR-All-Art is a platform that allows you to effortlessly establish
                  Virtual Reality exhibits and sell artworks without regard for time, location, or country.</h4>
                <a className="btn btn-outline-light btn-lg" href="#!" role="button">
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </>
      <>
        <button onclick="topFunction()" id="myBtn" title="Go to top">
          Top
        </button>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n#myBtn {\n  display: none; /* Hidden by default */\n  position: fixed; /* Fixed/sticky position */\n  bottom: 20px; /* Place the button at the bottom of the page */\n  right: 30px; /* Place the button 30px from the right */\n  z-index: 99; /* Make sure it does not overlap */\n  border: none; /* Remove borders */\n  outline: none; /* Remove outline */\n  background-color: red; /* Set a background color */\n  color: white; /* Text color */\n  cursor: pointer; /* Add a mouse pointer on hover */\n  padding: 15px; /* Some padding */\n  border-radius: 10px; /* Rounded corners */\n  font-size: 18px; /* Increase font size */\n}\n\n#myBtn:hover {\n  background-color: #555; /* Add a dark-grey background on hover */\n}\n<style/>\n"
          }}
        />
      </>
      {/* ......................................................................... */}
      {/* ......................................................................... */}
      <>
        <section className="about-section">
          <div className="container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">About Css3transition</span>
                    <h2>We are Creative Tech Enthusiast working since 2015</h2>
                  </div>
                  <div className="text">
                    I am Rahul Yaduvanshi works at Css3 Transition since last 3 years.
                    We are here to provide touch notch solution for your website or
                    web application that helps you to make your website look
                    attractive &amp; efficient in handling by creating usefull plugins
                    thats you need.
                  </div>
                  <div className="text">
                    We are here to serve you next level tutorial that currently in
                    trend to match you with your expertise. Css3 transition is a
                    learning website. where you can find many good quality content
                    related to web development and tutorials about plugins. here we
                    are using html, html5, css, css3, jquery &amp; javascript along
                    with inspirational UI design layout by professionals by using
                    Photoshop and adobe allustrator.
                  </div>
                  <div className="btn-box">
                    <NavLink className="nav-link theme-btn btn-style-one" to="/main/contactus">
              Contact Us
            </NavLink>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column wow fadeInLeft">
                  <div className="author-desc">
                    <h2>Rahul Kumar Yadav</h2>
                    <span>Web Developer</span>
                  </div>
                  <figure className="image-1">
                    <a href="#" className="lightbox-image" data-fancybox="images">
                      <img
                        title="Rahul Kumar Yadav"
                        src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg"
                        alt=""
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>
            <div className="sec-title">
              <span className="title">Our Future Goal</span>
              <h2>We want to lead in innovation &amp; Technology</h2>
            </div>
            <div className="text">
              We works on UI/UX and functionality as well so that a plugins comes with
              proper stucture &amp; stunning looks which suits to your web app &amp;
              website.
            </div>
            <div className="text">
              We take a small toolkit here and ride it well so that it is fit for your
              use. One who performs well and looks even better.
            </div>
            <div className="text">
              Here we are trying to give you all kinds of technical content, whether
              it is related to designing or functionality. We are creating content on
              a lot of languages and will continue to make it free of cost even if you
              use it without any problem. Which is a very important thing.
            </div>
            <div className="text">
              Here you can also share the content you create, if our technical team
              likes it, then we will also share it on our blog.
            </div>
            <div className="text">
              In the end, I would say keep visiting our website and enjoy the quality
              content.
            </div>
          </div>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n       h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {}\n        a,\n        a:hover,\n        a:focus,\n        a:active {\n            text-decoration: none;\n            outline: none;\n        }\n        \n        a,\n        a:active,\n        a:focus {\n            color: #6f6f6f;\n            text-decoration: none;\n            transition-timing-function: ease-in-out;\n            -ms-transition-timing-function: ease-in-out;\n            -moz-transition-timing-function: ease-in-out;\n            -webkit-transition-timing-function: ease-in-out;\n            -o-transition-timing-function: ease-in-out;\n            transition-duration: .2s;\n            -ms-transition-duration: .2s;\n            -moz-transition-duration: .2s;\n            -webkit-transition-duration: .2s;\n            -o-transition-duration: .2s;\n        }\n        \n        ul {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n        }\n        img {\n    max-width: 100%}\n        section {\n            padding: 60px 0;\n           /* min-height: 100vh;*/\n        }\n\n.sec-title{\n  position:relative;\n  z-index: 1;\n  margin-bottom:60px;\n}\n\n.sec-title .title{\n  position: relative;\n  display: block;\n  font-size: 18px;\n  line-height: 24px;\n  color: #00aeef;\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n\n.sec-title h2{\n  position: relative;\n  display: block;\n  font-size:40px;\n  line-height: 1.28em;\n  color: #222222;\n  font-weight: 600;\n  padding-bottom:18px;\n}\n\n.sec-title h2:before{\n  position:absolute;\n  content:'';\n  left:0px;\n  bottom:0px;\n  width:50px;\n  height:3px;\n  background-color:#d1d2d6;\n}\n\n.sec-title .text{\n  position: relative;\n  font-size: 16px;\n  line-height: 26px;\n  color: #848484;\n  font-weight: 400;\n  margin-top: 35px;\n}\n\n.sec-title.light h2{\n  color: #ffffff;\n}\n\n.sec-title.text-center h2:before{\n  left:50%;\n  margin-left: -25px;\n}\n\n.list-style-one{\n  position:relative;\n}\n\n.list-style-one li{\n  position:relative;\n  font-size:16px;\n  line-height:26px;\n  color: #222222;\n  font-weight:400;\n  padding-left:35px;\n  margin-bottom: 12px;\n}\n\n.list-style-one li:before {\n    content: \"\\f058\";\n    position: absolute;\n    left: 0;\n    top: 0px;\n    display: block;\n    font-size: 18px;\n    padding: 0px;\n    color: #ff2222;\n    font-weight: 600;\n    -moz-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-style: normal;\n    font-variant: normal;\n    text-rendering: auto;\n    line-height: 1.6;\n    font-family: \"Font Awesome 5 Free\";\n}\n\n.list-style-one li a:hover{\n  color: #44bce2;\n}\n\n.btn-style-one{\n  position: relative;\n  display: inline-block;\n  font-size: 17px;\n  line-height: 30px;\n  color: #ffffff;\n  padding: 10px 30px;\n  font-weight: 600;\n  overflow: hidden;\n  letter-spacing: 0.02em;\n  background-color: #00aeef;\n}\n\n.btn-style-one:hover{\n  background-color: #0794c9;\n  color: #ffffff;\n}\n.about-section{\n  position: relative;\n  padding: 120px 0 70px;\n}\n\n.about-section .sec-title{\n  margin-bottom: 45px;\n}\n\n.about-section .content-column{\n  position: relative;\n  margin-bottom: 50px;\n}\n\n.about-section .content-column .inner-column{\n  position: relative;\n  padding-left: 30px;\n}\n\n.about-section .text{\n  margin-bottom: 20px;\n  font-size: 16px;\n  line-height: 26px;\n  color: #848484;\n  font-weight: 400;\n}\n\n.about-section .list-style-one{\n  margin-bottom: 45px;\n}\n\n.about-section .btn-box{\n  position: relative;\n}\n\n.about-section .btn-box a{\n  padding: 15px 50px;\n}\n\n.about-section .image-column{\n  position: relative;\n}\n\n.about-section .image-column .text-layer{\n    position: absolute;\n    right: -110px;\n    top: 50%;\n    font-size: 325px;\n    line-height: 1em;\n    color: #ffffff;\n    margin-top: -175px;\n    font-weight: 500;\n}\n\n.about-section .image-column .inner-column{\n  position: relative;\n  padding-left: 80px;\n  padding-bottom: 0px;\n}\n.about-section .image-column .inner-column .author-desc{\n    position: absolute;\n    bottom: 16px;\n    z-index: 1;\n    background: orange;\n    padding: 10px 15px;\n    left: 96px;\n    width: calc(100% - 152px);\n    border-radius: 50px;\n}\n.about-section .image-column .inner-column .author-desc h2{\n    font-size: 21px;\n    letter-spacing: 1px;\n    text-align: center;\n    color: #fff;\n  margin: 0;\n}\n.about-section .image-column .inner-column .author-desc span{\n    font-size: 16px;\n    letter-spacing: 6px;\n    text-align: center;\n    color: #fff;\n  display: block;\n  font-weight: 400;\n}\n.about-section .image-column .inner-column:before{\n    content: '';\n    position: absolute;\n    width: calc(50% + 80px);\n    height: calc(100% + 160px);\n    top: -80px;\n    left: -3px;\n    background: transparent;\n    z-index: 0;\n    border: 44px solid #00aeef;\n}\n\n.about-section .image-column .image-1{\n  position: relative;\n}\n.about-section .image-column .image-2{\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n\n.about-section .image-column .image-2 img,\n.about-section .image-column .image-1 img{\n  box-shadow: 0 30px 50px rgba(8,13,62,.15);\n      border-radius: 46px;\n}\n\n.about-section .image-column .video-link{\n  position: absolute;\n  left: 70px;\n  top: 170px;\n}\n\n.about-section .image-column .video-link .link{\n  position: relative;\n  display: block;\n  font-size: 22px;\n  color: #191e34;\n  font-weight: 400;\n  text-align: center;\n  height: 100px;\n  width: 100px;\n  line-height: 100px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  box-shadow: 0 30px 50px rgba(8,13,62,.15);\n  -webkit-transition: all 300ms ease;\n  -moz-transition: all 300ms ease;\n  -ms-transition: all 300ms ease;\n  -o-transition: all 300ms ease;\n  transition: all 300ms ease;\n}\n\n.about-section .image-column .video-link .link:hover{\n  background-color: #191e34;\n  color: #f\n    "
          }}
        />
      </>

      
{/*...........................................................................
NEWS LETTER SECTION
.............................................................................. */}


{/*...........................................................................
NEWS LETTER SECTION
.............................................................................. */}


    </>
    //  ......................................................................
    //  ......................................................................


  )
}

export default Home