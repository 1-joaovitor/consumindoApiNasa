import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:Arial, Helvetica, sans-serif;
    color:white;
  }
  body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    font-size:20px;
    background-image:
    url('https://img.freepik.com/vetores-gratis/bandeira-de-sobreposicao-de-neve-de-natal_1048-11097.jpg?size=626&ext=jpg&ga=GA1.2.420505120.1658698839');
  }

  button {
    cursor: pointer;
  }

 
`;
