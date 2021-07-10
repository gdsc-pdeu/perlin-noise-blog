import React, {Fragment} from "react";

function LetsVisualize() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                    Lets Visualise!
            </h1>
            <p className="para-content">
                To start, create two files named&nbsp;
                <span className="backtick-code">
                    PerlinNoise.h
                </span>
                &nbsp;and&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;in your desired directory.
            </p>

            <div className="codefield-container">
                <div className="codefield-shell">
                    <span className="shell-prompt">$</span>
                    &nbsp;
                    <span className="shell-cmd">touch</span>
                    &nbsp;PerlinNoise.h main.cpp
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Shell
                </div>
            </div>
            
            <p className="para-content mt-5">
                Next, in your&nbsp;
                <span className="backtick-code">
                    PerlinNoise.h
                </span>
                &nbsp;file copy and paste&nbsp;
                <a href="https://github.com/Maharshi-Pandya/Perlin-Noise-Implementation/blob/master/cpp-test/pn_header/PerlinNoise.h">
                    this code
                </a>
                &nbsp;from my Github repo. 
                This is the header file which we will use to generate noise values for any input we provide.
                <br/><br/>
                (Don't worry if you don't understand how it generates those values. 
                Look under "Links and Citations" for further details on the algorithm).

                Moving on, in your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span> 
                &nbsp;file, add the following lines
            </p>

            <div className="codefield-container">
                <div className="codefield-cpp">
                    <span className="cpp-comments">
                        // for TIOCGWINSZ
                    </span>
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;&lt;sys/ioctl.h&gt;&nbsp;

                    <br/>

                    <span className="cpp-comments">
                        // for STDOUT_FILENO
                    </span>
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;&lt;sys/unistd.h&gt;&nbsp;
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Cpp
                </div>
            </div>

            <p className="para-content mt-5">
                The files&nbsp;
                <span className="backtick-code">
                    sys/ioctl.h
                </span>
                &nbsp;and&nbsp;
                <span className="backtick-code">
                    unistd.h
                </span>
                &nbsp;are included so that 
                further in our program we can determine the size of the terminal we are 
                using so we are not limited to just hard-code the values ourselves.
                <br/><br/>
                Now, we will include the standard header files. So in your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;file, add
            </p>

            <div className="codefield-container">
                <div className="codefield-cpp">
                    <span className="cpp-comments">
                        // standard include
                    </span>
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;&lt;stdio.h&gt;
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;&lt;cstdlib&gt;
                    <br/>
                    <span className="cpp-comments">
                        // signal handling
                    </span>
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;&lt;csignal&gt;
                    <br/>
                    <span className="cpp-inc">
                        #include
                    </span>
                    &nbsp;"PerlinNoise.h"
                    <br/><br/>
                    <span className="cpp-comments">
                        // world width and height
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        int
                    </span>
                    &nbsp;w_width = 0;
                    <br/>
                    <span className="cpp-dt">
                        int
                    </span>
                    &nbsp;w_height = 0;
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Cpp
                </div>
            </div>

            <p className="para-content mt-5">
                Here,&nbsp;
                <span className="backtick-code">
                    PerlinNoise.h
                </span>
                &nbsp;is our custom header file. 
                Make sure it is in the same directory as your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;file. 
                The header file&nbsp;
                <span className="backtick-code">
                    csignal
                </span>
                &nbsp;is for, 
                when we exit the visualisation using&nbsp;
                <span className="backtick-code">
                    Ctrl-C
                </span>
                &nbsp;, it exits "gracefully".
            </p>

            <p className="para-content mt-3">
                We also defined 2 global&nbsp;
                <span className="backtick-code">
                    ints
                </span>
                &nbsp;(i.e.&nbsp;
                <span className="backtick-code">
                    w_width
                </span>
                &nbsp;and&nbsp;
                <span className="backtick-code">
                    w_height
                </span>
                ) which are the width and 
                the height of our grid, where visualisation takes place.
                <br/>
                In the next section, we will write a function&nbsp;
                <span className="backtick-code">
                    SetConsoleSize()
                </span>
                &nbsp;which sets the width and the height of our grid 
                equal to the width and the height of our terminal, respectively.
            </p>
        </Fragment>
    );
}

export default LetsVisualize;