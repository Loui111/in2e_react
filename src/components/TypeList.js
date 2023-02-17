import { typeLists } from "../util/typeLists";
import TypeItem from "./TypeItem";

const TypeList = () => {
  return (
    <div className="TypeList">
      {typeLists.map((it) => (
        <TypeItem
          key={it.imageId}
          imageId={it.imageId}
          image={it.image}
          imageDescription={it.imageDescription}
          typePage={it.typePage}
        />
      ))}
    </div>
  );
};

export default TypeList;

// imageId: "1",
//     image: "icons8-swimming-64.png",
//     imageDescription: "Water",
//     typePage: "water",
//   },

// div className="TypePage_wrapper">
//           {iconList.map((it) => (
//             <Icons
//               key={it.imageId}
//               image={it.image}
//               desc={it.imageDescription}
//               onClick={goTypePage()} //TODO: 타입페이지 클릭시 이동 구현
//               // isSelected={it.emotion_id === emotion} //@@@ 이것도 중요. 클릭해서 색 변경등의 컴포넌트 액션을 하려면
//               //이렇게 isSelected true/false기준으로 삼는게 좋음
//             />
//           ))}
//         </div>
