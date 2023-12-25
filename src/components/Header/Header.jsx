import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LOgoImg from "../../assets/image/logo.svg"

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="home-page-JXT">
          <div className="auto-group-kfgd-cY9">
            <div className="navigation-Xv1">
              <p className="foodieland-14V">
                <Link to="/">
                <span className="foodieland-14V-sub-0"><img src={LOgoImg} alt="" /></span>
                </Link>
                <span className="foodieland-14V-sub-1">.</span>
              </p>
              <div className="auto-group-pkmb-sPX">
                <div className="group-824-ky7">
                  <Link className="link" to="/">
                    <p className="home-h7f">Home</p>
                  </Link>
                  <Link to="/recipes" className="link">
                    <p className="recipes-1e9">Recipes</p>
                  </Link>
                  <Link className="link" to="/blog">
                    <p className="blog-YPB">Blog</p>
                  </Link>
                  <Link className="link" to="/contact">
                    <p className="contact-qNH">Contact</p>
                  </Link>
                  <Link className="link" to="/about">
                    <p className="about-us-YnV">About us</p>
                  </Link>
                </div>
                <div className="social-gth">
                  <img
                    className="facebook-eqX"
                    src="./assets/facebook-bv1.png"
                  />
                  <img className="twitter-xLR" src="./assets/twitter-7iy.png" />
                  <img className="instagram-EYq" src="./assets/instagram.png" />
                </div>
              </div>
            </div>
            <img className="vector-2-5JZ" src="REPLACE_IMAGE:101:1001" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
