import styled from "styled-components";

export const AdminWrapper = styled.main`
  height: 100%;
  margin-bottom: 150px;
  width: 100%;
  text-align: center;
  > button {
    width: 180px;
    height: 45px;
    font-size: 16px;
    margin-top: 5px;
    margin-bottom: 30px;
    background-color: black;
    color: white;
    border: 1px black;
    border-radius: 18px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.75;
    }
  }
`;
export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;