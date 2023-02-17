import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

//페이지 이동시 스크롤 맨 위로 오게 하는 방법
//위의 코드로 컴포넌트를 하나 만들고 이 컴포넌트를 index.js 에 선언해준다. Router 안에 선언해주어야 pathname 을 인식할 수 있기 때문에 꼭 Router 안에 선언해주도록 하자.
//ReactDOM.render(
//     <BrowserRouter>
//     <ScrollTop />
//       <App />
//     </BrowserRouter>,
//     document.getElementById('root')
//   );
//
//참고로 나는 BrowserRouter가 App.js에 있어서 거기다 갖다 넣음.

//https://velog.io/@tlatjdgh3778/React-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99-%EC%8B%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%A8-%EC%9C%84%EB%A1%9C-%EC%98%A4%EA%B2%8C-%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
