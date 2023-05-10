import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import EntryList from "./components/EntryList";
import Entry from "./components/Entry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/entry" element={<Entry />} />
        <Route exact path="/entry-list" element={<EntryList />} />
      </Routes>
    </div>
  );
}

export default App;
