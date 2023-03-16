
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu"

interface INavProps {
    handleOpenMenu(status:boolean): void;
    open: boolean;
}

export const Nav = (props:INavProps) => {
    return (
    <>
        <HamburgerMenu  handleOpenMenu={props.handleOpenMenu} open={props.open}/>
    </>
    )
}