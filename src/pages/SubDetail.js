import ShopGuide from "../components/Detail/Guide/ShopGuide";
import ShopInfo from "../components/Detail/Info/ShopInfo";
import ShopOption from "../components/Detail/Option/ShopOption";
import ShopReview from "../components/Detail/Review/ShopReview";
import ShopBizInfo from "../components/Detail/ShopBiz/ShopBizInfo";
import MyButton from "../components/MyButton";
// import { forwardRef } from "react";
// import { useState } from "react";

// ref={optionRef}

const SubDetail = ({ targetShop, optionRef, infoRef, reviewRef, guideRef }) => {
  const targetOption = targetShop.shopOptions;
  const targetShopInfo = targetShop.shopInfo;
  const targetShopReview = targetShop.shopReview;
  const targetShopGuide = targetShop.shopGuide;
  const targetShopBiz = targetShop.shopBiz;

  //   console.log(targetOption);
  return (
    <div className="SubDetail">
      <section className="shop_option" ref={optionRef}>
        <ShopOption targetOption={targetOption} />
      </section>

      <div className="button_info">
        <MyButton text="업체정보" />
        <hr />
      </div>
      <section className="shop_info" ref={infoRef}>
        <ShopInfo targetShopInfo={targetShopInfo} />
      </section>

      <div className="button_review">
        <MyButton text="후기" />
        <hr />
      </div>
      <section className="shop_review" ref={reviewRef}>
        <ShopReview targetShopReview={targetShopReview} />
      </section>

      <div className="button_review">
        <MyButton text="이용안내" />
        <hr />
      </div>
      <section className="shop_guide" ref={guideRef}>
        <ShopGuide targetShopGuide={targetShopGuide} />
      </section>
      <section className="shop_biz">
        <ShopBizInfo targetShopBiz={targetShopBiz} />
      </section>
      {/* <section className="shop_payment">
        <Payment />
      </section> */}
    </div>
  );
};

export default SubDetail;
