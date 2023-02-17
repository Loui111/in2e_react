import DiaryEditor from "../components/DiaryEditor";
import { useEffect } from "react";

const New = () => {
  useEffect(() => {
    //페이지가 최초 로딩될때 tag이름을 읽어들여서 뭔가 동작시키기 위함 ()
    const titleElement = document.getElementsByTagName("title")[0];

    //헤더타이틀을 유동적으로 변경하는 로직. 좋은 꿀팁이지 head title
    titleElement.innerHTML = `Diary: 새로운일기`;
  }, []);
  return <DiaryEditor />;
};

export default New;
