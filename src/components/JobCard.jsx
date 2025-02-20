import { Link } from 'react-router-dom';
import { useState } from 'react';

const JobCard = ({ job }) => {
  const [showFull] = useState(false);

  // ✅ Extract text content from Portable Text
  const getPlainText = (blocks) => {
    return blocks?.map(block => block.children.map(child => child.text).join(' ')).join('\n') || '';
  };

  const fullText = getPlainText(job.description); // Convert array to plain text
  const truncatedText = fullText.split('. ').slice(0, 2).join('. ') + '.'; // First 2 sentences

  return (
    <div className="w-[100%] mx-auto border rounded-lg p-6 shadow-md mb-8">
      {/* Job Title */}
      <h2 className="font-bold text-lg mb-4">{job.title}</h2>

      {/* Description Preview */}
      <p className="text-gray-600">
        {showFull ? fullText : truncatedText}
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
