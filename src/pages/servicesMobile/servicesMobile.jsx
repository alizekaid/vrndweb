import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";

const ServicesMobile = () => {
    const data = {
        icon: "/mobil.svg",
        title: translate("production_mobile_title"),
        content: translate("production_mobile_content"),
        id: "content-block-id",

        direction: "right",
      };
    return (
        <div>
            <ContentBlock {...data} />
        </div>
    );
}

export default ServicesMobile;