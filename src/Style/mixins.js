import { css } from "styled-components";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,
  outline: css`
    outline: 1px solid red;
  `,
  centerContent: css`
    text-align: center;

    img,
    svg,
    video {
      margin-left: auto;
      margin-right: auto;
    }
  `,
};

export default mixins;
