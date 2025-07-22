import React from "react";
import Container from "./Container";

const Accordion = () => {
  return (
    <div className="mt-[10rem] flex flex-col gap-[1rem]">
      <Container title="Title 1">
        <p>Hi, this is container 1</p>
      </Container>

      <Container title="Title 1">
        <p>Hi, this is container 2</p>
      </Container>
    </div>
  );
};

export default Accordion;
