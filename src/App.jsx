import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"

import HomePage from "./pages/HomePage"
import CertificatePage from "./pages/CertificatePage"

function App() {

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="certificates" element={<CertificatePage />} />
      </Routes>
    </>
  )
}

export default App
