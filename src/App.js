import "./App.css";
import { Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Detail from "./components/Detail";
import AddStaff from "./components/AddStaff";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path='/addNewStaff' element={<AddStaff/> }></Route>
      </Routes>
    </div>
  );
}

export default App;