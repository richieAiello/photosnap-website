import InviteArrowBtn from './InviteArrowBtn';

const BetaSection = props => {
  return (
    <div
      className="bg-[rgba(0,0,0,.1)] bg-blend-multiply bg-[url(./images/shared-images/beta.jpg)] bg-cover bg-no-repeat bg-center
      md:py-[4.25rem]"
    >
      <section
        className="container py-16 text-white relative before:h-[0.375rem] before:w-32 before:absolute
          before:top-0 before:left-0 before:bg-gradient-to-tr before:from-grad-1
          before:via-grad-2 before:to-grad-3 md:py-0 md:flex md:justify-between md:items-center
          md:before:h-full md:before:w-[0.375rem] md:before:-left-[3.375rem]"
      >
        <h3 className="heading max-w-[15ch] mb-6 md:mb-0">
          We're in Beta. Get your invite today!
        </h3>
        <InviteArrowBtn />
      </section>
    </div>
  );
};

export default BetaSection;
