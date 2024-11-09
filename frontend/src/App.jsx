import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header";
function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
export default App;
