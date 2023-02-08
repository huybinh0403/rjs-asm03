import "./OtherInfo.css";

const OtherInfo = () => {
  return (
    <div className="otherInfo">
      <div className="otherInfo_container">
        <div className="otherInfo_service">
          <div>
            <h3>FREE SHIPPING</h3>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <h3>24/7 X SERVICE</h3>
            <p>Free shipping worldwide</p>
          </div>
          <div>
            <h3>FESTIVAL OFFER</h3>
            <p>Free shipping worldwide</p>
          </div>
        </div>

        <div className="otherInfo_contact">
          <div className="otherInfo_contact_text">
            <h3>LET'S BE FRIENDS!</h3>
            <p>Nisi nisi tempor consequat laboris nisi.</p>
          </div>
          <div className="otherInfo_form">
            <input placeholder="Enter your email address"></input>
            <button>Subcribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
