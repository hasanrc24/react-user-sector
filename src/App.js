import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import "./App.css";
import { ContextProvider } from "./context/dataContext";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
