import JobCard from './JobCard';

const JobsGrid = () => {
  return (
    <section className="py-12 bg-gray-50 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
};

export default JobsGrid;
