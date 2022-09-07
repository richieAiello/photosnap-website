import Feature from '../shared-components/Feature';

const FeaturesGrid = props => {
  return (
    <div className="bg-white py-20 md:py-28">
      <div
        className="grid gap-y-14 container justify-center md:gap-y-[4.5rem]
        md:grid-cols-2 md:gap-x-3"
      >
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
        <Feature
          image="custom-domain"
          heading="Custom Domain"
          text="With Photosnap subscriptions you can host your stories on your own domain. You can 
            also remove our branding!"
        />
        <Feature
          image="boost-exposure"
          heading="Boost Your Exposure"
          text="Users that viewed your story or gallery can easily get notifed of new and featured 
            stories with our built in mailing list."
        />
        <Feature
          image="drag-drop"
          heading="Drag & Drop Image"
          text="Easily drag and drop your image and get beautiful shots everytime. No over the top 
            tooling to add friction to creating stories."
        />
      </div>
    </div>
  );
};

export default FeaturesGrid;
