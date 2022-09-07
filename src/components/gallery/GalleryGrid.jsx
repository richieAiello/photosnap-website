import { useData } from '../../context/Context';
import GalleryCard from '../shared-components/GalleryCard';

const GalleryGrid = props => {
  const data = useData();

  return (
    <div
      className="bg-black grid mx-auto w-[min(100%,375px)] md:w-[min(100%,832px)] md:grid-cols-2
      lg:w-[min(100%,1600px)] lg:grid-cols-4"
    >
      {data.map(item => {
        return (
          <GalleryCard
            key={item.image}
            image={item.image}
            heading={item.heading}
            author={item.author}
            path={item.path}
          />
        );
      })}
    </div>
  );
};

export default GalleryGrid;
