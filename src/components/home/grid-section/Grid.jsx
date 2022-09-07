import GridImage from './GridImage';
import GridText from './GridText';

const Grid = props => {
  return (
    <div className="bg-white">
      <div
        className="md:grid md:grid-rows-[600px] md:grid-cols-[1fr,273px,495px,1fr]
        lg:grid-cols-[1fr,830px,610px,1fr]"
      >
        <GridImage
          className="md:col-span-2 md:object-[10%_50%]"
          center
          image="beautiful-stories"
        />
        <GridText
          className="md:ml-[3.375rem] lg:ml-28"
          heading="Beautiful stories every time"
          text="We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone."
        />
      </div>
      <div
        className="md:grid md:grid-rows-[600px] md:grid-cols-[1fr,495px,273px,1fr]
        lg:grid-cols-[1fr,610px,830px,1fr]"
      >
        <GridImage
          className="object-top md:col-span-2"
          top
          image="designed-for-everyone"
        />
        <GridText
          className="md:mr-[3.375rem] md:row-start-1 md:justify-end lg:mr-28"
          heading="Designed for everyone"
          text="Photosnap can help you create stories that resonate with your audience.  Our 
            tool is designed for photographers of all levels, brands, businesses you name it. "
        />
      </div>
    </div>
  );
};

export default Grid;
