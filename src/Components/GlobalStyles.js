import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}

::selection {
   background: rgba(255, 255, 255, 1);
}


a{
    text-decoration:none;
    color:inherit

}

*{
    box-sizing:border-box;
}

button {
    outline: none;
    border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}

html {
    margin: 0;
    scroll-behavior: smooth;
}

body{
    font-family: "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 14px;
    font-weight: 100;
    background-color:rgba(19,19,19,1.0);
    color: rgba(255, 255, 255, 1);
    overflow-x: hidden;
    line-height: 1.6;
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: transparent;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: transparent;
}

.hide-scrollbar {
  /*FireFox*/
  scrollbar-width: none;
  /*IE10+*/
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.hide-scrollbar::-webkit-scrollbar {
  /*Chrome, Safari, Edge*/
  display: none;
}

.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -20px; /* gutter size offset */
  width: auto;
  animation: fadein 2s;
}

.my-masonry-grid_column {
  padding-left: 20px; /* gutter size */
  background-clip: padding-box;
}

@keyframes fadein {
    from {
        transform: translateY(10px);
       opacity: 0;
    }
    to {
        opacity:1;
        transform: translateY(0px);
    }
}

`;

export default globalStyles;
