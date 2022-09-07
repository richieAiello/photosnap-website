const Feature = ({ image, className, heading, text }) => {
  return (
    <div
      className="max-w-[310px] min-h-[218px] flex flex-col items-center justify-between
      md:max-w-[457px]"
    >
      <img
        src={`./images/features/${image}.svg`}
        alt=""
        // Backup margin for very small screens
        className={`mb-6 ${className}`}
      />
      <div className="text-center">
        <h2 className="heading--sub text-black mb-4">{heading}</h2>
        <p className="text-[rgba(0,0,0,.6)]">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
