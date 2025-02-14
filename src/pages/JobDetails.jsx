import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client } from '../sanityClient';

const JobDetails = () => {
  const { slug } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "job" && slug.current == $slug][0]`, { slug }).then(setJob);
  }, [slug]);

  if (!job) return <p className="text-center">Loading...</p>;

  return (
    <div className="container w-[70%] mt-10 mx-auto p-6 leading-loose	">
        {/* Back to Open Positions Link */}
      <Link to="/careers" className="text-red-500 font-semibold inline-flex items-center mb-8">
        ← Back to Open Positions
      </Link>

      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 my-4">{job.description}</p>

      <h2 className="text-xl font-semibold mt-6">Responsibilities</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {job.responsibilities.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Requirements</h2>
      <ul className="list-disc pl-5 text-gray-700">
        {job.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>

      <a href={`mailto:${job.mailTo}`} className="block text-red-500 font-semibold mt-6">
        Apply via Email →
      </a>
    </div>
  );
};

export default JobDetails;
