import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/SideNav/SideNav.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import TopNav from "./components/TopNav/TopNav.js";

function App() {
  return (
    <div className="App" id="wrapper">
      <SideNav />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNav />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
