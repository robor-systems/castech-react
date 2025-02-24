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
    <div className="w-full">
      <div className="bg-gray-300 py-12">
        <div className="container mx-auto flex justify-between items-center px-6 w-[70%]">
          <div>
            <h1 className="text-4xl font-bold">{job.title}</h1>
            {job.postedDate && (
              <p className="text-gray-700 text-m mt-4">Date Posted: {new Date(job.postedDate).toDateString()}</p>
            )}
          </div>
          <Link to={`/careers/${slug}/apply`} className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600">
            Apply Now
          </Link>
        </div>
      </div>

      <div className="container w-[70%] mx-auto p-6 text-gray-700 leading-7">
        <PortableText
          value={job.description}
          components={{
            block: {
              normal: ({ children }) => <p className="mb-4">{children}</p>,
            },
          }}
        />{/* Back to Open Positions */}
        <div className="mt-10 text-center">
          <Link to="/careers" className="text-red-500 font-semibold hover:underline">
            ← Back to Open Positions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
