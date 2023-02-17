import { useEffect, useReducer, useRef } from "react";
import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
// import New from "./pages/New";
// import Edit from "./pages/Edit";
// import Diary from "./pages/Diary";
import Type from "./pages/Type";
import DetailPage from "./pages/DetailPage";
import ScrollToTop from "./pages/ScrollToTop";

//@@@ 변경되는 로직을 처리하는 유일한 통로는 'reducer'
//모든 데이터의 init, create, remove, edit은 이 reducer를 통함
//reducer에서 newState가 변할때 마다 storage에 저장하면 된다.
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      newState = [action.data, ...state]; //펼쳐진 새로운객체 + 현상태의 객체들 전부.
      break;
    }

    case "REMOVE": {
      //state 는 현재 리스트, action은 없앨 녀석.
      newState = state.filter((it) => it.id !== action.targetId);
      break;
      // const newList = state.filter((it) => it.id !== action.id);
      // newState = [...newList];   <--어차피 마지막에 return newState라서 무쓸모
    }

    case "EDIT": {
      //aciton은 신규데이터가 들어있고 일정 id값에 contect가 갱신되어있을꺼임.
      //state는 기존 리스트가 있음.
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  //newState가 리턴되기 전에 Storage에 저장.
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

function App() {
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      //localData가 있어야만 일로 들어옴 (이걸 해놔야 의미없는 최초 렌더링때 뻑이 안남)

      //스토리지에서 데이터 읽어올때 idx값을 읽어오기 위함.
      //DB에서 한다면 의미없는 행동이지
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      //list가 전혀 없을때 에러가나는걸 방지. (diaryList[0] 없자나)
      if (diaryList.length >= 1) {
        //읽어온 값을 산술연살할때 parseInt를 습관화 중요함
        dataId.current = parseInt(diaryList[0].id) + 1;

        //이제는 diaryList를 앱컴포넌트가 가지는 data State의 초기값으로 설정!!!
        //초기값으로 설정해주는 action을 발생시기위한 dispatch
        dispatch({ type: "INIT", data: diaryList });
      }
    }
    //이 아래는 localstorage를 쓰는 예제
    // localStorage.setItem("item1", 10);
    // localStorage.setItem("item2", "20");
    // localStorage.setItem("item3", JSON.stringify({ value: 30 }));
    //객체를 집어넣으면 {Object:Object}이렇게만 저장이 되는데, JSON직렬화 (string화?) 시켜줘야 제대로 들어간다.

    //위에건 저장, 밑에건 꺼내기 (뭐 어려울건 없음)
    // const item1 = localStorage.getItem("item1");
    //const item3 = JSON.parse(localStorage.getItem("item1"));
    //JSON직렬화된건 이처럼 parse로 꺼내와야함
  }, []);

  // const [data, dispatch] = useReducer(reducer, dummyData); //reducer는 state관리를 좀더 조직적으로 하기 위한 녀석.
  //최초값을 적재할때 여서 dummydata여기다 넣음.

  const [data, dispatch] = useReducer(reducer, []); //

  const dataId = useRef(6); //useRef는 컴포넌트의 interval값을 넣는데'도' 사용됨. (다른건 DOM을 선택하는 용도랜다?)
  //이건 솔직히 id값을 읽어온 담에 최대값+1 을 해야 하는거아님?

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current, //원래 이렇게 넣는댄다.
        date: new Date(date).getTime(), //넘어온 date객체를 getTime으로 밀리세컨으로 변환시킴. (현재시간 넣는게 아님)
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    // props를 전역적으로 쓰기 위한 Context를 씀
    //const [data, dispatch] = useReducer(reducer, []) 이거에 따라 data에 담김.
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
        }}
      >
        <BrowserRouter>
          <ScrollToTop />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} /> */}
              {/* <Route path="/typePage/:typeName" element={<Type />} />
              <Route path="/typePage/detail/:shopId" element={<DetailPage />} /> */}

              <Route path="/:typeName" element={<Type />} />
              <Route path="/:typeName/:shopId" element={<DetailPage />} />
            </Routes>
            {/* <RouteTest/> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

//props를 드릴링 하지 않기 위해 컨텍스트를 하나로 묶어서 관리하기 위함.
export const DiaryStateContext = React.createContext(); //dummydata를 여길 통해서 home에 내려줌 여긴 데이터
export const DiaryDispatchContext = React.createContext(); //여긴 함수 (onCreate등)

export default App;
