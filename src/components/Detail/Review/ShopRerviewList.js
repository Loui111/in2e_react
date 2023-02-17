import ShopReviewItem from "./ShopReviewItem";

const ShopRerviewList = ({ targetShopReview }) => {
  const currentTime = new Date().toISOString();

  // return date.toISOString().slice(0, 10);

  console.log(currentTime);

  return (
    <div className="ShopRerviewList">
      <div className="review_count_wrapper">
        후기: <span className="review_count_no">{targetShopReview.length}</span>{" "}
        개
      </div>
      {targetShopReview.map((it) => (
        <ShopReviewItem
          key={it.shopReviewId}
          shopReviewScore={it.shopReviewScore}
          shopReviewImage={it.shopReviewImage}
          shopReviewContent={it.shopReviewContent}
          shopReviewUser={it.shopReviewUser}
          optionTitle={it.optionTitle}
        />
      ))}
    </div>
  );
};

export default ShopRerviewList;

// <div className="OptionList">
//       OptionList==================
//       {targetOption.map((it) => (
//         <OptionItem
//           key={it.optionId}
//           optionTitle={it.optionTitle}
//           optionCount={it.optionCount}
//           optionPrice={it.optionPrice}
//           optionDiscount={it.optionDiscount}
//           optionDesc={it.optionDesc}
//         />
//       ))}
//     </div>
