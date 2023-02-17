import React from "react";
import { useNavigate } from "react-router-dom";
import { shopdata } from "../util/ShopData/shopdata";
// import "react-slideshow-image/dist/styles.css";
// import { Slide } from "react-slideshow-image";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const MainSlide = (imageName) => {
  const navigate = useNavigate();

  // console.log(shopdata);
  // console.log(shopdata[0].shopType);

  // process.env.PUBLIC_URL +
  //   `images/${shopdata[Math.floor(Math.random() * 6) + 1].shopImage}`;

  // const shopId1 =
  //   process.env.PUBLIC_URL +
  //   `images/${shopdata[Math.floor(Math.random() * 6) + 1].shopImage}`;
  // const shopId2 =
  //   process.env.PUBLIC_URL +
  //   `images/${shopdata[Math.floor(Math.random() * 6) + 1].shopImage}`;
  // const shopId3 =
  //   process.env.PUBLIC_URL +
  //   `images/${shopdata[Math.floor(Math.random() * 6) + 1].shopImage}`;
  // const shopId4 =
  //   process.env.PUBLIC_URL +
  //   `images/${shopdata[Math.floor(Math.random() * 6) + 1].shopImage}`;

  const shopId1 = Math.floor(Math.random() * 6) + 1;
  const shopId2 = Math.floor(Math.random() * 6) + 1;
  const shopId3 = Math.floor(Math.random() * 6) + 1;
  const shopId4 = Math.floor(Math.random() * 6) + 1;

  // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  // console.log(shopdata[0]);
  // console.log(shopdata[shopId1].shopType);
  // console.log(shopdata[shopId1].shopId);

  return (
    // console.log(/${shopdata[shopId1].shopType}/${shopdata[shopId1].shopId});

    // console.log( `/${shopdata[shopId1].shopType}/${shopdata[shopId1].shopId}` );

    <section className="Slide">
      <div className="Slide_wrapper">
        <div className="Slide_image">
          <img
            src={
              process.env.PUBLIC_URL + `images/${shopdata[shopId1].shopImage}`
            }
            alt=""
            onClick={() =>
              navigate(
                `/${shopdata[shopId1].shopType}/${shopdata[shopId1].shopId}`
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MainSlide;
