import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  //  const [searchParams, setSearchParams] = useSearchParams(); //파람을 변경하는 녀석
  //이름은 searchParams가 아닌 다른거 써도 된다. 대신 useSearchParams는 맞아야지
  // const id = searchParams.get('id');
  // const mode = searchParams.get('mode');

  const navigate = useNavigate();

  const [originData, setOriginData] = useState();
  const { id } = useParams(); //파라메터에서 받아온것들 뽑아내는거

  const diaryList = useContext(DiaryStateContext); //App.js의 DiaryStateContext에서 던져준걸 이렇게 받아온다.
  //던질떄는 단순히 data란 이름이었지 <DiaryStateContext.Provider value={data}>

  useEffect(() => {
    //페이지가 최초 로딩될때 tag이름을 읽어들여서 뭔가 동작시키기 위함 ()
    const titleElement = document.getElementsByTagName("title")[0];

    //헤더타이틀을 유동적으로 변경하는 로직. 좋은 꿀팁이지 head title
    titleElement.innerHTML = `Diary: 수정`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (!targetDiary) navigate("/", { replace: true });
      //없으면 홈화면으로 돌려보냄. 뒤로가기도 제한시킴
      else {
        setOriginData(targetDiary); //있으면 targetDiary를 보내서 originData에 실어버림.
      }
    }
  }, [id, diaryList]); //Edit이 마운트 될때 호출하도록 로직을 짜네 여기선? 뭐지
  //암튼 여기선 컴포넌트가 마운트 되었을때 Context를 통해 넘어온 diaryList '전체' 중 한개를 뽑아냄. 꽤나 비효율인데 이거
  //근데 다시 말이 바뀜. id, diaryList가 변했을때 Edit 컴포넌트를 불러온다고? 흠... '일기데이터가 하나라도 있을떄만'

  return (
    <div>
      {/* originData가 있어야 렌더링 하도록 하는 이 작은 차이가 엄청난 버그와 삽질을 유도함.....ㅠㅠ */}
      {/* Editor쪽에서 자꾸 undefind인데 렌더링해서 접근안되고 뻑나고....하.... */}
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Edit;
