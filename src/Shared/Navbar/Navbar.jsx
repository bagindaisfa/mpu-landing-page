/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import Logo from '/images/logo-new.png';
import './navbar.css';
import { useEffect, useRef } from 'react';
import {
  FaChevronDown,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { MdLightMode, MdLocationPin } from 'react-icons/md';
import { IoMdPaperPlane } from 'react-icons/io';
import { LuMoveRight } from 'react-icons/lu';
import LanguageSwitcher from '../../Component1Default/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  //sticky

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector('.header-sticky');
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky');
  };

  //Menu Bar
  const menuBarRef = useRef(null);
  const offcanvasRef = useRef(null);
  const bodyOverlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const menuBar = menuBarRef.current;
    const offcanvas = offcanvasRef.current;
    const bodyOverlay = bodyOverlayRef.current;
    const closeBtn = closeBtnRef.current;

    const addClasses = () => {
      offcanvas.classList.add('opened');
      bodyOverlay.classList.add('apply');
    };

    const removeClasses = () => {
      offcanvas.classList.remove('opened');
      bodyOverlay.classList.remove('apply');
    };

    if (menuBar && offcanvas && bodyOverlay && closeBtn) {
      menuBar.addEventListener('click', addClasses);
      closeBtn.addEventListener('click', removeClasses);
      bodyOverlay.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuBar && offcanvas && bodyOverlay && closeBtn) {
        menuBar.removeEventListener('click', addClasses);
        closeBtn.removeEventListener('click', removeClasses);
        bodyOverlay.removeEventListener('click', removeClasses);
      }
    };
  }, []);

  let headerIcon = `  
  <span class="header-icon">  
    <svg fill="currentColor" viewBox="0 0 320 512" height="15px" width="15px" xmlns="http://www.w3.org/2000/svg">
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
    </svg>
  </span>  
`;

  useEffect(() => {
    const mainMenuContent = document.querySelector('.main-menu-content');
    const mainMenuMobile = document.querySelector('.main-menu-mobile');

    if (mainMenuContent && mainMenuMobile) {
      const navContent = mainMenuContent.outerHTML;
      mainMenuMobile.innerHTML = navContent;

      const arrows = document.querySelectorAll(
        '.main-menu-mobile .has-dropdown > a'
      );

      arrows.forEach((arrow) => {
        const arrowBtn = document.createElement('BUTTON');
        arrowBtn.classList.add('dropdown-toggle-btn');
        arrowBtn.innerHTML = headerIcon;

        arrow.appendChild(arrowBtn);

        arrowBtn.addEventListener('click', (e) => {
          e.preventDefault();
          arrowBtn.classList.toggle('dropdown-opened');
          arrow.parentElement.classList.toggle('expanded');
          arrow.parentElement.parentElement.classList.add('dropdown-opened');
          arrow.parentElement.parentElement
            .querySelectorAll('.submenu')
            .forEach((submenu) => {
              submenu.style.display =
                submenu.style.display === 'block' ? 'none' : 'block';
            });
          arrow.parentElement.parentElement
            .querySelectorAll('.has-dropdown')
            .forEach((sibling) => {
              if (sibling !== arrow.parentElement) {
                sibling.classList.remove('dropdown-opened');
                sibling.querySelectorAll('.submenu').forEach((submenu) => {
                  submenu.style.display = 'none';
                });
              }
            });
        });
      });
    }
  }, [headerIcon]);
  //Menu Sidebar

  const menuSideBarRef = useRef(null);
  const sidebarContentRef = useRef(null);
  const bodyOverlay2Ref = useRef(null);
  const closeBtn2Ref = useRef(null);

  useEffect(() => {
    const menuSideBar = menuSideBarRef.current;
    const sidebarContent = sidebarContentRef.current;
    const bodyOverlay2 = bodyOverlay2Ref.current;
    const closeBtn2 = closeBtn2Ref.current;

    const addClasses = () => {
      sidebarContent.classList.add('opened');
      bodyOverlay2.classList.add('apply');
    };

    const removeClasses = () => {
      sidebarContent.classList.remove('opened');
      bodyOverlay2.classList.remove('apply');
    };

    if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
      menuSideBar.addEventListener('click', addClasses);
      closeBtn2.addEventListener('click', removeClasses);
      bodyOverlay2.addEventListener('click', removeClasses);
    }

    return () => {
      if (menuSideBar && sidebarContent && bodyOverlay2 && closeBtn2) {
        menuSideBar.removeEventListener('click', addClasses);
        closeBtn2.removeEventListener('click', removeClasses);
        bodyOverlay2.removeEventListener('click', removeClasses);
      }
    };
  }, []);
  return (
    <div data-lenis-prevent>
      <div className="offcanvas-area">
        <div ref={offcanvasRef} className="offcanvas">
          <div className="offcanvas_close-btn">
            <button ref={closeBtnRef} className="close-btn">
              <FaTimes />
            </button>
          </div>
          <div className="offcanvas_logo">
            <Link to={'/'}>
              <img src={Logo} draggable="false" />
            </Link>
          </div>
          <div className="offcanvas_title">
            <p>{t('banner.title')}.</p>
          </div>
          <div className="main-menu-mobile lg:none"></div>
          <div className="offcanvas_contact-info">
            <div className="offcanvas_contact-title">
              <h5>{t('banner.contactUs')}</h5>
            </div>
            <ul>
              <li>
                <MdLocationPin />
                <Link to={'/'}>
                  Arkadia Green Park Tower G, 8th Floor. Jakarta Selatan, DKI
                  Jakarta, Indonesia 12520
                </Link>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:admin@mpupeoplesolution.com?subject=Consultation%20Request&body=Hello%20MPU%20team,%0AI%20would%20like%20to%20ask%20about...">
                  admin@mpupeoplesolution.com
                </a>
              </li>
              <li>
                <FaPhoneAlt />
                <Link to={'/'}>+6221 8428 3681</Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas_social">
            <div className="social-icon">
              <Link
                to={
                  'https://www.instagram.com/mpupeoplesolution?igsh=MWU3OHZqaXU0bzc0Ng=='
                }
              >
                <FaInstagram />
              </Link>
              <Link to={'https://www.youtube.com/@MitraPrabhutvaUtama'}>
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div ref={bodyOverlayRef} className="body-overlay"></div>
      <div
        id="header-sticky"
        className="header-area header-sticky header-creative xl:mt-3 2xl:mt-0"
      >
        <div className="Container">
          <div className="flex items-center justify-between py-4 lg:py-0 lg:grid lg:grid-cols-12">
            <div className="col-span-2">
              <div className="header-logo">
                <Link to={'/'}>
                  <img
                    src={Logo}
                    draggable="false"
                    style={{ width: 250, height: 80 }}
                  />
                </Link>
              </div>
            </div>
            <div
              className="col-span-8 hidden lg:block"
              style={{ marginBottom: 56 }}
            >
              <div className="header-main-menu text-center">
                <nav
                  className="main-menu-content"
                  style={{ position: 'relative', top: '-10px' }}
                >
                  <ul>
                    <li>
                      <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                      <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                      <Link to={'/service'}>Service</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link to={'/service'}>service</Link>
                        </li>
                        <li>
                          <Link to={'/service_details'}>service details</Link>
                        </li>
                      </ul> */}
                    </li>

                    {/* <li >
                      <Link to={'/'}>
                        Portfolio
                        <span>
                          <FaChevronDown />
                        </span>
                      </Link>
                      <ul className="submenu">
                        <li>
                          <Link to={'/portfolio'}>Portfolio</Link>
                        </li>
                        <li>
                          <Link to={'/portfolio_details'}>
                            Portfolio details
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to={'/blog_grid'}>Blog</Link>
                      {/* <ul className="submenu">
                        <li>
                          <Link to={'/blog_grid'}>blog grid</Link>
                        </li>
                        <li>
                          <Link to={'/blog_details'}>blog details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <Link to={'/contact'}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-span-2">
              <div className="header-right-box flex items-center gap-10 lg:gap-4 2xl:gap-8 justify-end">
                <div className="hidden lg:block relative">
                  <Link
                    to={'/consultation'}
                    className="lg:px-[18px] lg:py-3 xl:px-7 xl:py-3 2xl:px-[10px] 2xl:py-[10px] rounded-full font-FiraSans font-medium text-white hover:text-white overflow-hidden  flex items-center gap-2 relative z-10 before:absolute before:left-1/2 before:top-0 before:w-0 before:h-full before:-z-10 before:bg-HeadingColor-0 before:rounded before:transition-all before:duration-500 hover:before:w-full hover:before:left-0"
                    style={{ backgroundColor: 'darkorange' }}
                  >
                    Get Consultation
                  </Link>
                </div>
                <div className="light-btn block relative top-3">
                  <LanguageSwitcher />
                </div>
                <div className="header-bar lg:hidden">
                  <button ref={menuBarRef} className="menu-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
