import "./App.css";
import Chat from "./Components/Chat";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import useAuth from "./AuthProvider/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <div className="app">
      {user ? (
        <div className="app_body">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:id" element={<Chat />} />
              <Route path="/" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
