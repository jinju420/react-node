import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{margin: 0;padding: 0;box-sizing:border-box;}
ul,ol,li{list-style:none;}
a{text-decoration:none;color:#777;font-family: 'Montserrat', sans-serif;}
body{background:#000;}
@import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=El+Messiri:wght@400;500;600;700&family=Montserrat:wght@300;400;500&display=swap');
`;

export default GlobalStyle;
