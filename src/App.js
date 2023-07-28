import hero from "./image-equilibrium.jpg";
import eth from "./icon-ethereum.svg";
import clock from "./icon-clock.svg";
import avatar from "./image-avatar.png";
import icon from "./icon-view.svg";

function App() {
  return (
    <article className="card">
      <div className="hero-container">
        <img src={hero} alt="hero" className="hero-image" />
        <div className="icon-container">
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
      {/* ---------------------------- */}
      <section className="card-details">
        <h2 className="header">Equillibrium #3429</h2>
        <p>Our Equillibrium collection promotes balance and calm.</p>
      </section>
      <section className="price-container">
        <div className="price-box">
          <img src={eth} alt="etherum" />
          <span> 0.041ETH</span>
        </div>

        <div className="time-box">
          <img src={clock} alt="Days" />
          <span> 3 Days left</span>
        </div>
      </section>

      <hr />
      <section className="creator-box">
        <img src={avatar} alt="creator" />
        <p>
          Creation of <span className="creator">Jules Wyvern</span>
        </p>
      </section>
    </article>
  );
}

export default App;
