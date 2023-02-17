import React from "react";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descipt,
  onClick, //@@@최적화: usestate를 통하거나 usecallback으로 묶어놓은 함수가 아니면, 기본적으로 컴포넌트 렌더링 될때 다시 생성된다.
  isSelected, //          상위로 가서, Editor가 Item을 통해 onClick 을 prop보내는것도 useCallBack으로 재사용할수 있도록 만들어야 한다!! @@@ 캐중요
}) => {
  return (
    <div
      className={[
        //@@@ 클릭에따라 다른 className이 들어가도록 구현하는 좋은 팁 isSelected는 DiaryEditor에서 구현해서 받아와야함.
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : "EmotionItem_off",
      ].join(" ")}
      onClick={() => {
        onClick(emotion_id);
      }}
    >
      <img src={emotion_img} alt="" />
      <span>{emotion_descipt} </span>
    </div>
  );
};

export default React.memo(EmotionItem);
