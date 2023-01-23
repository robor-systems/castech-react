import {Container} from "../../../Modules";
import React from "react";

export function CareersHeader(props) {
    return <Container className={"mb-3"}>
        <div className="flex flex-col sm:flex-row   container mx-auto justify-between py-3">

            <div className={"w-4/6 flex flex-col items-start"}>
                <h2 className="text-text-secondary text-[14px] text-center font-semibold">
                    CAREERS
                </h2>
                <h1 className="md:text-center text-3xl   font-semibold  ">
                    Open Positions
                </h1>
            </div>
            <div className={"w-100  flex flex-col   items-end justify-center"}>
                {props.jobs.length > 0 ?
                    <div className={"flex justify-end w-100 items-center text-gray-500"}>
                        {props.jobs.length} vacancies available
                    </div> : <div className={"flex justify-end w-100 items-center text-gray-500"}>
                        No vacancies available
                    </div>}
            </div>
        </div>
    </Container>;
}
