import Feature from '../../shared-components/Feature';

const FeaturesHome = props => {
  return (
    // Position relative allows the GalleryCard accents to slide under smoothly
    <div className="bg-white py-20 relative md:py-28">
      <div className="grid gap-y-14 container justify-center md:gap-y-20">
        <Feature
          image="responsive"
          heading="100% Responsive"
          text="No matter which the device you’re on, our site is fully responsive and stories
            look beautiful on any screen."
        />
        <Feature
          image="no-limit"
          heading="No Photo Upload Limit"
          text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
            share all of your stories in one go."
          className="md:mt-[1.125rem]"
        />
        <Feature
          image="embed"
          heading="Available to Embed"
          text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
            Google Maps, and more."
        />
      </div>
    </div>
  );
};

export default FeaturesHome;
