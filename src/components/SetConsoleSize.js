import React, {Fragment} from "react";

function SetConsoleSize() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                    SetConsoleSize()
            </h1>

            <p className="para-content">
                Firstly, in your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;file add the following lines
            </p>

            <div className="codefield-container">
                <div className="codefield-cpp">
                    <span className="cpp-comments">
                        // Get the terminal size
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        void
                    </span>
                    &nbsp;SetConsoleSize(
                        <span className="cpp-dt">
                            void
                        </span>
                    )
                    <br />
                    &#123;
                    <br/>
                    <span className="cpp-comments">
                        // use the ioctl object
                    </span>
                    <br/>
                    <span className="cpp-uddt">
                        struct
                    </span>
                    &nbsp;winsize window;
                    <br/>
                    <span className="cpp-func">
                        ioctl
                    </span>
                    (STDOUT_FILENO, TIOCGWINSZ, &window);
                    
                    <br/><br/>
                    <span className="cpp-comments">
                        // set the world width and height (-2 for safety reasons)
                    </span>
                    <br/>
                    w_width = (<span className="cpp-dt">int</span>)window.ws_col - <span className="cpp-consts">2</span>;
                    <br/>
                    w_height = (<span className="cpp-dt">int</span>)window.ws_row - <span className="cpp-consts">2</span>;
                    <br/>
                    &#125;
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Cpp
                </div>
            </div>

            <p className="para-content mt-5">
                This might seem very alien to you, but in essence:
                <br/><br/>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    In Linux,&nbsp;
                    <span className="backtick-code">
                        ioctl
                    </span>
                    &nbsp;is used to perform I/O control operation 
                    which uses the ioctl object&nbsp;
                    <span className="backtick-code">
                        winsize
                    </span>
                    &nbsp;to get the window size of output buffer 
                    (
                        <span className="backtick-code">
                            TIOCGWINSZ
                        </span>
                        &nbsp;is an integer which tells 
                    the ioctl function to get the window size).
                </span>
                <br/>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    Lastly, it sets the width and height variables, 
                    once it gets the information about the terminal.
                </span>
                <br/><br/>
                This was all the setting up needed. Next section, 
                we will focus on the main visualisation. Suit yourself!
            </p>
        </Fragment>
    );
}

export default SetConsoleSize;