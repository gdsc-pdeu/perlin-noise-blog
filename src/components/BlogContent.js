import React, {Fragment} from "react";
import BlogIntro from "./Introduction";
import WWWA from "./WWWA";
import BlogSetup from "./BlogSetup";
import LetsVisualize from "./LetsVisualize";
import SetConsoleSize from "./SetConsoleSize";

function BlogContent() {
    return (
        <Fragment>
            <div className="container mt-4 text-white">
                <BlogIntro />
                <WWWA />
                <BlogSetup />
                <LetsVisualize />
                <SetConsoleSize />
            </div>
        </Fragment>
    );

}

export default BlogContent;