const SharedHero = ({ image, heading, text }) => {
  return (
    <div className="bg-black">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={`./images/${image}/desktop/hero.jpg`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`./images/${image}/tablet/hero.jpg`}
        />
        <img
          src={`./images/${image}/desktop/hero.jpg`}
          alt=""
          className="h-[294px] w-full object-cover"
        />
      </picture>
      <section
        className="container relative text-white before:h-[0.375rem] py-[4.5rem]
          before:w-32 before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr 
          before:from-grad-1 before:via-grad-2 before:to-grad-3"
      >
        <h1 className="heading mb-4">{heading}</h1>
        <p className="opacity-60">{text}</p>
      </section>
    </div>
  );
};

export default SharedHero;
