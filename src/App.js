import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/ResetPassword"
import ConfirmEmail from "./components/ConfirmEmail"
import Post from "./components/Post"
import PrivacyPolicy from "./components/privacy-policy"
import TermsOfService from "./components/terms-of-service"
import "./i18n";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.resolvedLanguage === "ar" ? "rtl" : "ltr";
    document.getElementsByTagName("html")[0].setAttribute("dir", dir);
  }, [i18n.resolvedLanguage]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/verify-email' element={<ConfirmEmail />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-of-service' element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App