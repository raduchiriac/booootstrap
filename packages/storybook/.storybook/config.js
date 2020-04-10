import { configure, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withPaddings } from "storybook-addon-paddings";
import { withKnobs } from "@storybook/addon-knobs";
import "../../bootstrap/dist/css/bootstrap.min.css";

const req = require.context("../components/_stories", true, /\.stories\.js$/);

const viewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px",
    },
  },
};

addDecorator(withA11y);
addDecorator(withKnobs);
addDecorator(withPaddings);
addParameters({
  options: {
    storySort: (a, b) => (a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })),
  },
  viewport: { viewports },
  paddings: [
    { name: "Minimal padding", value: "8px" },
    { name: "Small padding", value: "16px" },
    { name: "Medium padding", value: "32px" },
    { name: "Large padding", value: "64px" },
  ],
});

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
