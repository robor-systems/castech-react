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

  const components = {
    listItem: {
      // Ex. 1: customizing common list types
      bullet: ({children}) => <li style={{listStyleType: 'circle'}}>{children}</li>,
    },
    block: {
      normal: ({ children }) => <p className="">{children}</p>, // Adds space between paragraphs
      h1: ({children}) => <h1 className="text-2xl">{children}</h1>,
      h2: ({children}) => <h2 className="text-xl font-bold">{children}</h2>,
      h3: ({children}) => <h3 className="text-lg font-semibold">{children}</h3>,
    },
  }

  return (
    <div className="w-full">
      <div className="bg-gray-300 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6 w-[70%]">
        <div>
           <h1 className="text-4xl font-bold">{job.title}</h1>
             {job.postedDate && (
             <p className="text-gray-700 text-m mt-2 md:mt-4">Date Posted: {new Date(job.postedDate).toDateString()}</p>
              )}
        </div>
          <Link to={`/careers/${slug}/apply`} className="bg-red-500 mt-4 md:mt-0 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-600">
            Apply Now
          </Link>
        </div>
      </div>

      <div className="container w-[70%] mx-auto p-6 text-gray-700 leading-7">
        <PortableText
          value={job.description}
          components={components}
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
