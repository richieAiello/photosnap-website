import { useState } from 'react';
import PlanType from './PlanType';
import Plan from './Plan';
import planData from './planData';

const PlanSection = props => {
  const data = planData;
  const plans = ['monthly', 'yearly'];
  const [plan, setPlan] = useState(plans[0]);

  return (
    <div className="bg-white py-16 md:py-28">
      <div className="container">
        <PlanType setState={setPlan} state={plan} plans={plans} />
        <div className="grid gap-y-6">
          {data.map(item => {
            return (
              <Plan
                state={plan}
                plans={plans}
                key={item.id}
                heading={item.heading}
                text={item.text}
                prices={item.prices}
                secondary={item.secondary}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PlanSection;
