import styled from "styled-components"; 

export const List = styled.ul`
list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 3fr));
column-gap: 6rem;
row-gap: 3rem;
margin-top: 100px;
`

export const ItemList = styled.li`
display: flex;
flex-direction: column;
align-items: center;
`