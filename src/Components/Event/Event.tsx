import "./Event.css";
import Arrow from "../../Images/icons/ArrowRed.png";

export default function Event(props: {
  day: number;
  name: string;
  user: string;
  time: string;
  description: string;
}) {
  return (
    <div className="Event">
      <div className="Day">Day 0{props.day}</div>
      <div className="Content">
        <h2>{props.name}</h2>
        <p>
          {props.user}
          <span className="Dot"></span> {props.time}
        </p>
        <p>{props.description}</p>
      </div>
      <div className="Arrow">
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  );
}
