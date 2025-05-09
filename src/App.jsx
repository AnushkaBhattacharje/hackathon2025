// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CropSelection from "./pages/CropSelection";
import EquipmentPage from "./pages/EquipmentPage";
import CartPage from "./pages/CartPage";
import CropAdvisoryWheat from "./pages/CropAdvisoryWheat";
import DistributorPage from "./pages/Distributor";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<DistributorPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/crops" element={<CropSelection />} />
      <Route path="/home/equipment" element={<EquipmentPage />} />
      <Route path="/home/cart" element={<CartPage />} />
      <Route path="/home/advisory" element={<CropAdvisoryWheat />} />
    </Routes>
  </Router>
);

export default App;
