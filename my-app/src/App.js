import css from './App.module.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="css.App">
      {/*<FunctionalGreeting name="John" />*/}
       {/*<StatefulGreeting name="Anna" /> */}
      {/* <HooksCounter name="Mike" /> */}
      <SideBar />
    </div>
  );
}

export default App;