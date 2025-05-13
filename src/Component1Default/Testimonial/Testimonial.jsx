/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import testThumb from '/images/testi_thumb.png';
import testiProfile from '/images/testi_author.png';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { Pagination } from 'swiper/modules';

const testiData = [
  {
    id: 1,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“MPU People Solution has truly transformed our employee productivity. Their structured approach and innovative solutions made a significant difference in our team dynamics.”`,
    testiName: 'Sarah Mulyani',
    testiDesignation: 'HR Manager at PT. Sukses Bersama',
    testiProfile: testiProfile,
  },
  {
    id: 2,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“We are highly satisfied with MPU People Solution’s leadership training services. The mentors are very professional, and the content is highly relevant to our company’s needs.”`,
    testiName: 'Aditya Pratama',
    testiDesignation: 'CEO at Kreatif Digital',
    testiProfile: testiProfile,
  },
  {
    id: 3,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“MPU People Solution has given us new insights into talent management. Their program helped us find quality candidates more quickly and effectively.”`,
    testiName: 'Rina Kurniawati',
    testiDesignation: 'Head of Talent Acquisition at Inovasi Teknologi',
    testiProfile: testiProfile,
  },
  {
    id: 4,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“The approach applied by MPU People Solution in human resource management has really helped us in developing more effective and efficient strategies.”`,
    testiName: 'Budi Santoso',
    testiDesignation: 'COO at Jaya Makmur Group',
    testiProfile: testiProfile,
  },
  {
    id: 5,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“Thanks to MPU People Solution, our leadership team has improved significantly. The training programs are practical and tailored to our organizational needs.”`,
    testiName: 'Cynthia Rahardjo',
    testiDesignation: 'Operations Director at FutureTech Solutions',
    testiProfile: testiProfile,
  },
  {
    id: 6,
    testiQuote: <RiDoubleQuotesR />,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiDesc: `“We collaborated with MPU People Solution for employee engagement improvement. The results were outstanding, and our team is more motivated than ever.”`,
    testiName: 'Denny Wijaya',
    testiDesignation: 'Managing Director at Bright Ideas Corp',
    testiProfile: testiProfile,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };

  return (
    <section
      className="Testimonial py-[30px] bg-PrimaryColor-0 rounded-[40px] mx-2 xl:mx-5 relative z-10 overflow-hidden"
      style={{ marginTop: 20 }}
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 2xl:gap-0 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={testThumb}
              draggable="false"
              className="2xl:-ml-[16rem] 2xl:max-w-[inherit]"
            />
            <div className="sm:flex items-center gap-2 absolute right-0 2xl:right-20 bottom-2 hidden">
              <h6 className="size-[42px] lg:size-7 xl:size-8 2xl:size-[42px] lg:text-base xl:text-lg 2xl:text-xl rounded-full bg-[#ff9c01] text-xl flex items-center justify-center text-white">
                <MdOutlineStarPurple500 />
              </h6>
              <p className="font-FiraSans font-medium text-[22px] lg:text-base xl:text-lg 2xl:text-[22px] text-white">
                Avg Ratings 4.9
              </p>
            </div>
          </div>
          <div className="mt-[66px]">
            <Swiper
              {...settings}
              pagination={pagination}
              modules={[Pagination]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiQuote,
                    testiRatingIcon,
                    testiName,
                    testiProfile,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id} className="pb-[70px]">
                        <TestimonialCard
                          testiQuote={testiQuote}
                          testiRatingIcon={testiRatingIcon}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiProfile={testiProfile}
                          testiDesc={testiDesc}
                        />
                      </SwiperSlide>
                    );
                  }
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
