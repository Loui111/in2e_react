import { useState } from "react";

const ShopOptionItem = ({
  optionTitle,
  optionCount,
  optionPrice,
  optionDiscount,
  optionDesc,
  onAddSubButtonClick,
}) => {
  const [itemCount, setItemCount] = useState(optionCount);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClickAdd = () => {
    setQuantity(quantity + 1);
    setItemCount(itemCount - 1);

    //내부적으로 total 이라는 state값이 있어야 각종 option들 값을 취합해서 상위 컴포넌트에 끌어올리기 해줄수 있음.
    setTotal(parseInt(total) + parseInt(optionDiscount));
    onAddSubButtonClick(parseInt(optionDiscount));
  };

  const handleClickSub = () => {
    if (quantity <= 0) return;
    setQuantity(quantity - 1);
    setItemCount(itemCount + 1);

    if (parseInt(total) - parseInt(optionDiscount) < 0) return 0;
    else {
      onAddSubButtonClick(-parseInt(optionDiscount));
      setTotal(parseInt(total) - parseInt(optionDiscount));
    }
  };

  return (
    <div className="ShopOptionItem">
      <div className="title">{optionTitle}</div>
      <div>
        수량: <span className="count">{itemCount}</span>
      </div>

      <div className="price"> {optionPrice}₩</div>
      <div className="discount">{"  " + optionDiscount}₩</div>
      <div className="desc"> {optionDesc} </div>
      <div className="button_warpper">
        <button className="add" onClick={handleClickAdd}>
          {" "}
          +{" "}
        </button>
        <span className="quantity"> {quantity} </span>
        <button className="sub" onClick={handleClickSub}>
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
};

export default ShopOptionItem;

//컴포넌트 끌어 올리기
//https://velog.io/@idenk/React-State-%EB%81%8C%EC%96%B4%EC%98%AC%EB%A6%AC%EA%B8%B0
