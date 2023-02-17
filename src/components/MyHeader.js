import Search from "./Search";

const MyHeader = ({ headText, leftChild, rightChild }) => {
  //   console.log(rightChild);

  return (
    <header>
      <div className="head_btn_left">{leftChild}</div>
      <div className="head_text">{headText}</div>
      <div className="head_btn_right">{rightChild} 필터 </div>
    </header>
  );
};

// src="images/icons8-fishing-64.png"
// src="images/home1.jpeg"
// src="icons/icons8-swimming-64.png"
// src="icons/icons8-swimming-64.png"

export default MyHeader;
