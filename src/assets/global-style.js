import { createGlobalStyle } from 'styled-components';

export const CommonStyle = createGlobalStyle`
  body, input, button, select, optgroup, option, textarea, blockquote, dd, dl, figure, form, pre, .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }
  /* html {
    scroll-behavior: smooth;
  } */
  body {
    background-color: #fdfbfb;
  }
  small {
    font-size: 80%;
    font-weight: 400;
  }
  
  /* iconfont */
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */
  }
  @media (max-width: 767.98px) {
    .row {
      margin-right: -0.625rem;
      margin-left: -0.625rem;
    }
  }
  .row-sm {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    .col {
      padding: 0 1rem;
    }
  }
  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  
  .flex-fill {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.66);
    position: absolute;
    opacity: .22;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
  }
`