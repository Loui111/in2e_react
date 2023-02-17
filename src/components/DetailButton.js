import { forwardRef } from "react";

const DetailButton = ({ text, onClick, type, name }) => {
  //추후 type이 추가되면 에러나고 난리나는 걸 방지하기 위해,
  //2중하나, 없으면 default로 강제하도록 보완하는 코드
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    // 이건 약간 꼼수인가? className이 'Mybutton MyButton_positive' 이게 네임이 됨.
    <button
      className={["detail_button", `detail_button_${name}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

DetailButton.defaultProps = {
  //type에 positive, negative, default 3가지 타입을 쓸꺼라 여기서 선언
  type: "default",
};

export default DetailButton;
