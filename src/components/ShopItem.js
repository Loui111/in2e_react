import { useNavigate } from "react-router-dom";

const ShopItem = ({
  shopId,
  shopImage,
  shopTitle,
  shopPrice,
  shopStar,
  shopType,
  shopDiscount,
  shopComment,
}) => {
  const navigate = useNavigate();

  const goDetailPage = () => {
    navigate(`/${shopType}/${shopId}`);
  };

  return (
    <div className="ShopItem">
      <div className="ShopItem_wrapper" onClick={goDetailPage}>
        <div className="image_wrapper">
          <img src={process.env.PUBLIC_URL + `/images/${shopImage}`} />
        </div>
        <div className="text_wrapper">
          <div className="title_wrapper">{shopTitle}</div>
          <div className="price_wrapper">
            <div>
              <span className="discount">{shopDiscount}0% </span>
              {shopPrice}₩
            </div>
          </div>
          <div className="review_wrapper">
            <img src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`} />
            {shopStar}.0점 {"   "}({shopComment})
          </div>
        </div>
      </div>
      <br />
      {/* <div className="ShopItem_imagewrapper">
    <img src={process.env.PUBLIC_URL + `images/${shopImage}`} />
  </div> */}
    </div>
  );
};

// <div className="price_wrapper">
// {shopDiscount}
// {shopPrice}
// </div>
// <div className="review_wrapper">
// {shopStar}
// {shopComment}
// </div>

// const ShopItem = (
//   shopId,
//   shopImage,
//   shopTitle,
//   shopPrice,
//   shopStar,
//   shopDiscount,
//   shopComment
// ) => {
//   return (
//       console.log(shopImage);
//     <div className="ShopItem">
//       {shopId}
//       {shopTitle}
//     </div>

// <div className="ShopItem">
//   <div className="ShopItem_wrapper">
//     <img src={process.env.PUBLIC_URL + `/images/${shopImage}`} />

//     <div className="title_wrapper">{shopTitle}</div>
//     <div className="price_wrapper">
//       {shopDiscount}
//       {shopPrice}
//     </div>
//     <div className="review_wrapper">
//       {shopStar}
//       {shopComment}
//     </div>
//   </div>
//   <br />
//   {/* <div className="ShopItem_imagewrapper">
//     <img src={process.env.PUBLIC_URL + `images/${shopImage}`} />
//   </div> */}
// </div>
//   );
// };

export default ShopItem;

// <ShopItem
//           key={it.shopId}
//           shopId={it.shopId}
//           shopImage={it.shopImage}
//           shopTitle={it.shopTitle}
//           shopPrice={it.shopPrice}
//           shopStar={it.shopStar}
//           shopDiscount={it.shopDiscount}
//           shopComment={it.shopComment}
