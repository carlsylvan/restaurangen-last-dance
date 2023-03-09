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
            color: white;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
`;
export const HamburgerWrapper = styled.div `
    position: fixed;
    right: 2rem;
    top: 3rem;
`;


export const FooterWraper = styled.footer `

`;