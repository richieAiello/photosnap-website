import clsx from 'clsx';

// In the future have the pick plann button open up a module with a checkout form
// or transfer to a new checkout page. Or maybe just have user submit an email address.

const Plan = ({ state, plans, secondary, heading, text, price }) => {
  return (
    <section
      className={`
        min-h-[407px] max-w-[350px] px-5 py-14 pb-10 flex flex-col items-center
        text-center relative before:h-[0.375rem] before:w-full 
        before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr 
        before:from-grad-1 before:via-grad-2 before:to-grad-3
        ${clsx({
          'bg-[#F5F5F5]': !secondary,
          'text-black': !secondary,
          'before:hidden': !secondary,
          'bg-black': secondary,
          'text-white': secondary,
          'before:block': secondary,
        })}
      `}
    >
      <h2 className="mb-[1.125rem] font-bold text-[1.5rem] leading-[1.5625rem] capitalize">
        {heading}
      </h2>
      <p className="opacity-60 mb-10">{text}</p>
      <p className="font-bold text-[2.5rem] leading-[3rem] tracking-[4.17px]">
        {price}
      </p>
      <p className="opacity-60 mb-10">
        per {state === plans[0] ? 'month' : 'year'}
      </p>
      <a
        href="#"
        className={`
          text--link inline-block py-3 w-[min(100%,270px)] duration-300
          hover:bg-[#DFDFDF] focus:bg-[#DFDFDF]
          ${clsx({
            'bg-black': !secondary,
            'text-white': !secondary,
            'hover:text-black': !secondary,
            'focus:text-black': !secondary,
            'bg-white': secondary,
            'text-black': secondary,
          })}
        `}
      >
        Pick Plan
      </a>
    </section>
  );
};
export default Plan;
