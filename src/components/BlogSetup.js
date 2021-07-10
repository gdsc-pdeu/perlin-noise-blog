import React, {Fragment} from "react";

function BlogSetup() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                    Setup
                </h1>
                <p class="para-content mt-3">
                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    <span className="ml-3">
                        Your preferred code editor (eg. Vim, VS Code, Sublime Text etc...)
                    </span>

                    <br />

                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    <span className="ml-3">
                        A C/C++ compiler to compile and run the program (eg. 
                        <a className="ml-1" href="https://gcc.gnu.org/">
                            GCC/G++
                        </a>
                         ,
                        <a className="ml-1" href="https://clang.llvm.org/">
                            Clang 
                        </a>
                        <span className="ml-1">
                            etc...)
                        </span>
                    </span>

                    <br />

                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    <span className="ml-3">
                        That's pretty much it. This point is included just because a 3 point 
                        setup looks and feels better xD
                    </span>
                </p>
        </Fragment>
    );
}

export default BlogSetup;