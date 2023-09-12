import React from "react";
import shoes from ".././../././../src/assest/shoes.png";
import amazon from ".././../././../src/assest/amazon.png";
import facebook from ".././../././../src/assest/fb.png";

const BrandMain = () => {
  return (
    <>
      <div className="mainDiv">
        <section className="1sec">
          <div className="strong">
            <h1>YOUR FEET DESERVE THE BEST</h1>
          </div>

          <div className="normal">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis reiciendis libero molestiae inventore veniam officiis
              corporis quia quasi itaque voluptatem! Facilis, mollitia? Aperiam
              unde iusto quod sequi ea blanditiis possimus.
            </p>
          </div>
        </section>
        <div className="btnshopping">
          <div className="1">
            <button className="shop">Shop Now</button>
          </div>
          <div className="2">
            <button className="cat">Catageory</button>
          </div>
        </div>
        <section className="2sec">
          <div className="shoes">
            <img src={shoes} alt="shoes" />
          </div>
        </section>
      </div>
      <div className="herotext">
        <p className="textlogos">Also Availabe On</p>
      </div>
      <div className="logosSection">
        <div className="logoAmazon">
          <img src={amazon} alt="amazon" />
        </div>
        <div className="logoFacebook">
          <img src={facebook} alt="facebook" />
        </div>
      </div>
    </>
  );
};

export default BrandMain;
