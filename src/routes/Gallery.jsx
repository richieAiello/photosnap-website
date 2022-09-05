import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = props => {
  return (
    <main className="mt-[4.5rem]">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
};

export default Gallery;
