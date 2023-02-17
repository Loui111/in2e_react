const TextArea = ({ content, onChange }) => {
  return (
    <div className="Textarea">
      <textarea
        key="textkey"
        onChange={() => {
          // console.log(content);
          onChange(content);
        }}
      />
    </div>
  );
};

TextArea.defaultProps = {
  //diarylist가 비어 올수도 있으니 디폴트 프롭스 꼭 필요.
  content: "검색",
};

export default TextArea;
