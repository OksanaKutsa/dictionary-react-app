import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sky" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/OksanaKutsa/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code
          </a>{" "}
          made by{" "}
          <a href="http://oksanakutsa.com/" target="_blank" rel="noreferrer">
            Oksana Kutsa
          </a>
        </footer>
      </div>
    </div>
  );
}
