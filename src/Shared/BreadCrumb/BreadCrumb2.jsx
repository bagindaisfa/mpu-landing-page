import bgImage from '/images/breadcumb2.png';
import { FaCircle } from 'react-icons/fa6';

const BreadCrumb2 = ({
  breadCrumbTitle,
  breadCrumbImage,
  breadCrumbCategory,
  breadCrumbDate,
}) => {
  const date = new Date(breadCrumbDate);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const formatBreadcrumbTitle = (text) => {
    if (text) {
      if (text.length <= 32) return text;

      // Cari posisi spasi terdekat setelah karakter ke-32
      const index = text.lastIndexOf(' ', 32);
      if (index === -1)
        return (
          <>
            {text.slice(0, 32)}
            <br />
            {text.slice(32)}
          </>
        );

      return (
        <>
          {text.slice(0, index)}
          <br />
          {text.slice(index + 1)}
        </>
      );
    }
  };

  return (
    <div className="relative z-10 before:-z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:bg-BodyBg4-0">
      <div className="flex items-center justify-start sm:pb-[60px] h-[400px] sm:h-[500px] md:h-[600px] text-center mx-3 md:mx-10 lg:mx-[66px] overflow-hidden rounded-2xl md:rounded-[30px] relative z-10">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 overflow-hidden">
          <img
            src={breadCrumbImage}
            alt="Image"
            draggable="false"
            className="max-w-[inherit] h-fit object-cover"
          />
        </span>
        <div className="Container relative z-20">
          <h6 className="font-FiraSans font-medium text-sm text-white bg-PrimaryColor-0 inline-block text-center rounded-r-full py-[5px] px-4 uppercase">
            {breadCrumbCategory}
          </h6>
          <h1 className="font-FiraSans font-semibold text-[19px] sm:text-4xl md:text-4xl lg:text-[48px] lg:leading-[58px] text-white capitalize relative z-10 mt-6 max-w-[655px] mx-auto">
            {formatBreadcrumbTitle(breadCrumbTitle)}
          </h1>
          <div className="mt-6 sm:mt-4 md:mt-[26px] inline-block">
            <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mx-auto text-center">
              <li>
                <h6 className="font-FiraSans text-center text-white flex items-center gap-2 uppercase">
                  <FaCircle size={'8'} className="text-PrimaryColor-0" />
                  {formattedDate}
                </h6>
              </li>
              <li>
                <h6 className="font-FiraSans text-center text-white flex items-center gap-2 uppercase">
                  <FaCircle size={'8'} className="text-PrimaryColor-0" />
                  By Admin
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb2;
