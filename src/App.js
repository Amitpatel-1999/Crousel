import "./App.css";
import MySlider from "./components/MySlider";
import { SlideData } from "./components/SlideData";

function App() {
  return (
    <>
      <MySlider slide={SlideData} />
    </>
  );
}

export default App;
