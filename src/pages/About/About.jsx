import React from "react";
import "./About.css";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";
function About() {

    

    const AboutContent = {
        "title": translate("why_virtus"),
        "text": translate("about_content"),
        "section": [
            {
                "title": translate("about_inner_1_title"),
                "content": translate("about_inner_1_content"),
                "icon": "/notes.svg"
            },
            {
                "title": translate("about_inner_2_title"),
                "content": translate("about_inner_2_content"),
                "icon": "/notes.svg"
            }
        ]
    };

    return (
        <div className="about">
            <ContentBlock
                direction="left"
                title={AboutContent.title}
                content={AboutContent.text}
                section={AboutContent.section}
                icon="/about.svg"
                id="about"
            />
        </div>
    );
}

export default About;
