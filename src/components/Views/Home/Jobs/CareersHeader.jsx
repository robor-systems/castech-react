import {Container} from "../../../Modules";
import React from "react";

export function CareersHeader(props) {
    return <Container className={"mb-3"}>
        <div className="flex    container mx-auto py-3">

            <div className={"w-4/6 flex flex-col items-start"}>
                <h2 className="text-text-secondary text-[14px] text-center font-semibold">
                    CAREERS
                </h2>
                <h1 className="text-center text-3xl   font-semibold  ">
                    Open Positions
                </h1>
            </div>
            {props.jobs.length > 0 ?
                <div className={"flex justify-end w-2/6 items-center text-gray-500"}>
                    {props.jobs.length} vacancies available
                </div> : <div className={"flex justify-end w-2/6 items-center text-gray-500"}>
                    No vacancies available
                </div>}
        </div>
    </Container>;
}
