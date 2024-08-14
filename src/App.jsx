import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import MainPage from "./components/MainPage";
import SubView from "./components/SubView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="onebox" element={<MainPage />} />
            <Route path="home" element={<SubView />} />
            <Route path="search" element={<SubView />} />
            <Route path="email-accounts" element={<SubView />} />
            <Route path="campaigns" element={<SubView />} />
            <Route path="lead-list" element={<SubView />} />
            <Route path="analytics" element={<SubView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
