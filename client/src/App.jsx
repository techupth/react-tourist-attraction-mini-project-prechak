import "./App.css";
import FeatureTitles from "./components/FeatureTitles";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBox />
      <FeatureTitles />
    </div>
  );
}

export default App;
