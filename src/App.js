import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="rock" />
        </main>
        {/* <footer className="App-footer">
        Open-source code made by Oksana Kutsa
      </footer> */}
      </div>
    </div>
  );
}
