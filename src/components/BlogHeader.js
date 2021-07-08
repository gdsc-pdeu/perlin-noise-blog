import React, {Fragment} from 'react';

function BlogHeader() {
    return (
        <Fragment>
            <div>
                <div className="container-fluid pn-noise-image">
                </div>
                <div className="container-fluid">
                    <div className="pn-header mt-4 text-center align-middle">
                        <h1>
                            Perlin Noise
                            <br/>
                            Visualization                
                        </h1>
                        <p className="lead pn-lead mt-3">
                            in C/C++
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogHeader;