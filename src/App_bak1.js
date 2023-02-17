import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// import RouteTest from './components/RouteTest';
//COMPONENTS
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"header"}
          leftChild={
            <MyButton
              text={"뒤로"}
              onClick={() => alert("back")}
              type={"default"}
            />
          }
          rightChild={
            <MyButton
              text="forward"
              onClick={() => alert("앞으로")}
              type={"positive"}
            />
          }
        />
        <h2>app.js</h2>

        <MyButton
          text={"버튼"}
          onClick={() => alert("alertttt")}
          type={"positive"}
        />

        <MyButton
          text={"B버튼"}
          onClick={() => alert("alertttt")}
          type={"negative"}
        />

        <MyButton text={"C버튼"} onClick={() => alert("alertttt")} />

        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} /> */}

        {/* 브라우저의 url이 바뀌게 되면 어떤 컴포넌트를 렌더링 해서 그 컴포넌트가 페이지 역할을 하게 할것인지 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        {/* <RouteTest/> */}
      </div>
    </BrowserRouter>
  );
}

export default App_bak1;
