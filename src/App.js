import List from "./components/List/List";
import './app.css'

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];



function App() {
  return (
    <section>
          <List animals={animals}/>
    </section>
  );
}

export default App;
