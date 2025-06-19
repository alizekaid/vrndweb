import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";

const ServicesConsultant = () => {
  const data = {
    icon: "/consultant.svg",
    title: translate("production_cons_title"),
    content: translate("production_cons_content"),
    id: "content-block-id",
    direction: "right",
  };
      return (
        <div>
          <ContentBlock {...data} />
        </div>
      );
}
export default ServicesConsultant;