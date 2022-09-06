import Hero from '../components/home/hero-section/Hero';
import Grid from '../components/home/grid-section/Grid';
import GalleryHome from '../components/home/gallery-section/GalleryHome';
import FeaturesHome from '../components/home/features-section/FeaturesHome';

const Home = props => {
  return (
    <main className="mt-[4.5rem]">
      <Hero />
      <Grid />
      <GalleryHome />
      <FeaturesHome />
    </main>
  );
};

export default Home;
