import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://c4.wallpaperflare.com/wallpaper/175/168/64/action-batman-batman-the-dark-knight-entertainment-movies-hd-art-wallpaper-preview.jpg"
      alt="batman"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Batman:The Dark knight</h1>
      <p>Batman lives in Gotham .His superpower is that he is rich </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="lifting" emoji="💪" color="orangered" />
      <Skill skill="slapping" emoji="🤚" color="yellow" />
      <Skill skill="Gliding" emoji="🏄" color="orange" />
      <Skill skill="Driving" emoji="🏎️" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
