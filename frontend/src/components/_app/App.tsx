import "./App.css";
import Header from "../_header/Header";
import Body from "../_body/Body";
import Footer from "../_footer/Footer";

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
