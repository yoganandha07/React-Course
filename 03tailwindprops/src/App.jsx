import Card from "./components/Card";
import yoga from './Components/Images/YogaLandScape.jpg'

import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl bg-green-500 p-3 rounded">Vite with Tailwind</h1>
      <Card  username= 'Yoganandha' post="Web Developer" image = {yoga} place = "Trichy" />
      <Card username= 'Peddireddy' post="Web Developer" image = {yoga} place = "Chennai" />
      <Card username= 'Reddy' post="Web Developer" image = {yoga} place = "Hyderabad" />
    </>
  );
}

export default App;
