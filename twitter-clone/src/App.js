import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import EntryList from "./components/EntryList";
import Entry from "./components/Entry";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/entry" element={<Entry />} />
        <Route exact path="/entry-list" element={<EntryList />} />
      </Routes>
    </div>
  );
}

export default App;
