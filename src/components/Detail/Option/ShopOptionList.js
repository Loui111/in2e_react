import ShopOptionItem from "./ShopOptionItem";
import { useState } from "react";
import OptionPayment from "./OptionPayment";

const ShopOptionList = ({ targetOption, onAddSubButtonClick }) => {
  const [amount, setAmount] = useState(0);

  const addAmount = (addAmount) => {
    setAmount(parseInt(amount) + parseInt(addAmount));
  };

  return (
    <div className="ShopOptionList">
      {targetOption.map((it) => (
        <ShopOptionItem
          key={it.optionId}
          optionTitle={it.optionTitle}
          optionCount={it.optionCount}
          optionPrice={it.optionPrice}
          optionDiscount={it.optionDiscount}
          optionDesc={it.optionDesc}
          onAddSubButtonClick={addAmount}
        />
      ))}
      <section className="ShopOptionPayment">
        <OptionPayment amount={amount} />
      </section>
    </div>
  );
};

export default ShopOptionList;

//컴포넌트 끌어 올리기
//https://velog.io/@idenk/React-State-%EB%81%8C%EC%96%B4%EC%98%AC%EB%A6%AC%EA%B8%B0
//TODO: @@@
//순서는 ShopOptionItem --> ShopOptionList --> ShopOption --> SubDetail
// SubDetail에 payment를 구현해야 하지만, 왠지 state를 끌어올리기가 한단계 이상은 안올라가짐.
// 일단 바로 상위인 여기까지만 구현을 하고, skip
// 근데 이렇게 4단계나 올라가는거라면 Context를 써서 바로 갖다 써야 맞을거 같은데 그건 일단 보류.
