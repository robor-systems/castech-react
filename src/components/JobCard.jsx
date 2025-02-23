import { Link } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

const JobCard = ({ job }) => {
  return (
    <div className="w-[100%] mx-auto border rounded-lg p-6 shadow-md mb-8">
      {/* Job Title */}
      <h2 className="font-bold text-lg mb-4">{job.title}</h2>

      {/* Description Preview */}
      <p className="text-gray-600">
        <PortableText value={job.summary} />
      </p>
      
      {/* View Details Link */}
      <Link 
        to={`/careers/${job.slug.current}`} 
        className="text-red-500 font-semibold flex items-center mt-4"
      >
        View Details →
      </Link>
    </div>
  );
};

export default JobCard;
