import "./Upcoming.css";
import PBG from "../../Images/PBG.webp";
import heartIcon from "../../Images/icons/heart.png";
import shareIcon from "../../Images/icons/share.png";
import userIcon from "../../Images/icons/user.png";
import arrowIcon from "../../Images/icons/ArrowWhite.png";
import EventBanner from "../../Components/EventBanner/EventBanner";
import EventBannersAPI from "../../API/EventBanners";
export default function Upcoming() {
  interface EventBanner {
    image: string;
    time: string;
    name: string;
    heart: number;
    share: number;
    user: number;
  }
  return (
    <div className="Upcoming SecPadder">
      <h1 className="Title">Upcoming Event</h1>
      <div className="SplitRows">
        <div className="Popular g-6">
          <div className="PopularEvent">
            <div className="InfoRow">
              <div className="Dets">
                <div className="Det">
                  <img src={heartIcon} alt="heartIcon" />
                  1.2K
                </div>{" "}
                <div className="Det">
                  <img src={shareIcon} alt="shareIcon" />
                  565
                </div>{" "}
                <div className="Det">
                  <img src={userIcon} alt="userIcon" />
                  212
                </div>
              </div>
              <div className="LabB">
                <div className="Lab">New</div>
              </div>
            </div>
            <img src={PBG} alt="PopularEvent" />
            <div className="DetailsRow">
              <div className="Content">
                <p>FEB 12 - 7:00PM</p>
                <h3>Keep It Up-Rex Orange Country</h3>
              </div>
              <div className="goIn">
                <img src={arrowIcon} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="Populars g-6">
          {EventBannersAPI.map((e: EventBanner, i: number) => (
            <EventBanner
              key={i}
              image={e.image}
              time={e.time}
              name={e.name}
              heart={e.heart}
              share={e.share}
              user={e.user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
