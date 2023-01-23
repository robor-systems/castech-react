import {ArrowLink} from "./ArrowLink";
import React from "react";

export function Job({job}) {

    return (
        <div className='flex flex-col md:flex-row justify-center gap-3    md:justify-between items-center border rounded m-3 p-3 md:p-6'>
            <div className='flex flex-col w-100 md:w-4/6 gap-2   items-center md:items-start'>
                <h3 className='text-xl  font-bold'>{job.title}</h3>
                <p className='text-gray-500 text-center md:text-start'>{job.description}</p>
            </div>

            <div className='flex flex-row w-100 md:w-2/6 items-center  justify-end mt-5 md:mt-0'>
                <ArrowLink link={"/jobs/" + job.slug.current} text={'View Details'}/>
            </div>

        </div>

    )
}
