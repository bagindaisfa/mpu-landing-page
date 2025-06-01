import { Link } from 'react-router-dom';
import footerLogo from '/images/logo-new.png';
import { FaAnglesRight, FaPhone } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="relative z-10 pt-28 overflow-hidden"
      style={{ backgroundColor: 'rgb(13 82 82)' }}
    >
      <div className="Container">
        <div className="grid gap-y-7 grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Link to={'/'}>
              <img
                src={footerLogo}
                draggable={false}
                style={{ maxWidth: 160 }}
              />
            </Link>
            <p className="font-FiraSans text-[15px] text-TextColor-0 opacity-80 mt-7 mb-6">
              {t('banner.title')}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Company
            </h4>
            <ul className="overflow-hidden">
              <li>
                <Link to={'/about'} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    About Us
                  </button>
                </Link>
              </li>
              {/* <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Our Team
                  </button>
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4'>
                    <FaAnglesRight className='text-xs text-white' />
                    Pricing Plan
                  </button>
                </Link>
              </li> */}
              <li>
                <Link to={'/blog_grid'} className="inline-block">
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Latest Blog
                  </button>
                </Link>
              </li>
              {/* <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1'>
                    <FaAnglesRight className='text-xs text-white' />
                    Careers
                  </button>
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Services
            </h4>
            <ul className="overflow-hidden">
              <li>
                <Link
                  to={'/service/people-development'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    People development
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/service/talent-acquisition'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Talent acquisition
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/service/employee-engagement'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Employee engagement events
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/service/human-capital-consultancy'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Human Resource Consultancy
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/service/vetting-background-check'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1 mb-4">
                    <FaAnglesRight className="text-xs text-white" />
                    Vetting & background check
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/service/organisation-development'}
                  className="inline-block"
                >
                  <button className="flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-TextColor-0 transition-all duration-500 hover:text-white hover:gap-1">
                    <FaAnglesRight className="text-xs text-white" />
                    Organisation Development
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <h4 className="font-FiraSans text-[22px] text-white font-medium mb-[33px]">
              Contact
            </h4>
            <div className="flex gap-3 pt-1 border-b border-dashed border-BorderColor2-0 pb-3">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <MdLocationPin />
              </div>
              <div className="flex-1 -mt-1">
                <h6 className="font-FiraSans text-[15px] text-white">
                  Our address:
                </h6>
                <p className="font-FiraSans text-[15px] text-TextColor-0">
                  Arkadia Green Park Tower G, 8th Floor
                  <br className="hidden 2xl:block" /> Jakarta Selatan, DKI
                  Jakarta, Indonesia 12520
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-3 pt-5">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <FaPhone size={'12'} />
              </div>
              <Link to={'/'} className="flex-1">
                <button className="font-FiraSans text-[15px] text-white">
                  +6221 8428 3681
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3 pt-1">
              <div className="size-[26px] rounded-full bg-PrimaryColor-0 text-white flex items-center justify-center">
                <HiOutlineMailOpen size={'15'} />
              </div>
              <Link to={'/'} className="flex-1">
                <button className="font-FiraSans text-[15px] text-white">
                  admin@mpupeoplesolution.com
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-7 md: md:col-span-6 justify-between md:items-center py-8 mt-[108px] border-t border-BorderColor2-0">
          <div>
            <p className="font-FiraSans text-[15px] flex items-center text-white">
              Copyright &copy; {new Date().getFullYear()} Mitra Prabhutva Utama.
            </p>
          </div>
          <div>
            <ul className="flex gap-3 sm:gap-6">
              <li>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.instagram.com/mpupeoplesolution?igsh=MWU3OHZqaXU0bzc0Ng==',
                      '_blank'
                    )
                  }
                  className="font-FiraSans text-[15px] flex items-center transition-all duration text-TextColor-0 hover:text-white uppercase"
                >
                  Instagram
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    window.open(
                      'https://www.youtube.com/@MitraPrabhutvaUtama',
                      '_blank'
                    )
                  }
                  className="font-FiraSans text-[15px] flex items-center transition-all duration text-TextColor-0 hover:text-white uppercase"
                >
                  Youtube
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
