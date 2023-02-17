import MyButton from "../../MyButton";

const ShopGuide = ({ targetShopGuide }) => {
  // filtered = sortedList.filter((it) => parseInt(it.emotion) > 3);

  // const newTargetShopReview = targetShopReview.filter(
  //   (it) => it.shopReviewImage !== ""
  // );

  //생각해보면 이딴짓을 할 필요가 없지. backend에서 true인 것들만 보내주면 되자나.
  // 여기서 응용해볼수 있는 것은,   for...in  또는

  // let guideList = [];

  // const newTargetShopGuide = () => {
  //   console.log("$$$$$");
  //   if (targetShopGuide.shopPark === "true") {
  //     guideList.push("park.png");
  //   }

  //   if (targetShopGuide.shopStay === "true") {
  //     guideList.push("stay.png");
  //   }

  //   if (targetShopGuide.shopToday === "true") {
  //     guideList.push("today.png");
  //   }

  //   if (targetShopGuide.shopPrepare === "true") {
  //     guideList.push("stay.png");
  //   }
  // };

  return (
    <div className="ShopGuide">
      <div className="guide_image">
        {/* 삼항 연산자로 if, 를 구현하는건데 이거 꽤 쏠쏠함. https://codingapple.com/unit/react-if-else-patterns-enum-switch-case/ */}
        {/*     <div>
                  {
                      1 === 1
                      ? <p>참이면 보여줄 HTML</p>
                      : null
                  }
                </div> */}
        {targetShopGuide.shopPark === "true" ? (
          <span className="guide_park">
            <img src={process.env.PUBLIC_URL + `/icons/park.png`} alt="" />
            주차가능
          </span>
        ) : null}

        {targetShopGuide.shopStay === "true" ? (
          <span className="guide_stay">
            <img src={process.env.PUBLIC_URL + `/icons/stay.png`} alt="" />
            대기장소 가능
          </span>
        ) : null}

        {targetShopGuide.shopToday === "true" ? (
          <span className="guide_today">
            <img src={process.env.PUBLIC_URL + `/icons/today.png`} alt="" />
            당일 가능
          </span>
        ) : null}

        {targetShopGuide.shopPrepare === "true" ? (
          <span className="guide_prepare">
            <img src={process.env.PUBLIC_URL + `/icons/park.png`} alt="" />
            준비 필요
          </span>
        ) : null}
      </div>

      <div className="guide_content">{targetShopGuide.shopContent}</div>
    </div>
  );
};

export default ShopGuide;

{
  /* <img src={process.env.PUBLIC_URL + `icons/${image}`} alt="" /> */
}
