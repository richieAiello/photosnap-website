import InviteArrowBtn from './InviteArrowBtn';

const BetaSection = props => {
  return (
    <div className="bg-[url(./images/shared-images/beta.jpg)] bg-cover bg-no-repeat bg-center">
      <section
        className="container py-[4.25rem] text-white relative before:h-[0.375rem] before:w-32 before:absolute
          before:top-0 before:left-0 before:bg-gradient-to-tr before:from-grad-1
          before:via-grad-2 before:to-grad-3"
      >
        <h3 className="heading max-w-[15ch] mb-6">
          We're in Beta. Get your invite today!
        </h3>
        <InviteArrowBtn />
      </section>
    </div>
  );
};

export default BetaSection;
