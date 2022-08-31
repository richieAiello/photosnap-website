import GridImage from './GridImage';
import GridText from './GridText';

const Grid = props => {
  return (
    <div className="md:grid">
      <div className="md:grid">
        <GridImage className="" center image="beautiful-stories" />
        <GridText
          className=""
          heading="Beautiful stories every time"
          text="We provide design templates to ensure your stories look terrific. Easily add 
            photos, text, embed maps and media from other networks. Then share your story 
            with everyone."
        />
      </div>
      <div className="md:grid">
        <GridImage className="" top image="designed-for-everyone" />
        <GridText
          className=""
          heading="Designed for everyone"
          text="Photosnap can help you create stories that resonate with your audience.  Our 
            tool is designed for photographers of all levels, brands, businesses you name it. "
        />
      </div>
    </div>
  );
};

export default Grid;
