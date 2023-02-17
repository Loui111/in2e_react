import { useEffect, useContext, useState, useRef } from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "../components/MyButton";
import DiaryList from "../components/DiaryList";
import Search from "../components/Search";
import MainSlide from "../components/MainSlide";
import Icons from "../components/Icons";
import Footer from "../components/Footer";

import TypeList from "../components/TypeList";

import { useNavigate } from "react-router-dom";

// import { iconList } from "../util/typeList";

// import Slide from "../components/Slide";
// import styled from "styled-components";

// import home1 from "../images/home1.jpeg";
// import home2 from "../images/home2.jpeg";
// import home3 from "../images/home3.jpeg";
// import home4 from "../images/home4.jpeg";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [curDate, setCurDate] = useState(new Date());

  //curDate바뀔때 list에 영향을 주려면 list의 state를 하나 선언해야함.
  const [listData, setListData] = useState([]);

  //curDate가 바뀔때 현재 list와 맞는것만 뽑아내야함.
  //useEffct는 컴포넌트 생성, 삭제 등에도 동작하지만, '특정 컴포넌트(혹은 props)가 업데이트 될때' 동작도 가능.

  useEffect(() => {
    //페이지가 최초 로딩될때 tag이름을 읽어들여서 뭔가 동작시키기 위함 ()
    const titleElement = document.getElementsByTagName("title")[0];

    //헤더타이틀을 유동적으로 변경하는 로직. 좋은 꿀팁이지 head title
    titleElement.innerHTML = `In2theLeisure`;
  }, []);

  useEffect(() => {
    // console.log(diaryList);
    if (diaryList.length >= 1) {
      //이 로직은 오래 걸리는데 최초 로딩땐 굳이 할 필요 없음. 그래서 diaryList가 없을땐 이거 안타게
      const firstDay = new Date( //현 Month의 1일을 구하는 공식
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date( //현 Month의 마지막날을 구하는 공식
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23, //마지막날 23시 59분 59초 까지 집어넣어야 제대로 마지막날 계산이 됨.
        59,
        59
      ).getTime();

      setListData(
        //curDate 또는 diaryList가 바뀌면 listData를 바꿔라
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]); //curDate가 업뎃 됄때
  //diaryList가 변경될때 (즉 추가, 삭제) 에도 변경되어야함.

  // const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  const increaseMonth = () => {
    setCurDate(
      // Date객체를 왜 이렇게 많이 던져주는진 잘 모르겠지만 암튼..
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      //여기선 useEffect쓸 필요 없이 onClick이라는 확실한 트리거가 있음.
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  // const navigate = useNavigate();

  // const goTypePage = () => {
  //   // navigate(`/typePage/${typePage}`);
  //   navigate("/typePage/water");
  // };

  // const goDetail = () => {
  //   navigate(`/diary/${id}`);
  // };
  ////////////////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@///////////////////////////////

  return (
    <div>
      {/* const MyButton= ({text, onClick, type})=>{ */}
      <MyHeader
        headText={"In2theLeisure (가칭)"}
        // leftChild={
        //   <MyButton text={"<"} onClick={decreaseMonth} type={"positive"} />
        // }
        // rightChild={
        //   <MyButton text={">"} onClick={increaseMonth} type={"default"} />
        // }
      />
      <section className="Search_secton">
        <Search searchWord={"검색"} />
      </section>
      {/* <img src={}></img> */}

      <section className="Slide_section">
        <h2> 메인광고</h2>
        <MainSlide imageName={"home2.jpeg"} />
      </section>

      {/* <DiaryList diaryList={diaryList} /> */}

      <section className="TypePage_secton">
        <h2> Type페이지 </h2>
        <TypeList />
      </section>

      <section className="Top_secton">
        <h2>실시간 TOP10</h2>
        <MainSlide imageName={"home1.jpeg"} />
      </section>

      <section className="Sale_section">
        <h2>지금특가</h2>
        <MainSlide imageName={"home3.jpeg"} />
      </section>

      <section className="Near_section">
        <h2>지금 내 주변 최고인기</h2>
        <MainSlide imageName={"home4.jpeg"} />
      </section>

      <section className="Company_section">
        <h2>사업자 정보 확인</h2>
        <div className="Company_text_wrapper">
          <div className="Company_text">
            <h4>In2theLeisure</h4>
            <h5>(주)인투레져는 통신판매 중개자로 통신판매의 당사자가 아님.</h5>
          </div>
        </div>
      </section>

      <section className="Footer">
        <Footer />
      </section>

      {/* {
    imageId: "1",
    image: "icons8-swimming-64.png",
    imageDescription: "Water",
  }, */}
    </div>
  );
};

export default Home;
