import React, {Fragment} from "react";
import KALinkImg from "../assets/KALinkImg.png";
import AdrianIoLinkImg from "../assets/AdrianIoLinkImg.png";
import WikiLinkImg from "../assets/WikiLinkImg.jpg";
import Rosetta from "../assets/Rosetta.png";
import Raouf from "../assets/Raouf.png";

function LinksAndCits() {
    return (
        <Fragment>
            <h1 className="pn-topic-header mt-5 liner">
                Links And Citations
            </h1>

            <div class="row">
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-dark link-card">
                            <img src={KALinkImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Perlin Noise: Khan Academy</h5>
                                <p class="card-text">
                                    A good random number generator produces numbers that have no 
                                    relationship and show no discernible pattern.<br/> 
                                    As we are beginning to see...
                                </p>
                                <a href="https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise" class="btn btn-primary">View page</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-dark link-card">
                            <img src={AdrianIoLinkImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Understanding Perlin Noise: Adrain's Soapbox</h5>
                                <p class="card-text">
                                    The objective of this article is to present an 
                                    easy-to-understand analysis of Ken Perlin's Improved Perlin Noise.
                                </p>
                                <a href="https://adrianb.io/2014/08/09/perlinnoise.html" class="btn btn-primary">View page</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-dark link-card">
                            <img src={WikiLinkImg} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Wikipedia: Perlin Noise</h5>
                                <p class="card-text">
                                    Perlin noise is a type of gradient noise developed by Ken Perlin.
                                    He developed perlin noise in 1983 as a result of his frustration with the "machine-like" look...
                                </p>
                                <a href="https://en.wikipedia.org/wiki/Perlin_noise" class="btn btn-primary">View page</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-dark link-card">
                            <img src={Rosetta} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Rosetta Code: Perlin Noise Implementations</h5>
                                <p class="card-text">
                                    Implementation of the Perlin Noise algorithm in various languages...
                                </p>
                                <a href="https://rosettacode.org/wiki/Perlin_noise" class="btn btn-primary">View page</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 mt-5">
                        <div class="card bg-dark link-card">
                            <img src={Raouf} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Raouf's Blog: A Procedural Generation Algorithm</h5>
                                <p class="card-text">
                                Perlin noise is a popular procedural generation algorithm invented by Ken Perlin...
                                </p>
                                <a href="https://rtouti.github.io/graphics/perlin-noise-algorithm#:~:text=Perlin%20noise%20is%20a%20popular,by%20an%20artist%20or%20designer.&text=Simplex%20noise%20is%20different%20but,Value%20noise%20is%20also%20different." class="btn btn-primary">View page</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <p className="mt-3 hr-style1">
                    </p>
                    <p className="para-content author mt-3">
                        Penned by ✍️:
                        <br/>
                        Maharshi Pandya
                    </p>
                    <p className="mt-3 hr-style1">
                    </p>
                </div>
        </Fragment>
    );
}

export default LinksAndCits;