import EventsAPI from "../../API/Events";
import Event from "../../Components/Event/Event";
import "./Schedules.css";

export default function Schedules() {
  interface EventCard {
    day: number;
    name: string;
    user: string;
    time: string;
    description: string;
  }
  return (
    <div className="Schedules SecPadder">
      <div className="SecRow">
        <div className="LeftSide g-4">
          <h1>Schedule And Event Details</h1>
          <p>Sed ut perspicitius unde omnis iste natus error sit voluptatem.</p>
          <div className="BBlock">
            <button className="DButton">View Details</button>
          </div>
        </div>
        <div className="RightSide">
          <div className="EventsRow">
            {EventsAPI.map((e: EventCard, i: number) => (
              <Event
                key={i}
                day={e.day}
                name={e.name}
                user={e.user}
                time={e.time}
                description={e.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
