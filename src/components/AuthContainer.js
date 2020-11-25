import React, { useState, useEffect } from "react";
import AuthZAccordion from "./Accordion";
import { Box, Grid, Text } from "grommet";
import AuthSelect from "./AuthSelect";
import dummyData from "./data/data";
import { get, find } from "lodash";
const AuthContainer = () => {
  const [data, setData] = useState([]);
  const [permissions, setPermissions] = useState(null);

  useEffect(() => {
    setData(dummyData);
  }, []);
  const permissionsData = find(dummyData, (obj) => {
    if (obj.name == permissions) {
      return true;
    }
    return false;
  });

  console.log("permissionsData", permissionsData);

  console.log("permissions", permissions);
  return (
    <>
      <Grid
        rows={["xxsmall", "flex", "xxsmall"]}
        columns={["1/4", "3/4"]}
        areas={[
          ["header", "header"],
          ["sidebar", "main"],
          ["footer", "footer"]
        ]}
        gap="small"
        fill
      >
        <Box gridArea="sidebar" pad="small">
          <AuthZAccordion data={data} setPermissions={setPermissions} />
        </Box>
        <Box gridArea="main" pad="small">
          <Text weight="bold">
            {permissions ? permissions : "Select Group for Permissions"}
          </Text>
          {permissions ? <AuthSelect data={permissionsData} /> : null}
        </Box>
      </Grid>
    </>
  );
};

export default AuthContainer;
