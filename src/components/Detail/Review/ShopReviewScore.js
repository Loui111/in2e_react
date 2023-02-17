const ShopReviewScore = ({ targetShopReview }) => {
  // 리뷰 스코어 5개 개수세는 연산은 backend 에서 해놓는게 맞을거 같음. 일단 여기선 대충 랜덤숫자.
  const randNum5 = Math.floor(Math.random() * 10) + 1;
  const randNum4 = Math.floor(Math.random() * 10) + 1;
  const randNum3 = Math.floor(Math.random() * 3) + 1;
  const randNum2 = Math.floor(Math.random() * 2) + 1;
  const randNum1 = Math.floor(Math.random() * 1) + 1;
  // 리뷰 스코어 5개 개수세는 연산은 backend 에서 해놓는게 맞을거 같음. 일단 여기선 대충 랜덤숫자.

  //랜덤수들을 걍 합산.
  // const reviewAllSum = parseInt(
  //   randNum1 + randNum2 + randNum3 + randNum4 + randNum5
  // );

  //리뷰 스코어를 전부 합산.
  //원래 실제 스코어 계산 할랬는데, 어차피 rand 쓸꺼라서 걍 rand로 해야겠따.
  const reviewAllSum = targetShopReview.reduce(
    (total, currentValue) =>
      (total = total + parseInt(currentValue.shopReviewScore)),
    0
  );

  //스코어를 전체 개수로 나눔 (평균치. 최종스코어)
  const reviewScore =
    Math.round((reviewAllSum * 10) / targetShopReview.length) / 10;

  //노란별 개수.
  const countStar = parseInt(reviewScore);
  //까만별
  const halfStar = 5 - countStar;

  return (
    <div className="ShopReviewScore">
      <div className="review_star_draw_wrapper">
        <div className="review_star_draw">
          <div className="review_star_number">
            Review Score: {reviewScore} <br />
          </div>
          <div className="review_star_image">
            {Array.from({ length: countStar }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
            {Array.from({ length: halfStar }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-half-48.png`}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      <div className="review_star_each">
        <div className="review_star_each_wrapper">
          {/* 추후엔 그냥 별5, 4, 3, 2, 1개 이미지 박는게 나음. for문 왜돌아  */}
          {/* 태그 안에서 for문 돌면서 이미지 뿌리기 (태그) 렌더링 */}
          <div className="review_star_each_5">
            {Array.from({ length: 5 }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
          </div>
          <div className="review_star_each_4">
            {Array.from({ length: 4 }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
          </div>
          <div className="review_star_each_3">
            {Array.from({ length: 3 }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
          </div>
          <div className="review_star_each_2">
            {Array.from({ length: 2 }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
          </div>
          <div className="review_star_each_1">
            <img
              src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
              alt=""
            />
          </div>
        </div>
        <div className="review_star_each_number">
          : {randNum5} <br />: {randNum4} <br />: {randNum3} <br />: {randNum2}{" "}
          <br />: {randNum1} <br />
        </div>
      </div>
    </div>
  );
};

export default ShopReviewScore;
