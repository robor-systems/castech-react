import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="w-[100%] mx-auto border rounded-lg p-6 shadow-md mb-8 flex justify-between items-center">
      {/* Left Section (Title + Description) */}
      <div className="w-[80%]">
        <h2 className="font-bold text-lg mb-4">{job.title}</h2>
        <p className="text-gray-600">{job.description}</p>
      </div>

      {/* Right Section (View Details Link) */}
      <Link 
        to={`/careers/${job.slug.current}`} 
        className="text-red-500 font-semibold flex items-center"
      >
        View Details →
      </Link>
    </div>
  );
};

export default JobCard;
