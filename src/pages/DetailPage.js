import { useParams } from "react-router-dom";
import MyHeader from "../components/MyHeader";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import { shoplists } from "../util/shoplists";
import MyButton from "../components/MyButton";
import Slide from "../components/MainSlide";
import SubDetail from "./SubDetail";

import { shopdata } from "../util/ShopData/shopdata";
import Footer from "../components/Footer";
import DetailButton from "../components/DetailButton";
import Payment from "../components/Detail/Payment/Payment";

const DetailPage = () => {
  const navigate = useNavigate();
  const { typeName, shopId } = useParams();

  const optionRef = useRef();
  const infoRef = useRef();
  const reviewRef = useRef();
  const guideRef = useRef();

  const moveToOption = () =>
    optionRef.current.scrollIntoView({ behavior: "smooth" });

  const moveToInfo = () =>
    infoRef.current.scrollIntoView({ behavior: "smooth" });

  const moveToReview = () =>
    reviewRef.current.scrollIntoView({ behavior: "smooth" });

  const moveToGuide = () =>
    guideRef.current.scrollIntoView({ behavior: "smooth" });

  // const contentRef = useRef(); //내용이 비었을때 포커싱 해주는거.

  // const homeRef = useRef();
  // const onHomeClick = () => {
  //   console.log("inininnin");
  //   // homeRef.current?.scrollIntoView({ behavior: "smooth" });
  //   homeRef.current.focus();
  // };

  //   const contentRef = useRef(); //내용이 비었을때 포커싱 해주는거.
  // contentRef.current.focus(); //쓴게 없으면 이쪽으로 포커싱

  const targetShop = shopdata.find(
    (it) => parseInt(it.shopId) === parseInt(shopId)
  );

  // const handleMove = () => {
  //   contentRef.current.focus(); //쓴게 없으면 이쪽으로 포커싱
  //   return;
  // };

  return (
    <div className="DetailPage">
      <section className="DetailPage_header">
        <MyHeader
          headText={targetShop.shopTitle}
          leftChild={<MyButton text={"<<"} onClick={() => navigate(-1)} />}
          rightChild={"하트, 공유"}
        />
      </section>

      {/* <button onClick={moveToOption}> Click to scroll </button> */}

      <section className="DetailPage_shopimage">
        <div className="image_wrapper">
          <img
            src={process.env.PUBLIC_URL + `/images/${targetShop.shopImage}`}
          />
        </div>
      </section>
      <section className="DetailPage_content">
        <div className="shop_title">
          <h3>{targetShop.shopTitle}</h3>
        </div>
        <div className="shop_desc">
          <h5> {targetShop.shopDesc} </h5>
        </div>
      </section>

      <section>
        <div className="subDetail">
          <div className="detail_move_button">
            {/* 이건 버튼으로 퉁칠게 아니라 추후 컴포넌트로 따로 만들어야 하려나? 걍 필요 없을거 같기도 하고.... */}
            <DetailButton
              text="옵션"
              onClick={moveToOption}
              type={""}
              name={"option"}
            ></DetailButton>
            <DetailButton
              text="업체정보"
              onClick={moveToInfo}
              type={""}
              name={"info"}
            ></DetailButton>
            <DetailButton
              text="후기"
              onClick={moveToReview}
              type={""}
              name={"review"}
            ></DetailButton>
            <DetailButton
              text="이용안내"
              onClick={moveToGuide}
              type={""}
              name={"guide"}
            ></DetailButton>
          </div>
        </div>
      </section>
      {/* targetShop은 context에서 받아오는걸 고려해볼만 함. */}
      {/* SubDetail은 이거 하나로 큰 페이지임.  */}
      <SubDetail
        targetShop={targetShop}
        // 클릭해서 해당 영역(dom)으로 이동하기 위해 ref를 props로 전달. 받는건 useFoward 해야함
        optionRef={optionRef}
        infoRef={infoRef}
        reviewRef={reviewRef}
        guideRef={guideRef}
      />
      <section className="Detail_Footer">
        <Footer />
      </section>
    </div>
  );
};

export default DetailPage;

// {
//   shopId: "1",
//   shopImage: "Shop1.jpeg",
//   shopDesc: "Water",
//   shopType: "water",
//   shopSubType: "scuba",
//   shopTitle: "[양양]노블레스다이빙 센터",
//   shopPrice: "80,000₩",
//   shopStar: "5",
//   shopDiscount: "20%",
//   shopComment: "(30)",
// },
