import "./PersonalEvent.css";
import BG2 from "../../Images/Event.png";
export default function PersonalEvent() {
  return (
    <div className="PersonalEvent SecPadder">
      <div className="SplitRows">
        <div className="ImageSide g-5">
          <img src={BG2} alt="AppScreen" />
        </div>
        <div className="InfoSide g-7">
          <div className="Info">
            <h1>Allow You To Create Your Personal Event</h1>
            <div className="Condition">
              <div className="Dot"></div>
              <p>
                Create a proffesional, seamless experience for your attendees at
                every stage of your online or in-person event.
              </p>
            </div>
            <div className="Condition">
              <div className="Dot"></div>
              <p>
                Reach new customers drive demand and build relationships with
                our powerfull built-in markettiing and communications tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
