import styled from "styled-components";

const Button=styled.button
`

color:${({color})=>color};


background-color:${({bg})=>bg};

border:${({border})=>border};
margin: 10px;
padding: 0.25em 1em;

`

export {Button}