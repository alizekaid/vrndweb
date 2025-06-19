import React, { useState, useEffect } from "react";
import "./Footer.css";
import { translate } from "../Translation/Translation";


const Footer = () => {
    const footer_copyright = translate("footer_copyright");
    const footer_privacy = translate("footer_privacy");
    const production_mobile = translate("production_mobile_title");
    const production_web = translate("production_web_title");
    const production_data = translate("production_data_title");
    const production_digitale = translate("production_digitale_title");
    const products = translate("products");
    const company = translate("company");
    const aboutus = translate("aboutus");
    const career = translate("career");
    const contact = translate("contact");
    const [selectedLang, setSelectedLang] = useState("tr");

    useEffect(() => {
        const handleLanguageChangeFromUrl = () => {
          const urlParams = new URLSearchParams(window.location.search);
          const lang = urlParams.get("lang");
          if (lang) {
            setSelectedLang(lang);
          }
        };
    
        handleLanguageChangeFromUrl();
    
      }, []);

      const handleNavLinkClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        
      };
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links__div">
                        <h4 className='footer-h4'>{products}</h4>
                        <a onClick={() => handleNavLinkClick("servicesweb")}>
                            <span className="nav-link"></span>
                            <p>{production_web}</p>
                        </a>
                        <a onClick={() => handleNavLinkClick("servicesmobile")}>
                            <span className="nav-link"></span>
                            <p>{production_mobile}</p>
                        </a>
                        <a onClick={() => handleNavLinkClick("servicesai")}>
                            <span className="nav-link"></span>
                            <p>{production_data}</p>
                        </a>
                        <a onClick={() => handleNavLinkClick("servicesdigital")}>
                            <span className="nav-link"></span>
                            <p>{production_digitale}</p>
                        </a>
                    </div>
                   

                    <div className="sb__footer-links__div">
                        <h4 className='footer-h4'>{company}</h4>
                        <a onClick={() => handleNavLinkClick("about")}>
                            <span className="nav-link"></span>
                            <p>{aboutus}</p>
                        </a>
                        <a href = "https://www.linkedin.com/company/virtusarge/">
                            <p>{career}</p>
                        </a>
                        <a onClick={() => handleNavLinkClick("contact")}>
                            <span className="nav-link"></span>
                            <p>{contact}</p>
                        </a>
                    </div>
                    <div className="sb__footer-links__div">
                        <h4 className='footer-h4'>{translate("social_media")}</h4>
                        <div className="socialmedia">
                            <p>
                                
                                <a href="https://www.linkedin.com/company/virtusarge/">
                                    <img src="./linkedin-50.svg" alt="LinkedIn" />
                                </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/virtusarge"> 
                                    <img src="/instagram-50.svg" alt="Instagram" />
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/virtusarge"> 
                                    <img src="/facebook-48.svg" alt="Facebook" />
                                </a>
                            </p>
                            
                            
                        </div>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                    <p>Copyright © {new Date().getFullYear()}
                        &nbsp;{footer_copyright}
                    </p>
                    </div>
                    <div className="sb__footer-below-links">
                        
                        <a href="./Privacy_Policy.pdf"><div><p>{footer_privacy}</p></div></a>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;