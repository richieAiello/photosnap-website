import InviteArrowBtn from '../../shared-components/InviteArrowBtn';

const Hero = props => {
  return (
    <div className="md:grid md:grid-cols-[1fr,495px,273px,1fr] md:h-[650px]">
      <img
        src="./images/home/desktop/create-and-share.jpg"
        alt=""
        className="object-cover h-[18.375rem] w-full object-top md:h-full md:col-span-2"
      />
      <div
        className="bg-black md:flex md:justify-end md:items-center 
        md:col-start-1 md:col-span-2 md:row-start-1"
      >
        <section
          className="container--secondary py-[4.5rem] relative before:block before:h-[0.375rem] before:w-32 
          before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr before:from-grad-1
          before:via-grad-2 before:to-grad-3 md:py-0 md:pr-[3.375rem] md:before:h-full
          md:before:w-[0.375rem] md:before:-left-12"
        >
          <h1 className="heading mb-4 text-white max-w-[15ch]">
            Create and share your photo Stories
          </h1>
          <p className="mb-6 text-white opacity-60">
            Photosnap is a platform for photographers and visual
            storytellers. We make it easy to share photos, tell
            stories and connect with others.
          </p>
          <InviteArrowBtn />
        </section>
      </div>
    </div>
  );
};

export default Hero;
