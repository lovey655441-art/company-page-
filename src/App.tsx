
import Navbar from "./components/navbar";
import "./App.css";
import ServiceCards from "./components/servicecards";

function App() {
  return (
    <>
      <Navbar />
      <main className="hero">
        <p className="tagline">
          SOFTWARE & AI DEVELOPMENT COMPANY
        </p>
        <h1>
          Software & AI development company,
          <span> built to grow your business.</span>
        </h1>

        <p className="description">
          INQMISE builds custom software, modern web
          applications and AI-powered solutions to
          help businesses grow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start a Project →
          </button>

          <button className="secondary-btn">
            Explore Services
          </button>
        </div>
      </main>
      <ServiceCards/>
    </>
  );
}

export default App;

