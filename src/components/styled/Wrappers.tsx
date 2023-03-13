import styled from "styled-components";
import myImage from "../../assets/images/landingPage.jpg";

interface IWrappersProps {
  open: boolean;
}
interface IWrappersNumberOfGuestsProps {
  selected: boolean;
}
interface IWrappersBookingTimeProps {
  selected: boolean;
}
interface IBookingTimeDivWrapperProps {
  isAvailable: boolean;
}

export const HeaderWrapper = styled.header`
  padding-top: 25%;
`;
export const NavWrapper = styled.nav`
  position: absolute;
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
export const PageDownIconWrapper = styled.div`
  position: absolute;
  bottom: 0.2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  &:hover {
    color: #525252;
  }
`;
export const StartPageWrapper = styled.div`
  height: 75vh;
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

export const NumberOfGuestsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  padding: 1rem 0;
  h4 {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const AmountGuestsNumberWrapper = styled.div`
  width: 14%;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0.4rem 0;
  background-color: ${(props: IWrappersNumberOfGuestsProps) =>
    props.selected ? "black" : "none"};
  color: ${(props: IWrappersNumberOfGuestsProps) =>
    props.selected ? "white" : "black"};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

export const BookingTimeDivWrapper = styled.div`
  visibility: ${(props: IBookingTimeDivWrapperProps) =>
    !props.isAvailable ? "hidden" : "visible"};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
`;
export const BookingTimeWrapper = styled.div`
  width: 40%;
  border: 1px solid black;
  border-radius: 2px;
  background-color: ${(props: IWrappersBookingTimeProps) =>
    props.selected ? "black" : "none"};
  color: ${(props: IWrappersBookingTimeProps) =>
    props.selected ? "white" : "black"};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    transform: scale(1.01);
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 0.5rem;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1000px) {
    width: 45%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  padding: 1rem 0;
  label {
    width: 30%;
    padding: 0.2rem;
  }
  input {
    width: 60%;
    padding: 0.2rem;
  }
`;

export const SubmitButtonWrapper = styled.button`
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 2px;
  transition: all 0.1s linear;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  }
`;
