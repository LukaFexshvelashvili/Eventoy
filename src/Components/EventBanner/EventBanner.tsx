import "./EventBanner.css";
import heartIcong from "../../Images/icons/heartg.png";
import shareIcong from "../../Images/icons/shareg.png";
import userIcong from "../../Images/icons/userg.png";
export default function EventBanner(props: {
  image: string;
  time: string;
  name: string;
  heart: number;
  share: number;
  user: number;
}) {
  return (
    <div className="EventBanner">
      <div className="EventImage">
        <img src={props.image} alt="EventImage" />
      </div>
      <div className="EventContent">
        <p>{props.time}</p>
        <h3>{props.name}</h3>
        <div className="Dets">
          <div className="Det">
            <img src={heartIcong} alt="heartIcon" />
            {props.heart}
          </div>{" "}
          <div className="Det">
            <img src={shareIcong} alt="shareIcon" />
            {props.share}
          </div>{" "}
          <div className="Det">
            <img src={userIcong} alt="userIcon" />
            {props.user}
          </div>
        </div>
      </div>
    </div>
  );
}
