import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

//TODO: 좋은거, 나쁜거 드랍다운 만듬
//그에따라 list를 계산
//중복계산을 해야겠네? ;;;;
//일단 하나라도 해보자.
const filterOptionList = [
  { value: "all", name: "전부" },
  { value: "good", name: "좋은거" },
  { value: "bad", name: "나쁜거" },
];

//여기는 정렬할 부분의 컴포넌트. 따로 분리 안하고 걍 안쪽에 구현하네.
//어차피 list에 종속적이라 그런가
const ControlMenu = ({ value, onChange, optionList }) => {
  // value는 받아온 value로 쓰고
  //select의 클릭이 일어나면, props로 내려온 onChange를 통해 해당 타겟의 밸류를 전달함.
  //그럼 타고 올라가서 onChange={setSortType} 를 동작시켜버림.
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("latest"); //정렬기준을 저장할 스테이트?
  const [filterType, setfilterType] = useState("all");

  const getProcessedDiaryList = () => {
    //@@ list를 재배열 등을 해야 할때 원본을 해치지 않고 하는 좋은 수법. (깊은 복사?)
    //list --(stringify)--> JSON --(parse)--> list
    //이렇게 list를 JSON, 다시 list 이렇게 하면
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const compare = (a, b) => {
      //이거 collection하는거랑 똑같지.
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    const sortedList = copyList.sort(compare);
    const filteredList = getFilterDiaryList({ sortedList, filterType });

    return filteredList;
  };

  const getFilterDiaryList = ({ sortedList, filterType }) => {
    // newState = state.filter((it) => it.id !== action.targetId);
    let filtered;
    //good이면 3보다 커야하고
    //bad면 3이하여야 한다.
    if (filterType === "good") {
      filtered = sortedList.filter((it) => parseInt(it.emotion) > 3);
    } else if (filterType === "bad") {
      filtered = sortedList.filter((it) => parseInt(it.emotion) <= 3);
    } else {
      filtered = sortedList;
    }

    return filtered;
  };

  return (
    <div>
      {/* sortType은 최신/최후 등의 정렬타입이고, onChange는 딱 눌렀을때 state를 바꿀꺼니 setSortType을 쓴다.*/}
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <ControlMenu
        value={filterType}
        onChange={setfilterType}
        optionList={filterOptionList}
      />

      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>
          {" "}
          {it.content} {it.emotion}{" "}
        </div>
      ))}
    </div>
  );

  // <div>
  //   {diaryList.map( (it)=>{
  //     <div key={it.id}> {it.id} </div>
  //     <div key={it.content}> {it.content} </div>
  //   });
  //   }
  //   </div>

  // const itemList = userList.map(item=>(<ItemTemplate key={item.id} item={item}/>))
  // return (
  //     <div>
  //         <div>
  //             {itemList}
  //         </div>
  //     </div>
  // );

  // const item = diaryList.map((item) => (
  //   <ItemTemplate key={item.id} item={item} />
  // ));

  // return (
  //   <div>
  //     <h2> 일기장 리스트</h2>
  //     {item}

  //     {/* <div>{diaryList[0].id}</div>
  //     <div>{diaryList[0].emotion}</div>
  //     <div>{diaryList[0].content}</div>
  //     <div>{new Date(diaryList[0].date).getTime()}</div> */}
  //   </div>
  // );
};

// {
//   id: 1,
//   emotion: 5,
//   content: "오늘의 일기1번 ",
//   date: new Date(now.getFullYear(), now.getMonth() - 1).getTime(),
// },

DiaryList.defaultProps = {
  //diarylist가 비어 올수도 있으니 디폴트 프롭스 꼭 필요.
  diaryList: [],
};

export default DiaryList_myFilter;
