import { useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../components/MyButton";
import { getStringDate } from "../util/date";
import MyHeader from "../components/MyHeader";
import { emotionList } from "../util/emotion";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate(); //custom hook

  const [data, setData] = useState();

  useEffect(() => {
    //페이지가 최초 로딩될때 tag이름을 읽어들여서 뭔가 동작시키기 위함 ()
    const titleElement = document.getElementsByTagName("title")[0];

    //헤더타이틀을 유동적으로 변경하는 로직. 좋은 꿀팁이지 head title
    titleElement.innerHTML = `Diary: ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        //일기가 있을때
        setData(targetDiary);
      } else {
        //일기가 없을때
        alert("없는 일기에요");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    // 이거 괜찮네 로딩중 ㅋㅋㅋㅋ
    return <div className="DiaryPage"> 로딩중... loading...</div>;
  } else {
    //여긴 data가 있고 난 후에 렌더링 할 컴포넌트를 그릴때 필요한 함수나 변수들을 만드는 곳이고,
    //저 위는 Diary자체가 로딩될때 쓰는 함수나 변수들임.
    //함수, 변수선언과 어디서 써야 할지는 생각 하면서 써야 한다는 소리
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    // console.log(curEmotionData);

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))}의 일기`}
          leftChild={<MyButton text={"<<"} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={"수정"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4> 오늘의 감정 </h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curEmotionData.emotion_img} />
              <div className="emotion_descript">
                {curEmotionData.emotion_descipt}
              </div>
            </div>
          </section>
          <section>
            <h4> 오늘의 일기 </h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
