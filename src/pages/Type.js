import MyHeader from "../components/MyHeader";
import { useParams } from "react-router-dom";
import Search from "../components/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeItem from "../components/TypeItem";

import ShopList from "../components/ShopList";
import Footer from "../components/Footer";
import ShopItem from "../components/ShopItem";

import MyButton from "../components/MyButton";
import SubTypeScroll from "../components/SubTypeScroll";

import { typeSubType } from "../util/typeSubType";
import { typekeyvalue } from "../util/typekeyvalue";

const Type = () => {
  const { typeName } = useParams();
  const navigate = useNavigate();

  // const targetSubType = typeSubType.find(
  //   (it) => parseInt(it.typeName) == parseInt(typeName)
  // );

  const subType = typekeyvalue[typeName];
  // console.log(typeName);
  // console.log(subType);

  //TODO:: 이미지가 안떠서 넣은건데 나중에는 이딴거 없애야함.
  // const imageName = "icons8-search-60.png";
  // const searchWord = "전국";

  const handleButton = () => {
    navigate(-1);
  };

  return (
    <div className="Type">
      <section className="TypePage_header">
        <MyHeader
          headText={`${typeName} Sports`}
          // leftChild={"<<"}
          leftChild={<MyButton text={"<<"} onClick={() => navigate(-1)} />}
          rightChild={"필터"}
          //<img src={process.env.PUBLIC_URL + `images/${imageName}`} />
        />
      </section>
      <section className="SubTypePage_Scroll">
        <SubTypeScroll subType={subType} />
      </section>
      <section className="TypePage_search">
        <Search searchWord="전국" />
      </section>
      <section className="TypePage_shoplist">
        <ShopList typeName={typeName} />
      </section>
      <section className="TypePage_footer">
        <Footer />
      </section>
    </div>
  );
};
export default Type;

// {shopLists.map((it) => (
//   <ShopItem
//     key={it.shopId}
//     shopId={it.shopId}
//     shopImage={it.shopImage}
//     shopTitle={it.shopTitle}
//     shopPrice={it.shopPrice}
//     shopStar={it.shopStar}
//     shopDiscount={it.shopDiscount}
//     shopComment={it.shopComment}
//   />
// ))}
