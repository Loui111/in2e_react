import ShopRerviewList from "./ShopRerviewList";
import ShopReviewGallery from "./ShopReviewGallery";
import ShopReviewScore from "./ShopReviewScore";

const ShopReview = ({ targetShopReview }) => {
  return (
    <div className="ShopReview">
      <section className="ShopReviewScore">
        <ShopReviewScore targetShopReview={targetShopReview} />
      </section>

      <section className="ShopReviewPicture">
        <hr />
        <ShopReviewGallery targetShopReview={targetShopReview} />
      </section>

      <section>
        <hr />

        <ShopRerviewList targetShopReview={targetShopReview} />
      </section>
    </div>
  );
};

export default ShopReview;

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

// const scores={
//   "1": "",
//   "2": "",
//   "3": "",
//   "4": "",
//   "5": "",
// }

// let a1=0;
// let a2=0;
// let a3=0;
// let a4=0;
// let a5=0;

// let temp=0;

// // const reviews = targetShopReview.map(
// //   (total, currentValue) =>
// //     (total = total + parseFloat(currentValue.shopReviewScore)),
// //   0
// // );

// const reviews=()=>{
//   targetShopReview.map( (it)=>{
//     parseInt(temp) = it.shopReviewScore;
//     if( temp === 5){
//       a5++;
//     }else if (temp ===4) {
//       a4++
//     } else if (temp ===3) {
//       a3++;
//     } else if (temp ===2) {
//       a2++;
//     } else if (temp ===1) {
//       a1++;
//     }else{
//       console.log("error")
//     }
//   })
// }

// const num = targetShopReview.length;

// const sum = targetShopReview.reduce((a, v) => (a = a + v.shopReviewScore), 0);

// const reviewScore = parseFloat(targetShopReview[1]["shopReviewScore"]);

// const sum = targetShopReview.map((it) => console.log(it["shopReviewScore"]));

// let total = 0.0;

// const sum = targetShopReview.map(
//   (it) => (total += parseFloat(it["shopReviewScore"]))
// );

// const sum = targetShopReview.map((it) => {
//   (it) => (total += parseFloat(it["shopReviewScore"]));
// });

// const total = targetShopReview.data.reduce(
//   (total, currentItem) => (total = total + currentItem.shopReviewScore),
//   0
// );
