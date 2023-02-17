import { useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useState, useEffect } from "react";
// import MyHeader from "../components/MyHeader";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";

const Diary = () => {
  const { id } = useParams(); //use키워드는 react Hooks에서 많이 쓰는데

  const diaryList = useContext(DiaryStateContext);

  // const getStringDate = (date) => {
  //   return date.toISOString().slice(0, 10);
  // };

  // State
  const [title, setTitle] = useState("xxxx년xx월");
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      // console.log(targetDiary.content);
      setContent(targetDiary.content);

      setTitle(new Date(targetDiary.date).toISOString().slice(0, 10));
    }
  }, [id, diaryList]); //Edit이 마운트 될때 호출하도록 로직을 짜네 여기선? 뭐지

  //   const ids = targetDiary();

  return (
    <div className="Diary">
      <section>
        <div className="diary_header_wrapper">
          <div className="diary_header_left">
            <MyButton
              text={"<<"}
              onClick={() => navigate(-1)}
              type={"negative"}
            />
          </div>
          <div className="diary_header_title">{title} 일기</div>
          <div className="diary_header_right">
            <MyButton
              text={"수정"}
              type={"positive"}
              onClick={() => navigate(`/edit/${id}`)}
            />
          </div>
        </div>
      </section>
      <section>
        <div
          className={[
            "emotion_img_wrapper",
            `emotion_img_wrapper_${emotion}`,
          ].join(" ")} //클래스 네임을 동적으로 만드는 방법
        >
          <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`} />
          {/* Line 67:11:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-t */}
        </div>
      </section>
      <div className="diary_content_wrapper">
        <h2>오늘의 일기</h2>
        <div className="diary_content1">
          <div className="diary_content2"> {content}</div>
        </div>
      </div>
    </div>
  );
};

export default Diary_backup;
