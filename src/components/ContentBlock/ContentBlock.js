import { Row, Col, Button } from "antd";
import { Fade } from "react-awesome-reveal";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  id,
  direction,
}) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            {icon && <img src={icon} alt={title} />}{" "}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {button &&
                    button.map((item, id) => (
                      <Button
                        key={id}
                        type="primary"
                        onClick={() => scrollTo("about")}
                      >
                        {item.title}
                      </Button>
                    ))}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section &&
                      section.map((item, id) => (
                        <Col key={id} span={11}>
                          {item.icon && (
                            <img src={item.icon} alt={item.title} />
                          )}{" "}
                          <MinTitle>{item.title}</MinTitle>
                          <MinPara>{item.content}</MinPara>
                        </Col>
                      ))}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
