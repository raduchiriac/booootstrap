import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { text, boolean, number, radios } from "@storybook/addon-knobs";

import Button from "../Button";

const roles = {
  Primary: "primary",
  Secondary: "secondary",
  Success: "success",
  Info: "info",
  Warning: "warning",
  Danger: "danger",
  Light: "light",
  Dark: "dark",
  Link: "link",
};
const sizes = {
  Small: "sm",
  Normal: "",
  Large: "lg",
};
const types = {
  Regular: "",
  Button: "button",
  Submit: "submit",
  Reset: "reset",
};
const targets = {
  Self: "_self",
  Blank: "_blank",
};

storiesOf("Buttons", module).add("Button (...props)", () => {
  return (
    <Fragment>
      <Button />
      <hr />
      <Button
        id="my-button-storybook"
        href={text("Link", "")}
        target={radios("Target", targets, "_self")}
        text={text("Text", "I am a pretty button")}
        active={boolean("Active", false)}
        role={radios("Role", roles, "primary")}
        outlined={boolean("Outline", false)}
        type={radios("Type", types, "")}
        size={radios("Size", sizes, "")}
        block={boolean("Block", false)}
        disabled={boolean("Disabled", false)}
        onClick={(evt) => {
          alert("hello");
        }}
      />
    </Fragment>
  );
});
