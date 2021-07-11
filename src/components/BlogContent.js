import React, {Fragment} from "react";
import BlogIntro from "./Introduction";
import WWWA from "./WWWA";
import BlogSetup from "./BlogSetup";
import LetsVisualize from "./LetsVisualize";
import SetConsoleSize from "./SetConsoleSize";
import DrawPerlinConsole from "./DrawPerlinConsole";
import BlogMain from "./BlogMain";
import FinalSteps from "./FinalSteps";
import LinksAndCits from "./LinksAndCits";

function BlogContent() {
    return (
        <Fragment>
            <div className="container mt-4 text-white">
                <BlogIntro />
                <WWWA />
                <BlogSetup />
                <LetsVisualize />
                <SetConsoleSize />
                <DrawPerlinConsole />
                <BlogMain />
                <FinalSteps />
                <LinksAndCits />
            </div>
        </Fragment>
    );

}

export default BlogContent;