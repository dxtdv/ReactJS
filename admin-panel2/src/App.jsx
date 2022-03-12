import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="third-color-font first-color-background">
      <Topbar />
      <div className="container first-color-background">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
