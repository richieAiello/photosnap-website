import clsx from 'clsx';

const PlanType = ({ setState, state, plans }) => {
  const handleBtnClick = e => {
    state === plans[0] ? setState(plans[1]) : setState(plans[0]);
  };

  return (
    <div className="flex justify-center items-center text-black mb-10 lg:mb-12">
      <span
        className={`heading--sub duration-300 ${clsx({
          'opacity-60': state === plans[1],
        })}`}
      >
        Monthly
      </span>
      <button
        type="button"
        aria-label="Click to toggle plan type."
        onClick={handleBtnClick}
        className={`
          mx-8 relative h-8 w-16 rounded-2xl bg-[#DFDFDF] duration-300
          hover:bg-black hover:before:bg-white focus:bg-black focus:before:bg-white
          before:bg-black before:rounded-full before:h-6 before:w-6 before:absolute
          before:top-0 before:bottom-0 before:my-auto before:left-1 before:duration-300
          ${clsx({
            'before:translate-x-8': state === plans[1],
          })}
        `}
      />
      <span
        className={`heading--sub duration-300 ${clsx({
          'opacity-60': state === plans[0],
        })}`}
      >
        Yearly
      </span>
    </div>
  );
};
export default PlanType;
