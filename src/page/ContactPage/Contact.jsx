import React from 'react'
import '../../assets/style/Contact.css'
import layer from "../assets/layer-1-1.png";
import kcd from "../assets/mask-group-KCD.png";
const Contact = () => {
  const handleSubmit = () => {
    // Здесь вы можете добавить логику обработки формы, если это необходимо

    // После обработки формы, обновите страницу
    window.location.reload();
  };
  return (
    // <div cl7*/88888888assName="container">
<div className="container">

<>
    <div className="contact-page-zVw">
      <div className="subscribe-card-MMb">
        <div className="group-874-ft5">
          <img
            src={kcd}
            style={{
              zIndex: 0,
              width: "1280px",
              height: "442px",
              flexShrink: 0,
            }}
          />
          <div style={{position:'relative',top:"-340px"}}>
          <p className="deliciousness-to-your-inbox-ERP">
            Deliciousness to your inbox
          </p>
          <p className="lorem-ipsum-dolor-sit-amet-consectetuipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore-magna-aliqut-enim-ad-minim-A49">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
          <div className="auto-group-vksk-DYD">
            <input
              type="email"
              name="email"
              placeholder="Your email address..."
              className="your-email-address-ssf"
              />
            <div
              className="group-826-bHs"
              style={{ cursor: "pointer" }}
              onClick={handleSubmit}
              >
              Subscribe
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="contact-RXo">
        <p className="contact-us-xnd">Contact us</p>
        <div className="auto-group-2sem-GHX">
          <div className="group-13936-q5j">
            <div className="rectangle-8-weZ"></div>
            <img className="layer-1-1-4DP" src={layer} alt="Layer Image" />
          </div>
          <div className="group-894-oAy">
            <div className="auto-group-bros-Kf7">
              <div className="group-13938-GaM">
                <p className="name-dA1">Name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  className="auto-group-zm3f-hvZ"
                  />
              </div>
              <div className="auto-group-uwdx-k89">
                <p className="email-address-hp5">emAIL aDDRESS</p>
                <input
                  className="auto-group-jgch-m3F"
                  type="email"
                  name="email"
                  placeholder="Your email address..."
                  />
              </div>
            </div>
            <div className="auto-group-xjph-2zm">
              <p className="subject-xNd">Subject</p>
              <p className="enquiry-type-fXw">ENquiry type</p>
            </div>
            <div className="auto-group-jsku-9CD">
              <input
                className="auto-group-7bwo-Vms"
                type="text"
                name="subject"
                placeholder="Enter subject..."
                />
              <div className="auto-group-tztd-8K3">
                <input
                  className="advertising-5EH"
                  type="text"
                  name="advertising"
                  placeholder="Advertising"
                  />
              </div>
            </div>
            <p className="messages-VJ1">MEssages</p>
            <textarea
              className="auto-group-zgcz-Djo"
              placeholder="Enter your messages..."
              rows="4"
              ></textarea>
            <button
              className="button-rGy"
              style={{ cursor: "pointer" }}
              onClick={handleSubmit}
              >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
   
              </>
                </div>
  )
}

export default Contact