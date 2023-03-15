import styled from "styled-components";
import myImage from "../../assets/images/landingPage.jpg";

interface IWrappersProps {
  open: boolean;
}
interface IWrappersNumberOfGuestsProps {
  selected: boolean;
}
interface IWrappersBookingTimeProps {
  selected: boolean,
  isAvailable: boolean
}
interface IBookingTimeDivWrapperProps {
  isAvailable: boolean;
}

export const HeaderWrapper = styled.header`
  /* padding-top: 25%; */
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
export const HamburgerWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 3rem;
  z-index: 5;
`;

export const PageWrapper = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StartPageWrapper = styled.div`
  height: 75vh;
  width: 100%;
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
  margin-bottom: auto;
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
  text-align: center;
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
  background-color: ${(props: IWrappersBookingTimeProps) => {
    if(props.isAvailable){
      return props.selected ? "black" : "none"}
    else {return "none"};  
    }
  };
  border: ${(props: IWrappersBookingTimeProps) => {
    if(props.isAvailable){
      return "1px solid black"}
    else {return "1px solid gray"};  
    }
  };
  opacity: ${(props: IWrappersBookingTimeProps) => 
    props.isAvailable ? "1" : "0.5"
  };
  color: ${(props: IWrappersBookingTimeProps) => {
    if(props.isAvailable){
      return props.selected ? "white" : "black"}
    else {return "gray"};  
    }
  };
  color: ${(props: IWrappersBookingTimeProps) =>
    props.selected ? "white" : "black"};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  padding: 0.5rem 0;
  &:hover {
    cursor: ${(props: IWrappersBookingTimeProps)=>
      props.isAvailable ? "pointer" : "auto"};
    box-shadow: ${(props: IWrappersBookingTimeProps)=>
      props.selected ? "0 0 5px rgba(0, 0, 0, 0.7)" : "none"};
    transform: ${(props: IWrappersBookingTimeProps)=>
      props.selected ? "scale(1.01)" : "scale(1)"};
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
    transform: scale(1.01); */
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
