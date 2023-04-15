import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Feedbacks from "../Sections/Feedbacks/Feedbacks";
import Newsletter from "../Sections/Newsletter/Newsletter";
import PersonalEvent from "../Sections/PersonalEvent/PersonalEvent";
import Schedules from "../Sections/Schedules/Schedules";
import Services from "../Sections/Services/Services";
import Starter from "../Sections/Starter/Starter";
import Upcoming from "../Sections/Upcoming/Upcoming";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Starter />
        <PersonalEvent />
        <Schedules />
        <Upcoming />
        <Services />
      </div>
      <Feedbacks />
      <div className="container">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}

export default App;
