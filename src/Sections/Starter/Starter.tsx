import "./Starter.css";
import BG1 from "../../Images/Bg1.webp";

export default function Starter() {
  return (
    <div className="Starter">
      <div className="SectionSplitter">
        <div className="InfoSide g-6">
          <h1>Find Any Perfect Venue For Whereever Life Takes You!</h1>
          <p>
            Amet minim mollit non deserunt ullamco duis enim velit molit.
            Exersitation venim ullamco est
          </p>
          <div className="ButtonBLock">
            <button>Find Your Next Event</button>
          </div>
          <div className="Details">
            <div className="DetCol">
              <div className="Num">15</div>
              <div className="Tex">Years Experience</div>
            </div>
            <div className="DetCol">
              <div className="Num">1K</div>
              <div className="Tex">Event Handled</div>
            </div>
            <div className="DetCol">
              <div className="Num">20</div>
              <div className="Tex">Artist Agencies</div>
            </div>
          </div>
        </div>
        <div className="ImageSide g-6">
          <img src={BG1} alt="Eventor" />
        </div>
      </div>
    </div>
  );
}
