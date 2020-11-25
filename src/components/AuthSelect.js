import React, { useState } from "react";

import { Box, CheckBoxGroup, Grommet } from "grommet";
import { grommet } from "grommet/themes";

const AuthSelect = (props) => {
  const {
    data: { name, permissions }
  } = props;
  const [options, setOptions] = useState([]);
  // const checked = Object.entries(permissions).reduce((prev, curr) => {
  //   return prev.concat(curr[1] === true ? curr[0] : null);
  // }, []);
  // console.log("checked", checked);
  const [value, setValue] = useState([]);
  console.log("name", name);

  console.log(permissions, "permissions");
  const checked = Object.entries(permissions).reduce((prev, curr) => {
    return prev.concat(curr[1] === true ? curr[0] : null);
  }, []);
  console.log(">>>>checked 28", checked);
  // console.log(options, "options");
  useState(() => {
    // const newOptions = Object.entries(permissions).map((permission) => {
    //   return { label: permission[0], value: permission[1] };
    // });
    // console.log(">>>>options", newOptions);

    setValue([...checked]);
    // setOptions([...Object.keys(permissions)]);
  }, [permissions]);
  useState(() => {
    // const newOptions = Object.entries(permissions).map((permission) => {
    //   return { label: permission[0], value: permission[1] };
    // });
    // console.log(">>>>options", newOptions);
    console.log("name changed", name);
    const newOptions = Object.keys(props.data.permissions);
    // setValue([...checked]);
    setOptions([...newOptions]);
  }, [JSON.stringify(permissions)]);

  // useState(() => {

  // }, [name]);

  return (
    <Grommet theme={grommet}>
      <Box pad="medium" gap="large">
        <CheckBoxGroup
          gap="medium"
          // labelKey="label"
          // valueKey="value"
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
