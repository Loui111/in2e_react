import { useRef } from "react";

const SubTypeScroll = ({ subType }) => {
  const dataId = useRef(0);

  return (
    <div className="SubTypeScroll">
      <div className="scroll_wrapper">
        {subType.map((it) => (
          <span key={dataId.current}>{it + "  11  "}</span>
        ))}
        {/* {subType} */}
        {/* dataId.current += 1; */}
      </div>
    </div>
  );
};

export default SubTypeScroll;

/* {shopList.map((it) => (
            <TypeItem
              key={it.shopId}
              shopId={it.shopId}
              shopImage={it.shopImage}
              shopTitle={it.shopTitle}
              shopPrice={it.shopPrice}
              shopStar={it.shopStar}
              shopDiscount={it.shopDiscount}
              shopComment={it.shopComment}
            />
          ))} */
