import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";

const ServicesAI = () => {
  const data = {
    icon: "/artificial.svg",
    title: translate("production_data_title"),
    content: translate("production_data_content"),
    id: "content-block-id",

    direction: "left",

  };
      return (
        <div>
          <ContentBlock {...data} />
        </div>
      );
}
export default ServicesAI;