import "./App.css";
import Coin from "./components/coin";

function App() {
  return (
    <div className="debug-screens">
      <div className="bg-black text-white ">
        <div className="text-yellow-200 flex-1 align-middle text-center text-4xl p-5">
          The value of the coins today:
        </div>
        <Coin />
      </div>
    </div>
  );
}

export default App;
