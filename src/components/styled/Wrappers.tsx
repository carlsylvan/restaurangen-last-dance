import styled from "styled-components";

interface IWrappersProps {
    open: boolean;
}


export const NavWrapper = styled.nav `
    position: relative;
    transition: all 0.3s ease-in-out;
    opacity: ${(props:IWrappersProps) => props.open ? "1" : "0"};
    top: ${(props:IWrappersProps) => props.open ? "0" : "-1000px"};
    width: 100%;
    background-color: #525252;
    ul {
        display: flex;
        flex-direction: column;
        padding: 18px 0;
        gap: 5px;
        padding-top: 3rem;
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
export const HamburgerWrapper = styled.div `
    position: fixed;
    right: 2rem;
    top: 3rem;
`;


export const PageWrapper = styled.main `
    height: 100vh;
    width: 100%;
`;
export const FooterWrapper = styled.footer `
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: #525252;
    display: flex;
    gap: 2rem;
    flex-direction: column;
    padding: 3rem 0;
    span {
        font-size: 24px;
        color: white;
    }
    div {
        display: flex;
        gap: 2rem;
        width: 30%;
        justify-content: center;
        
    }
`;
export const SocialIconWrapper = styled.div `
    font-size: 40px;
    &:hover {
        color:white;
        cursor:pointer;
    }

`;