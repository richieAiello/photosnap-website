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
        <div className="grid gap-y-6 justify-center">
          <Plan
            state={plan}
            plans={plans}
            heading="Basic"
            text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
            price={plan === plans[0] ? '$19.00' : '$190.00'}
          />
          <Plan
            state={plan}
            plans={plans}
            secondary
            heading="Pro"
            text="More advanced features available. Recommended for photography veterans and professionals."
            price={plan === plans[0] ? '$39.00' : '$390.00'}
          />
          <Plan
            state={plan}
            plans={plans}
            heading="Business"
            text="Additional features available such as more detailed metrics. Recommended for business owners."
            price={plan === plans[0] ? '$99.00' : '$990.00'}
          />
        </div>
      </div>
    </div>
  );
};
export default PlanSection;
