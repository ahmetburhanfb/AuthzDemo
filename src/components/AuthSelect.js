import React, { useState } from "react";

import { Box, CheckBoxGroup, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const AuthSelect = (props) => {
  const [value, setValue] = useState([]);
  const {
    data: { name, permissions }
  } = props;
  console.log(permissions, "permissions");
  let options = Object.entries(permissions).map((permission) => {
    return { label: permission[0], value: permission[1] };
  });
  console.log(options, "options");

  return (
    <Grommet theme={grommet}>
      <Box pad="medium" gap="large">
        {/* <CheckBoxGroup
          labelKey="lab"
          valueKey="val"
          value={value}
          onChange={(event) => {
            setValue(event.value);
            console.log("Group1: ", event.value);
          }}
          options={objectOptions}
        /> */}
        <CheckBoxGroup
          gap="medium"
          labelKey="label"
          valueKey="value"
          value={value}
          onChange={(event) => {
            setValue(event.value);
            console.log("Group2: ", event.value);
          }}
          options={options}
        />
      </Box>
    </Grommet>
  );
};

export default AuthSelect;
