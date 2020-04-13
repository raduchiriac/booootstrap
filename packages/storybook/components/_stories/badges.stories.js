import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, number, radios } from "@storybook/addon-knobs";

import Badge from "../Badge";

const roles = {
  Primary: "primary",
  Secondary: "secondary",
  Success: "success",
  Info: "info",
  Warning: "warning",
  Danger: "danger",
  Light: "light",
  Dark: "dark",
};

storiesOf("Badges", module).add("Badge (...props)", () => {
  return (
    <Fragment>
      <Badge />
      <hr />
      <Badge
        id="my-badge-storybook"
        data-mytag="surprise"
        classes="pl-4 badge-pill"
        text="New"
        role={radios("Role", roles, "primary")}
        srText="Screen Readers Only"
      />
    </Fragment>
  );
});
