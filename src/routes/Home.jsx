import Hero from '../components/home/hero-section/Hero';
import Grid from '../components/home/grid-section/Grid';

const Home = props => {
  return (
    <main className="mt-[4.5rem]">
      <Hero />
      <Grid />
    </main>
  );
};

export default Home;
