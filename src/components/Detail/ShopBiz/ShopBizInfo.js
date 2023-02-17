const ShopBizInfo = ({ targetShopBiz }) => {
  return (
    <div className="ShopBizInfo">
      <div className="biz_title">상품정보 제공고시 / 판매자 정보</div>
      <div className="biz_text">
        <div> 대표자 상호: {"   " + targetShopBiz.shopBizName}</div>
        <div> 대표자 성명: {"   " + targetShopBiz.shopBizOwner}</div>
        <div>사업자 등록번호: {"   " + targetShopBiz.shopBizRegister}</div>
      </div>
    </div>
  );
};

export default ShopBizInfo;
