import SharedHero from '../components/shared-components/SharedHero';
import FeaturesGrid from '../components/features/FeaturesGrid';
import BetaSection from '../components/shared-components/BetaSection';

const Features = props => {
  return (
    <main className="mt-[4.5rem]">
      <SharedHero
        image="features"
        heading="Features"
        text="We make sure all of our features are designed to be loved by every aspiring and even 
          professional photograpers who wanted to share their stories."
      />
      <FeaturesGrid />
      <BetaSection />
    </main>
  );
};

export default Features;
