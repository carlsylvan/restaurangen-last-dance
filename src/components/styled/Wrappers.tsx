import styled from "styled-components";
import myImage from "../../assets/images/landingPage.jpg";

interface IWrappersProps {
  open: boolean;
}
interface IAmountGuestsNumberWrapperProps {
  selected: boolean;
}
interface IBookingTimeWrapperProps {
  selected: boolean,
  isTableAvailable: boolean,
}


export const HeaderWrapper = styled.header`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const NavWrapper = styled.nav`
  @media screen and (max-width: 768px) {
    width: 35%;

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
      gap: 10px;
      li {
        list-style-type: none;
        text-align: center;

        a {
          color: white;
          text-decoration: none;
          font-size: 22px;
          transition: all 0.2s ease-in;
          &:hover {
            cursor: pointer;
            opacity: 0.75;
          }
        }
      }
    }
  }
  @media screen and (min-width: 769px) {
    background-color: #525252;
    height: 75px;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      margin: 0;
      gap: 25px;
      li {
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          font-size: 19px;
          transition: all 0.2s ease-in;
          &:hover {
            cursor: pointer;
            opacity: 0.75;
          }
        }
      }
    }
  }
`;
export const PWrapper = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;
export const PCursiveWrapper = styled(PWrapper)`
  font-style: italic;
  font-size: 10px;
`;

export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 5;
`;

export const PageWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartPageWrapper = styled.div`
  width: 100%;
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
  gap: 1rem;
  flex-direction: column;
  margin-bottom: auto;
  height:20vh;
  span {
    font-size: 12px;
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
  font-size: 24px;
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
  text-align: center;
  background-color: ${(props: IAmountGuestsNumberWrapperProps) =>
    props.selected ? "black" : "none"};
  color: ${(props: IAmountGuestsNumberWrapperProps) =>
    props.selected ? "white" : "black"};
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;

export const BookingTimeDivWrapper = styled.div`
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
  text-align: center;
  background-color: ${(props: IBookingTimeWrapperProps) => props.isTableAvailable ?  (props.selected ? "black" : "none") :"none"};
  border: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "1px solid black" : "1px solid gray"};
  color: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? (props.selected ? "white" : "black") : "gray"};
  padding: 0.5rem 0;
  &:hover {
    cursor: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "pointer" : "auto"};
    box-shadow: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "0 0 5px rgba(0, 0, 0, 0.7)" : "none"};
    transform: ${(props: IBookingTimeWrapperProps)=> props.isTableAvailable ? "scale(1.01)pointer" : "scale(1)"};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  text-align: center;
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
  padding: 2rem 0;
  gap: 0.5rem;
  width: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  label {
    width: 30%;
    padding: 0.2rem;
    text-align: end;
    font-size: 12px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  
  input {
    width: 60%;
    padding: 0.2rem;
    position: relative;
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-25%);
      height: 100%;
      margin: 0;
      padding: 0;
      padding-left: 100%;
      
      cursor: pointer;
    }
  }
  textarea {
    width: 60%;
    height: 100px;
    padding: 0.2rem;
  }
  select {
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
