import React, {Fragment} from 'react';
import noisewood from "../assets/noisewood1.jpg";
import BlogContent from './BlogContent';

function BlogIntro() {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default BlogIntro;