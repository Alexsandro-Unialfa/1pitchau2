import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;

}

html {
  @media (max-width: 720px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.75%;
  }
}
`