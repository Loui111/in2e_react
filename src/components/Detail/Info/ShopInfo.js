const ShopInfo = ({ targetShopInfo }) => {
  return (
    <div className="ShopInfo">
      <div className="ShopInfo_shopMap">
        <img
          src={process.env.PUBLIC_URL + `/images/${targetShopInfo.shopMap}`}
        />
      </div>

      <div className="shop_text_wrapper">
        <div className="shop_phone"> 전화번호: {targetShopInfo.shopPhone} </div>
        <div className="shop_address">
          주소: {targetShopInfo.shopAddress} (복사)
        </div>
      </div>
    </div>
  );
};
export default ShopInfo;
