import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/image/logo.svg"
const Footer = () => {
  return (
    <>
    <div className="container">
    <div className="home-page-JXT">
      <div style={{paddingBottom: "30px"}} className="footer-9aq">
        <div className="auto-group-55zy-u4D">
          <div className="group-875-f3P">
            <p className="foodieland-ag9">
                <Link className="link" to="/">
              <span className="foodieland-ag9-sub-0">
                <img src={logoImg} alt="" /></span>
                </Link>
              <span className="foodieland-ag9-sub-1">.</span>
            </p>
            <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-LhF">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,{" "}
            </p>
          </div>
          <div className="group-824-CzM">
            <Link className="link" to="/recipes">
            <p className="recipes-LKs">Recipes</p>
            </Link>
            <Link className="link" to="/blog">
            <p className="blog-SNu">Blog</p>
            </Link>
            <Link className="link" to="/contact">
            <p className="contact-mg5">Contact</p>
            </Link>
            <Link className="link" to="/about">
            <p className="about-us-6iM">About us</p>
            </Link>
          </div>
        </div>
        <img className="vector-1-SGR" src="REPLACE_IMAGE:101:753" />
        <div className="auto-group-omcu-ATK">
          <p className="flowbase-powered-by-webflow-gwT">
            <span className="flowbase-powered-by-webflow-gwT-sub-0">
              © 2020 Flowbase. Powered by{" "}
            </span>
            <span className="flowbase-powered-by-webflow-gwT-sub-1">
              Webflow
            </span>
          </p>
          <div className="social-xXb">
            <img className="facebook-K7F" src="./assets/facebook.png" />
            <img className="twitter-3J9" src="./assets/twitter.png" />
            <img className="instagram-M3w" src="./assets/instagram-GGq.png" />
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Footer;
