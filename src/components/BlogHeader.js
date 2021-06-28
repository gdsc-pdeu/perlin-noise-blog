import React, {Fragment} from 'react';

function BlogHeader() {
    return (
        <Fragment>
            <div>
                <div class="pn-noise-image">
                </div>
                <div class="container-fluid">
                    <div class="pn-header mt-4 text-center">
                        <h1>
                            Perlin Noise
                            <br/>
                            Visualization                
                        </h1>
                        <p class="lead pn-lead mt-3">
                            in C/C++
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default BlogHeader;