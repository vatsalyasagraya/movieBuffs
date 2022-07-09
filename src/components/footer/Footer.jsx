import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/movie-buffs.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">MovieBuffs</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div>Get In Touch</div>
                    <div className='footer__content__email'>Email: vatsalya.sagraya@gmail.com</div>
                    <div className='footer__content__hr'></div>
                    <div className='footer__content__links'>
                        <a href="https://github.com/vatsalyasagraya" className='footer__content__links__link'><i class="devicon-github-original"></i></a>
                        <a href="https://www.linkedin.com/in/vatsalya-sagraya-0b3b19198/" className='footer__content__links__link'><i class="devicon-linkedin-plain"></i></a>
                        <a href="https://twitter.com/VatsalyaSagraya" className='footer__content__links__link'><i class="devicon-twitter-original"></i></a>
                    </div>
                </div>
            </div>
            <div className='footerbar'>
                Made with ❤️ by Vatsalya
            </div>
        </div>
    );
}

export default Footer;
