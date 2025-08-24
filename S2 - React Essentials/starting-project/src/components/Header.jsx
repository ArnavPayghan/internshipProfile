import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";

// Dynamic React Components
const reactDescriptions = ["Fundamental", "Crucial", "Comprehensive"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
};

// React Components
export default function Header() {
  const descriptionText = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptionText} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}