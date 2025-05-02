const JobCard = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-blue-800 mb-1">Frontend Developer</h3>
        <p className="text-gray-600 font-medium">Google</p>
        <p className="text-sm text-gray-500 mb-4">Remote</p>
  
        <div className="flex items-center justify-between">
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">Full-Time</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
            Apply Now
          </button>
        </div>
      </div>
    );
  };
  
  export default JobCard;
  