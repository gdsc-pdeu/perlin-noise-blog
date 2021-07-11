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
        </Fragment>
    );
}

export default BlogMain;