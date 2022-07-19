import { css } from '@emotion/react';

export const globalStyle = css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }
  ,
  html {
    font-size: 62.5%;

    body {
      font-family: 'Roboto', sans-serif;
      line-height: 155%;
      font-size: 1.6rem;
      -webkit-overflow-scrolling: touch;

      input,
      button,
      select,
      optgroup,
      textarea,
      span,
      li,
      a,
      button {
        font-family: 'Roboto', sans-serif;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
      }

      p {
        font-size: 1.6rem;
      }

      h1 {
        font-size: 3.4rem;
      }

      h2 {
        font-size: 2.8rem;
      }

      h3 {
        font-size: 2.4rem;
      }

      h4 {
        font-size: 1.8rem;
      }

      h5 {
        font-size: 1.6rem;
      }

      h6 {
        font-size: 1.4rem;
      }
    }
  }
  ,
  .shadow {
    box-shadow: ${props => props.theme.shadow[10]};

    &-light {
      box-shadow: ${props => props.theme.shadow[6]};
    }
  }
  /* Typography Utils */

  .text {
    &-center {
      text-align: center;
    }

    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }
  }

  .font {
    &-light {
      font-weight: 300;
    }

    &-normal {
      font-weight: 400;
    }

    &-bold {
      font-weight: 700;
    }

    &-medium {
      font-weight: 500;
    }
  }
  //dashboard
  html h1,
  html h2,
  html h3,
  html h4,
  html h5,
  html h6,
  html a,
  html p,
  html li,
  input,
  textarea,
  span,
  div,
  html,
  body,
  html a {
    margin-bottom: 0;
  }

  html ul {
    -webkit-padding-start: 0px;
    list-style: none;
    margin-bottom: 0;
  }

  .scrollbar-track-y,
  .scrollbar-thumb-y {
    width: 5px !important;
  }

  .scrollbar-track-x,
  .scrollbar-thumb-x {
    height: 5px !important;
  }

  .scrollbar-thumb {
    border-radius: 0 !important;
  }

  .scrollbar-track {
    background: rgba(222, 222, 222, 0.15) !important;
  }

  .scrollbar-thumb {
    border-radius: 0 !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }
`;
