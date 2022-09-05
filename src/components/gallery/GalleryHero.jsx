import ReadStoryBtn from '../shared-components/ReadStoryBtn';

const GalleryHero = props => {
  return (
    <div className="relative">
      <img
        src="./images/gallery/desktop/moon-of-appalacia.jpg"
        alt=""
        className="h-[317px] w-full object-cover object-[75%_0%]"
      />
      <section
        className="py-12 w-[min(100%-3rem,375px)] mx-auto flex flex-col text-white
        md:w-[387px]"
      >
        <h1 className="heading mb-4 max-w-[10ch]">
          Hazy full moon of Appalachia
        </h1>
        <p className="text--link -order-1 mb-4">
          Last month's featured story
        </p>
        <p className="mb-6">
          <span className="opacity-75 mr-2">March 2nd 2020</span>
          by John Appleseed
        </p>
        <p className="mb-6 opacity-60">
          The dissected plateau area, while not actually made up of
          geological mountains, is popularly called "mountains,"
          especially in eastern Kentucky and West Virginia, and while
          the ridges are not high, the terrain is extremely rugged.
        </p>
        <ReadStoryBtn
          path="https://unsplash.com/s/photos/mountain-moon"
          className="w-max"
        />
      </section>
    </div>
  );
};

export default GalleryHero;
