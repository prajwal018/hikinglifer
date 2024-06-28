import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HikingAndCamping from "./components/HikingAndCamping";
import IceClimbing from "./components/IceClimbing";
import Park from "./components/Park";
import PlacesToVisit from "./components/PlacesToVisit";
import Recover from "./components/Recover";
import RockClimbing from "./components/RockClimbing";
import TheAsanas from "./components/TheAsanas";

function App() {
  return (
    <>
      <main>
        <Hero />
        <HikingAndCamping />
        <RockClimbing />
        <Park />
        <Recover />
        <Activities />
        <PlacesToVisit />
        <IceClimbing />
        <TheAsanas />
        <Footer />
      </main>
    </>
  );
}

export default App;
