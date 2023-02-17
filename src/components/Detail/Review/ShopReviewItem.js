const ShopReviewItem = ({
  shopReviewScore,
  shopReviewImage,
  shopReviewContent,
  shopReviewUser,
  optionTitle,
}) => {
  const currentTime = new Date().toISOString().slice(0, 10);

  return (
    <div className="ShopReviewItem">
      <span className="review_star">
        {Array.from({ length: parseInt(shopReviewScore) }, (value, key) => (
          <img
            src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
            alt=""
          />
        ))}
      </span>
      {/* <div className="review_count_star">{shopReviewScore}</div> */}
      <span className="review_time"> {"   " + currentTime} </span>
      <div className="review_user_option">
        <span className="review_user">{shopReviewUser}</span>
        <span> / </span>
        <span className="review_option"> {optionTitle} </span>
      </div>
      <div className="review_content"> {shopReviewContent} </div>
    </div>
  );
};

export default ShopReviewItem;

// shopReviewScore={it.shopReviewScore}
//           shopReviewImage={it.shopReviewImage}
//           shopReviewContent={it.shopReviewContent}
