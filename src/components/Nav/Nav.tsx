import { useState } from "react";
import { HamburgerLogo } from "../HamburgerLogo/HamburgerLogo"
import { HamburgerMenu } from "../HamburgerMenu/HamburgerMenu"

export const Nav = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
    <nav>
        <HamburgerMenu />
    </nav>
    )
}