import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import JobCard from '../components/JobCard';

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "job"]').then((data) => setJobs(data));
  }, []);

  return (
    <div className="container w-[70%] mt-10 mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Open Positions</h1>
      <p className="text-gray-500 mb-6">{jobs.length} vacancies available</p>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default Careers;
