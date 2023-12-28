import { Routes, Route, Navigate } from "react-router-dom"

// Components
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

// Pages
import HomePage from "./pages/HomePage"
import CertificatePage from "./pages/CertificatePage"
import AboutPage from "./pages/AboutPage"

function App() {

  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="certificates" element={<CertificatePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      <FooterComponent />
    </>
  )
}

export default App
