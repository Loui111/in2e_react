import ShopItem from "./ShopItem";
import { shopdata } from "../util/ShopData/shopdata";

// filtered = sortedList.filter((it) => parseInt(it.emotion) > 3);
// const shopListTypePage = shopdata.filter((it) => it.shopType === typeName );
// console.log("$$$$$$$$$$$$$$$$$$$$");
// console.log(shopListTypePage);

const ShopList = ({ typeName }) => {
  const shopListTypePage = shopdata.filter((it) => it.shopType === typeName);

  return (
    <div className="ShopList">
      {shopListTypePage.map((it) => (
        <ShopItem
          key={it.shopId}
          shopId={it.shopId}
          shopImage={it.shopImage}
          shopTitle={it.shopTitle}
          shopType={it.shopType}
          shopPrice={it.shopOptions[0].optionDiscount}
          shopStar={it.shopReview[0].shopReviewScore}
          shopDiscount={it.shopReview[0].shopReviewScore}
          shopComment={it.shopReview.length}
        />
      ))}
    </div>
  );
};

export default ShopList;

// shopOptions: [
//   {
//     optionId: "1",
//     optionTitle: "A-1. 평일 2시간권 대인",
//     optionCount: "990",
//     optionPrice: "130000",
//     optionDiscount: "80000",
//     optionDesc: "10인 이상 불가.",
//   },
