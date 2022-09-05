import { useState } from 'react';
import PlanType from './PlanType';
import Plan from './Plan';

const PlanSection = props => {
  const plans = ['monthly', 'yearly'];
  const [plan, setPlan] = useState(plans[0]);

  return (
    <div className="bg-white py-16">
      <div className="container">
        <PlanType setState={setPlan} state={plan} plans={plans} />
        {/* Contains 3 plans, pass state to plan */}
        <div className="grid gap-y-6 justify-center">
          <Plan
            state={plan}
            plans={plans}
            heading="Basic"
            text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price=""
          />
          <Plan
            state={plan}
            plans={plans}
            secondary
            heading="Pro"
            text="More advanced features available. Recommended for photography veterans and professionals."
            price=""
          />
          <Plan
            state={plan}
            plans={plans}
            heading="Business"
            text="Additional features available such as more detailed metrics. Recommended for business owners."
            price=""
          />
        </div>
      </div>
    </div>
  );
};
export default PlanSection;
