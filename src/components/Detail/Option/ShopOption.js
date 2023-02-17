import ShopOptionList from "./ShopOptionList";

const ShopOption = ({ targetOption }) => {
  return (
    <div className="ShopOption">
      <ShopOptionList targetOption={targetOption} />
    </div>
  );
};

export default ShopOption;
