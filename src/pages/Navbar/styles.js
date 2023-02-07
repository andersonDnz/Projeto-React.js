import styled from "styled-components";

const Div = styled.div`
  width: 275px;
  display: flex;
  position: static;
  box-shadow: 0px 0px 30px -15px #00000086;
  padding-left: 1em;
  padding: 1em;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    cursor: pointer;
    padding: 1em;
    list-style: none;
    margin-bottom: 2em;
  }

  li:hover {
    border-radius: 5px;
    background-color: rgba(93, 90, 90, 0.11);
    text-decoration: none;
    padding: 1em;
  }

  li a {
    color: black;
    text-decoration: none;
    list-style: none;
  }
`;
export default Div;
