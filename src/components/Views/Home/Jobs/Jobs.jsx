import {Container} from "components/Modules";
import React, {useEffect} from "react";
import sanityClient from "../../../../sanityClient";
import {Job} from "./Job";
import {CareersHeader} from "./CareersHeader";


const Jobs = () => {
    const [jobs, setJobs] = React.useState([])


    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "job"]{
        title,
        slug,
        description,
        categories,
        publishedAt
     
      }
    `
            )
            .then((data) => {
                setJobs(data)
                //set jobs in JobsContext


            })
            .catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div
            className='my-20 sm:my-0 sm:py-20 scroll-mt-24 sm:scroll-mt-10'
        >
            {jobs.length > 0 ? (<>
                    <CareersHeader jobs={jobs}/>


                        <Container>
                            <div className={"container mx-auto"}>
                                {jobs.map((job) => <Job key={job.slug.current} job={job}/>)}
                            </div>
                        </Container>

                </>
            ) : <CareersHeader jobs={jobs}/>}
        </div>
    );
};

export default Jobs;
