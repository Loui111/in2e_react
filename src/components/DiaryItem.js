import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import React from "react";

const DiaryItem = ({ id, content, emotion, date }) => {
  //1645919941864 -> 2021.04.01 이렇게 변환
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")} //클래스 네임을 동적으로 만드는 방법
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt={""}
        />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date"></div>
        <div className="diary_content_preview">
          <div className="diary_date">{strDate}</div>
          <div className="diary_content_preview">{content.slice(0, 30)}</div>
        </div>
      </div>
      <div className="edit">
        {/* <button
          className="edit_button"
          onClick={() => navigate("edit")}
          id={id}
          emotion={emotion}
          content={content}
          date={date}
        >
          수정
        </button> */}

        <MyButton type={"positive"} text="수정하기" onClick={goEdit} />
      </div>

      {/* {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1번 ",
    date: now,
  }, */}

      {/* 
      iv className="right_col">
          <MyButton
            type={"positive"}
            text={"New Diary"}
            onClick={() => navigate("/new")}
          />
        </div> */}
    </div>

    // <div className="DiaryItem">
    //   {getProcessedDiaryList.map((it) => (
    //     <div key={it.id}>
    //       {it.content} {it.emotion}
    //     </div>
    //   ))}
    // </div>
  );
};

export default React.memo(DiaryItem);
//@@@ 이미지도 포함되어 있기 떄문에 꼭 memo를 넣는게 중요하다.
