import React, {Fragment} from "react";

function FinalSteps() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                Final Steps
            </h1>

            <p className="para-content">
                Last thing left now is to run this program in your terminal using any 
                C++ compiler and witness the rendering in action!
            </p>
            
            <div className="codefield-container">
                <div className="codefield-shell">
                    <span className="shell-prompt">
                        $
                    </span>
                    &nbsp;
                    <span className="shell-cmd">
                        g++
                    </span>
                    &nbsp;main.cpp
                    <br/>
                    <span className="shell-prompt">
                        $
                    </span>
                    &nbsp;./a.out
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Shell
                </div>
            </div>

            <p className="para-content mt-5">
                With this, you will see the smooth noise values fill up your screen :)
            </p>
        </Fragment>
    );
}

export default FinalSteps;