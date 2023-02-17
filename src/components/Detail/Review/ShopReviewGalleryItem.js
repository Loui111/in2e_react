const ShopReviewGalleryItem = ({
  //   shopReviewScore,
  //   shopReviewContent,
  shopReviewImage,
}) => {
  return (
    <div className="ShopReviewGalleryItem">
      <div className="gallery_image_wrapper">
        <img
          src={process.env.PUBLIC_URL + `/images/${shopReviewImage}`}
          alt=""
        />
      </div>
    </div>

    // <div>
    //   {{ shopReviewImage } !== "" ? (
    //     <div className="ShopReviewGalleryItem">
    //       <div className="gallery_image_wrapper">
    // <img
    //   src={process.env.PUBLIC_URL + `/images/${shopReviewImage}`}
    //   alt=""
    // />
    //       </div>
    //     </div>
    //   ) : null}

    //   {/* <img
    //       src={process.env.PUBLIC_URL + `/images/${shopReviewImage}`}
    //       alt=""
    //     /> */}
    // </div>
  );
};

export default ShopReviewGalleryItem;

// shopReviewScore={it.shopReviewScore}
//             shopReviewImage={it.shopReviewImage}
//             shopReviewContent={it.shopReviewContent}
