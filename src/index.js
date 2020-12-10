import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_image" />
      <p> {props.tel} </p>
      <p> {props.email} </p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      email="beyonce@celibrity.com"
      tel="+1 3594 65 43 54"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      email="jackbauer@celibrity.com"
      tel="+1 3964 65 43 54"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      alt="avatar_img"
      email="chucknouris@celibrity.com"
      tel="+1 3965 55 43 54"
    />
    <input id="fName" placeholder="Enter your first name" />
  </div>,
  document.getElementById("root")
);
