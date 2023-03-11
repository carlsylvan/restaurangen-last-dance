import styled from "styled-components";
import myImage from "../../assets/images/landingPage.jpg";

interface IWrappersProps {
  open: boolean;
}

export const HeaderWrapper = styled.header`
  height: 0;
  nav {
    position: relative;
    transition: all 0.3s ease-in-out;
    opacity: ${(props: IWrappersProps) => (props.open ? "1" : "0")};
    top: ${(props: IWrappersProps) => (props.open ? "0" : "-1000px")};
    width: 100%;
    background-color: #525252;
    z-index: 5;
    padding-top: 3rem;
    ul {
      display: flex;
      flex-direction: column;
      padding: 18px 0;
      gap: 5px;
      li {
        list-style-type: none;

        a {
          color: white;
          text-decoration: none;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 3rem;
  z-index: 5;
`;

export const PageWrapper = styled.main`
  width: 100%;
  position: relative;
`;
// export const PageDownIconWrapper = styled.div `
//     position: absolute;
//     bottom: 0.2rem;
//     left: 50%;
//     transform: translateX(-50%);
//     font-size: 30px;
//     &:hover {
//         color: #525252;
//     }
// `;
export const StartPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${myImage});
  background-size: cover;
  background-position: center;
  filter: grayscale(100%);
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #525252;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 3rem 0;
  span {
    font-size: 18px;
    color: white;
  }
  div {
    display: flex;
    gap: 2rem;
    width: 30%;
    justify-content: center;
  }
`;
export const SocialIconWrapper = styled.div`
  font-size: 40px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
