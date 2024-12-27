import React from "react";

const userProfile = (props) => {
  return (
    <div className="userProfile">
      <img src= {props.imgUrl} />
      <div className="userProfileInfo">
      <p>{props.name}</p>
      <p> Age : {props.age}</p>
      <p> Bio : {props.bio} </p>
      </div>
    </div>
  );
};

export default userProfile;
