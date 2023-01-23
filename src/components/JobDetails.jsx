import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import sanityClient from "../sanityClient";
import {ArrowLink} from "./Views/Home/Jobs/ArrowLink";
import {DetailsComponent} from "./DetailsComponent";


export default function JobDetails() {
    const [job, setJob] = useState(null);
    const [error, setError] = useState(null);
    const {slug} = useParams();
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "job" && slug.current == $slug]{
        title,
        slug,
        description,
        responsibilities,
        requirements,
        mailTo
        }`, {slug}
            )
            .then((data) => {
                if (data.length) {
                    setJob(data[0])
                } else {
                    setError("Job not found")
                }
            })
            .catch((err) => {
                console.log(err)
                setError(true);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (error) {
        return <div className={'flex flex-col justify-center items-center w-100 h-[50vh] text-xl font-extrabold'}>
            <div> Could not load...</div>
            <a href={'/'} className={'text-blue-500'}>Go back</a>
        </div>
    }

    if (!job) return <div className={'flex justify-center items-center w-100 h-[50vh]'}>
        <svg className="animate-spin -ml-1 mr-3 h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
            <circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
            <path className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1zm0 0a8 8 0 018 8H9a7 7 0 00-7-7v1zm0 0h1a8 8 0 018 8H9a8 8 0 01-8-8zm0 0h1a8 8 0 018-8v1a7 7 0 00-7 7z"></path>
        </svg>
        <span className={"text-xl font-extrabold"}>Loading...</span>
    </div>;

    return (
        <div className={"my-[50px] sm:my-[150px] md:my-[150px] md:mt-[100px] sm:mt-[100px]"}>
            <div className={" w-[80vw] mx-auto w-100"}>
                <div className={"flex justify-start "}>
                    <ArrowLink link={"/#career"} text={"BACK TO OPEN POSITIONS"} direction={"left"}/>
                </div>

            </div>

            <DetailsComponent job={job}/>
            <div className={" w-[80vw] mx-auto text-gray-500"}>
                Interested in this position? Send your resume to <a href={"mailto:" + job.mailTo} className={"text-text-secondary font-bold"}> {job.mailTo}</a> with subject '{job.title}'
            </div>
        </div>
    )
}
