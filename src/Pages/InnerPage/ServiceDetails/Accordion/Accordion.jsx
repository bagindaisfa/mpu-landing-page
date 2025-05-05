import FaqAccordion from './AccordionMain';

const Accordion = ({ accordions, title }) => {
  // FAQs related to Talent Acquisition
  return (
    <section className="relative overflow-hidden py-28 bg-[url('/images/faq-bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            {`FAQ’s`}
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]">
            Frequently Asked Questions
            <br />
            {title}
          </h1>
        </div>
        <div className="w-full mx-auto max-w-[850px] mt-12">
          <div>
            {accordions.map((faq, index) => (
              <FaqAccordion
                key={index}
                faqIcon={faq.faqIcon}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </FaqAccordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
