import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
button{
	border: 0;
	outline: 0;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
*,
::before,
::after {
  box-sizing: border-box;
}
@font-face {
	font-family: 'SlowSlow';
	src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/naverfont_10@1.0/SlowSlow.woff') format('woff');
	font-weight: normal;
	font-style: normal;
  }
	/* custom radio button */
input[type=radio]{
	width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
}
input[type=radio] + label{
  margin: 0;
  padding: 8px 0px;
	text-align: center;
	border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  border: solid 1px #DDD;
  background-color: #FFF;
  line-height: 140%;
  text-align: center;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0);
  transition: border-color .15s ease-out,  color .25s ease-out,  background-color .15s ease-out, box-shadow .15s ease-out;
  cursor: pointer;
}
input[type=radio]:checked + label{
	background-color: #8FB4FE;;
  color: #FFF;
  box-shadow: 0 0 10px rgba(102, 179, 251, 0.5);
  
  z-index: 1;
}
`;

export default GlobalStyles;
