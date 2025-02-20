import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../sanityClient';
import { PortableText } from '@portabletext/react';

const JobDetails = () => {
  const { slug } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "job" && slug.current == $slug][0]`, { slug }).then(setJob);
  }, [slug]);

  if (!job) return <p className="text-center">Loading...</p>;

  return (
    <div className="container w-[70%] mt-10 mx-auto p-6 leading-loose">
      {/* Back to Open Positions & Apply Now Button */}
      <div className="flex justify-between items-center mb-8">
        <Link to="/careers" className="text-red-500 font-semibold inline-flex items-center">
          ← Back to Open Positions
        </Link>
        <Link to={`/careers/${slug}/apply`} className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600">
          Apply Now
        </Link>
      </div>

      <h1 className="text-3xl font-bold">{job.title}</h1>

      <div className="mt-6 text-gray-700 leading-7">
        <PortableText
          value={job.description}
          components={{
            block: {
              normal: ({ children }) => <p className="mb-4">{children}</p>, // Adds space between paragraphs
            },
          }}
        />
      </div>
    </div>
  );
};

export default JobDetails;
