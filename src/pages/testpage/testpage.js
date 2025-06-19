import React from "react";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import { translate } from "../../components/Translation/Translation";
const Testpage = () => {
  const data = {
    icon: "/web.svg",
    title: translate("production_web_title"),
    content: translate("production_web_content"),
    id: "content-block-id",
    direction: "right",
  };
  const data2 = {
    icon: "/mobil.svg",
    title: translate("production_mobile_title"),
    content: translate("production_mobile_content"),
    id: "content-block-id",
    direction: "left",
  };
  const data3 = {
    icon: "/artificial.svg",
    title: translate("production_data_title"),
    content: translate("production_data_content"),
    id: "content-block-id",
    direction: "right",
  };
  const data4 = {
    icon: "/digital.svg",
    title: translate("production_digitale_title"),
    content: translate("production_digitale_content"),
    id: "content-block-id",
    direction: "left",
  };

  return (
    <div>
      <ContentBlock {...data} />
      <ContentBlock {...data2} />
      <ContentBlock {...data3} />
      <ContentBlock {...data4} />
    </div>
  );
};

export default Testpage;
