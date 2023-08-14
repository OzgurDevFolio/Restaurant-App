import React from 'react'
import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="app__footer section__padding">
                <FooterOverlay />
                <Newsletter />
                <div className="app__footer-links">
                    <div className="app__footer-links_contact">
                        <h1 className="app__footer-headtext">Contact Us</h1>
                        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
                        <p className="p__opensans">+90 212-344-1230</p>
                        <p className="p__opensans">+90 212-555-1230</p>
                    </div>
                    <div className="app__footer-links_logo">
                        <img src={images.gericht} alt="footer_logo" />
                        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                        <img src={images.spoon} alt="footer_spoon" className="spoon_img" style={{ marginTop: 15 }} />
                        <div className="app__footer-links_icons">
                            <FiFacebook />
                            <FiTwitter />
                            <FiInstagram />
                            <FiLinkedin />
                        </div>
                    </div>
                    <div className="app__footer-links_work">
                        <h1 className="app__footer-headtext">Working Hours</h1>
                        <p className="p__opensans">Mon - Fri:</p>
                        <p className="p__opensans">10:00 am - 03:00 am</p>
                        <p className="p__opensans">Sat - Sun:</p>
                        <p className="p__opensans">10:00 am - 03:00 am</p>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="p__opensans">2023 Gericht. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
