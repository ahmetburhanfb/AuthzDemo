// import data from "./data/data";
import React, { useEffect, useState } from "react";
import { Accordion, AccordionPanel, Box } from "grommet";
import styled, { css } from "styled-components";
import "./style.css";
const StyledAccordion = styled(Accordion)`
  ${() =>
    css`
      border-bottom: none;
      background-color: blue;
    `};
`;
const AccordionAuthZ = (props) => {
  const { setPermissions, data } = props;
  const pad = "small";

  return (
    <Accordion>
      {data &&
        data.map((resource, id) => {
          return (
            <AccordionPanel
              key={resource.name + id}
              label={resource.name}
              onClick={() => {
                setPermissions(resource.name);
              }}
            >
              {resource.children &&
                resource.children.map((child, id) => {
                  return (
                    <Box
                      pad={pad}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPermissions(child.name);
                      }}
                      key={child.name + id}
                    >
                      {child.name}
                    </Box>
                  );
                })}
            </AccordionPanel>
          );
        })}
    </Accordion>
  );
};
export default AccordionAuthZ;
