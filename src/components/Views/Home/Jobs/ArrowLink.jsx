import * as PropTypes from "prop-types";
import React from "react";

export function ArrowLink(props) {
    function isRight(){
        return (!props.direction || props.direction === "right");
    }

    return <a href={props.link}
              className={"text-xl text-text-secondary font-bold flex justify-center items-center gap-3 " + (isRight()?"":"flex-row-reverse")}><span>{props.text}</span>

        {isRight() ?
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-secondary" fill="none"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"  stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>}


    </a>;
}

ArrowLink.propTypes = {slug: PropTypes.string};
