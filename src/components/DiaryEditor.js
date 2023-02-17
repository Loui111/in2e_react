import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import MyHeader from "./MyHeader";
import MyButton from "./MyButton";
import { useRef, useState, useContext, useEffect } from "react";
import EmotionItem from "./EmotionItem";
import { DiaryDispatchContext } from "../App";
// import TextArea from "./TextArea";
import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef(); //내용이 비었을때 포커싱 해주는거.
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState(3); //변화가 생기는 컴포넌트의 값을 저장할 스테이트를 만든다. (감정 버튼 눌렀을때의 스테이트)
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext); //DiaryDispatchContext 이걸통해 App.js의 onCreate를 가져옴
  const handleClickEmote = useCallback((emotion) => {
    //@@@최적화를 위함. Editor에서 Emotion객체를 받을때 렌더링 다시 일어날 필요 없으니 최적화를 걸어야 한다.
    //감정 버튼을 누르면 수행할 액션
    setEmotion(emotion); //버튼을 누르면 emotion값이 들어오고,
  }, []);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus(); //쓴게 없으면 이쪽으로 포커싱
      return;
    }

    if (window.confirm(isEdit ? "수정?" : "일기 작성ㅇㅋ?")) {
      if (!isEdit) {
        onCreate(date, content, emotion); //App.js에 있는 onCreate에다 던짐. 근데 굳이 이걸 App.js에 구현했어야 했는지는 의문
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }
    navigate("/", { replace: true }); //홈으로 보내고, 뒤로가기 눌러서 Edit화면으로 다시 오는걸 방지.
  };

  const handleRemove = () => {
    //remove실제 역할은 app.js에서 한다. 파일구조를 왜 이렇게 한건지는 아직 잘 모르겠음
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]); //Edit이 마운트 될때 호출하도록 로직 구현.

  // if (!originData && isEdit === true) {

  //Edit에서 받아온거라면,
  // console.log(originData.content);
  // console.log(originData.date);
  // console.log(originData.emotion);
  // setEmotion(originData.emotion);
  // setDate(originData.date);
  // setContent(originData.content);
  // }

  //date, emotion_id, content

  //버튼을 눌렀을때, 해당 스테이트를 저장하고, 그에따라 렌더링, 값이 변경되는 기본과정 (@@@ 중요!!!!)
  //https://www.udemy.com/course/winterlood-react-basic/learn/lecture/29907404#overview 7-7페이지구현 25분 20초
  //대충 여기 정리하자면,
  //1. state저장 구현: const [emotion, setEmotion] = useState(3);
  //2. 눌렀을때 할 함수 구현: const handleClickEmote = (emotion) => { setEmotion(emotion); };
  //   (어디선가 받아온 emotion값을 setEmotion에 보내서 재설정 한다. )
  //3. 해당 버튼이 어딘지 onClick으로 만듬 onClick={handleClickEmote}
  //4. 동작하는 컴포넌트쪽 (EmotionItem) 에 Onclick의 prop를 보냄. (연결시키는거)
  //5. 가서 onClick이 들어왓을때의 동작 구현  onClick={() => { onClick(emotion_id); }}
  //   (온클릭 들어오면 emotion_id를 보낸다. )
  //결론: 즉 5번에 클릭해서 들어온 emotion_id이벤트가 위로 타고타고 가서 2번의 handle을 통해 1번의 setState를 통해 state에 적용됨.

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={isEdit ? "일기 수정" : "new Diary"}
        // 이런식으로 proops안에 컴포넌트를 넣을수도 있음.
        leftChild={<MyButton text={"<<"} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && (
            <MyButton text={"del"} type={"negative"} onClick={handleRemove} />
          )
        }
      />

      <div>
        <section>
          <h4> 오늘은 언제임 </h4>
          <div className="input_box">
            <input
              className="input_date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
            />
          </div>
        </section>

        <section>
          <h4> 오늘의 감정? </h4>
          <div className="input_box emotion_list_wrapper">
            {
              //배열을 하나씩 꺼내서 렌더링
              //@@@이거 좋네. []배열 안에 있는거 {} 에서 map돌면서 EmotionItem
              emotionList.map((it) => (
                <EmotionItem
                  key={it.emotion_id}
                  {...it}
                  onClick={handleClickEmote}
                  isSelected={it.emotion_id === emotion} //@@@ 이것도 중요. 클릭해서 색 변경등의 컴포넌트 액션을 하려면
                  //이렇게 isSelected true/false기준으로 삼는게 좋음
                />
              ))
            }
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper ">
            <textarea
              placeholder="how was it"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* textbox를 만드는건 거의 걍 이렇게 외우는게 편함. */}
          </div>
        </section>
        <section>
          <div className="control_box"></div>
          <MyButton text={"<<"} onClick={() => navigate(-1)} />
          <MyButton text={"완료"} type={"positive"} onClick={handleSubmit} />
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
