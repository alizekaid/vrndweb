import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";

const ServicesMobile = () => {
    const data = {
        icon: "/web.svg",
        title: translate("production_web_title"),
        content: translate("production_web_content"),
        id: "content-block-id",
        direction: "left",
      };

    return (
        <div>
            <ContentBlock {...data} />
        </div>
    );
}

export default ServicesMobile;