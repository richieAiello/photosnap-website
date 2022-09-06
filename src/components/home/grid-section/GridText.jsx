import ViewStoriesBtn from '../../shared-components/ViewStoriesBtn';

const GridText = ({ className, heading, text }) => {
  return (
    <div className={`bg-white ${className}`}>
      <section className="container py-[4.5rem]">
        <h1 className="heading mb-4">{heading}</h1>
        <p className="text-black opacity-60 mb-6">{text}</p>
        <ViewStoriesBtn />
      </section>
    </div>
  );
};

export default GridText;
