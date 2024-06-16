import css from './App.module.css';
import FunctionalGreeting from "./components/FunctionalGreeting";
import StatefulGreeting from "./components/StatefulGreeting";
import HooksCounter from "./components/HooksCounter";
import SideBar from "./components/SideBar";
import NavBarForm from "./components/NavBarForm";
function App() {
  return (
    <div className="css.App">
      {/*<FunctionalGreeting name="John" />*/}
       {/*<StatefulGreeting name="Anna" /> */}
      {/* <HooksCounter name="Mike" /> */}
      {/*<SideBar />*/}
      <NavBarForm />
    </div>
  );
}

export default App;