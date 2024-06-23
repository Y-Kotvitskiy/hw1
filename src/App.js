import List from "./components/List/List";
import './app.css'
import { animals } from "./data/mockData";

function App() {
  return (
    <section>
      <List animals={animals} />
    </section>
  );
}

export default App;
