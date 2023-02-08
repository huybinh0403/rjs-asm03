import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { popupActions } from "../../redux/reduxPopup";

import "./Popup.css";

const Popup = (props) => {
  const dispatch = useDispatch();
  //Hàm ẩn popup
  const hidePopupHandler = () => {
    dispatch(popupActions.HIDE_POPUP());
  };

  return (
    <div className="popup">
      {/* click vào backdrop cũng có thể ẩn popup */}
      <div className="backdrop" onClick={hidePopupHandler}></div>

      <div className="popup_container">
        <div className="popup_content">
          <img src={props.popupData.img1} alt={props.popupData.name} />
          <div className="popup_detail">
            <h3>{props.popupData.name}</h3>
            <p className="popup_detail_price">
              {Intl.NumberFormat("vi-VI").format(props.popupData.price)} VND
            </p>
            <p className="popup_detail_desc">{props.popupData.short_desc}</p>
            <Link to={"/detail/" + props.popupData.id} state={props.popupData}>
              <button className="view_btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="view_btn_icon"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                View Detail
              </button>
            </Link>
          </div>
        </div>

        <div>
          <button onClick={hidePopupHandler} className="popup_close">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
