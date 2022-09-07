const SharedHero = ({ image, heading, text }) => {
  return (
    <div className="bg-black md:grid md:grid-cols-[1fr,495px,273px,1fr] md:h-[490px]">
      <img
        src={`./images/${image}/desktop/hero.jpg`}
        alt=""
        className="h-[294px] w-full object-cover md:h-full md:col-span-2"
      />
      <div
        className="bg-black md:flex md:justify-end md:items-center 
        md:col-start-1 md:col-span-2 md:row-start-1"
      >
        <section
          className="container--secondary relative text-white before:h-[0.375rem] py-[4.5rem]
          before:w-32 before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr 
          before:from-grad-1 before:via-grad-2 before:to-grad-3 md:py-0 md:mr-[3.375rem] md:before:h-full
          md:before:w-[0.375rem] md:before:-left-[3.375rem]"
        >
          <h1 className="heading mb-4 md:mb-5">{heading}</h1>
          <p className="opacity-60">{text}</p>
        </section>
      </div>
    </div>
  );
};

export default SharedHero;
