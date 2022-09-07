import Table from './Table';

const CompareSection = props => {
  return (
    <div className="pb-16 bg-white md:pb-28 lg:pb-40">
      <section className="container">
        <h2 className="heading text-center mb-8 md:mb-14">compare</h2>
        <Table />
      </section>
    </div>
  );
};

export default CompareSection;
