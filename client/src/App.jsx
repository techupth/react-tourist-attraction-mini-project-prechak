import "./App.css";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
// import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      {/* <SearchBox /> */}
      <Homepage />
    </div>
  );
}

export default App;
