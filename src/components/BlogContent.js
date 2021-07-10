import React, {Fragment} from "react";
import noisewood from "../assets/noisewood1.jpg"
import pnVisual from "../assets/pnVisual.gif"

function BlogContent() {
    return (
        <Fragment>
            <div className="container mt-4 text-white">
                <h1 className="pn-topic-header liner">
                    Introduction
                </h1>
                <p className="para-content mt-3">
                    First off, before diving straight into the Perlin Noise Visualisation program in C/C++, 
                    lets discuss what exactly is Perlin Noise.
                    <br /><br />
                    You see, back then (in 1980s) CGI was not as powerful as it is today. 
                    The textures which resulted from CGI at that time were very "machine-like" and not natural.
                    Tired of this, Kenneth H. Perlin developed a technique (more formally, an algorithm) 
                    to produce textures which looked natural i.e. 
                    Textures which should have some randomness to it yet appear smooth.
                </p>
                <div className="mt-5 text-center">
                    <img className="wood-img" src={noisewood} alt="Procedural generation of wood texture"/>
                    <p className="mt-3 wood-img-footer">
                        Procedural generation of wood texture:
                        <a className="ml-2" href="https://lodev.org/cgtutor/randomnoise.html">
                        Image source
                        </a>
                    </p>
                </div>
                <p className="para-content mt-5">
                    - Perlin Noise is a type of Gradient Noise. 
                    Other examples of Gradient Noise are Simplex Noise and OpenSimplex Noise 
                    which were developed later.
                    <br/><br/>
                    - Today, Perlin Noise (along with other noise types) is largely used in 
                    computer graphics. 
                    Ranging from creating organic textures to creating organic natural 
                    looking "worlds", the applications are <span className="bold-text">VAST</span>.

                    <br/><br/>
                    In this blog we will be visualising what Perlin Noise looks like inside of our beloved 
                    terminal using ASCII characters. 
                    We won't be looking at the details of how the Perlin Noise algorithm works, 
                    but I will embed some links and citations for those who 
                    want to go down that rabbit hole.
                </p>

                <h1 className="pn-topic-header mt-5 liner">
                    What will we achieve?
                </h1>
                <p className="para-content mt-3">
                    Here's the visualization of what we will achieve.
                </p>
                <p class="bq mt-3 ml-3 mr-5">
                    Note: This program will work only in *nix shells. 
                </p>
                <div className="mt-3 text-center">
                    <img src={pnVisual} className="pn-visual-img"></img>
                </div>
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
                        
                        <br/>
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
            </div>
        </Fragment>
    );

}

export default BlogContent;