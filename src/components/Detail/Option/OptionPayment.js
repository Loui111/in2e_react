const OptionPayment = ({ amount }) => {
  const later = () => {
    if (amount > 0) {
      alert("추후 오픈합니다.");
    }
  };

  return (
    <div className="OptionPayment">
      <button className="pay_button">
        <span className="pay_text" onClick={later}>
          {amount}원 결제하기
        </span>{" "}
      </button>
    </div>
  );
};

// (255, 176, 0)

export default OptionPayment;
