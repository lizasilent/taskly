import React from "react";
import "./ads.css";

function Ads() {

  const [activity, setActivity] = React.useState(true);

  function handlePopup() {
    setActivity(false)
  }
  
  
  return (
    <>
    {
      activity ? (

        <div className="ads-info">
        <div className="close-icon" onClick={handlePopup}></div>
        <div>
          <p className="ads-info__header">Unleash the freelance super power</p>
          <p className="ads-info__text">
            Unlimited task, premium features and much more.
          </p>
        </div>
  
        <div className="ads-info__images">
          <div className="ads-info__img-left"></div>
          <div className="ads-info__button"></div>
        </div>
      </div>
      ) : ""
    }
</>
  );
}

export default Ads;
