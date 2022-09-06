import InviteArrowBtn from '../../shared-components/InviteArrowBtn';

const Hero = props => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet="./images/home/desktop/create-and-share.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="./images/home/tablet/create-and-share.jpg"
        />
        <img
          src="./images/home/desktop/create-and-share.jpg"
          alt=""
          className="object-cover h-[18.375rem] w-full object-top"
        />
      </picture>
      <div className="bg-black">
        <section
          className="container py-[4.5rem] relative before:block before:h-[0.375rem] before:w-32 
          before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr before:from-grad-1
          before:via-grad-2 before:to-grad-3"
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
