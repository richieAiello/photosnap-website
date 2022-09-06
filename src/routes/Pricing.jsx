import SharedHero from '../components/shared-components/SharedHero';
import PlanSection from '../components/pricing/plan-section/PlanSection';
import CompareSection from '../components/pricing/compare-section/CompareSection';
import BetaSection from '../components/shared-components/BetaSection';

const Pricing = props => {
  return (
    <main className="mt-[4.5rem]">
      <SharedHero
        image="pricing"
        heading="Pricing"
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
          It’s the simple way to create and share your photos."
      />
      <PlanSection />
      <CompareSection />
      <BetaSection />
    </main>
  );
};

export default Pricing;
