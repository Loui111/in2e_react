import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };

  return (
    <footer className="Footer">
      <div className="Footer_wrapper">
        <div className="Footer_item">
          <img
            src={process.env.PUBLIC_URL + `icons/icons8-home-64.png`}
            alt=""
            onClick={goHome}
          />
        </div>
        <div className="Footer_item">
          <img
            src={process.env.PUBLIC_URL + `icons/icons8-search-60.png`}
            alt=""
          />
        </div>
        <div className="Footer_item">
          <img
            src={process.env.PUBLIC_URL + `icons/icons8-navigation-60.png`}
            alt=""
          />
        </div>
        <div className="Footer_item">
          <img
            src={process.env.PUBLIC_URL + `icons/icons8-customer-64.png`}
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
