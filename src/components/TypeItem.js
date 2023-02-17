import { useNavigate } from "react-router-dom";

const TypeItem = ({ imageId, image, imageDescription, typePage }) => {
  const navigate = useNavigate();

  const goTypePage = () => {
    navigate(`/${typePage}`);
  };

  return (
    <div className="TypeItem" onClick={goTypePage}>
      <div className="TypeItem_wrapper">
        {/* {shopId} <br /> */}
        <div className="image_wrapper">
          <img src={process.env.PUBLIC_URL + `/icons/${image}`} />
        </div>
        <span>{imageDescription}</span>
      </div>
    </div>
  );
};

export default TypeItem;

//src="/images/icons8-swimming-64.png"

// key={it.imageId}
//           imageId={it.imageId}
//           image={it.image}
//           imageDescription={it.imageDescription}
//           typePage={it.typePage}

// imageId: "1",
//     image: "icons8-swimming-64.png",
//     imageDescription: "Water",
//     typePage: "water",
//   },
