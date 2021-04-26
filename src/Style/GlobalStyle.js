import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 

:root {
    --dark-navy: #020c1b;
    --navy: #0a192f;
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --slate: #8892b0;
    --light-slate: #a8b2d1;
    --lightest-slate: #ccd6f6;
    --white: #e6f1ff;
    --green-tint: rgba(100, 255, 218, 0.1);
    --orange: #f66a0a;
    --green: #28a745;
    --blue: #0070f3;
    --lightblue: #79b8ff;
    --lightestBlue: #c8e1ff;
    --offWhite: #f6f8fa;
    --grey: #6a737d;
    --grey2: #586069;
    --lightgreen: #61DAFA;

    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;
    
    --border-radius: 4px;
    
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    
    --tab-height: 42px;
    --tab-width: 120px;
    }

  
  
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default GlobalStyle;
