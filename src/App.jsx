
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx";
import RetailedSale from "./Pages/RetailedSale.jsx";
import Home from "./Pages/Home.jsx";
import AuthProvider from "./Pages/Contex.jsx";
import Sale from "./Pages/Sales.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sales' element={<Sale />} />
        <Route path='/detailed/:id' element={<RetailedSale />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
       </AuthProvider> 
    </BrowserRouter>
  );
};
