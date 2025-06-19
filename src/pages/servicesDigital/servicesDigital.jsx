import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";

const ServicesDigital = () => {
    const data = {
        icon: "/digital.svg",
        title: translate("production_digitale_title"),
        content: translate("production_digitale_content"),
        id: "content-block-id",

        direction: "right",

      };
    return (
        <div>
            <ContentBlock {...data} />
        </div>
    );
}

export default ServicesDigital;