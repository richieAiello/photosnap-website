import GalleryCard from '../../shared-components/GalleryCard';
import { useData } from '../../../context/Context';

const GalleryHome = props => {
  const data = useData().slice(0, 4);

  return (
    <div className="bg-white grid mx-auto w-[min(100%,375px)] h-[calc(100%-6px)]">
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

export default GalleryHome;