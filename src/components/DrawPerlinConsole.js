import React, {Fragment} from "react";
import PerlinNoisePlot from "../assets/PerlinNoisePlot.png";
import RandomNoisePlot from "../assets/RandomNoisePlot.png";
import PNJump from "../assets/PNJump.png";

function DrawPerlinConsole() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                DrawPerlinConsole()
            </h1>
            <p className="para-content">
                Before adding any further code into our main file, 
                we need to look at how Perlin Noise works and what is noise space.
            </p>

            <p className="bq mt-3 ml-3 mr-5">
                Below are the comparison plots for Random Noise and Perlin Noise.
            </p>

            <p class="para-content mt-5 plot-headers">
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    Random Noise Plot
                </span>
            </p>

            <div className="mt-2 text-center">
                <img src={RandomNoisePlot} className="pn-visual-img"></img>
            </div>

            <p class="para-content mt-5">
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    Perlin Noise Plot
                </span>
            </p>

            <div className="mt-2 text-center">
                <img src={PerlinNoisePlot} className="pn-visual-img"></img>
            </div>

            <p className="para-content mt-4">
                As you can observe from the above plots, that in our "Noise space", 
                Perlin Noise generates smooth organic-looking 
                random values, while Random Noise is just a whole mess of sharp unnatural random values. 
                <br/><br/>
                So in-order to visualise Perlin Noise, we need to go forward on 
                the Time axis in small incremental steps, 
                because if we make "long jumps" along the Time axis, 
                Perlin Noise will not be smooth appear just like Random Noise, 
                as evident from the below image.
            </p>

            <div className="mt-5 text-center">
                <img src={PNJump} className="pn-visual-img"></img>
            </div>

            <div className="text-center">
                <p className="mt-3 wood-img-footer">
                    Image Source:
                    <a className="ml-2" href="https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise">
                        Khan Academy
                    </a>
                </p>
            </div>

            <p className="para-content mt-4">
                Since our&nbsp;
                <span className="backtick-code">
                    PerlinNoise.h
                </span>
                &nbsp;header file can take three dimensional input (as a point) to 
                calculate the noise value at that point, we can consider X and Y axis as noise 
                values on our 2-D grid and the Z-axis as the time axis. So as we move along the Z-axis infinitesimally we generate new organic noise values repeatedly. 
                This is the basis of the&nbsp;
                <span className="backtick-code">
                    PerlinDrawConsole()
                </span>
                &nbsp;function.

                <br/><br/>
                Now, in your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;file add
            </p>

            <div className="codefield-container">
                <div className="codefield-cpp">
                    <span className="cpp-comments">
                        // we now have the width and height; can visualize noise
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        float
                    </span>
                    &nbsp;zoff = 0.f;
                    <br/>
                    <span className="cpp-dt">
                        void
                    </span>
                    &nbsp;DrawPerlinConsole(<span className="cpp-dt">void</span>)
                    <br/>
                    &#123;
                    <br/>
                    <span className="cpp-comments">
                        // char to draw
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        char
                    </span>
                    &nbsp;charval = '.';
                    <br/><br/>
                    <span className="cpp-dt">
                        float
                    </span>
                    &nbsp;xoff, yoff = <span className="cpp-consts">0.</span>f;
                    <br/>
                    <span className="cpp-dt">
                        float
                    </span>
                    &nbsp;incr = <span className="cpp-consts">0.1</span>f;
                    <br/><br/>
                    <span className="cpp-comments">
                        // travel through the noise space in time
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        float
                    </span>
                    &nbsp;time_step = <span className="cpp-consts">.001</span>f;
                    <br/><br/>
                    <span className="cpp-comments">
                        // for every point, calc the noise val
                    </span>
                    <br/>
                    <span className="cpp-func">
                        for
                    </span>
                    (    
                    <span className="cpp-dt">
                        int
                    </span>
                        &nbsp;y=0; {"y<w_height;"} {"y++"}
                    )
                    <br/>
                    &#123;
                    <br/>
                    <span className="cpp-comments">
                        // increment yoff, and start xoff at 0 for every yoff
                    </span>
                    <br/>
                    yoff += incr;
                    <br/>
                    xoff = <span className="cpp-consts">0.</span>f;
                    <br/>
                    <span className="cpp-func">
                        for
                    </span>
                    (
                    <span className="cpp-dt">
                        int
                    </span>
                    &nbsp;x=0; {"x<w_width; x++"}
                    )
                    <br/>
                    &#123;
                    <br/>
                    <span className="cpp-comments">
                        // calc noise value for xy, at time = zoff
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        float
                    </span>
                    &nbsp;noise_value =&nbsp;
                    <span className="cpp-func">
                        pn_noise
                    </span>
                    (xoff, yoff, zoff);
                    <br/><br/>
                    <span className="cpp-comments">
                        // based on the noise value, print the char
                    </span>
                    <br/>
                    {"charval = noise_value < "}
                    <span className="cpp-consts">0.5</span>
                    {" ? '.' : '*';"}
                    <br/>
                    <span className="cpp-func">
                        printf
                    </span>
                    (
                        <span className="cpp-dt">
                            "%c"
                        </span>
                        ,{' charval'}
                    )
                    <br/><br/>
                    xoff += incr;
                    <br/>
                    &#125;
                    <br/>
                    <span className="cpp-func">
                        printf
                    </span>
                    ("\n");
                    <br/>
                    &#125;
                    <br/>
                    <span className="cpp-comments">
                        // increment zoff by the time step
                    </span>
                    <br/>
                    zoff += time_step;
                    <br/><br/>
                    <span className="cpp-comments">
                        // move back up by w_height to render again
                    </span>
                    <br/>
                    <span className="cpp-func">
                        printf
                    </span>
                    (
                    <span className="cpp-dt">
                        "\033[%dA"
                    </span>
                    {", w_height"}
                    );
                    <br/>
                    &#125;
                    <br/>
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Cpp
                </div>
            </div>

            <p className="para-content mt-5">
                This code along with the comments is self-explanatory.
                <br/><br/>
                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    In the above code snippet we have defined&nbsp;
                    <span className="backtick-code">
                        xoff
                    </span>
                    ,&nbsp;
                    <span className="backtick-code">
                        yoff
                    </span>
                    &nbsp;and&nbsp;
                    <span className="backtick-code">
                        zoff
                    </span>
                    &nbsp;variables to move 
                    along the noise space in these directions. 
                    We start&nbsp;
                    <span className="backtick-code">
                        xoff
                    </span>
                    &nbsp;at 0 for every value of&nbsp;
                    <span className="backtick-code">
                        yoff
                    </span>
                    &nbsp;and calculate the noise values for a 
                    particular row and print an ANSI escape character for a particular noise value. 
                    In this case if noise value is below&nbsp;
                    <span className="backtick-code">
                        0.5 
                    </span>
                    &nbsp;it prints&nbsp;
                    <span className="backtick-code">
                        .
                    </span>
                    &nbsp;else it prints&nbsp;
                    <span className="backtick-code">
                       *
                    </span>
                    .

                    <br/><br/>

                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    <span className="ml-3">
                        Then, we move forward in time (
                            <span className="backtick-code">
                                off
                            </span>
                            &nbsp;increments by&nbsp;
                            <span className="backtick-code">
                                time_step
                            </span>
                            ).
                    </span>

                    <br/><br/>

                    <i className="fa fa-caret-right" aria-hidden="true"></i>
                    <span className="ml-3">
                        Once, the entire grid is filled with noise values, to update the current grid, 
                        we use special ANSI escape sequence to move the cursor position to 
                        start of the grid.&nbsp; 
                        <span className="backtick-code">
                            \033[kA
                        </span>
                        &nbsp;moves the cursor back up by&nbsp;
                        <span className="backtick-code">
                            k
                        </span>
                        &nbsp;units. 
                        So when,&nbsp;
                        <span className="backtick-code">
                            PerlinDrawConsole
                        </span>
                        &nbsp;is called again, we update the grid noise values.
                    </span>
                </span>
            </p>

            <hr className="hr-style mt-5" />

            <p className="para-content mt-5">
                Since this is an infinite rendering, we need a way to break the program and exit gracefully. 
                We can do this by using&nbsp;
                <span className="backtick-code">
                    signal handler
                </span>
                . What it does is, 
                whenever the user presses&nbsp;
                <span className="backtick-code">
                    Ctrl-C
                </span>
                &nbsp;on their keyboard, we listen to this signal and 
                instead of exiting the program abruptly, we move down below the grid and then exit with a message.
            </p>
        </Fragment>
    );
}

export default DrawPerlinConsole;