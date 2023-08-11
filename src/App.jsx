
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx";
import RetailedSale from "./Pages/RetailedSale.jsx";
import Home from "./Pages/Home.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detailed/:id' element={<RetailedSale />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};
