import css from '*.css';

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
`;