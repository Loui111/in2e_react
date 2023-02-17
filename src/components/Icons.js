const Icons = ({ image, desc }) => {
  // const IconList = () => {
  //   iconList.map((it) => (
  //     <div>
  //       {it.imageId} {it.image} {it.imageDescription}
  //     </div>
  //   ));
  // };

  return (
    <div className="Icons">
      <img src={process.env.PUBLIC_URL + `icons/${image}`} alt="" />
      <span>{desc} </span>
    </div>
  );
};

export default Icons;
