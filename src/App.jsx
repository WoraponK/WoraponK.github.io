import { Routes, Route } from "react-router-dom"

// Components
import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

// Pages
import HomePage from "./pages/HomePage"
import CertificatePage from "./pages/CertificatePage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="certificates" element={<CertificatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      <FooterComponent />
    </>
  )
}

export default App
