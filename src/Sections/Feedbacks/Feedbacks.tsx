import "./Feedbacks.css";
import arrow from "../../Images/icons/sideLeft.png";
import UserCard from "../../Components/UserCard/UserCard";
import UserFeedbacksAPI from "../../API/UserFeedbacks";

export default function Feedbacks() {
  interface Feedback {
    image: string;
    name: string;
    location: string;
    description: string;
  }
  return (
    <div className="Feedbacks SecPadder">
      <div className="container">
        <div className="StartRow">
          <div className="Title">What They Think About Us?</div>
          <div className="SlideButtons">
            <button className="LeftSlide">
              <img src={arrow} alt="arrow" />
            </button>
            <button className="RightSide">
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="UsersCard">
          <div className="UsersRow">
            {UserFeedbacksAPI.map((e: Feedback, i: number) => (
              <UserCard
                key={i}
                image={e.image}
                name={e.name}
                location={e.location}
                description={e.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
