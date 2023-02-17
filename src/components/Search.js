import { useState } from "react";

const Search = ({ searchWord }) => {
  const [keyword, setKeyword] = useState(searchWord);

  return (
    <div className="Search">
      <textarea
        className="search_textarea"
        placeholder=""
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      ></textarea>
    </div>
  );
};

// <textarea
//               placeholder="how was it"
//               ref={contentRef}
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//             />

// Search.defaultProps = {
//   //diarylist가 비어 올수도 있으니 디폴트 프롭스 꼭 필요.
//   keyword: "Search....",
// };

export default Search;
