import "./App.css";
import data from "./data.json";
import logo from "./img/Netflix_Logo.png";
import Section from "./Section.js";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="" className="logo" />

      <div>
        {data.map((elem, i) => {
          return (
            <Section
              className="section"
              title={elem.category}
              list={elem.images}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
