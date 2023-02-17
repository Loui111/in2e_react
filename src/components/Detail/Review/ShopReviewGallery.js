import ShopReviewGalleryItem from "./ShopReviewGalleryItem";

const ShopReviewGallery = ({ targetShopReview }) => {
  //이거 좀 비효율임. 필터 걸어서 이미지 없는거 걸러내는데, 비슷하게 for하는걸 밑에서 또 함.
  const newTargetShopReview = targetShopReview.filter(
    (it) => it.shopReviewImage !== ""
  );

  return (
    <div className="ShopReviewGallery">
      <section className="gallery_count_text">
        사진 모아보기:{" "}
        <span className="gallery_count_no">{newTargetShopReview.length}</span>{" "}
        개
      </section>

      <section className="gallery_image">
        {newTargetShopReview.map((it) => (
          <ShopReviewGalleryItem
            key={it.shopReviewId}
            shopReviewImage={it.shopReviewImage}
          />
        ))}
      </section>
    </div>
  );
};

export default ShopReviewGallery;

/* <div className="review_star_each_5">
            {Array.from({ length: 5 }, (value, key) => (
              <img
                src={process.env.PUBLIC_URL + `/images/icons8-star-48.png`}
                alt=""
              />
            ))}
          </div> */

// <div className="ShopList">
//       {shoplists.map((it) => (
//         <ShopItem
//           key={it.shopId}
//           shopId={it.shopId}
//           shopImage={it.shopImage}
//           shopTitle={it.shopTitle}
//           shopType={it.shopType}
//           shopPrice={it.shopPrice}
//           shopStar={it.shopStar}
//           shopDiscount={it.shopDiscount}
//           shopComment={it.shopComment}
//         />
//       ))}
//     </div>
