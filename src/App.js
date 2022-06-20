import "./App.css";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import Rowpost from "./Rowpost/Rowpost";
import { action, originals } from "./url/url";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title="Netflix Orginals" />
      <Rowpost url={action} title="Actions" isSmall />
    </div>
  );
}

export default App;
