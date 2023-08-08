
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx";
import HomeDislocated from "./Pages/HomeDislocated.jsx";
import Ranking from "./Pages/Ranking.jsx";
import HomeLogeed from "./Pages/HomeLogged.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/' element={<HomeDislocated />} />
        <Route path='/L' element={<HomeLogeed />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/ranking' element={<Ranking />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};
