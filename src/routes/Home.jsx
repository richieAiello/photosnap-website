import Hero from '../components/home/hero-section/Hero';
import Grid from '../components/home/grid-section/Grid';
import GalleryHome from '../components/home/gallery-section/GalleryHome';

const Home = props => {
  return (
    <main className="mt-[4.5rem]">
      <Hero />
      <Grid />
      <GalleryHome />
    </main>
  );
};

export default Home;
