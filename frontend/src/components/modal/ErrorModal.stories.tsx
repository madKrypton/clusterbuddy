import { action } from "@storybook/addon-actions";
import { Meta } from "@storybook/react";
import ErrorModal from "./ErrorModal";

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ErrorModal",
  component: ErrorModal,
} satisfies Meta<typeof ErrorModal>;

export default meta;

export const Default = {
  args: {
    onClose: () => {
      action("onClose")("on Close clicked");
    },
    titleText: "Failed to get list of charts",
    contentText:
      "failed to get list of releases, cause: Kubernetes cluster unreachable:please contact the devOps team.",
  },
};
