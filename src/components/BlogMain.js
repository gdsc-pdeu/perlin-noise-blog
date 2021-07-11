import React, {Fragment} from "react";

function BlogMain() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                main()
            </h1>

            <p className="para-content">
                Now everything from here is a cake-walk.
                <br/><br/>
                In your&nbsp;
                <span className="backtick-code">
                    main.cpp
                </span>
                &nbsp;file add
            </p>

            <div className="codefield-container">
                <div className="codefield-cpp">
                    <span className="cpp-comments">
                        // driver code
                    </span>
                    <br/>
                    <span className="cpp-dt">
                        int
                    </span>
                    &nbsp;main(<span className="cpp-dt">int</span>&nbsp;argc,&nbsp;
                    <span className="cpp-func">
                        char const
                    </span>
                    &nbsp;*argv[])

                    <br/>
                    &#123;
                    <br/>
                    <span className="cpp-comments">
                        // register the signal handler
                    </span>
                    <br/>
                    <span className="cpp-func">
                        signal
                    </span>
                    (<span className="cpp-dt">SIGINT</span>, ctrlCSignalHandler);

                    <br/><br/>

                    <span className="cpp-comments">
                        // init and activate the noise space
                    </span>

                    <br/>

                    <span className="cpp-func">
                        SetConsoleSize
                    </span>
                    ();
                    <br/>
                    <span className="cpp-func">
                        pn_init
                    </span>
                    ();

                    <br/><br/>

                    <span className="cpp-comments">
                        // loop and render
                    </span>
                    
                    <br/>
                    
                    <span className="cpp-func">
                        while
                    </span>
                    (<span className="cpp-consts">1</span>)
                    <br/>
                    &#123;
                    <br/>

                    <span className="cpp-func">
                        DrawPerlinConsole
                    </span>
                    ();
                    
                    <br/><br/>

                    <span className="cpp-comments">
                        // explicit sleep function to limit cpu usage
                    </span>
                    <br/>
                    <span className="cpp-func">
                        usleep
                    </span>
                    (<span className="cpp-consts">1000</span>);
                    <br/>
                    &#125;
                    <br/>
                    <span className="cpp-dt">
                        return
                    </span>
                    &nbsp;<span className="cpp-consts">
                        0
                    </span>;
                    <br/>
                    &#125;
                    <br/>
                </div>
                <div className="text-center mt-2 lan-id">
                    Language: Cpp
                </div>
            </div>

            <p className="para-content mt-5">
            <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    First off, before everything, we register our signal handler using the&nbsp;
                    <span className="backtick-code">
                        signal 
                    </span>
                    &nbsp;function in&nbsp;
                    <span className="backtick-code">
                        {"<csignal>"}
                    </span>
                    &nbsp;header file. It takes the&nbsp;
                    <span className="backtick-code">
                        Ctrl-C
                    </span>
                    &nbsp;signal number i.e.&nbsp;
                    <span className="backtick-code">
                        SIGINT
                    </span>
                    &nbsp;(predefined in C++) 
                    as the first argument and our custom signal handler as the second argument.
                </span>

                <br/><br/>

                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    We then set the console size and "activate" the noise space. 
                    It is necessary to generate Perlin Noise values.
                </span>

                <br/><br/>

                <i className="fa fa-caret-right" aria-hidden="true"></i>
                <span className="ml-3">
                    Finally, using an infinite loop, we repeatedly render our 
                    visualisation via the&nbsp;
                    <span className="backtick-code">
                        DrawPerlinConsole()
                    </span>
                    &nbsp;method.
                </span>
            </p>

            <p className="bq mt-4 ml-3 mr-5">
                Note: Since infinite while loop runs as fast as it can, it will be kind of overkill for us. 
                So I have used the&nbsp;
                <span className="backtick-code">
                    usleep
                </span>
                &nbsp;function for Linux, 
                which sleeps for 0.001 seconds after every while loop render so as to not overkill the rendering.
            </p>

            <div className="text-center">
                <p className="para-content mt-4">
                    With this, we are done with our&nbsp;
                    <span className="backtick-code">
                        main.cpp
                    </span>
                    &nbsp;file!
                    <br/>
                </p>
            </div>
        </Fragment>
    );
}

export default BlogMain;