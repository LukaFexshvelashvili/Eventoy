import Navbar from "../Components/Navbar/Navbar";
import PersonalEvent from "../Sections/PersonalEvent/PersonalEvent";
import Schedules from "../Sections/Schedules/Schedules";
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
      </div>
    </div>
  );
}

export default App;
