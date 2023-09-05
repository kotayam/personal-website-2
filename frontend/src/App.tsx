import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="text-gray-400 bg-slate-900 font-sans">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
