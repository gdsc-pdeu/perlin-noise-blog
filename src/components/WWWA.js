import React, {Fragment} from "react";
import pnVisual from "../assets/pnVisual.gif"

function WWWA() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                    What will we achieve?
                </h1>
                <p className="para-content mt-3">
                    Here's the visualization of what we will achieve.
                </p>
                <p className="bq mt-3 ml-3 mr-5">
                    Note: This program will work only in unix shells. 
                </p>
                <div className="mt-3 text-center">
                    <img src={pnVisual} className="pn-visual-img"></img>
                </div>
        </Fragment>
    );
}

export default WWWA;