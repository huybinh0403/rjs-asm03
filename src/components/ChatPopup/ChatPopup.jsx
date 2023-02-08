import { useState } from "react";

import "./ChatPopup.css";

const ChatPopup = () => {
  //state lưu trạng thái ẩn/hiện của chat Modal
  const [showChat, setShowChat] = useState(false);

  const showChatHandler = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="chatPopup">
      <div className="chatPopup_container">
        <div className="chatPopup_icon" onClick={showChatHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="icon_messenger"
            viewBox="0 0 16 16"
          >
            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
          </svg>
        </div>

        {showChat && (
          <div className="chatPopup_modal">
            <div className="chatModal_title">
              <h5>Customer Support</h5>
              <button>Let's Chat App</button>
            </div>

            <div className="chatModal_messagesField"></div>

            <div className="chatModal_inputField">
              🤵
              <input type="text" placeholder="Enter Message!"></input>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="chatModal_send"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPopup;
