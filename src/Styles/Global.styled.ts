import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html,
body {
  background: #000;
  width: 100%;
  font-family: "Poppins", sans-serif;
  color: #fff;
}`;
