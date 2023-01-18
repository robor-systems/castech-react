import {Listicle} from "./Listicle";

export function DetailsComponent({job}) {
    return (
        <div className=" w-[80vw] mx-auto flex flex-col gap-3 py-3 my-3">
            <h1 className="text-4xl font-bold ">{job.title}</h1>
            <div className={"text-gray-500 py-5"}>
                <p>{job.description}</p>
            </div>
            <Listicle responsibilities={job.responsibilities} title={"Responsibilities"}/>
            <Listicle responsibilities={job.requirements} title={"Skills and Experience"}/>


        </div>

    )

}
