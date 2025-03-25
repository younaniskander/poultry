import React, { useEffect, useRef, useState } from "react";
import mainImage from "../images/istockphoto-1342480600-612x612.jpg";
import file from "../images/file-types.svg";
import global from "../images/global.svg";
import logo from "../images/poult.png";
// import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import CommunityImage from "../images/WhatsApp Image 2025-02-15 at 16.23.21_47c240b3.jpg";
import PouChatImage from "../images/WhatsApp Video 2025-02-17 at 14.22.11.gif";
import PouVision from "../images/WhatsApp Video 2025-02-18 at 11.06.15.gif";
import expertImage from "../images/Group 719 (1).png";
import equationsImage from "../images/WhatsApp Video 2025-02-19 at 14.51.32.gif";
import dashboardImage from "../images/WhatsApp Video 2025-02-19 at 15.25.03.gif";
import reportsImage from "../images/WhatsApp Video 2025-02-19 at 14.51.25.gif";
import BookImage from "../images/Group 718 (2).png";
import libraryImage from "../images/Group 720.png";
import pharmaImage from "../images/WhatsApp Video 2025-02-17 at 14.23.29.gif";
import marketImage from "../images/WhatsApp Video 2025-02-17 at 14.24.15.gif";
import { changeLanguage } from '../i18n';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  };

  const sections = [
    {
      id: "Community",
      title: "poultry Community title",
      text: "poultry Community text",
      image: CommunityImage,
    },
    
    {
      id: "Upload",
      title: "PouChat title",
      image: PouChatImage,
    },
    {
      id: "Share",
      title: "PouVision title",
      text: "PouVision text",
      image: PouVision,
    },
    {
      id: "Reports",
      title: "reports title",
      text: "reports text",
      image: reportsImage,
    },
    {
      id: "Dashboard",
      title: "dashboard title",
      text: "dashboard text",
      image: dashboardImage,
    },
    {
      id: "Equations",
      title: "poultry Equations title",
      text: "poultry Equations text",
      image: equationsImage,
    },
    {
      id: "Market",
      title: "market title",
      text: "market text",
      image: marketImage,
    },
    {
      id: "Pharma",
      title: "pharma title",
      text: "pharma text",
      image: pharmaImage,
    },
    {
      id: "Expert",
      title: "Poultry Expert title",
      text: "Poultry Expert text",
      image: expertImage,
    },

    {
      id: "Library",
      title: "library title",
      text: "library text",
      image: libraryImage,
    },
    {
      id: "Books",
      title: "books title",
      text: "books text",
      image: BookImage,
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, entry.target.id]);
          } else {
            setVisibleSections((prev) => prev.filter((id) => id !== entry.target.id));
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // وظيفة للتحكم في التوسيع والطي لكل قسم
  const handleExpand = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId], // تبديل حالة التوسيع للقسم المحدد
    }));
  };

  return (
    <main style={{ fontFamily: "Cairo, sans-serif", overflow: "hidden" }}>
      { /* Hero Section */}
      <section
        className="relative h-screen"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="language-switcher flex justify-end p-4 absolute top-0 right-0 z-10">
          <button onClick={toggleLanguage} className="px-4 py-2 bg-gray-300 rounded-lg mx-2">
            {i18n.language === 'en' ? 'العربية' : 'English'}
          </button>
        </div>
        <div className="absolute inset-0 bg-[#252525] opacity-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center w-full px-4 text-center">
          <h1 className="text-3xl text-white font-normal">{t("title")}</h1>
          <div className="buttons flex gap-4 flex-col md:flex-row w-full max-w-md items-center justify-center">
            <button className="px-4 py-2 bg-transparent border border-white text-white rounded-lg md:hover:bg-white md:hover:text-black transition">
              {t("Coming Soon")}
            </button>
          </div>
          <p className="text-white text-sm">
            {t("subtitle")}
          </p>
          <p className="text-white text-sm">
            <div className="flex gap-4">
              <a href="https://whatsapp.com/channel/0029VazlAYyA2pLEVksdxA2X" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/the-poultry-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%AC%D9%86/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="mailto:thepoultry.aiot@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Gmail" className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/share/19wpF2XZDq/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@the.poultry1?_t=ZS-8u2qtETvBmy&_r=1" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/tiktok.png" alt="TikTok" className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@thepoultry.aiot1?si=BSOg3SmcViQ5kJMt" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" className="w-6 h-6" />
              </a>
            </div>
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto">
        {/* Logo and Introduction */}
        <div
          className="w-full text-center flex flex-col items-center gap-8 mt-8 mb-24 px-4"
          dir="rtl"
        >
          <img src={logo} alt="logo" className="w-36 h-36" />
          <h2 className="text-3xl font-normal text-gray-500">
            {t('main-title')}
          </h2>
          <p className="text-gray-900 text-sm font-semibold md:text-lg md:w-11/12">
            {t('main-intro')}
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`text-center md:text-start container w-full flex flex-col md:flex-row justify-between items-center gap-24 my-24 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            dir="rtl"
          >
            <div
              className={`content w-full md:w-5/12 transition-all duration-1000 ease-in-out ${visibleSections.includes(section.id)
                ? "translate-x-0 opacity-100"
                : index % 2 === 0
                  ? "translate-x-[150%] opacity-0"
                  : "-translate-x-[150%] opacity-0"
                }`}
            >
              <h2 className="text-3xl font-normal text-gray-500 mb-8">
                {t(section.title)}
              </h2>
              <p className="text-gray-900 text-sm font-semibold md:text-lg mb-6">
                {expandedSections[section.id] ? t(section.text) : `${t(section.text).substring(0, 150)}...`}
              </p>
              <button
                className="text-blue-500 mt-2"
                onClick={() => handleExpand(section.id)}
              >
                {expandedSections[section.id] ? t('Read Less') : t('Read More')}
              </button>
            </div>
            <div
              className={`w-full md:w-4/12 flex justify-end transition-all duration-1000 ease-in-out ${visibleSections.includes(section.id)
                ? "translate-x-0 opacity-100"
                : index % 2 === 0
                  ? "-translate-x-[150%] opacity-0"
                  : "translate-x-[150%] opacity-0"
                }`}
            >
              <img src={section.image} alt={section.title} className="w-8/12 h-8/12" />
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        className="bg-black border-y-2 border-y-gray-200 text-white py-12 relative"
        style={{
          fontFamily: "Cairo, sans-serif",
          overflow: "hidden",
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <h4 className="text-white mb-3">{t("contact")}</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>{t("full company address")}</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i><a target="_blank" href="https://wa.me/+201550012022" style={{ direction: "ltr", color: "#E18600" }}>+201550012022</a></p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i><a target="_blank" href="mailto:thepoultry.aiot@gmail.com" style={{ color: "E18600" }}>{t("Send email")}</a></p>
                <div className="d-flex pt-2">
                  <a className="btn btn-outline-light btn-social" target="_blank" href="https://whatsapp.com/channel/0029VazlAYyA2pLEVksdxA2X"><i className="fab fa-whatsapp" style={{ color: "#E18600" }}></i></a>
                  <span className="px-2"> | </span>
                  <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.facebook.com/share/19wpF2XZDq"><i className="fab fa-facebook-f" style={{ color: "#E18600" }}></i></a>
                  <span className="px-2"> | </span>
                  <a className="btn btn-outline-light btn-social" target="_blank" href="https://youtube.com/@thepoultry.aiot1?si=BSOg3SmcViQ5kJMt"><i className="fab fa-youtube" style={{ color: "#E18600" }}></i></a>
                  <span className="px-2"> | </span>
                  <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.linkedin.com/company/the-poultry-%D8%A7%D9%84%D8%AF%D9%88%D8%A7%D8%AC%D9%86/"><i className="fab fa-linkedin-in" style={{ color: "#E18600" }}></i></a>
                  <span className="px-2"> | </span>
                  <a className="btn btn-outline-light btn-social" target="_blank" href="https://www.tiktok.com/@the.poultry1?_t=ZS-8u2qtETvBmy&_r=1"><i className="fab fa-tiktok" style={{ color: "#E18600" }}></i></a>

                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; {new Date().getFullYear()} <a className="border-bottom" href="#" style={{color:'#E18600'}}>AIOT</a>, {t("All Right Reserved")}. <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;