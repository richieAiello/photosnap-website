import clsx from 'clsx';

// In the future have the pick plann button open up a module with a checkout form
// or transfer to a new checkout page. Or maybe just have user submit an email address.

const Plan = ({ state, plans, secondary, heading, text, prices }) => {
  return (
    <section
      className={`
        min-h-[407px] w-[min(100%,350px)] mx-auto px-5 py-14 pb-10 flex flex-col items-center
        text-center relative before:h-[0.375rem] before:w-full 
        before:absolute before:top-0 before:left-0 before:bg-gradient-to-tr 
        before:from-grad-1 before:via-grad-2 before:to-grad-3
        md:before:h-full md:before:w-[0.375rem]
        md:w-full md:py-10 md:pl-10 md:pr-12 md:grid md:grid-cols-2 md:items-start
        md:h-[270px] md:min-h-[unset] lg:flex lg:items-center lg:w-[350px]
        lg:before:w-full lg:before:h-[0.375rem] lg:px-10
        ${clsx({
          'bg-[#F5F5F5]': !secondary,
          'text-black': !secondary,
          'before:hidden': !secondary,
          'lg:h-[407px]': !secondary,
          'lg:pt-14': !secondary,
          'bg-black': secondary,
          'text-white': secondary,
          'before:block': secondary,
          'lg:h-[470px]': secondary,
          'lg:pt-[5.5rem]': secondary,
        })}
      `}
    >
      <h2
        className="mb-[1.125rem] font-bold text-[1.5rem] leading-[1.5625rem] capitalize
        md:text-left lg:text-center"
      >
        {heading}
      </h2>
      <p className="opacity-60 mb-10 md:text-left md:row-start-2 md:mb-8 lg:text-center lg:mb-10">
        {text}
      </p>
      <p className="font-bold text-[2.5rem] leading-[3rem] tracking-[4.17px] md:text-right lg:text-center">
        {state === plans[0] ? prices[0] : prices[1]}
      </p>
      <p className="opacity-60 mb-10 md:text-right md:mr-2 lg:text-center lg:mr-0">
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
