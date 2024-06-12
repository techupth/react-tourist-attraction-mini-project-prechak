import "./App.css";
import FeatureTitles from "./components/FeatureTitles";

function App() {
  return (
    <div className="App">
      <div class="container mx-auto p-4">
        <header className="text-center py-4">
          <h1 className="text-4xl font-bold text-blue-600">เที่ยวไหนดี</h1>
        </header>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            className="w-9/12 border-b-2 focus:outline-none"
            placeholder="หาที่เที่ยวแล้วไปกัน ..."
          />
        </div>
        <FeatureTitles />
      </div>
    </div>
  );
}

export default App;
